/** Single source of truth for names and URLs used across metadata and markup. */

export const SITE_NAME = "Be Karna";

/** This site, on the apex. www.bekarna.app 301s here, so the apex is canonical
 *  and is what sitemap/robots/OG must advertise. */
export const SITE_URL = "https://bekarna.app";

/** The product, on the `my.` subdomain. Every call to action on this site
 *  points here - nowhere else. */
export const APP_URL = "https://my.bekarna.app";

export const SITE_TAGLINE = "Give directly. See where it goes.";

export const SITE_DESCRIPTION =
  "Give to verified NGOs and religious institutions across India. Your money goes straight to the initiative you chose, every rupee is on the ledger, and your 80G receipt is instant.";

/** Section anchors - shared by the header nav and the sections themselves so
 *  the two can never drift apart. */
export const NAV_LINKS = [
  { href: "#ngos", label: "NGOs" },
  { href: "#verification", label: "Verification" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#passbook", label: "Passbook" },
  { href: "#faq", label: "FAQ" },
] as const;
