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
    // Primary city used in the hero headline + SEO. TODO: confirm Joey's main city.
    // NOTE: this city is also written into hero.mobile.headline below — update both.
    primaryCity: "Ann Arbor",
    email: "", // TODO: add Joey's public contact email if he wants one shown
    address: "", // TODO: street address if he wants one shown (mobile biz — optional). e.g. "Belleville, MI"
  },

  /* --- Social links ---
   * Leave a value "" to hide that icon. No fabricated profiles — paste Joey's
   * real handles before launch. TODO: confirm.
   */
  social: {
    instagram: "", // e.g. "https://instagram.com/jawsautodetailing"
    facebook: "",
    tiktok: "",
    youtube: "",
  },

  /* --- Top utility bar (thin strip above the nav) --- */
  utilityBar: {
    // Short serving line. {region}/{city} are filled in by the component.
    message: "Mobile detailing across Southeast Michigan — we come to you",
    // Small note on the right (desktop only), e.g. scheduling promise.
    note: "Fast quotes by text",
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
      eyebrow: "Mobile auto detailing · we come to you",
      // City pattern (matches the brief). TODO: keep in sync with business.primaryCity.
      headline: "Mobile detailing in the\nAnn Arbor area.",
      sub: "We bring the full detailing studio to your driveway — inside vacuumed and wiped down, paint clayed and waxed to a wet-look finish. You don't go anywhere.",
      primaryCta: "Start your quote",
      secondaryCta: "Call now",
    },
    shop: {
      eyebrow: "Auto detailing studio · Southeast Michigan",
      headline: "Showroom shine,\nevery time.",
      sub: "Drop your car off and pick it up transformed — inside vacuumed and wiped down, paint clayed and waxed to a wet-look finish.",
      primaryCta: "Book a detail",
      secondaryCta: "Call us",
    },
  },

  /* --- Trust strip (under the hero) ---
   * Real, defensible signals only — NO star ratings, review counts, or
   * "#1 / top-rated" claims (Jaws is newer and can't back those yet).
   */
  trust: {
    // Short proof points shown as a row. Keep to 3.
    points: [
      "Satisfaction guaranteed",
      "We come to you",
      "Locally owned & operated",
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

  /* --- Intro block (eyebrow + heading + two paragraphs + CTA + vertical photo) --- */
  intro: {
    eyebrow: "Detailing that comes to you",
    heading: "A cleaner car, without the trip.",
    body: [
      "Most detail shops want you to drop your car off, find a ride, and wait around for a call. We do it the other way: tell us where the car is, and we bring the full setup to your driveway, your office lot, wherever it's parked.",
      "You get a careful, hands-on detail — inside and out — without losing half a day to it. Same pro-grade products, same attention to the details, none of the hassle.",
    ],
    cta: "Start your quote",
    image: {
      src: "/images/gallery/lexus.jpg",
      alt: "A freshly detailed sedan gleaming in a driveway after a mobile detail",
      placeholderLabel: "Intro — tall shot of a finished car (real Jaws photo)",
    },
  },

  /* --- Popular services (numbered 01 / 02 / 03) ---
   * The three pillars also power the cards under the hero, so they live here once.
   * TODO: confirm Joey's three headline packages + final service lineup/pricing.
   */
  popular: {
    eyebrow: "Popular services",
    heading: "Three ways to get your car right.",
    sub: "Pick the level your car needs — or tell us about it and we'll point you to the right one.",
    allLabel: "See all services & pricing",
    pillars: [
      {
        number: "01",
        title: "Interior Detail",
        href: "/services/interior-vacuuming/",
        blurb:
          "Seats, carpets, leather, glass, and every crevice — vacuumed, wiped, and conditioned until the cabin feels new again.",
        icon: Wind,
      },
      {
        number: "02",
        title: "Exterior Detail",
        href: "/services/full-body-wash/",
        blurb:
          "A safe hand wash, clay, and wax that wakes up the color, adds gloss, and helps the paint shrug off road grime and salt.",
        icon: CarFront,
      },
      {
        number: "03",
        title: "Full Detail",
        href: "/services/full-detail/",
        blurb:
          "Inside and out, top to bottom. The full reset — your car comes back looking and feeling like the day you got it.",
        icon: Sparkles,
      },
    ],
  },

  /* --- Alternating image + text feature sections --- */
  features: [
    {
      eyebrow: "Exterior & paint",
      heading: "Bring the paint back to life.",
      body: "A real hand wash, clay bar, and hand-applied wax do more than make your car shine — they pull off bonded grime and lay down protection against water spots and Michigan road salt. No automated brushes, no swirl marks, ever.",
      cta: "Start your quote",
      imageSide: "right" as "left" | "right",
      image: {
        src: "/images/gallery/kia-foam.jpg",
        alt: "An SUV covered in wash foam during an on-site exterior detail",
        placeholderLabel: "Feature — exterior foam wash in progress (real Jaws photo)",
      },
    },
    {
      eyebrow: "Interior detailing",
      heading: "The inside, handled like our own.",
      body: "Wheel, dash, console, leather, and every seam — vacuumed, wiped, and conditioned. We get into the spots a quick wash always misses, so the cabin smells clean and looks cared-for. Pet hair and ground-in mess included.",
      cta: "Start your quote",
      imageSide: "left" as "left" | "right",
      image: {
        src: "/images/interior.jpg",
        alt: "A detailed car interior with clean black leather seats, a spotless steering wheel and dashboard",
        placeholderLabel: "Feature — clean interior, wheel + leather (real Jaws photo)",
      },
    },
  ],

  /* --- Why choose us / the difference ---
   * Trust signals Jaws can actually stand behind (no awards, no review counts).
   */
  whyUs: {
    eyebrow: "The Jaws difference",
    heading: "Booked around your life, done to our standard.",
    body: "We're a local, owner-operated detailer — not a franchise and not a quick-rinse car wash. Every car gets the same hands-on attention, and we don't pack up until it looks the way it should.",
    bullets: [
      "Satisfaction guaranteed — if something isn't right, we make it right",
      "Fully mobile — we come to your home or office",
      "Locally owned and operated, start to finish",
      "Pro-grade products and safe wash methods on every vehicle",
    ],
    image: {
      src: "/images/gallery/kia-front.jpg",
      alt: "A clean, glossy SUV after a full detail in a driveway",
      placeholderLabel: "Why us — strong finished-car photo (real Jaws photo)",
    },
  },

  /* --- FAQ (accordion) --- */
  faq: {
    eyebrow: "Good to know",
    heading: "Questions, answered.",
    items: [
      {
        q: "Do you really come to me?",
        a: "Yes — we're fully mobile. We detail at your home, your office, or anywhere the car is parked with a bit of room to work around it.",
      },
      {
        q: "What do you need from me on the day?",
        a: "Just a place to park the car and access to it. We bring our own water, power, and everything else. If you have a preferred spot — driveway, garage, lot — let us know.",
      },
      {
        q: "How long does a detail take?",
        a: "It depends on the vehicle's size and condition and the service you pick. A quick wash is well under an hour; a full inside-and-out detail usually takes a few hours. We give you a time estimate when we book.",
      },
      {
        q: "What areas do you cover?",
        a: "We cover Ann Arbor and most of Southeast Michigan. If you're not sure whether we reach you, just ask — we'll let you know straight.",
      },
      {
        q: "What kinds of vehicles do you detail?",
        a: "Cars, trucks, SUVs, and vans of just about any size. Tell us the year, make, and model when you book so we show up with the right setup.",
      },
      {
        q: "How do I book and pay?",
        a: "Send a quick quote request or call us — we'll confirm a time and a price by text. You pay once the work is done and you've seen the result.",
      },
    ],
  },

  /* --- Service areas (city cards → /service-areas/<slug>/ pages) ---
   * Only real towns Joey serves, each with its OWN copy (no thin duplicates).
   * Add or remove cities here — the grid, dropdown, pages, and sitemap all follow.
   * TODO: confirm the real coverage list + tighten each blurb with Joey's local
   * knowledge (neighborhoods, drive radius). Drop a real photo per city later.
   */
  serviceAreas: [
    {
      name: "Ann Arbor",
      slug: "ann-arbor",
      blurb: "Mobile detailing across Ann Arbor — we come to your driveway, lot, or office.",
      intro:
        "From Burns Park to the north side, parking in Ann Arbor is tight and time is tighter. We bring the detail to you, so a clean car doesn't cost you a trip across town or an afternoon in a waiting room.",
      neighborhoods: ["Burns Park", "Kerrytown", "Old West Side", "North Campus"],
      image: { src: "", alt: "Mobile auto detailing in Ann Arbor, Michigan", placeholderLabel: "Area — Ann Arbor (neutral local shot OK)" },
    },
    {
      name: "Ypsilanti",
      slug: "ypsilanti",
      blurb: "On-site detailing in Ypsilanti and Ypsi Township — home, work, or campus.",
      intro:
        "Around Depot Town, EMU, and the older neighborhoods off Michigan Ave, we handle everything from a quick maintenance wash to a full detail right where the car sits. No drop-off, no shuttle.",
      neighborhoods: ["Depot Town", "Downtown Ypsilanti", "West Willow"],
      image: { src: "", alt: "Mobile auto detailing in Ypsilanti, Michigan", placeholderLabel: "Area — Ypsilanti (neutral local shot OK)" },
    },
    {
      name: "Saline",
      slug: "saline",
      blurb: "Full mobile detailing throughout Saline — we cover the whole town.",
      intro:
        "Saline's an easy run for us, and being mobile means you don't have to drive into Ann Arbor for a proper detail. We pull up to your place and handle it start to finish.",
      neighborhoods: ["Downtown Saline", "Travis Pointe"],
      image: { src: "", alt: "Mobile auto detailing in Saline, Michigan", placeholderLabel: "Area — Saline (neutral local shot OK)" },
    },
    {
      name: "Canton",
      slug: "canton",
      blurb: "Detailing that comes to your Canton driveway — built for busy schedules.",
      intro:
        "Canton's spread out and most days are already full. Mobile detailing is built for exactly that: we come to the subdivision, the office park, wherever the car is, and you get your time back.",
      neighborhoods: ["Cherry Hill", "Sunflower", "Central Canton"],
      image: { src: "", alt: "Mobile auto detailing in Canton, Michigan", placeholderLabel: "Area — Canton (neutral local shot OK)" },
    },
    {
      name: "Plymouth",
      slug: "plymouth",
      blurb: "On-site car detailing in Plymouth — at home or at the office.",
      intro:
        "Whether you're near downtown Plymouth or out toward the township, we bring the full setup to you. Book it for the driveway or have us meet the car at work — your call.",
      neighborhoods: ["Downtown Plymouth", "Plymouth Township"],
      image: { src: "", alt: "Mobile auto detailing in Plymouth, Michigan", placeholderLabel: "Area — Plymouth (neutral local shot OK)" },
    },
    {
      name: "Belleville",
      slug: "belleville",
      blurb: "Mobile detailing around Belleville and the lake — trucks and SUVs welcome.",
      intro:
        "Out by Belleville Lake there's no shortage of trucks and SUVs that earn their dirt. We come to you and get them back to clean — inside, out, and the spots a quick wash always misses.",
      neighborhoods: ["Belleville Lake", "Van Buren Township", "Sumpter"],
      image: { src: "", alt: "Mobile auto detailing in Belleville, Michigan", placeholderLabel: "Area — Belleville (neutral local shot OK)" },
    },
  ],
  serviceAreasPage: {
    eyebrow: "Service areas",
    heading: "Mobile detailing across Southeast Michigan.",
    sub: "We come to you. Find your town below — and if you don't see it, just ask. We cover most of the region.",
  },

  /* --- Before / after slider (the signature element) --- */
  beforeAfter: {
    eyebrow: "See the difference",
    heading: "Drag to reveal the transformation.",
    sub: "Same car, same day. Pull the handle from dirty to detailed.",
    beforeLabel: "Before",
    afterLabel: "After",
  },

  /* --- Reviews / social proof ---
   * INTENTIONALLY OMITTED. Jaws is a newer business and can't back star counts,
   * "#1 / top-rated", or a testimonials wall yet — fabricating them reads as fake
   * and is legally risky. Trust is carried by the `trust`, `whyUs`, and guarantee
   * copy instead. Add a real reviews section here only once Joey has verifiable
   * Google reviews to quote verbatim.
   */

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
    businessSlug: process.env.NEXT_PUBLIC_BUSINESS_SLUG || "jaws-auto-detailing",
  },

  /* --- Contact section copy ---
   * The form captures richer detailing info (vehicle, detail type, add-ons) but
   * the CRM payload stays {name,phone,email,message,smsConsent,businessSlug} —
   * those extra answers are folded into `message` as clean text in ContactForm.tsx.
   */
  contact: {
    eyebrow: "Get a quote",
    heading: "Book your detail.",
    sub: "Tell us about your car and where it is. We'll text you back fast with a time and a price.",
    vehicleLabel: "Vehicle (year, make & model)",
    vehiclePlaceholder: "e.g. 2019 Toyota RAV4",
    detailTypeLabel: "What kind of detail?",
    detailTypes: ["Interior", "Exterior", "Full detail", "Not sure yet"],
    addOnsLabel: "Add-ons (optional)",
    // TODO: confirm Joey's actual add-on menu + pricing.
    addOns: [
      "Ceramic coating",
      "Paint correction",
      "Headlight restoration",
      "Pet hair removal",
      "Engine bay",
      "Steam clean",
      "Clay bar / decon",
      "Shampoo & extraction",
    ],
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
    // Short kicker shown above the CTA after the before/after slider.
    afterSliderKicker: "Want results like this on your car?",
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
    eyebrow: "Services & pricing",
    heading: "Everything we can do for your car.",
    sub: "From a quick maintenance wash to a full inside-and-out detail. Tap any service to see exactly what's included — and remember, we come to you.",
    detailIncludesHeading: "What's included",
    detailOtherHeading: "Other services",
    // Pricing placeholder until Joey gives final numbers. Shown on the services page.
    // TODO: replace with real package pricing (or a starting-price table).
    pricingNote:
      "Pricing depends on your vehicle's size and condition. Send a quick quote request and we'll text you a clear, upfront price — no surprises.",
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

  /* --- Nav (top-level pages) ---
   * `dropdown: "serviceAreas"` tells Header to render the city flyout from
   * site.serviceAreas (so the menu stays in sync with the areas list automatically).
   */
  nav: [
    { label: "Home", href: "/" },
    { label: "Service Areas", href: "/service-areas/", dropdown: "serviceAreas" as const },
    { label: "Services & Pricing", href: "/services/" },
    { label: "Gallery", href: "/gallery/" },
    { label: "About", href: "/about/" },
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
        title: "Detailing Services & Pricing — Jaws Auto Detailing | Southeast Michigan",
        description:
          "All of our mobile detailing services: full details, interior cleaning, hand waxing, clay bar, engine bay, and full body washes. We come to you across Southeast Michigan.",
      },
      serviceAreas: {
        path: "/service-areas/",
        title: "Service Areas — Jaws Auto Detailing | Mobile Detailing in SE Michigan",
        description:
          "Jaws Auto Detailing brings mobile car detailing to Ann Arbor, Ypsilanti, Saline, Canton, Plymouth, Belleville, and across Southeast Michigan. We come to you.",
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

/** Readonly service-area city (use for component props + the dynamic city route). */
export type ServiceAreaCity = (typeof site)["serviceAreas"][number];

/** Readonly homepage "pillar" service (hero cards + Popular Services). */
export type Pillar = (typeof site)["popular"]["pillars"][number];

/** Look up a service by its slug (used by the dynamic /services/<slug>/ route). */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return site.services.find((s) => s.slug === slug);
}

/** Look up a service area by its slug (used by the /service-areas/<slug>/ route). */
export function getServiceAreaBySlug(slug: string): ServiceAreaCity | undefined {
  return site.serviceAreas.find((a) => a.slug === slug);
}
