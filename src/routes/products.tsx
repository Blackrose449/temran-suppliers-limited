import { createFileRoute } from "@tanstack/react-router";
import { ProductGallery } from "@/components/product-gallery";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "PPE Products & Catalogue — Helmets, Boots, Gloves, Coveralls | Temran" },
      {
        name: "description",
        content:
          "Browse Temran's PPE catalogue: safety helmets, boots, gloves, goggles, coveralls, hi-vis workwear, respiratory and firefighting gear supplied across Kenya.",
      },
      { property: "og:title", content: "PPE Catalogue — Temran Suppliers Limited" },
      {
        property: "og:description",
        content: "Safety helmets, boots, gloves, coveralls, hi-vis and firefighting gear supplied across Kenya.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">Products</p>
      <h1 className="mt-2 text-4xl font-bold text-charcoal md:text-5xl">Our PPE catalogue</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Filter by category to explore what we currently stock. Message us for pricing, availability and bulk orders.
      </p>
      <div className="mt-10">
        <ProductGallery />
      </div>
    </div>
  );
}
