/* =============================================================================
 * site.config.ts — SINGLE SOURCE OF TRUTH
 * -----------------------------------------------------------------------------
 * This is the ONLY file with business-specific content. Every component reads
 * from here. To spin up a different client site on this exact codebase:
 *   1. Replace the values in this file.
 *   2. Drop new photos in /public/images and update `images` below.
 * That's it — no component edits. Nothing business-specific lives anywhere else.
 * ========================================================================== */

import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Wind,
  Droplets,
  Layers,
  Wrench,
  CarFront,
} from "lucide-react";

/* ---- Types ----------------------------------------------------------------- */

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Review = {
  /** Leave quote empty ("") to render a clearly-marked placeholder slot. */
  quote: string;
  author: string;
  /** e.g. "Google review" — shown under the author. */
  context?: string;
};

export type DayHours = {
  /** 24h "HH:MM", or null when closed. */
  open: string | null;
  close: string | null;
  closed: boolean;
};

export type SiteImage = {
  /** Path under /public. Leave "" to render the role placeholder until the real photo lands. */
  src: string;
  /** Real, specific alt text — required for every image. */
  alt: string;
  /** Shown inside the placeholder box so it's obvious which photo goes here. */
  placeholderLabel: string;
};

/* ---- Config ---------------------------------------------------------------- */

