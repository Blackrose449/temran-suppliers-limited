import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(1).max(2000),
});

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
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
      const body = await res.text();
      console.error("Resend error", res.status, body);
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
