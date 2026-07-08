import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceAreasGrid from "@/components/ServiceAreasGrid";
import CtaBand from "@/components/CtaBand";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("serviceAreas");

export default function ServiceAreasPage() {
  const { serviceAreasPage } = site;
  return (
    <>
      <PageHeader
        eyebrow={serviceAreasPage.eyebrow}
        title={serviceAreasPage.heading}
        sub={serviceAreasPage.sub}
      />
      <ServiceAreasGrid hideHeading />
      <CtaBand />
    </>
  );
}
