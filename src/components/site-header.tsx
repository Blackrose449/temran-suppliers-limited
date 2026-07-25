import { Link } from "@tanstack/react-router";
import logoAsset from "../assets/temran-logo.png.asset.json";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/why-choose-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoAsset.url}
            alt="Temran Suppliers Limited"
            className="h-12 w-12 shrink-0 object-contain"
            width={48}
            height={48}
            loading="eager"
            decoding="async"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-charcoal">Temran Suppliers</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Limited</div>
          </div>
        </Link>

        <nav className="hidden gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm text-charcoal transition-colors hover:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Get a Quote
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-charcoal md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-charcoal hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
