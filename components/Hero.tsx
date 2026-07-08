import Link from "next/link";
import { Phone, ArrowRight, Check } from "lucide-react";
import { site } from "@/site.config";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  const copy = site.hero[site.positioning];
  const { pillars } = site.popular;

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* The car photo IS the thesis — full-bleed behind everything.
          This background image is the LCP and is intentionally NOT animated. */}
      <div className="absolute inset-0 -z-10">
        <ImagePlaceholder image={site.images.hero} sizes="100vw" priority />
        {/* Scrim: obsidian pooling up from the bottom so copy stays legible. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
        {/* Top scrim keeps the transparent header legible over bright photos. */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent" />
      </div>

      {/* Text stagger starts at 0ms (headline paints immediately); the LCP is the
          background image above, so first contentful paint is never gated. */}
      <div className="container-page w-full pb-14 pt-28 sm:pb-16">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5 animate-fade-up" style={{ animationDelay: "0ms" }}>
            {copy.eyebrow}
          </p>

          <h1
            className="h-display animate-fade-up text-4xl text-bone sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0ms" }}
          >
            {copy.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-base text-steel-light sm:text-lg"
            style={{ animationDelay: "90ms" }}
          >
            {copy.sub}
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "150ms" }}
          >
            <a href={site.cta.href} className="btn-primary px-7 py-4 text-base">
              {copy.primaryCta}
            </a>
            <a href={site.business.phoneHref} className="btn-ghost px-7 py-4 text-base">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {copy.secondaryCta}
            </a>
          </div>

          {/* Trust strip — factual, no star ratings or review counts. Staggered in. */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-steel-light">
            {site.trust.points.map((p, i) => (
              <li
                key={p}
                className="inline-flex animate-fade-up items-center gap-2"
                style={{ animationDelay: `${210 + i * 40}ms` }}
              >
                <Check className="h-4 w-4 text-chrome" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Three service cards directly under the hero (Interior / Exterior / Full). */}
        <ul className="mt-12 grid gap-3 sm:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <li
                key={pillar.title}
                className="animate-fade-up"
                style={{ animationDelay: `${340 + i * 50}ms` }}
              >
                <Link
                  href={pillar.href}
                  className="group card-lift flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-ink/40 p-5 backdrop-blur hover:border-chrome/50 hover:bg-ink/60"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-chrome/15 text-chrome">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-bold uppercase tracking-tight text-bone">
                      {pillar.title}
                    </span>
                    <span className="mt-0.5 inline-flex items-center gap-1 text-xs font-semibold text-chrome">
                      See details
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
