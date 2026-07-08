import Image from "next/image";
import { site } from "@/site.config";
import ScrollReveal from "./ScrollReveal";

/** Responsive 4:3 grid of finished-work photos (config: site.gallery.images). */
export default function Gallery() {
  return (
    <section className="band-wash bg-ink py-16 text-bone sm:py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.gallery.images.map((img, i) => (
            <ScrollReveal
              key={img.src}
              delay={Math.min(i, 8) * 45}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
