# Jaws Auto Detailing — marketing site

A high-conversion, **config-driven** marketing site. Next.js 14 (App Router) +
TypeScript + Tailwind. Built to be the first of three sites sharing this exact
codebase: swap `site.config.ts` + `/public/images` and you get a different site
with **zero component edits**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## The one file that matters

`site.config.ts` is the single source of truth — business name, phone, services,
hours, service area, reviews, SEO, the photo manifest, and the CRM wiring. Every
component reads from it. Nothing business-specific is hardcoded anywhere else.

## Photos

See `PHOTOS.md`. Each image is mapped to a role; placeholders show until real
photos are dropped into `/public/images` and wired in `site.config.ts`.

## CRM / contact form

The contact form POSTs the lead directly to the Align & Acquire CRM. Configure via
two **public** env vars (see `.env.local.example`):

```bash
NEXT_PUBLIC_CRM_URL=https://www.alignandacquire.com/api/contact
NEXT_PUBLIC_BUSINESS_SLUG=REPLACE_ME_FRIDAY   # paste the exact Neon Business.slug
```

POST body is exactly: `{ name, phone, email, message, smsConsent, businessSlug }`.
`smsConsent` is a real, default-unchecked TCPA checkbox.

## Before launch — open TODOs

- [ ] Paste the real `NEXT_PUBLIC_BUSINESS_SLUG` (Neon `Business.slug`).
- [ ] Drop in the 5 photos and set their `src` in `site.config.ts`.
- [ ] Confirm `serviceArea` towns (placeholders are SE-Michigan guesses).
- [ ] Confirm `hours` open times (only "closes 7:30 PM" is confirmed).
- [ ] Add 2 real Google review quotes to `reviews.quotes` (do not invent).
- [ ] Set the final domain in `seo.url`.

## Design

"Wet Clearcoat" — palette derived from what a glossy dark car reflects (warm
sunset + cool sky over blue-black), Archivo Expanded × Hanken Grotesk type, dark
cinematic spine interleaved with warm-bone readable bands. Signature element: the
draggable before/after reveal slider (`components/BeforeAfterSlider.tsx`).
