import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PPE Supply, Consultation & Training | Temran Suppliers" },
      {
        name: "description",
        content:
          "PPE supply, product consultation, bulk procurement, safety training, and reliable delivery with after-sales support across Kenya.",
      },
      { property: "og:title", content: "Services — Temran Suppliers Limited" },
      {
        property: "og:description",
        content: "PPE supply, consultation, bulk orders, training and delivery for Kenyan workplaces.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Services</p>
      <h1 className="mt-2 text-4xl font-bold text-charcoal md:text-5xl">Everything you need to keep sites safe.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        From single-purchase kit to fully customised, bulk-procured PPE programmes — Temran supports Kenyan
        workplaces at every stage of their safety journey.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="animate-fade-up hover-lift rounded-2xl border border-border bg-card p-8"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="mb-4 h-1 w-10 rounded-full bg-primary" />
            <h2 className="text-lg font-semibold text-charcoal">{s.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-secondary p-8 md:p-10">
        <h2 className="text-xl font-semibold text-charcoal">Not sure what your team needs?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Send us the details of your site and workforce size — we'll respond with a right-sized recommendation.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Request a consultation
        </Link>
      </div>
    </div>
  );
}
