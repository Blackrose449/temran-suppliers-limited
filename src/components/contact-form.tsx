import { useState } from "react";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { sendContactEmail } from "@/lib/contact.functions";
import { CONTACT } from "@/data/site";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().default(""),
  company: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(1, "Tell us how we can help").max(2000),
  website: z.string().max(0).optional().default(""),
});

type FormData = z.infer<typeof schema>;

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const send = useServerFn(sendContactEmail);
  const [values, setValues] = useState<FormData>({ name: "", email: "", phone: "", company: "", message: "", website: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => setValues((s) => ({ ...s, [k]: v }));

  function validate(): FormData | null {
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormData;
        errs[key] = i.message;
      });
      setErrors(errs);
      return null;
    }
    setErrors({});
    return parsed.data;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    setStatus({ kind: "sending" });
    try {
      const res = await send({ data });
      if (res.ok) {
        setStatus({ kind: "success" });
        setValues({ name: "", email: "", phone: "", company: "", message: "", website: "" });
      } else {
        setStatus({
          kind: "error",
          message:
            res.error === "email_not_configured"
              ? "Email delivery isn't configured yet. Please use WhatsApp or the email link below."
              : "We couldn't send your message. Please try again or use WhatsApp.",
        });
      }
    } catch {
      setStatus({ kind: "error", message: "Network problem. Please try again or use WhatsApp." });
    }
  }

  function openWhatsApp() {
    const data = validate();
    const src = data ?? values;
    const text = [
      "Hello Temran, I'd like to enquire about PPE.",
      `Name: ${src.name || "—"}`,
      `Email: ${src.email || "—"}`,
      src.phone ? `Phone: ${src.phone}` : "",
      src.company ? `Company: ${src.company}` : "",
      "",
      src.message || "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      {/* Honeypot: hidden from users, catches bots */}
      <div aria-hidden style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            className="input"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            required
            maxLength={100}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            className="input"
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            required
            maxLength={255}
          />
        </Field>
        <Field label="Phone (optional)" error={errors.phone}>
          <input
            className="input"
            type="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            maxLength={40}
          />
        </Field>
        <Field label="Company (optional)" error={errors.company}>
          <input
            className="input"
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            maxLength={120}
          />
        </Field>
      </div>
      <Field label="How can we help?" error={errors.message}>
        <textarea
          className="input min-h-[140px]"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          required
          maxLength={2000}
        />
      </Field>

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-70"
        >
          {status.kind === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </button>
        <button
          type="button"
          onClick={openWhatsApp}
          className="inline-flex items-center justify-center rounded-md border border-charcoal bg-charcoal px-6 py-3 text-sm font-semibold text-charcoal-foreground hover:bg-charcoal/90"
        >
          Chat on WhatsApp instead
        </button>
      </div>

      {status.kind === "success" && (
        <div className="flex items-start gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            Thanks — your message is on its way. We'll reply shortly. Prefer instant chat?{" "}
            <button type="button" onClick={openWhatsApp} className="font-semibold underline">
              Open WhatsApp
            </button>
            .
          </div>
        </div>
      )}
      {status.kind === "error" && (
        <div className="flex items-start gap-3 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            {status.message}{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold underline">
              Email us directly
            </a>{" "}
            or{" "}
            <button type="button" onClick={openWhatsApp} className="font-semibold underline">
              open WhatsApp
            </button>
            .
          </div>
        </div>
      )}

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--border);
          background: var(--background);
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          font-family: inherit;
          color: var(--foreground);
        }
        .input:focus { outline: 2px solid var(--primary); outline-offset: 1px; border-color: var(--primary); }
      `}</style>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-charcoal">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-primary">{error}</span>}
    </label>
  );
}
