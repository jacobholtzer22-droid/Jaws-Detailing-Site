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
  /** URL slug for the /services/<slug>/ detail page. */
  slug: string;
  /** Short, card-level description. */
  description: string;
  /** Longer paragraph for the service detail page. */
  longDescription: string;
  /** "What's included" bullets on the detail page. */
  includes: string[];
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
      slug: "full-detail",
      description:
        "Inside and out, top to bottom — every surface cleaned and the paint brought back to a deep shine. You get the car back like the day you drove it home.",
      longDescription:
        "Our most complete package — inside and out, top to bottom. We start with a thorough hand wash, decontaminate and protect the paint, then move inside to vacuum, wipe, and condition every surface. It's the reset button for your car: it comes back looking, smelling, and feeling like the day you drove it off the lot.",
      includes: [
        "Full exterior hand wash — wheels and trim included",
        "Clay bar and hand wax for a deep, glossy finish",
        "Complete interior vacuum — seats, carpets, and mats",
        "Dash, console, vents, and door panels wiped and conditioned",
        "Interior and exterior glass cleaned streak-free",
        "Done at your home or office — we come to you",
      ],
      icon: Sparkles,
    },
    {
      title: "Interior Vacuuming",
      slug: "interior-vacuuming",
      description:
        "Seats, carpets, floor mats, and every cupholder and crevice vacuumed out, so the inside feels fresh and lived-in again.",
      longDescription:
        "Life happens inside your car — crumbs, dust, sand, pet hair, the works. We pull the floor mats and get into every seat track, cupholder, and crevice with professional-grade equipment, so the cabin feels fresh again instead of cluttered and gritty.",
      includes: [
        "Front and rear seats vacuumed",
        "Carpets and removable floor mats",
        "Trunk and cargo area",
        "Cupholders, console, and door pockets",
        "Seat tracks and tight crevices",
        "Pet hair removal available",
      ],
      icon: Wind,
    },
    {
      title: "Car Waxing",
      slug: "car-waxing",
      description:
        "A hand-applied wax that wakes up the color, adds a glossy finish, and helps your paint shed water, dirt, and Michigan road salt.",
      longDescription:
        "A good wax does two things: it makes the color pop with a deep, glossy shine, and it lays down a protective layer that helps your paint shed water, road grime, and Michigan winter salt. We apply it by hand so it goes on even and lasts — no swirl marks, no shortcuts.",
      includes: [
        "Hand-applied premium wax",
        "Brings back deep gloss and color depth",
        "Protects against water spots and road salt",
        "Smooth, slick finish that's easier to keep clean",
        "Wheels and trim dressed",
        "Pairs perfectly with a clay bar treatment",
      ],
      icon: Droplets,
    },
    {
      title: "Clay Bar Treatment",
      slug: "clay-bar-treatment",
      description:
        "We lift the bonded grime and road fallout that ordinary washing leaves behind, so the paint feels glass-smooth to the touch.",
      longDescription:
        "Even after washing, your paint holds onto bonded contaminants — road fallout, overspray, tar — that you can feel as roughness. A clay bar gently lifts all of it, leaving the surface glass-smooth and ready to take wax. It's the step that makes the difference between 'clean' and 'showroom.'",
      includes: [
        "Removes bonded grime washing leaves behind",
        "Lifts road and rail fallout, overspray, and tar",
        "Leaves paint glass-smooth to the touch",
        "Preps the surface so wax bonds better",
        "Restores slickness and clarity",
        "Recommended before any wax or sealant",
      ],
      icon: Layers,
    },
    {
      title: "Engine Detailing",
      slug: "engine-detailing",
      description:
        "A careful clean under the hood that clears out grease and grime and leaves the engine bay looking sharp and well-kept.",
      longDescription:
        "The engine bay is the one place most people never clean — and it shows. We carefully degrease and clean under the hood, protecting the sensitive components, so everything looks sharp and well-kept. A clean engine bay also makes leaks and issues far easier to spot down the road.",
      includes: [
        "Careful degrease and clean of the engine bay",
        "Sensitive components protected",
        "Plastics and covers dressed and refreshed",
        "Removes built-up grease and grime",
        "Makes future maintenance cleaner",
        "Great before a sale or trade-in",
      ],
      icon: Wrench,
    },
    {
      title: "Full Body Wash",
      slug: "full-body-wash",
      description:
        "A thorough hand wash of the whole exterior — wheels, trim, and glass included — with no harsh brushes, scratches, or swirl marks.",
      longDescription:
        "Not all washes are equal. We hand wash the whole exterior — paint, wheels, trim, and glass — using safe techniques and clean media so we never grind dirt back into your paint. No automated brushes, no swirl marks: just a proper wash that actually protects your finish.",
      includes: [
        "Gentle hand wash of the full exterior",
        "Wheels, tires, and trim cleaned",
        "All glass cleaned streak-free",
        "Safe wash method — no swirl marks",
        "Hand-dried to prevent water spots",
        "A great regular maintenance option",
      ],
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
      src: "/images/cargo-before.jpg",
      alt: "An SUV cargo area before detailing — rear seats and carpet dusty and covered in debris",
      placeholderLabel: "Before — dirty cargo (same SUV as After)",
    },
    beforeAfterAfter: {
      src: "/images/cargo-after.jpg",
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

  /* --- Services index page copy --- */
  servicesPage: {
    eyebrow: "Services",
    heading: "Everything we can do for your car.",
    sub: "From a quick maintenance wash to a full inside-and-out detail. Tap any service to see exactly what's included — and remember, we come to you.",
    detailIncludesHeading: "What's included",
    detailOtherHeading: "Other services",
  },

  /* --- Gallery / "Our work" page ---
   * Add or swap shots by editing this list. Each image is shown in a 4:3 grid.
   */
  gallery: {
    eyebrow: "Our work",
    heading: "Real cars, real results.",
    sub: "A look at recent details across Southeast Michigan — inside and out, cars, trucks, and SUVs. We come to you for every one of these.",
    images: [
      {
        src: "/images/gallery/lexus.jpg",
        alt: "A freshly detailed sage-green Lexus ES sedan gleaming in a driveway",
      },
      {
        src: "/images/gallery/kia-front.jpg",
        alt: "A clean, glossy dark-green Kia Sorento SUV after a full detail",
      },
      {
        src: "/images/gallery/kia-side.jpg",
        alt: "A detailed dark-green Kia Sorento with the door open, paint shining",
      },
      {
        src: "/images/gallery/kia-foam.jpg",
        alt: "A Kia Sorento covered in wash foam during an on-site exterior detail",
      },
      {
        src: "/images/gallery/crv-interior.jpg",
        alt: "Clean, conditioned black leather rear seats in a detailed Honda CR-V",
      },
      {
        src: "/images/gallery/rav4.jpg",
        alt: "A silver Toyota RAV4 being detailed on-site with the doors open",
      },
      {
        src: "/images/gallery/chevy.jpg",
        alt: "A white Chevrolet Trailblazer with the hatch and doors open during a detail",
      },
    ],
  },

  /* --- Nav (top-level pages) --- */
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Gallery", href: "/gallery/" },
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
      services: {
        path: "/services/",
        title: "Detailing Services — Jaws Auto Detailing | Southeast Michigan",
        description:
          "All of our mobile detailing services: full details, interior cleaning, hand waxing, clay bar, engine bay, and full body washes. We come to you across Southeast Michigan.",
      },
      gallery: {
        path: "/gallery/",
        title: "Our Work — Jaws Auto Detailing | Mobile Detailing Gallery",
        description:
          "See recent mobile detailing work from Jaws Auto Detailing across Southeast Michigan — finished exteriors, clean interiors, and on-site details.",
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

/** Readonly service item (site is `as const`, so use this for component props). */
export type ServiceItem = (typeof site)["services"][number];

/** Look up a service by its slug (used by the dynamic /services/<slug>/ route). */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return site.services.find((s) => s.slug === slug);
}
