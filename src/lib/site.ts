/** Single source of truth for names and URLs used across metadata and markup. */

export const SITE_NAME = "Be Karna";

/** This site, on the apex. www.bekarna.app 301s here, so the apex is canonical
 *  and is what sitemap/robots/OG must advertise. */
export const SITE_URL = "https://bekarna.app";

/**
 * The link-preview card, served from this origin at /og-card.png.
 *
 * The site previously declared no `og:image` at all, so every share of
 * bekarna.app - WhatsApp, X, LinkedIn - rendered as bare text with no picture.
 *
 * The same artwork the app uses (it is byte-identical to `og/share-card.png` on
 * R2), but committed here and served same-origin rather than referenced across
 * hosts: a link preview should not depend on a second origin being reachable at
 * the moment a crawler happens to look.
 *
 * 744x390. Above Facebook's 600x315 threshold for a full-width card, so it
 * renders large, though below the documented 1200x630 ideal - a re-export from
 * the design source at 1200x630 is the only thing that would genuinely sharpen
 * it. Upscaling the raster would add no detail.
 */
export const SITE_OG_IMAGE = "/og-card.png";
export const SITE_OG_IMAGE_SIZE = { width: 744, height: 390 } as const;

/** The product, on the `my.` subdomain. Every call to action on this site
 *  points here - nowhere else. */
export const APP_URL = "https://my.bekarna.app";

export const SITE_TAGLINE = "Give directly. See where it goes.";

export const SITE_DESCRIPTION =
  "Give to verified NGOs and religious institutions across India. Your money goes straight to the initiative you chose, every rupee is on the ledger, and your 80G receipt is instant.";

/**
 * Section anchors - shared by the header nav and the sections themselves so the two
 * can never drift apart.
 *
 * Root-relative (`/#ngos`), NOT bare fragments (`#ngos`). A bare fragment resolves
 * against whatever page you are already on, so from /terms these became /terms#ngos -
 * a target that does not exist, so the click did nothing at all. The header and footer
 * render on every page, including the seven legal ones, so their links have to name
 * the page as well as the section.
 */
export const NAV_LINKS = [
  { href: "/#ngos", label: "NGOs" },
  { href: "/#verification", label: "Verification" },
  { href: "/#initiatives", label: "Initiatives" },
  { href: "/#passbook", label: "Passbook" },
  { href: "/#faq", label: "FAQ" },
] as const;
