import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { site } from "@/site.config";
import Section from "./Section";
import ImagePlaceholder from "./ImagePlaceholder";

type Props = {
  /** Show fewer cards (e.g. a home-page teaser). Omit to show all. */
  limit?: number;
  /** Hide the section heading when the page already has one. */
  hideHeading?: boolean;
};

/** Grid of service-area city cards, each linking to its /service-areas/<slug>/ page. */
export default function ServiceAreasGrid({ limit, hideHeading }: Props) {
  const { serviceAreas, serviceAreasPage } = site;
  const cities = typeof limit === "number" ? serviceAreas.slice(0, limit) : serviceAreas;
  const truncated = typeof limit === "number" && limit < serviceAreas.length;

  return (
    <Section id="service-areas" tone="bone">
      {!hideHeading && (
        <div className="max-w-2xl">
          <p className="eyebrow mb-4 text-chrome-deep">{serviceAreasPage.eyebrow}</p>
          <h2 className="h-display text-3xl text-ink sm:text-4xl">
            {serviceAreasPage.heading}
          </h2>
          <p className="mt-4 text-base text-ink/60">{serviceAreasPage.sub}</p>
        </div>
      )}

      <ul className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${hideHeading ? "" : "mt-12"}`}>
        {cities.map((city) => (
          <li key={city.slug}>
            <Link
              href={`/service-areas/${city.slug}/`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-colors hover:border-chrome/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImagePlaceholder
                  image={city.image}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-semibold text-bone backdrop-blur">
                  <MapPin className="h-3.5 w-3.5 text-chrome" aria-hidden="true" />
                  {city.name}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[15px] leading-relaxed text-ink/65">{city.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-chrome-deep">
                  Detailing in {city.name}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {truncated && (
        <div className="mt-10">
          <Link href="/service-areas/" className="btn-dark px-7 py-4 text-base">
            View all service areas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </Section>
  );
}
