import { ArrowRight } from "lucide-react";
import type { Site } from "@/site.config";
import { site } from "@/site.config";
import ImagePlaceholder from "./ImagePlaceholder";
import ScrollReveal from "./ScrollReveal";

type Feature = Site["features"][number];

/**
 * Alternating image + text feature band. `feature.imageSide` decides which side
 * the photo sits on; on mobile the photo always stacks on top.
 */
export default function FeatureSection({ feature }: { feature: Feature }) {
  const imageRight = feature.imageSide === "right";

  return (
    <section className="bg-bone py-20 text-ink sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className={imageRight ? "lg:order-first" : "lg:order-last"}>
          <p className="eyebrow mb-4 text-chrome-deep">{feature.eyebrow}</p>
          <h2 className="h-display text-3xl text-ink sm:text-4xl">
            {feature.heading}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
            {feature.body}
          </p>
          <a href={site.cta.href} className="btn-dark mt-7 px-7 py-4 text-base">
            {feature.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </ScrollReveal>

        <ScrollReveal
          delay={80}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 shadow-card"
        >
          <ImagePlaceholder
            image={feature.image}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
