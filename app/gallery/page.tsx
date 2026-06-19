import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("gallery");

export default function GalleryPage() {
  const { gallery } = site;
  return (
    <>
      <PageHeader
        eyebrow={gallery.eyebrow}
        title={gallery.heading}
        sub={gallery.sub}
      />
      <Gallery />
      <CtaBand />
    </>
  );
}