export const site = {
  /* --- Identity --- */
  business: {
    name: "Jaws Auto Detailing",
    shortName: "Jaws",
    tagline: "Mobile auto detailing in Southeast Michigan",
    phoneDisplay: "(734) 262-2365",
    phoneHref: "tel:+17342622365",
    region: "Southeast Michigan",
    email: "", // TODO: add Joey's public contact email if he wants one shown
    address: "", // TODO: street address if he wants one shown (mobile biz — optional). e.g. "Belleville, MI"
  },

  /* --- Positioning ---------------------------------------------------------
   * "mobile" => "we come to you" (current). The hero + how-it-works copy adapt
   * to this flag. TODO: switch to "shop" if Joey moves to a fixed-location shop.
   * ----------------------------------------------------------------------- */
  positioning: "mobile" as "mobile" | "shop",

  /* --- Hero ----------------------------------------------------------------
   * Two copy sets keyed to `positioning`. The active one is chosen in Hero.tsx.
   * ----------------------------------------------------------------------- */
  hero: {
    mobile: {
      eyebrow: "Mobile detailing · we come to you",
      headline: "Showroom shine,\nin your own driveway.",
      sub: "We bring the full detailing studio to you — inside vacuumed and wiped down, paint clayed and waxed to a wet-look finish. You don't go anywhere.",
      primaryCta: "Book a detail",
      secondaryCta: "Call us",
    },
    shop: {
      eyebrow: "Auto detailing studio · Southeast Michigan",
      headline: "Showroom shine,\nevery time.",
      sub: "Drop your car off and pick it up transformed — inside vacuumed and wiped down, paint clayed and waxed to a wet-look finish.",
      primaryCta: "Book a detail",
      secondaryCta: "Call us",
    },
  },

  /* --- Trust strip (under the hero) --- */
  trust: {
    rating: 5.0,
    ratingSource: "Google",
    // Short proof points shown as a row. Keep to 3.
    points: [
      "5.0 on Google",
      "We come to you",
      "Cars, trucks & SUVs",
    ],
  },

  /* --- Services (each {title, description, icon}) ---
   * Plain-language, customer's-side descriptions: what they GET, not jargon.
   */
  services: [
    {
      title: "Full Detail",
      description:
        "Inside and out, top to bottom — every surface cleaned and the paint brought back to a deep shine. You get the car back like the day you drove it home.",
      icon: Sparkles,
    },
    {
      title: "Interior Vacuuming",
      description:
        "Seats, carpets, floor mats, and every cupholder and crevice vacuumed out, so the inside feels fresh and lived-in again.",
      icon: Wind,
    },
    {
      title: "Car Waxing",
      description:
        "A hand-applied wax that wakes up the color, adds a glossy finish, and helps your paint shed water, dirt, and Michigan road salt.",
      icon: Droplets,
    },
    {
      title: "Clay Bar Treatment",
      description:
        "We lift the bonded grime and road fallout that ordinary washing leaves behind, so the paint feels glass-smooth to the touch.",
      icon: Layers,
    },
    {
      title: "Engine Detailing",
      description:
        "A careful clean under the hood that clears out grease and grime and leaves the engine bay looking sharp and well-kept.",
      icon: Wrench,
    },
    {
      title: "Full Body Wash",
      description:
        "A thorough hand wash of the whole exterior — wheels, trim, and glass included — with no harsh brushes, scratches, or swirl marks.",
      icon: CarFront,
    },
  ] satisfies Service[],

  /* --- How it works / mobile section --- */
  howItWorks: {
    eyebrow: "How it works",
    heading: "We come to you.",
    sub: "No drop-off, no waiting room. Tell us where the car is — driveway, parking lot, the office — and we handle the rest.",
    steps: [
      {
        title: "Book in a minute",
        description:
          "Send your name, number, and what you need. We confirm a time that works for you.",
      },
      {
        title: "We arrive ready",
        description:
          "We pull up with everything — water, power, and pro-grade products. Nothing needed from you.",
      },
      {
        title: "Drive away gleaming",
        description:
          "We detail on-site and text you when it's done. You walk out to a car that looks brand new.",
      },
    ] satisfies ProcessStep[],
  },

  /* --- Interior section (uses the Chevy interior photo) --- */
  interior: {
    eyebrow: "Interior detailing",
    heading: "The inside, handled like it's our own.",
    body: "Wheel, dash, console, leather, and every seam — vacuumed, wiped, and conditioned. We get into the spots a quick wash always misses, so the cabin smells clean and looks cared-for.",
    bullets: [
      "Seats, carpets & mats deep-vacuumed",
      "Leather and trim wiped and conditioned",
      "Cupholders, vents, and crevices detailed",
      "Glass cleaned streak-free, inside and out",
    ],
  },

  /* --- Before / after slider (the signature element) --- */
  beforeAfter: {
    eyebrow: "See the difference",
    heading: "Drag to reveal the transformation.",
    sub: "Same car, same day. Pull the handle from dirty to detailed.",
    beforeLabel: "Before",
    afterLabel: "After",
  },

  /* --- Service area ---
   * TODO: replace with Joey's actual towns/ZIPs. These are SE-Michigan
   * placeholders near the 734 area so previews look populated — confirm before launch.
   */
  serviceArea: [
    "Ann Arbor",
    "Ypsilanti",
    "Saline",
    "Canton",
    "Plymouth",
    "Belleville",
    "Dexter",
    "Chelsea",
  ] as string[],
  serviceAreaNote:
    "Not sure if we reach you? Ask — we cover most of Southeast Michigan.",

  /* --- Reviews / social proof ---
   * 5.0 on Google. Quotes are intentionally EMPTY placeholders — do not invent.
   * Paste 2 real review quotes + author first names when Joey provides them.
   */
  reviews: {
    rating: 5.0,
    source: "Google",
    // One-click "leave a review" link from Joe's Google Business Profile
    // (Business Profile -> "Ask for reviews"). Paste the shareable URL — usually
    // https://g.page/r/<id>/review or https://search.google.com/local/writereview?placeid=...
    // The raw Google review data blob is NOT a usable URL on its own.
    googleReviewUrl: "", // TODO: paste Joe's review link
    quotes: [
      // TODO: paste Joe's 2 Google reviews verbatim (quote + first name). Do not invent.
      { quote: "", author: "", context: "Google review" },
      { quote: "", author: "", context: "Google review" },
    ] satisfies Review[],
  },

  /* --- Hours --- (closes 7:30 PM is the one confirmed fact)
   * TODO: confirm open times + which days Joey actually works. Placeholders below.
   */
  hours: {
    monday: { open: "08:00", close: "19:30", closed: false },
    tuesday: { open: "08:00", close: "19:30", closed: false },
    wednesday: { open: "08:00", close: "19:30", closed: false },
    thursday: { open: "08:00", close: "19:30", closed: false },
    friday: { open: "08:00", close: "19:30", closed: false },
    saturday: { open: "09:00", close: "19:30", closed: false },
    sunday: { open: null, close: null, closed: true },
  } as Record<string, DayHours>,

  /* --- Photo manifest ---
   * Maps each photo to a role. Set `src` once the real file is in /public/images.
   * While `src` is "", the site shows a labeled placeholder for that role — no
   * component edits needed to swap photos in.
   */
  images: {
    hero: {
      src: "/images/hero-lexus.jpg",
      alt: "A freshly detailed sage-green Lexus ES sedan with a deep wet-look gloss, parked in a driveway",
      placeholderLabel: "Hero — clean Lexus sedan (the strongest shot)",
    },
    process: {
      src: "/images/mobile-detailing.jpg",
      alt: "A silver Toyota RAV4 with its doors open being detailed on-site in a customer's driveway",
      placeholderLabel: "Process — SUV being detailed in a driveway",
    },
    interior: {
      src: "/images/interior.jpg",
      alt: "A detailed car interior with clean black leather seats, a spotless steering wheel and dashboard",
      placeholderLabel: "Interior — clean steering wheel + leather",
    },
    beforeAfterBefore: {
      src: "/images/before.jpg",
      alt: "An SUV cargo area before detailing — rear seats and carpet dusty and covered in debris",
      placeholderLabel: "Before — dirty cargo (same SUV as After)",
    },
    beforeAfterAfter: {
      src: "/images/after.jpg",
      alt: "The same SUV cargo area after detailing — seats and carpet vacuumed clean and spotless",
      placeholderLabel: "After — clean cargo (same SUV as Before)",
    },
  } satisfies Record<string, SiteImage>,

  /* --- CRM wiring (do not improvise — see ContactForm.tsx) ---
   * Values come from env so a different deploy = different tenant with no code change.
   */
  crm: {
    url:
      process.env.NEXT_PUBLIC_CRM_URL ||
      "https://www.alignandacquire.com/api/contact",
    businessSlug: process.env.NEXT_PUBLIC_BUSINESS_SLUG || "REPLACE_ME_FRIDAY",
  },

  /* --- Contact section copy --- */
  contact: {
    eyebrow: "Get a quote",
    heading: "Book your detail.",
    sub: "Tell us about your car and where it is. We'll text you back fast with a time and a price.",
    consentLabel:
      "I agree to receive text messages from Jaws Auto Detailing about my request. Message and data rates may apply. Reply STOP to opt out.",
    successHeading: "Thanks — we've got it.",
    successBody:
      "We'll reach out shortly to lock in a time. Need it sooner? Call or text us directly.",
    errorBody:
      "Something went wrong sending that. Please call or text us at",
  },

  /* --- Primary CTA (reused everywhere a "book" action appears) ---
   * Keeps the conversion CTA copy in one place: header, hero, section CTAs,
   * and the sticky mobile bar all read from here.
   */
  cta: {
    label: "Book a detail",
    href: "/get-a-quote/",
    // Short kickers shown above the CTA at high-intent moments.
    afterSliderKicker: "Want results like this on your car?",
    afterReviewsKicker: "Ready for the 5-star treatment?",
    // Sticky mobile bar
    callLabel: "Call",
  },

  /* --- About page ---------------------------------------------------------
   * Mirrors the lawn site's About structure (core-values intro → a few
   * "what we do" category blocks → contact info), adapted to detailing.
   * ----------------------------------------------------------------------- */
  about: {
    eyebrow: "About Jaws",
    heading: "Detailing done like it's our own car.",
    intro:
      "Interactions are at the heart of everything we do. We treat every vehicle — and every customer — like the only one that matters, and we don't pack up until it looks the way it should.",
    story:
      "Jaws Auto Detailing is a mobile detailing service based in Southeast Michigan. We bring professional-grade tools and products straight to your driveway, so you get a showroom finish without ever leaving home. No drop-off, no waiting room — just a cleaner, sharper car.",
    categoriesHeading: "A full range of detailing.",
    categories: [
      {
        title: "Exterior detailing",
        description:
          "Hand washes, clay bar, wax, and paint care that bring back the deep, wet-look shine and protect against Michigan weather.",
      },
      {
        title: "Interior detailing",
        description:
          "Vacuuming, wipe-downs, leather and trim care — the cabin cleaned into every seam, not just the surfaces you can see.",
      },
      {
        title: "We come to you",
        description:
          "Fully mobile service across Southeast Michigan. Book a time, send your address, and we handle the rest on-site.",
      },
    ],
  },

  /* --- Closing CTA band (home + about) --- */
  ctaBand: {
    heading: "Ready for a cleaner car?",
    sub: "Book a detail in under a minute — we'll text you back fast with a time and a price.",
  },

  /* --- Nav (top-level pages — mirrors jawslawnandsnow.com) --- */
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Get a quote", href: "/get-a-quote/" },
  ],

  /* --- SEO (per page; mirrors the lawn site's route structure) --- */
  seo: {
    siteName: "Jaws Auto Detailing",
    url: "https://jawsautodetailing.com", // TODO: confirm final domain
    pages: {
      home: {
        path: "/",
        title: "Jaws Auto Detailing — Mobile Car Detailing in Southeast Michigan",
        description:
          "Mobile auto detailing in Southeast Michigan. We come to you — full details, waxing, clay bar, interior cleaning, and more. 5.0 on Google. Book a detail today.",
      },
      about: {
        path: "/about/",
        title:
          "About — Jaws Auto Detailing | Mobile Detailing in Southeast Michigan",
        description:
          "Meet Jaws Auto Detailing: a mobile car detailing service in Southeast Michigan that treats every vehicle like its own. Exterior, interior, and full details — we come to you.",
      },
      quote: {
        path: "/get-a-quote/",
        title: "Get a Quote — Jaws Auto Detailing | Mobile Car Detailing",
        description:
          "Get a fast, free quote for mobile car detailing in Southeast Michigan. Tell us about your car and we'll text you back with a time and a price.",
      },
    },
  },

  /* --- Footer --- */
  footer: {
    credit: "Site by Align and Acquire",
  },
} as const;

export type Site = typeof site;
