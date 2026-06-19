import type { MetadataRoute } from "next";
import { site } from "@/site.config";

const base = site.seo.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(site.seo.pages).map((page) => ({
    url: `${base}${page.path}`,
    changeFrequency: "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
