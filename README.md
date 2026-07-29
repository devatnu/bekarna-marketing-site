# Be Karna — marketing site (bekarna.in)

A static, SEO-first brochure site for Be Karna. Its only jobs: explain what Be
Karna is, build credibility, and send people to the product at **bekarna.app**.

No giving flows, no passbook, no auth, no database. Content lives in
`src/data/partners.ts`.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4

```bash
npm run dev     # http://localhost:3000
npm run build   # every route must report ○ (Static); writes out/
npm run lint

npx serve out   # preview the exact files that get deployed
```

---

## Hosting

`next.config.ts` sets `output: "export"`, so `npm run build` produces **`out/` —
plain static files, no Node server anywhere**. This is deliberate: a CDN has
nothing to wake up, so the cold-start delay that affects container hosts cannot
happen here by construction.

**Deploy target: Cloudflare Workers static assets.** Build command
`npm run build`, deploy command `npx wrangler deploy`. Set
`NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_APP_URL` as build env vars.

### `wrangler.jsonc` is load-bearing — do not delete it

Without a committed wrangler config, `wrangler deploy` detects
`Framework: Next.js`, assumes a server-rendered app, and auto-installs the
**OpenNext** adapter. That then fails with:

```
ENOENT: .next/standalone/.next/server/pages-manifest.json
```

…because `output: "export"` never produces `.next/standalone`. The build itself
succeeds; only the deploy dies, which makes it a confusing failure. `wrangler.jsonc`
declares `assets.directory: "./out"` with **no `main`**, so nothing executes per
request and the framework detection never runs.

Wrangler requires **Node ≥ 22** (`engines` reflects this). Node 20 refuses to run
it, so a local `npm run deploy` needs a 22.x on PATH.

Chosen because the DNS for these domains is already on Cloudflare (no new vendor,
custom domain is a click), its free tier permits commercial use with unlimited
bandwidth, it has more Indian PoPs than the alternatives — which matters for the
Core Web Vitals that feed ranking — and it honours the `_headers` file below.

**Do not host this on a container platform** (Railway, Render, Fly). You'd pay for
an always-on server to hand over 1.8 MB of static files, and reintroduce exactly
the cold-start problem this setup avoids.

### `public/_headers` is load-bearing

Next's static export writes the OG card as an **extensionless** file called
`opengraph-image`. A static host has nothing to infer a MIME type from, serves it
as `application/octet-stream`, and WhatsApp, X and LinkedIn then refuse to render
the preview — silently, with no error anywhere. `public/_headers` declares
`Content-Type: image/png` for it, and also sets immutable caching for hashed
assets plus the security headers.

Cloudflare honours `_headers` on Workers static assets as well as Pages — wrangler
treats it as a config metafile and excludes it from the served output. **On any
other host you must re-express those rules** in whatever form it accepts, or
social previews break.

### What `output: "export"` gives up

No middleware, no route handlers, no ISR/on-demand revalidation, and no
`next/image` optimisation (hence `images: { unoptimized: true }`). None of it is
used or wanted here. If a genuinely dynamic route ever becomes necessary, remove
`output` and move to a host that runs the Next server.

Two build-time exports exist only to satisfy `output: "export"` —
`export const dynamic = "force-static"` in `sitemap.ts`, `robots.ts` and
`opengraph-image.tsx`. Without them the build fails outright.

---

## Before this goes live

These are placeholders. Shipping them as-is would put unverifiable claims on a
site whose entire pitch is verifiability.

- [ ] **Replace every entry in `src/data/partners.ts`.** `PARTNERS` and
      `INITIATIVES` are illustrative. Listing an organisation here asserts it
      passed the checks described on `/partners` — only add real, verified orgs.
- [ ] **Replace `SCALE`** (givers, organisations, total given, states) with
      audited numbers. This is the section most likely to be quoted back at you.
- [ ] **Add real logos** to `public/partners/<slug>.svg` and set `hasLogo: true`.
      Until then a text wordmark renders, which looks intentional and is honest.
- [ ] **Fill in `SOCIAL_LINKS`** in `src/lib/site.ts` — it becomes the
      Organization schema's `sameAs`, which is how search engines tie the domain
      to your verified profiles.
- [ ] **Confirm the 95/5 split and ₹100 minimum** still match the product, then
      check `NGO_SHARE_PCT` / `PLATFORM_FEE_PCT` in `src/lib/site.ts` and the FAQ
      copy in `src/components/Faq.tsx`.
