# bekarna.app — marketing site

Static marketing site for **Be Karna**, an Indian donation platform, served at
the apex **bekarna.app**. The product itself lives in a separate repo
(`~/karna_bharat`) and is served at **my.bekarna.app**; this site's only job
is to explain Be Karna and send people there.

## Current state: blank canvas

The v1 brochure site was deleted on 2026-08-01 to make room for a new design
direction. All that remains is the Next.js app shell, the Tailwind entry point,
and the Cloudflare deploy config. v1 is in git history (`git show ec8c8ac`) if
you ever need to look, but it's discarded, not a reference.

Product knowledge, tone rules and the constraints that survive any redesign are
in [`CLAUDE.md`](./CLAUDE.md).

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/ — every route must be ○ (Static)
npm run preview    # build, then serve out/ through wrangler locally
npm run deploy     # build, then push out/ to Cloudflare
```

Node ≥ 22 (wrangler requires it).

## Stack

- **Next.js 16** in `output: "export"` mode — pure static HTML/CSS/JS, no server,
  no cold starts.
- **Tailwind v4**, configured in CSS (`src/app/globals.css`), no JS config file.
- **Cloudflare Workers static assets**, pinned by `wrangler.jsonc`. Don't delete
  that file — see CLAUDE.md for the failure mode it prevents.
- Cache and security headers live in `public/_headers`, copied verbatim into
  `out/` at build time.

## Before anything ships

Nothing about an organisation, a verification claim, or a percentage figure goes
on this site until Nishant confirms it. Listing an org on a page that claims
verification asserts that org passed those checks.
