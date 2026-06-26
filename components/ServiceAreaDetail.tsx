import Link from "next/link";
import { MapPin, ArrowRight, Check } from "lucide-react";
import { site, type ServiceAreaCity } from "@/site.config";
import ImagePlaceholder from "./ImagePlaceholder";

/** Body of a single /service-areas/<slug>/ page — unique copy per city. */
export default function ServiceAreaDetail({ city }: { city: ServiceAreaCity }) {
  const { popular, cta, business } = site;
  const nearby = site.serviceAreas.filter((c) => c.slug !== city.slug);

  return (
    <>
      {/* Intro + photo */}
      <section className="bg-bone py-16 text-ink sm:py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-lg leading-relaxed text-ink sm:text-xl">{city.intro}</p>

            {city.neighborhoods.length > 0 && (
              <>
                <h2 className="mt-8 text-xs font-semibold uppercase tracking-wider text-ink/50">
                  Areas we cover in {city.name}
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {city.neighborhoods.map((n) => (
                    <li
                      key={n}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white/60 px-3 py-1.5 text-sm font-medium text-ink/80"
                    >
                      <MapPin className="h-3.5 w-3.5 text-chrome-deep" aria-hidden="true" />
                      {n}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <a href={cta.href} className="btn-primary mt-8 px-7 py-4 text-base">
              {cta.label}
            </a>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10">
            <ImagePlaceholder image={city.image} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      {/* What we do here (the three pillars) */}
      <section className="bg-ink py-16 text-bone sm:py-20">
        <div className="container-page">
          <h2 className="h-display text-2xl text-bone sm:text-3xl">
            What we detail in {city.name}.
          </h2>
          <ul className="mt-8 grid gap-5 lg:grid-cols-3">
            {popular.pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <li key={pillar.number}>
                  <Link
                    href={pillar.href}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-panel-dark p-6 transition-colors hover:border-chrome/50"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-chrome/15 text-chrome">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-bone">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-steel-light">
                      {pillar.blurb}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-steel-light">
            {site.trust.points.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-chrome" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="bg-bone py-16 text-ink sm:py-20">
        <div className="container-page">
          <h2 className="h-display text-2xl text-ink sm:text-3xl">
            We also come to nearby towns.
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {nearby.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/service-areas/${c.slug}/`}
                  className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-[15px] font-medium text-ink transition-colors hover:border-chrome/40 hover:text-chrome-deep"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-chrome-deep" aria-hidden="true" />
                  {c.name}
                  <ArrowRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-xl text-base text-ink/60">
            Don&apos;t see your town? We cover most of {business.region} —{" "}
            <a href={business.phoneHref} className="font-semibold text-chrome-deep underline underline-offset-2">
              just ask
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
