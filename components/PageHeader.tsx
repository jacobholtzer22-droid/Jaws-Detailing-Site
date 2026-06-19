type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
};

/**
 * Top-of-page header for interior pages (About, Get a Quote).
 * pt clears the fixed site header; dark band keeps the cinematic spine.
 */
export default function PageHeader({ eyebrow, title, sub }: Props) {
  return (
    <section className="bg-ink pb-12 pt-28 text-bone sm:pb-16 sm:pt-36">
      <div className="container-page max-w-3xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="h-display text-4xl text-bone sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {sub ? (
          <p className="mt-5 max-w-xl text-base text-steel-light sm:text-lg">
            {sub}
          </p>
        ) : null}
      </div>
    </section>
  );
}
