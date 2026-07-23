import { Link } from "@tanstack/react-router";
import { CONTACT } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="text-lg font-semibold">Temran Suppliers Limited</div>
          <p className="mt-3 text-sm text-white/70">Protective Gear. Practical Standards.</p>
          <p className="mt-3 text-sm text-white/70">Your trusted PPE supply-chain partner in Nairobi, Kenya.</p>
        </div>
        <div>
          <div className="text-sm font-semibold">Explore</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/why-choose-us" className="hover:text-white">Why Choose Us</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>{CONTACT.address}</li>
            <li><a href={`tel:${CONTACT.phone}`} className="hover:text-white">{CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold">Talk to us</div>
          <a
            href={`https://wa.me/${CONTACT.waNumber}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Temran Suppliers Limited. All rights reserved.
      </div>
    </footer>
  );
}
