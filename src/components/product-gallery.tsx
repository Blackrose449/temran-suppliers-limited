import { useState, useMemo } from "react";
import { products, categories, type Category } from "@/data/site";
import { ImageWithSkeleton } from "./image-with-skeleton";
import { X } from "lucide-react";

export function ProductGallery() {
  const [active, setActive] = useState<Category | "all">("all");
  const [lightbox, setLightbox] = useState<(typeof products)[number] | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FilterChip active={active === "all"} onClick={() => setActive("all")}>All</FilterChip>
        {categories.map((c) => (
          <FilterChip key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>
            {c.label}
          </FilterChip>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setLightbox(p)}
            className="group animate-fade-up hover-lift overflow-hidden rounded-xl border border-border bg-card text-left"
            style={{ animationDelay: `${Math.min(i * 40, 400)}ms` }}
          >
            <ImageWithSkeleton src={p.image} alt={p.name} />
            <div className="p-3">
              <div className="text-sm font-semibold text-charcoal">{p.name}</div>
              <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{p.description}</div>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-xl overflow-hidden rounded-2xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-3 top-3 rounded-full bg-background/80 p-2 text-charcoal hover:bg-background"
            >
              <X className="h-4 w-4" />
            </button>
            <ImageWithSkeleton src={lightbox.image} alt={lightbox.name} aspect="aspect-[4/3]" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-charcoal">{lightbox.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-charcoal hover:border-primary/40"
      }`}
    >
      {children}
    </button>
  );
}
