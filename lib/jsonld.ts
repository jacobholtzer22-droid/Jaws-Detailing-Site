import { site } from "@/site.config";
import { DAY_ORDER, dayLabel } from "@/lib/format";

const base = site.seo.url.replace(/\/$/, "");

/**
 * LocalBusiness (AutoWash) structured data for a mobile, service-area detailer.
 * No storefront address — coverage is expressed via `areaServed`. Everything is
 * derived from site.config so it stays correct as the config changes.
 *
 * NOTE: `telephone` and `url` are only as accurate as the config — keep the real
 * phone + final domain in site.config before relying on this for SEO.
 */
export function businessJsonLd() {
  const openingHoursSpecification = DAY_ORDER.filter((key) => {
    const d = site.hours[key];
    return !d.closed && d.open && d.close;
  }).map((key) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: dayLabel(key),
    opens: site.hours[key].open,
    closes: site.hours[key].close,
  }));

  const areaServed = [
    { "@type": "AdministrativeArea", name: site.business.region },
    ...site.serviceAreas.map((c) => ({ "@type": "City", name: `${c.name}, MI` })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoWash"],
    "@id": `${base}/#business`,
    name: site.business.name,
    description: site.seo.pages.home.description,
    url: `${base}/`,
    telephone: site.business.phoneHref.replace("tel:", ""),
    image: site.images.hero.src ? `${base}${site.images.hero.src}` : undefined,
    priceRange: "$$",
    areaServed,
    openingHoursSpecification,
    ...(site.business.email ? { email: site.business.email } : {}),
  };
}

/** Breadcrumb trail for a service-area city page. */
export function cityBreadcrumbJsonLd(cityName: string, citySlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: `${base}/service-areas/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cityName,
        item: `${base}/service-areas/${citySlug}/`,
      },
    ],
  };
}

/** Render-ready <script> props for a JSON-LD object. */
export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
