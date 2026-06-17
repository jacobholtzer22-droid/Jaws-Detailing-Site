# Photos — Jaws Auto Detailing

Every image on the site is mapped to a **role** in `site.config.ts` under `images`.
Until a role has a real `src`, the site shows a clearly-labeled placeholder. To swap
in a real photo, drop the file in `/public/images` and set its `src` — **no component
edits, ever.**

## Roles to fill

| Role (in `site.config.ts`) | What goes here | Suggested file |
|---|---|---|
| `images.hero` | The strongest shot — the dark Lexus sedan. Full-bleed hero. | `/images/hero-lexus.jpg` |
| `images.process` | SUV being washed in a driveway (the "we come to you" proof). | `/images/suv-driveway-wash.jpg` |
| `images.interior` | Chevy interior — wheel + leather. Interior-detailing block. | `/images/chevy-interior.jpg` |
| `images.beforeAfterBefore` | "Before" — a dirty panel. Same car/angle as the After. | `/images/before.jpg` |
| `images.beforeAfterAfter` | "After" — the finished, glossy panel. Same car/angle as Before. | `/images/after.jpg` |

## How to swap one in

1. Save the photo into `/public/images/` (e.g. `hero-lexus.jpg`).
2. Open `site.config.ts`, find the matching role, set `src: "/images/hero-lexus.jpg"`.
3. Confirm the `alt` text still describes the actual photo (it should — written per role).

## Tips

- Hero + before/after read best as **landscape** crops; the interior shot works as a
  portrait/square. The components already use sensible aspect ratios.
- For the before/after slider to land, shoot the **same car, same angle** dirty then clean.
- Keep files reasonably sized (long edge ~2000px, JPG/WebP). `next/image` handles the rest.
