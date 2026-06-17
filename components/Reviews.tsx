import { Star, Quote } from "lucide-react";
import { site } from "@/site.config";

export default function Reviews() {
  const { reviews } = site;

  return (
    <section id="reviews" className="bg-ink py-20 text-bone sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">Reviews</p>
          <h2 className="h-display text-3xl text-bone sm:text-4xl">
            Rated {reviews.rating.toFixed(1)} on {reviews.source}.
          </h2>
          <div
            className="mt-5 flex items-center justify-center gap-1"
            aria-label={`${reviews.rating.toFixed(1)} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-chrome text-chrome" aria-hidden="true" />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {reviews.quotes.map((review, i) => {
            const hasQuote = review.quote.trim().length > 0;
            return (
              <figure
                key={i}
                className="flex flex-col rounded-2xl border border-white/10 bg-panel p-7"
              >
                <Quote
                  className="h-7 w-7 text-chrome/70"
                  aria-hidden="true"
                />
                {hasQuote ? (
                  <>
                    <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-bone">
                      “{review.quote}”
                    </blockquote>
                    <figcaption className="mt-5 text-sm font-semibold text-steel-light">
                      {review.author}
                      {review.context ? (
                        <span className="font-normal text-steel">
                          {" "}
                          · {review.context}
                        </span>
                      ) : null}
                    </figcaption>
                  </>
                ) : (
                  /* Placeholder — paste a real Google review here, do not invent. */
                  <div className="mt-4 flex flex-1 flex-col justify-center rounded-xl border border-dashed border-steel/30 p-6 text-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-steel">
                      Review quote {i + 1}
                    </span>
                    <span className="mt-1 text-xs text-steel/70">
                      Add a real {reviews.source} review in site.config.ts
                    </span>
                  </div>
                )}
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
