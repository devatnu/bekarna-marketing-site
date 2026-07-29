@AGENTS.md

# Project facts (Be Karna marketing site)

Static SEO brochure site for **bekarna.in**. Separate project from the product app
(`~/karna_bharat`, which serves bekarna.app). Keep this list short — it loads
every turn. Full detail is in `README.md`.

## Hard rules
- **No client components.** There is no `"use client"` anywhere and it should stay
  that way — the marquee, page transitions, FAQ and progress bars are all CSS or
  native HTML. Reach for JS only if there's no other way.
- **Every route must build as `○ (Static)`.** If `npm run build` shows
  `ƒ (Dynamic)`, a request-time API leaked in and SEO regressed.
- **Every CTA points to bekarna.app** via `<AppCta />`. One action per page, no
  competing CTAs.
- **No DB, no CMS.** Content is `src/data/partners.ts` — an array of objects.

## SEO gotcha that bites silently
Next **replaces** (not deep-merges) a page's `openGraph`/`twitter` metadata
objects. Writing `openGraph: { title }` on a page drops the root's `type`,
`siteName`, `locale`; `twitter: { title }` drops `card` and the preview degrades
to a small `summary` card — with no error. Always build page metadata through
`pageMetadata()` in `src/lib/seo.ts`.

## Content is placeholder
`PARTNERS`, `INITIATIVES` and `SCALE` in `src/data/partners.ts` are illustrative,
not real. The `/partners` page makes verification claims, so listing an org there
asserts it passed those checks. See the pre-launch checklist in `README.md`.

## Design
- Type is **Bricolage Grotesque + Inter**, matching the product app. The original
  brief specified Fraunces; overridden deliberately for brand continuity.
- Tokens live in `src/app/globals.css` (`@theme` + `t-*` classes). Colours: ink
  `#2B312D`, green `#58A870`, accent `#3FAE7E`, mint `#DCF2E7`. Green sparingly.
- `cn()` (`src/lib/cn.ts`) is a plain joiner, **not** tailwind-merge — later
  classes don't override earlier ones.
- Press states, not hover. Visible focus rings. Respect `prefers-reduced-motion`.

## Fonts appear twice, on purpose
`next/font/google` self-hosts Bricolage + Inter for the site CSS. `public/fonts/`
holds separate `.woff` copies because `opengraph-image.tsx` renders through satori,
which needs raw font bytes and **cannot read woff2**. Don't delete either set.
