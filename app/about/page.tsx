import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutSections from "@/components/AboutSections";
import CtaBand from "@/components/CtaBand";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("about");

export default function AboutPage() {
  const { about } = site;
  return (
    <>
      <PageHeader eyebrow={about.eyebrow} title={about.heading} />
      <AboutSections />
      <CtaBand />
    </>
  );
}
