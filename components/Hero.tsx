import { Phone, Star } from "lucide-react";
import { site } from "@/site.config";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  const copy = site.hero[site.positioning];

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      {/* The car photo IS the thesis — full-bleed behind everything. */}
      <div className="absolute inset-0 -z-10">
        <ImagePlaceholder
          image={site.images.hero}
          sizes="100vw"
          priority
        />
        {/* Scrim: obsidian pooling up from the bottom so copy stays legible. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="container-page w-full pb-16 pt-28 sm:pb-24">
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
            <a href="#contact" className="btn-primary px-7 py-4 text-base">
              {copy.primaryCta}
            </a>
            <a
              href={site.business.phoneHref}
              className="btn-ghost px-7 py-4 text-base"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.business.phoneDisplay}
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-steel">
            <span className="inline-flex items-center gap-1.5 font-semibold text-bone">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-chrome text-chrome" />
                ))}
              </span>
              {site.trust.rating.toFixed(1)} on {site.trust.ratingSource}
            </span>
            {site.trust.points.slice(1).map((p) => (
              <span key={p} className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-chrome" aria-hidden="true" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
