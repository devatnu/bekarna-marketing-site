@AGENTS.md

# Be Karna — marketing site

Static marketing site for **bekarna.in**. Separate project from the product app
(`~/karna_bharat`, which serves **bekarna.app**).

> **State: v3, built to Nishant's spoken spec (2026-08-01).** A single scrolling
> homepage, in this order:
>
> 1. Hero — full-bleed backdrop photo, title + rotating gradient tagline, one CTA
> 2. Stats — the trio, immediately after the fold
> 3. **India's Most Trusted NGOs** — 12 logo slots at uneven sizes fading in and
>    out, then "120+ more"
> 4. Initiatives — auto-scrolling carousel, each card one image + title
> 5. Passbook — rupees animating from you → directly → the NGO
> 6. Receipt — the funded / 80G card (the one real image on the page)
> 7. Gallery — masonry wall of initiative photos
>
> The persistent CTA is **pinned to the bottom of the viewport** (`StickyCta`),
> not in the header. The header has the logo and anchors only.
>
> **The earlier eight-beat narrative sections are hidden, not deleted** —
> `Tension`, `DirectGiving`, `Ledger`, `Trust`, `Scale`, `TaxBenefit`,
> `ClosingCta` still exist in `src/components/sections/` and just aren't
> imported by `page.tsx`.
>
> **duna.com was the earlier reference and no longer drives the structure.**
> Note it can only be read as text here — a markdown fetch strips its layout,
> imagery and motion, which is how its animated logo marquee got missed. Don't
> claim a visual match to it without actual screenshots.
>
> **Every image except the receipt is a labelled placeholder.** Each states what
> should be shot and at what aspect ratio; swap in a real image at the *same*
> ratio and nothing reflows.
>
> **The palette is provisional** — it gets re-synced with the product design
> system later. All of it is in the `@theme` block in `globals.css`; never write
> a literal colour in a component.

## The product (this is the part that matters)

Be Karna is an Indian donation platform. A donor gives money; a **verified**
organisation receives it.

- **Who receives** — NGOs *and* religious institutions, explicitly **of all
  faiths**. Faith-neutral is a positioning choice, not an accident.
- **The claims v1 made** (verify each is still true before publishing again):
  95% of every donation reaches the organisation · every rupee is ledgered ·
  80G tax-deductible receipts are instant.
- **Trust is the product.** Verification, where the money goes, and proof of
  scale are the substance — not decoration around a donate button.
- **Content shapes** — an *organisation* has a name, city/state, and a cause. An
  *initiative* has a title, the org running it, one plain sentence on what the
  money does, and a goal + raised amount in whole rupees.
- **Tone: no urgency, no guilt.** No countdown timers, no "only 3 hours left",
  no distress imagery framed to pressure. Plain sentences.
- **Every CTA goes to bekarna.app.** The site's only job is to send a convinced
  person to the app. One action per page.
- **Any org or initiative content is placeholder until Nishant confirms it.**
  Naming an org on a page that claims verification asserts that org passed those
  checks. Never invent a partner.

## Hard constraints (these survive any redesign)

- **Static export.** `next.config.ts` sets `output: "export"`. Every route must
  build as `○ (Static)`; an `ƒ (Dynamic)` means a request-time API leaked in.
- **No DB, no CMS.** Content lives in typed files in the repo.
- **Prefer zero client components.** v1 had no `"use client"` at all — marquee,
  transitions, FAQ and progress bars were CSS or native HTML. Keep that bar
  high; reach for JS only when there's genuinely no other way.
- **Never delete `wrangler.jsonc`.** It pins the deploy to static assets
  (`assets.directory: "./out"`, no `main`). Without it `wrangler deploy` detects
  Next.js, auto-installs the OpenNext adapter and dies on
  `ENOENT .next/standalone/.next/server/pages-manifest.json` — a file
  `output: "export"` never emits. `next build` succeeds either way, so the
  failure looks unrelated to the cause. Wrangler needs Node ≥ 22.

## SEO gotcha that bites silently

Next **replaces** — does not deep-merge — a page's `openGraph`/`twitter`
metadata objects. Writing `openGraph: { title }` on a page drops the root's
`type`, `siteName` and `locale`; `twitter: { title }` drops `card`, and the
preview silently degrades to a small `summary` card. When page-level metadata
comes back, funnel it through one helper rather than hand-writing it per page.

## Design

- Reference is **duna.com** for structure and rhythm — not for its palette.
- Type is **Bricolage Grotesque + Inter**, matching the product app. The original
  brief said Fraunces; overridden deliberately for brand continuity.
- **Everything fluid.** Type, gutters and section padding are all `clamp()`.
  Duna is exceptionally good on mobile and that's the bar — the page has to look
  *composed* at 360px, not merely unbroken.
- Marigold is reserved for numbers and highlights. Green is the CTA colour and
  stays sparing. Exactly one dark section (the ledger), because it's the claim
  the site rests on.
- Press states rather than hover — `:hover` misfires on touch. Visible focus
  rings. `prefers-reduced-motion` handled in `globals.css`.
- v1's failure was reading **text-heavy**; every section now leads with or pairs
  to an image slot.

## Brand assets

`public/brand/lotus-green.png` (pale backgrounds) and `lotus-white.png` (dark
sections) are the Be Karna lotus, used via `<LotusMark>` / `<Wordmark>` in
`src/components/ui/Logo.tsx`.

They were derived from `~/Downloads/be_karna_assets/logo_{light,dark}.png`,
which are 3200px and **fully opaque** — backgrounds baked in (`#ffffff` and
`#2B312D`). Those originals can't be dropped into the header directly: the
opaque square blocks the sticky header's backdrop blur, and `#2B312D` doesn't
match our `green-deep`. The shipped files were un-matted to real alpha and
resized to 256px (159KB → 10KB). Re-derive with the same solve if the source
artwork changes; don't just copy the originals in.

`--color-green` is sampled from the lotus so the mark and the CTAs match.

`public/fonts/` holds raw `.woff` copies of Bricolage + Inter. They exist
because satori (used by `opengraph-image`) can't read woff2 — unused right now,
kept for when the OG image comes back.
