/** Single source of truth for names and URLs used across metadata and markup. */

export const SITE_NAME = "Be Karna";
export const SITE_URL = "https://bekarna.in";

/** The product. Every call to action on this site points here - nowhere else. */
export const APP_URL = "https://bekarna.app";

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
