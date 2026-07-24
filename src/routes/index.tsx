import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, whyChooseUs, CONTACT } from "@/data/site";
import { FeaturedCarousel } from "@/components/featured-carousel";
import heroWorker from "../assets/hero-worker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Temran Suppliers Limited — PPE Supplier in Nairobi, Kenya" },
      {
        name: "description",
        content:
          "Certified PPE and workplace safety gear delivered across Kenya. Helmets, gloves, safety boots, respirators, coveralls and hi-vis workwear for construction, industrial and healthcare teams.",
      },
      { property: "og:title", content: "Temran Suppliers Limited — PPE Supplier in Nairobi, Kenya" },
      {
        property: "og:description",
        content:
          "Certified PPE and workplace safety gear delivered across Kenya. Helmets, gloves, safety boots, respirators, coveralls and hi-vis workwear for construction, industrial and healthcare teams.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Temran Suppliers Limited",
          description:
            "Nairobi-based supplier of certified Personal Protective Equipment (PPE) and workplace safety gear.",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
          areaServed: "Kenya",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
        <div className="absolute inset-0">
          <img
            src={heroWorker}
            alt="Construction worker in full PPE on a Kenyan job site"
            className="h-full w-full object-cover"
            width={1600}
            height={1200}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(17,19,24,0.92) 0%, rgba(17,19,24,0.75) 45%, rgba(17,19,24,0.25) 100%)",
            }}
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute -right-24 top-0 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, #E63027, transparent)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div className="animate-fade-up max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-primary" /> Your trusted PPE supply-chain partner
            </div>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Protective Gear.
              <span className="text-primary"> Practical Standards.</span>
            </h1>
            <p className="mt-4 max-w-lg text-white/80">
              Temran Suppliers Limited delivers certified PPE and workplace safety gear across Kenya — helmets,
              gloves, boots, respirators, coveralls and hi-vis workwear for construction, manufacturing, healthcare
              and industrial teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Browse products
              </Link>
              <a
                href={`https://wa.me/${CONTACT.waNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                Talk to us on WhatsApp
              </a>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 text-sm">
              <div>
                <dt className="text-white/60">Quality</dt>
                <dd className="mt-1 font-semibold">Certified PPE</dd>
              </div>
              <div>
                <dt className="text-white/60">Supply</dt>
                <dd className="mt-1 font-semibold">Reliable stock</dd>
              </div>
              <div>
                <dt className="text-white/60">Everyday</dt>
                <dd className="mt-1 font-semibold">Safer teams</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-charcoal md:text-3xl">Featured equipment</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              A live snapshot of stocked PPE — swipe to explore what's currently on the shelf.
            </p>
          </div>
          <Link to="/products" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-8">
          <FeaturedCarousel />
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold text-charcoal md:text-3xl">Categories we supply</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            One-stop sourcing across the categories that matter to Kenyan job sites.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Link
                key={c.id}
                to="/products"
                className="animate-fade-up hover-lift rounded-xl border border-border bg-card p-5"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="text-sm font-semibold text-charcoal">{c.label}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                <div className="mt-4 text-sm font-semibold text-primary">Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-bold text-charcoal md:text-3xl">Why teams choose Temran</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.slice(0, 6).map((w, i) => (
            <div
              key={w.title}
              className="animate-fade-up rounded-xl border border-border bg-card p-6"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="mb-3 h-1 w-8 rounded-full bg-primary" />
              <div className="text-base font-semibold text-charcoal">{w.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl bg-charcoal p-8 text-charcoal-foreground md:p-12">
          <div className="grid gap-6 md:grid-cols-[2fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Need a bulk PPE quote today?</h2>
              <p className="mt-2 text-white/70">
                Message us on WhatsApp for fast turnaround on quotations, custom orders, and site-specific PPE kits.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={`https://wa.me/${CONTACT.waNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                WhatsApp us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
