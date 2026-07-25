import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(1).max(2000),
  // Honeypot — legitimate users leave this empty. Bots will fill it.
  website: z.string().max(0).optional().default(""),
});

// Very light in-memory rate limit (per worker instance): 5 submissions / 10 min / IP.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (list.length >= RATE_MAX) {
    hits.set(ip, list);
    return true;
  }
  list.push(now);
  hits.set(ip, list);
  return false;
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot: silently accept but drop.
    if (data.website && data.website.length > 0) {
      return { ok: true as const };
    }

    // Origin allow-list — reject cross-site programmatic submissions.
    try {
      const req = getRequest();
      const origin = getRequestHeader("origin") ?? getRequestHeader("referer") ?? "";
      const host = new URL(req.url).host;
      if (origin) {
        try {
          const originHost = new URL(origin).host;
          if (originHost !== host) {
            return { ok: false as const, error: "forbidden_origin" };
          }
        } catch {
          /* ignore malformed origin */
        }
      }
      const ip =
        getRequestHeader("cf-connecting-ip") ??
        getRequestHeader("x-forwarded-for")?.split(",")[0]?.trim() ??
        "unknown";
      if (rateLimited(ip)) {
        return { ok: false as const, error: "rate_limited" };
      }
    } catch {
      /* getRequest may throw in some edges — fail open on identity checks only */
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return { ok: false as const, error: "email_not_configured" };
    }

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#E63027">New enquiry — Temran Suppliers Limited</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone || "—")}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company || "—")}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;border-left:3px solid #E63027;padding-left:12px">${escapeHtml(data.message)}</p>
      </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Temran Website <onboarding@resend.dev>",
        to: ["temranservices@gmail.com"],
        reply_to: data.email,
        subject: `New enquiry from ${data.name}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("Resend error", res.status);
      return { ok: false as const, error: "provider_error" };
    }

    return { ok: true as const };
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
