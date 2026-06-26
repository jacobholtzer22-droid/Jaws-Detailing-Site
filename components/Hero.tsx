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
      {/* The car photo IS the thesis — full-bleed behind everything. */}
      <div className="absolute inset-0 -z-10">
        <ImagePlaceholder image={site.images.hero} sizes="100vw" priority />
        {/* Scrim: obsidian pooling up from the bottom so copy stays legible. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
        {/* Top scrim keeps the transparent header legible over bright photos. */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent" />
      </div>

      <div className="container-page w-full pb-14 pt-28 sm:pb-16">
        <div className="max-w-2xl animate-fade-up">
          <p className="eyebrow mb-5">{copy.eyebrow}</p>

          <h1 className="h-display text-4xl text-bone sm:text-6xl lg:text-7xl">
            {copy.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-base text-steel-light sm:text-lg">
            {copy.sub}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={site.cta.href} className="btn-primary px-7 py-4 text-base">
              {copy.primaryCta}
            </a>
            <a href={site.business.phoneHref} className="btn-ghost px-7 py-4 text-base">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {copy.secondaryCta}
            </a>
          </div>

          {/* Trust strip — factual, no star ratings or review counts. */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-steel-light">
            {site.trust.points.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-chrome" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Three service cards directly under the hero (Interior / Exterior / Full). */}
        <ul className="mt-12 grid gap-3 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <li key={pillar.title}>
                <Link
                  href={pillar.href}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-ink/40 p-5 backdrop-blur transition-colors hover:border-chrome/50 hover:bg-ink/60"
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
