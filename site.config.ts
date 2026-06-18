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
    quotes: [
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
      src: "", // -> /images/hero-lexus.jpg
      alt: "Freshly detailed dark Lexus sedan with a deep wet-look gloss reflecting the sky",
      placeholderLabel: "Hero — dark Lexus sedan (the strongest shot)",
    },
    process: {
      src: "", // -> /images/suv-driveway-wash.jpg
      alt: "An SUV being hand-washed in a residential driveway during a mobile detailing visit",
      placeholderLabel: "Process — SUV being washed in a driveway",
    },
    interior: {
      src: "", // -> /images/chevy-interior.jpg
      alt: "Detailed Chevrolet interior showing a clean steering wheel and conditioned leather seat",
      placeholderLabel: "Interior — Chevy wheel + leather",
    },
    beforeAfterBefore: {
      src: "", // -> /images/before.jpg
      alt: "Car panel before detailing, dull and covered in dirt and water spots",
      placeholderLabel: "Before — dirty panel (same car as After)",
    },
    beforeAfterAfter: {
      src: "", // -> /images/after.jpg
      alt: "The same car panel after detailing, polished to a deep reflective shine",
      placeholderLabel: "After — finished panel (same car as Before)",
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
    href: "#contact",
    // Short kickers shown above the CTA at high-intent moments.
    afterSliderKicker: "Want results like this on your car?",
    afterReviewsKicker: "Ready for the 5-star treatment?",
    // Sticky mobile bar
    callLabel: "Call",
  },

  /* --- Nav (anchor links on a single page) --- */
  nav: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Before & after", href: "#before-after" },
    { label: "Service area", href: "#service-area" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  /* --- SEO --- */
  seo: {
    title: "Jaws Auto Detailing — Mobile Car Detailing in Southeast Michigan",
    description:
      "Mobile auto detailing in Southeast Michigan. We come to you — full details, waxing, clay bar, interior cleaning, and more. 5.0 on Google. Book a detail today.",
    url: "https://jawsautodetailing.com", // TODO: confirm final domain
  },

  /* --- Footer --- */
  footer: {
    credit: "Site by Align and Acquire",
  },
} as const;

export type Site = typeof site;
