import { createFileRoute } from "@tanstack/react-router";
import { values } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Temran Suppliers Limited — PPE Distributor in Nairobi" },
      {
        name: "description",
        content:
          "Learn about Temran Suppliers Limited: our vision, mission and 7 core values guiding certified PPE supply to construction, manufacturing, healthcare and industrial teams in Kenya.",
      },
      { property: "og:title", content: "About Temran Suppliers Limited" },
      {
        property: "og:description",
        content: "Vision, mission and core values behind Kenya's trusted PPE supply-chain partner.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">About us</p>
      <h1 className="mt-2 text-4xl font-bold text-charcoal md:text-5xl">Protecting Kenya's workforce, one shift at a time.</h1>

      <div className="prose prose-neutral mt-8 max-w-none text-charcoal">
        <p>
          Temran Suppliers Limited is a Nairobi-based distributor of workplace safety and Personal Protective Equipment
          (PPE), dedicated to keeping teams protected with dependable, certified gear.
        </p>
        <p>
          Our catalogue spans protective clothing, gloves, helmets, safety footwear, respirators, and eye protection,
          sourced from established manufacturers so every item meets recognized international safety benchmarks.
        </p>
        <p>
          We work with clients across construction, manufacturing, healthcare, and general industrial operations,
          supplying both large-volume orders and solutions tailored to a specific site's needs.
        </p>
        <p>
          Affordability, on-time fulfillment, and attentive customer service sit at the centre of how we operate,
          giving organisations the tools to keep their work environments safe, compliant, and productive.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="mb-3 h-1 w-8 rounded-full bg-primary" />
          <h2 className="text-xl font-semibold text-charcoal">Our Vision</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            To become a leading, trusted name in Personal Protective Equipment (PPE) supply across Kenya and beyond, so
            that every worker goes home safe.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="mb-3 h-1 w-8 rounded-full bg-primary" />
          <h2 className="text-xl font-semibold text-charcoal">Our Mission</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            To deliver dependable, affordable, and certified PPE that safeguards lives and adapts to our clients'
            changing needs, backed by attentive service and steady improvement.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-bold text-charcoal md:text-3xl">Our Core Values</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="animate-fade-up rounded-xl border border-border bg-card p-5"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div className="text-base font-semibold text-charcoal">{v.title}</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
