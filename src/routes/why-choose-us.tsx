import { createFileRoute, Link } from "@tanstack/react-router";
import { whyChooseUs } from "@/data/site";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Temran Suppliers — Certified PPE, Fast Delivery in Kenya" },
      {
        name: "description",
        content:
          "Certified equipment, one-stop sourcing, competitive pricing, flexible bulk supply, fast delivery and expert guidance — why Kenyan teams trust Temran for PPE.",
      },
      { property: "og:title", content: "Why Choose Temran Suppliers Limited" },
      {
        property: "og:description",
        content: "Certified PPE, one-stop sourcing, competitive pricing and fast, reliable delivery across Kenya.",
      },
    ],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why choose us</p>
      <h1 className="mt-2 text-4xl font-bold text-charcoal md:text-5xl">A dependable partner in workplace safety.</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Certified equipment, transparent service, and long-term partnership — everything that makes Temran the go-to
        PPE partner for Kenyan operations.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {whyChooseUs.map((w, i) => (
          <article
            key={w.title}
            className="animate-fade-up hover-lift rounded-2xl border border-border bg-card p-7"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex items-baseline gap-3">
              <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="text-base font-semibold text-charcoal">{w.title}</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{w.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        <Link
          to="/products"
          className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          See what we stock
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-md border border-charcoal px-6 py-3 text-sm font-semibold text-charcoal hover:bg-charcoal hover:text-charcoal-foreground"
        >
          Start a conversation
        </Link>
      </div>
    </div>
  );
}
