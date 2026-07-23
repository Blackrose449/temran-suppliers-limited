import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { CONTACT } from "@/data/site";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Temran Suppliers — WhatsApp, Phone & Email in Nairobi" },
      {
        name: "description",
        content:
          "Contact Temran Suppliers Limited for PPE quotations, bulk orders and consultation. Phone/WhatsApp 0728973081, email temranservices@gmail.com, based in Nairobi, Kenya.",
      },
      { property: "og:title", content: "Contact Temran Suppliers Limited" },
      {
        property: "og:description",
        content: "PPE quotations, bulk orders and consultation — reach us on WhatsApp, phone or email.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
      <h1 className="mt-2 text-4xl font-bold text-charcoal md:text-5xl">Let's talk PPE.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Send us a note and we'll get back to you shortly — or hit WhatsApp for the fastest reply. Both channels reach
        the same team.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <aside className="space-y-5">
          <InfoRow icon={<Phone className="h-4 w-4" />} label="Phone / WhatsApp" value={CONTACT.phone} href={`tel:${CONTACT.phone}`} />
          <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
          <InfoRow icon={<MapPin className="h-4 w-4" />} label="Address" value={CONTACT.address} />

          <a
            href={`https://wa.me/${CONTACT.waNumber}`}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-primary/20 bg-primary/5 p-5"
          >
            <div className="text-sm font-semibold text-charcoal">Prefer WhatsApp?</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Tap to open a direct chat — many of our clients start here for fastest quotations.
            </p>
            <div className="mt-3 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              Open WhatsApp
            </div>
          </a>
        </aside>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <ContactForm />
        </div>
      </div>

      <div className="mt-14 overflow-hidden rounded-2xl border border-border">
        <iframe
          title="Temran Suppliers — Nairobi location"
          src="https://www.google.com/maps?q=Nairobi%2C+Kenya&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-72 w-full"
        />
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-base text-charcoal">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block rounded-lg hover:bg-secondary/50">
      {inner}
    </a>
  ) : (
    inner
  );
}
