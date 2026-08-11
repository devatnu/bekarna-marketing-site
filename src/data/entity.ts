/**
 * The legal identity of the entity behind Be Karna.
 *
 * Single source for every value that appears in the legal documents, the footer,
 * /contact and /grievance. It is one file on purpose: these values arrive from the
 * LLP incorporation certificate and the GST registration, and when they change
 * they must change everywhere at once.
 *
 * ⚠️ Values marked TBC are PLACEHOLDERS and render as a visible marker on the
 * page rather than silently as an empty string — a legal document with a blank
 * where the registered address should be is worse than one that says the address
 * is pending, because nobody notices the blank.
 *
 * The app repo has a mirror of this at src/lib/legal.ts. Keep them in step.
 */

/** Marker for a value not yet supplied. */
export const TBC = "TBC";

export const ENTITY = {
  /** Registered name, exactly as on the LLP incorporation certificate. */
  legalName: "BeKarna Innovations LLP",
  /** Consumer-facing brand. */
  brandName: "Be Karna",
  /** LLP Identification Number. */
  llpin: TBC,
  /** Permanent Account Number of the LLP. */
  pan: TBC,
  /** GSTIN, or null where the LLP is not yet registered. */
  gstin: null as string | null,
  /** Registered office, one line per entry, as on the certificate. */
  registeredOffice: [TBC],
  /** City whose courts have jurisdiction — normally the registered office. */
  jurisdictionCity: TBC,
  /** Date of incorporation, for the terms. */
  incorporatedOn: TBC,
} as const;

export const CONTACT = {
  /** Monitored inbox. Gateways will not accept a contact form alone. */
  supportEmail: TBC,
  /** Working telephone number. */
  supportPhone: TBC,
  /** Where an NGO or institution applies to be listed. */
  partnersEmail: TBC,
  /** Privacy and data-protection queries. */
  privacyEmail: TBC,
} as const;

/**
 * Grievance Officer under the Information Technology (Intermediary Guidelines and
 * Digital Media Ethics Code) Rules, 2021.
 *
 * Must be a NAMED INDIVIDUAL with a reachable email and postal address. A shared
 * support inbox does not satisfy rule 3(2), and the published contact has to
 * acknowledge a complaint within 24 hours and resolve it within 15 days.
 */
export const GRIEVANCE_OFFICER = {
  name: TBC,
  designation: TBC,
  email: TBC,
  phone: TBC,
  address: [TBC],
} as const;

/**
 * Version stamp for the whole set of documents.
 *
 * The app records this string against every consent it captures, so that a
 * consent given today can be tied to the exact text that was on screen. Bump it
 * whenever a document changes in substance — the app treats a changed version as
 * grounds to ask for consent again — and update `EFFECTIVE_DATE` with it.
 *
 * ⚠️ Must match `POLICY_VERSION` in the app repo's src/lib/consent.ts.
 */
export const POLICY_VERSION = "2026-08-11";

/** Human-readable effective date, shown on each document. */
export const EFFECTIVE_DATE = "11 August 2026";

/** `true` once no placeholder remains. Drives the page-level warning. */
export const ENTITY_COMPLETE =
  ENTITY.llpin !== TBC &&
  ENTITY.pan !== TBC &&
  !ENTITY.registeredOffice.includes(TBC) &&
  ENTITY.jurisdictionCity !== TBC &&
  CONTACT.supportEmail !== TBC &&
  GRIEVANCE_OFFICER.name !== TBC;

/** Registered office as a single line, for inline use in prose. */
export const officeOneLine = () => ENTITY.registeredOffice.join(", ");

/**
 * The entity's identifiers as one sentence, skipping anything still TBC so the
 * prose stays readable while values are outstanding.
 */
export function entityIdentifiers(): string {
  // Explicitly string[]: `as const` on ENTITY narrows legalName to a literal
  // type, which would make the array literal-typed and reject the pushes below.
  const parts: string[] = [ENTITY.legalName];
  if (ENTITY.llpin !== TBC) parts.push(`LLPIN ${ENTITY.llpin}`);
  if (ENTITY.pan !== TBC) parts.push(`PAN ${ENTITY.pan}`);
  if (ENTITY.gstin) parts.push(`GSTIN ${ENTITY.gstin}`);
  return parts.join(" · ");
}