- [ ] Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_APP_URL` in the host's env if
      the domains ever differ from the defaults.

---

## How the SEO is set up

Everything is static. `npm run build` must show `○ (Static)` for every route — if
anything flips to `ƒ (Dynamic)`, a request-time API crept in and the page is no
longer prerendered.

| Concern | Where | Note |
| --- | --- | --- |
| Titles, descriptions, canonicals, OG/Twitter | `src/lib/seo.ts` → `pageMetadata()` | See the trap below |
| Structured data (JSON-LD) | `src/lib/jsonld.ts` + `src/components/JsonLdScript.tsx` | Server-rendered, so crawlers that don't run JS still see it |
| Social share card | `src/app/opengraph-image.tsx` | One card for the whole site, rendered at build |
| `sitemap.xml` / `robots.txt` | `src/app/sitemap.ts` / `src/app/robots.ts` | Only canonical, indexable URLs belong in the sitemap |
| Fonts | `src/app/layout.tsx` via `next/font/google` | Self-hosted at build, `display: swap`, size-adjust fallbacks → CLS 0 |

### The metadata trap worth knowing

Next **replaces** a page's `openGraph` and `twitter` objects rather than
deep-merging them with the root layout's. A page declaring
`openGraph: { title, description }` silently drops the root's `type`,
`siteName` and `locale`; one declaring `twitter: { title }` drops `card` and the
preview degrades to a small `summary` card. Nothing errors — the tags just go
missing.

That's why every page builds its social tags through `pageMetadata()` instead of
writing `metadata` by hand. `og:image` is the one exception: the app-root
`opengraph-image.tsx` file convention is merged in separately by Next.

### Structured data emitted

- Site-wide (`layout.tsx`): `Organization`, `WebSite`
- Landing: `WebPage`, `Service`, `FAQPage` — the FAQ schema is generated from the
  same `FAQS` array the visible `<details>` list renders, so markup and schema
  can't drift apart
- `/partners`: `WebPage`, `ItemList` of `NGO`, `ItemList` of `DonateAction`

### Canonical split between the two domains

`bekarna.in` (this site) and `bekarna.app` (the product) are separate
properties. This site canonicalises only its own URLs and never claims the app's,
so the two don't compete for the same keywords. CTAs link out with
`rel="noopener"` and deliberately **not** `nofollow` — link equity should flow to
the product.

Search Console needs both domains registered separately.

---

## Zero client JavaScript

There are no `"use client"` components. Consequences worth knowing:

- The **logo marquee** is pure CSS (`.karna-marquee` in `globals.css`). The track
  holds the list twice and translates exactly `-50%`, so the loop is seamless.
  The duplicate is `aria-hidden`, so screen readers and crawlers read each
  organisation once. It pauses on press and on `focus-within`.
- **Page transitions** use the native `@view-transition` CSS rule — the brief's
  horizontal slide with no JS. Browsers without support cut instantly, which is a
  fine fallback. (Firefox support for cross-document view transitions is still
  limited.)
- The **FAQ** is native `<details>`, so collapsed answers are still in the HTML
  and still indexed.
- **Progress bars** are real `<progress>` elements, so the value is exposed to
  assistive tech rather than implied by a coloured div.

One honest caveat: even with zero client components, the App Router still ships
~185 KB gzipped of React/Next runtime. Every script tag is `async` so nothing
blocks render, and there's no hydration work beyond the shell — but if squeezing
that baseline toward zero ever matters more than staying on Next, a static-first
framework is the tool for that job. The brief specified Next 16, so this is a
tradeoff, not a defect.

---

## Design language

Mirrors the product app so the two domains read as one brand.

- **Colours:** ink `#2B312D`, green `#58A870`, accent `#3FAE7E`, mint `#DCF2E7`.
  Green is used sparingly — "green as spice", not green everywhere.
- **Type:** Bricolage Grotesque (display) + Inter (body). **The brief specified
  Fraunces**; Bricolage was chosen instead so bekarna.in and bekarna.app share a
  typeface. Deliberate deviation.
- **Tokens:** `t-display` / `t-h1` / `t-h2` / `t-h3` / `t-body` / `t-body-lg` /
  `t-caption` / `t-label`, defined in `globals.css`.
- **Interaction:** press states, never hover-only. Visible keyboard focus
  everywhere. All motion respects `prefers-reduced-motion`.
- **No stock-charity clichés** — no cupped hands, no sad-child imagery.
  Credibility comes from specifics, not emotional pressure.
- `cn()` in `src/lib/cn.ts` is a plain class **joiner, not tailwind-merge** —
  later classes do *not* override earlier ones. Don't rely on override order.

---

## Off-page SEO (the part code can't do)

On-page is as clean as it gets here, but ranking for competitive terms like
"donate India" or "NGO donation" depends on backlinks and domain authority. The
cheapest early win: **ask partner NGOs to link to bekarna.in from their own
sites.** A handful of genuine links from .org domains in the sector is worth more
than any further on-page tuning.
