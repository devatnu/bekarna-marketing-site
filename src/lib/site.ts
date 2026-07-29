/**
 * Single source of truth for the marketing site's identity and outbound links.
 *
 * bekarna.in (this site) and bekarna.app (the product) are deliberately separate
 * domains. Everything here feeds canonicals, sitemap, robots and JSON-LD, so the
 * two never compete for the same keywords — see src/lib/jsonld.ts.
 */

/** Canonical origin. Override per-environment; no trailing slash. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.bekarna.in"
).replace(/\/$/, "");

/** The product. Every CTA on this site points here. */
export const APP_URL = (
  process.env.NEXT_PUBLIC_APP_URL || "https://www.bekarna.app"
).replace(/\/$/, "");

export const SITE_NAME = "Be Karna";
export const SITE_TAGLINE = "Bharat ke Selfless Givers";

/** Default meta description — kept under ~155 chars so it isn't truncated. */
export const SITE_DESCRIPTION =
  "Donate to verified NGOs and religious institutions of all faiths in India. 95% reaches the cause, every rupee ledgered, instant 80G receipts.";

/** Social profiles, used for the Organization schema's sameAs. Add real ones. */
export const SOCIAL_LINKS: string[] = [
  // "https://www.instagram.com/bekarna",
  // "https://twitter.com/bekarna",
  // "https://www.linkedin.com/company/bekarna",
];

/** Platform economics, stated once and reused so the numbers can't drift. */
export const NGO_SHARE_PCT = 95;
export const PLATFORM_FEE_PCT = 5;

/** Absolute URL for a site-relative path (JSON-LD and OG tags need absolute). */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
