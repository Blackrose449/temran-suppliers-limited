import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { products } from "@/data/site";
import { ImageWithSkeleton } from "./image-with-skeleton";

const featured = products.slice(0, 8);

export function FeaturedCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });

  useEffect(() => {
    if (!embla) return;
    const id = setInterval(() => embla.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [embla]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {featured.map((p, i) => (
          <div
            key={p.id}
            className="min-w-[60%] flex-[0_0_60%] overflow-hidden rounded-xl border border-border bg-card sm:min-w-[40%] sm:flex-[0_0_40%] lg:min-w-[25%] lg:flex-[0_0_25%]"
          >
            <ImageWithSkeleton
              src={p.image}
              alt={p.name}
              eager={i < 4}
              fetchPriority={i === 0 ? "high" : undefined}
            />
            <div className="p-3">
              <div className="text-sm font-semibold text-charcoal">{p.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
