"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { site } from "@/site.config";
import type { SiteImage } from "@/site.config";

/** One comparison layer: real photo when src is set, else a tinted demo panel. */
function Layer({
  image,
  tint,
}: {
  image: SiteImage;
  tint: "before" | "after";
}) {
  if (image.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 900px, 100vw"
        className="object-cover"
        draggable={false}
      />
    );
  }
  // Placeholder so the slider is legible before real photos arrive.
  const styles =
    tint === "before"
      ? "bg-panel-dark text-steel"
      : "bg-[#2A0E12] text-chrome-light";
  return (
    <div
      role="img"
      aria-label={image.alt}
      className={`flex h-full w-full items-center justify-center ${styles}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 14px, transparent 14px 28px)",
      }}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em]">
        {tint === "before" ? "Dirty" : "Detailed"}
      </span>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const { beforeAfter, images } = site;
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  return (
    <section id="before-after" className="bg-ink py-20 text-bone sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-4">{beforeAfter.eyebrow}</p>
          <h2 className="h-display text-3xl text-bone sm:text-4xl">
            {beforeAfter.heading}
          </h2>
          <p className="mt-4 text-base text-steel-light">{beforeAfter.sub}</p>
        </div>

        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="relative mx-auto mt-12 aspect-[16/10] w-full max-w-4xl touch-none select-none overflow-hidden rounded-2xl border border-white/10 sm:aspect-[16/9]"
        >
          {/* Base layer: AFTER (detailed), always full — shows on the right */}
          <div className="absolute inset-0">
            <Layer image={images.beforeAfterAfter} tint="after" />
          </div>

          {/* Overlay: BEFORE (dirty), clipped from the left up to `pos` */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Layer image={images.beforeAfterBefore} tint="before" />
          </div>

          {/* Corner labels — before on the left, after on the right */}
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-steel-light backdrop-blur">
            {beforeAfter.beforeLabel}
          </span>
          <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-ink/75 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-chrome backdrop-blur">
            {beforeAfter.afterLabel}
          </span>

          {/* Chrome seam + handle */}
          <div
            className="pointer-events-none absolute inset-y-0"
            style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-chrome" />
            <button
              type="button"
              role="slider"
              aria-label="Drag to compare before (left) and after (right)"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              aria-valuetext={`${Math.round(pos)}% before, ${100 - Math.round(pos)}% after`}
              onKeyDown={onKeyDown}
              className="pointer-events-auto absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-chrome bg-ink text-chrome shadow-lg"
            >
              <MoveHorizontal className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-steel">
          Drag the handle, or focus it and use the arrow keys.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="font-display text-base font-semibold uppercase tracking-wide text-bone">
            {site.cta.afterSliderKicker}
          </p>
          <a href={site.cta.href} className="btn-primary px-7 py-4 text-base">
            {site.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
