## Temran Suppliers Limited — Marketing Website

A mobile-first, SEO-optimized PPE supplier site for Nairobi, Kenya. Six routes, real product photos, WhatsApp + email contact, installable PWA with offline support.

### Pages (each its own TanStack route with unique title/description/OG tags)
1. `/` Home — hero with logo + tagline "Protective Gear. Practical Standards.", short intro, featured category grid (6 tiles linking to Products), "Why Choose Us" highlights, sticky WhatsApp CTA.
2. `/about` — company overview, Vision, Mission, 7 Core Values as cards.
3. `/services` — 4 service pillars (PPE supply, consultation & bulk, training & guidance, delivery & after-sales).
4. `/products` — filterable catalogue grouped by category: Footwear, Headgear (helmets), Gloves, Eyewear (goggles/shields), Hi-Vis & Workwear, Respirators, Coveralls, Firefighting Gear. Category chips + animated grid + lightbox on click. Uses the real photos cropped from the uploaded sheet.
5. `/why-choose-us` — 7 differentiators with short SEO-friendly descriptions.
6. `/contact` — contact form (name, email, phone, company, inquiry), primary "Send Message" (Resend email) + secondary "Chat on WhatsApp" (wa.me deep link prefilled with form data). Address, phone, email, Nairobi map embed.

### Design
- Global font: **Fredoka** (loaded via `<link>` in `__root.tsx`, referenced in `@theme` as `--font-sans`).
- Palette: safety red `#E63027` accent, charcoal `#111318`, white, subtle warm grey. Minimal gradients (a single soft red glow on hero only).
- Minimal icons — mostly lucide only for contact/utility. Product tiles rely on photography.
- Animations: fade-in on scroll, hover-scale on cards, hero product carousel (embla), skeleton loaders on product images while they load.
- Custom favicon: generated red shield-with-T mark → `public/favicon.png`; delete default `favicon.ico`.
- Logo: uploaded `image-2.png` cropped/optimized, saved via lovable-assets, used in header + footer.

### Product images
- Extract individual product photos from the uploaded sheet (`image.png`) using ImageMagick crop into `public/products/*.jpg` (roughly 25 images across 8 categories). Discard the "RAFLAN Enterprises" logo tiles.
- Each image gets an SEO-compliant alt + short description generated per category (e.g. "EN397-certified ventilated safety helmet for construction sites").

### Contact form behavior
- Single form. On submit:
  - Calls TanStack server function `sendContactEmail` → posts to Resend API using `RESEND_API_KEY` secret; `to: temranservices@gmail.com`, `from: "Temran Website <onboarding@resend.dev>"` (with note in success toast that we'll follow up).
  - On success: toast + inline success state, form clears.
  - On failure: error toast with **Retry** and **Email via mailto:** fallback.
- Secondary button "Chat on WhatsApp instead" always visible, builds `https://wa.me/254728973081?text=...` with URL-encoded name/email/phone/message, opens in new tab.
- Client-side Zod validation before either action.

### PWA + Offline
- Manifest: `public/manifest.webmanifest` with name, short_name "Temran", theme `#E63027`, background `#111318`, `display: standalone`, icons 192/512.
- Offline support via `vite-plugin-pwa` (`generateSW`, `registerType: autoUpdate`, `NetworkFirst` for HTML, `CacheFirst` for hashed assets, precache all product images).
- Registration wrapper (`src/lib/pwa-register.ts`) that refuses to register in dev, preview iframes, lovable preview hosts, and when `?sw=off` — per PWA skill guardrails.

### SEO
- Per-route `head()` with unique title/description/og:title/og:description. Keywords targeting "PPE supplier Nairobi", "safety equipment Kenya", "workplace safety gear Kenya", etc.
- JSON-LD `Organization` + `LocalBusiness` schema on home; `Product` schema stub-ready on product cards.
- Semantic HTML, single H1 per route, `sitemap.xml` and `robots.txt` under `public/`.

### Technical

**Routes**
```
src/routes/
├── __root.tsx        (Fredoka <link>, header, footer, WhatsApp FAB)
├── index.tsx         (home)
├── about.tsx
├── services.tsx
├── products.tsx
├── why-choose-us.tsx
└── contact.tsx
```

**Components** (`src/components/`)
- `SiteHeader.tsx`, `SiteFooter.tsx`, `WhatsAppFab.tsx`
- `Hero.tsx`, `CategoryGrid.tsx`, `FeaturedCarousel.tsx` (embla)
- `ProductGallery.tsx`, `ProductCard.tsx`, `CategoryFilter.tsx`, `Lightbox.tsx`, `ImageWithSkeleton.tsx`
- `ContactForm.tsx`, `ValueCard.tsx`, `ServiceCard.tsx`

**Data**
- `src/data/products.ts` — typed array `{ id, name, category, image, description }` (module of static data — swap to a fetch call later without touching UI).
- `src/data/categories.ts`, `src/data/values.ts`, `src/data/services.ts`.
- All components consume via a thin `getProducts()` / `getCategories()` helper so a future backend API can drop in.

**Server function**
- `src/lib/contact.functions.ts` — `sendContactEmail` (`createServerFn POST`) with Zod input validation, calls Resend REST API using `process.env.RESEND_API_KEY`. Returns `{ ok: true }` or throws for the client to catch.

**Secret setup**
- Request `RESEND_API_KEY` via `add_secret` after scaffolding the server function so the callback URL/context is ready.

**Assets pipeline (once, in build mode)**
1. `code--exec` uses ImageMagick to crop the product sheet into `public/products/*.jpg`, dropping logo panels.
2. Crop the Temran logo from `image-2.png` → `src/assets/temran-logo.png` (via lovable-assets).
3. Generate favicon (red shield "T") → `public/favicon.png`, delete `public/favicon.ico`, wire in `__root.tsx`.

**Verification** (before finishing)
- Playwright script hits `/`, `/products`, `/contact`, screenshots each viewport; asserts WhatsApp link href contains `wa.me/254728973081`; submits the form with a stubbed Resend key and verifies the success toast; checks manifest served at `/manifest.webmanifest`.

### Out of scope
- No CMS / admin. Product data is a typed TS module — easy to migrate to an API later.
- No auth, no database, no analytics.
- Google Maps is a static embed link, not the JS API.

### Confirm before I build
- Resend `from` will use `onboarding@resend.dev` until Temran verifies a domain (deliverability to `temranservices@gmail.com` works; replies go to the form's email). OK?
- I'll extract ~25 product photos from the uploaded sheet with visual judgement for categorization — you can rename/regroup afterwards.
