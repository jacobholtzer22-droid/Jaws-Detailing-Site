import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ServiceAreaDetail from "@/components/ServiceAreaDetail";
import CtaBand from "@/components/CtaBand";
import { site, getServiceAreaBySlug } from "@/site.config";

type Params = { params: { city: string } };

// Pre-render one static page per service-area city.
export function generateStaticParams() {
  return site.serviceAreas.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const city = getServiceAreaBySlug(params.city);
  if (!city) return {};
  const path = `/service-areas/${city.slug}/`;
  const title = `Mobile Detailing in ${city.name}, MI — ${site.seo.siteName}`;
  const description = `${city.blurb} ${site.business.name} brings full car detailing to ${city.name} and the surrounding area — we come to you.`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.seo.siteName,
      type: "website",
    },
  };
}

export default function ServiceAreaPage({ params }: Params) {
  const city = getServiceAreaBySlug(params.city);
  if (!city) notFound();
  return (
    <>
      <PageHeader
        eyebrow="Service area"
        title={`Mobile detailing in ${city.name}`}
        sub={city.blurb}
      />
      <ServiceAreaDetail city={city} />
      <CtaBand />
    </>
  );
}
