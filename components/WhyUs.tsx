import { Check } from "lucide-react";
import { site } from "@/site.config";
import ImagePlaceholder from "./ImagePlaceholder";

/** "The difference" — real trust signals (no awards, no review counts). */
export default function WhyUs() {
  const { whyUs } = site;

  return (
    <section id="why-us" className="bg-ink py-20 text-bone sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-last aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 lg:order-first">
          <ImagePlaceholder
            image={whyUs.image}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div>
          <p className="eyebrow mb-4">{whyUs.eyebrow}</p>
          <h2 className="h-display text-3xl text-bone sm:text-4xl">
            {whyUs.heading}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-steel-light">
            {whyUs.body}
          </p>

          <ul className="mt-8 space-y-3">
            {whyUs.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] text-bone/90">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-chrome/20 text-chrome"
                  aria-hidden="true"
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
