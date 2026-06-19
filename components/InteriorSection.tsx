import { Check } from "lucide-react";
import { site } from "@/site.config";
import ImagePlaceholder from "./ImagePlaceholder";

export default function InteriorSection() {
  const { interior } = site;

  return (
    <section className="bg-bone py-20 text-ink sm:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow mb-4 text-chrome-deep">{interior.eyebrow}</p>
          <h2 className="h-display text-3xl text-ink sm:text-4xl">
            {interior.heading}
          </h2>
          <p className="mt-4 max-w-md text-base text-ink/60">{interior.body}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {interior.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] text-ink/80">
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-chrome/20 text-chrome-dark"
                  aria-hidden="true"
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Interior photo — Chevy wheel + leather */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-ink/10 sm:aspect-[4/5]">
          <ImagePlaceholder
            image={site.images.interior}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
