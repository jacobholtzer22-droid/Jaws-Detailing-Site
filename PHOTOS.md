# Photos — Jaws Auto Detailing

Every image on the site is mapped to a **role** in `site.config.ts` under `images`.
Each role points at an optimized file in `/public/images`. To swap a photo, replace the
file (or add a new one and update the role's `src`) — **no component edits, ever.**

## Current photos (wired in June 2026)

| Role (`site.config.ts`) | File in `/public/images` | What it is | Source |
|---|---|---|---|
| `images.hero` | `hero-lexus.jpg` | Clean sage-green Lexus ES in a driveway (full-bleed hero) | IMG_0513 |
| `images.process` | `mobile-detailing.jpg` | Silver RAV4 being detailed on-site (How it works) | IMG_8771 |
| `images.interior` | `interior.jpg` | Clean black-leather interior + steering wheel | IMG_9252 |
| `images.beforeAfterBefore` | `before.jpg` | Same Kia Sorento cargo — dusty/dirty | IMG_2889 |
| `images.beforeAfterAfter` | `after.jpg` | Same Kia Sorento cargo — cleaned | IMG_2908 (child cropped out) |

The before/after pair is the **same vehicle, same framing** (cargo area), cropped to a
matched 16:9 so the slider wipe reads as a clean dirty→clean transformation.

## Originals

The raw camera files live in `/Jaws Detailing Photos/` (HEIC). That folder is **gitignored**
(it's ~40 MB and browsers can't display HEIC) — only the optimized `/public/images`
versions are committed and served.

## Re-processing a HEIC → web JPG

Browsers don't support HEIC, so convert + resize before use. On macOS:

```bash
# 1) decode HEIC → full-res JPG (sips ships with macOS)
sips -s format jpeg "Jaws Detailing Photos/IMG_XXXX.HEIC" --out /tmp/x.jpg
# 2) resize/crop with Python PIL, then save into public/images
python3 - <<'PY'
from PIL import Image
im = Image.open("/tmp/x.jpg")
im = im.resize((2000, round(im.height*2000/im.width)), Image.LANCZOS)
im.convert("RGB").save("public/images/new.jpg", "JPEG", quality=82, optimize=True, progressive=True)
PY
```

Then set the role's `src` in `site.config.ts` and update its `alt`.

## Tips

- Hero, process, and before/after read best as **landscape**; the interior section uses a
  4:3 landscape frame.
- For the before/after slider, shoot the **same car, same angle** dirty then clean.
- Keep long edge ~1800–2400px, JPEG quality ~80. `next/image` serves WebP automatically.
