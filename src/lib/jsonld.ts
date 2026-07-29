import {
  absoluteUrl,
  APP_URL,
  NGO_SHARE_PCT,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site";
import type { Initiative, Partner } from "@/data/partners";

/**
 * Structured data (schema.org / JSON-LD).
 *
 * Emitted as <script type="application/ld+json"> in the server-rendered HTML, so
 * crawlers get it in the initial payload with no JS execution required.
 */

/** Loose JSON-LD node type — schema.org is open-ended by design. */
export type JsonLd = Record<string, unknown>;

/** The publisher. `sameAs` is what ties the site to verified social profiles. */
export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Be Karna India",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/opengraph-image"),
      width: 1200,
      height: 630,
    },
    description: SITE_DESCRIPTION,
    areaServed: { "@type": "Country", name: "India" },
    knowsLanguage: ["en-IN", "hi-IN"],
    // The product lives on a different domain; declare the relationship rather
    // than letting the two look like unrelated properties.
    subjectOf: { "@type": "WebSite", url: APP_URL, name: `${SITE_NAME} app` },
    ...(SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS } : {}),
  };
}

/** Marks bekarna.in as the site of record for the brand. */
export function webSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** A single page, tied back to the site and organisation. */
export function webPageSchema(params: {
  path: string;
  name: string;
  description: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(params.path)}#webpage`,
    url: absoluteUrl(params.path),
    name: params.name,
    description: params.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

/**
 * The listed partner organisations, as an ItemList of NGOs. Only orgs with a
 * real `website` get a `url`/`sameAs` — an NGO node pointing nowhere is worse
 * than no node, since it can't be corroborated.
 */
export function partnersItemListSchema(partners: Partner[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Organisations verified on ${SITE_NAME}`,
    numberOfItems: partners.length,
    itemListElement: partners.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "NGO",
        name: p.name,
        address: { "@type": "PostalAddress", addressLocality: p.location, addressCountry: "IN" },
        knowsAbout: p.cause,
        ...(p.website ? { url: p.website, sameAs: [p.website] } : {}),
      },
    })),
  };
}

/** Live initiatives, as donation-accepting campaigns. */
export function initiativesItemListSchema(initiatives: Initiative[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Live initiatives on ${SITE_NAME}`,
    numberOfItems: initiatives.length,
    itemListElement: initiatives.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "DonateAction",
        name: it.title,
        description: it.summary,
        recipient: { "@type": "NGO", name: it.org },
        target: { "@type": "EntryPoint", urlTemplate: APP_URL },
      },
    })),
  };
}

/** The questions people actually search. Eligible for FAQ rich results. */
export function faqSchema(faqs: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** How Be Karna itself works, as a described service. */
export function serviceSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${SITE_NAME} — verified NGO donations in India`,
    serviceType: "Charitable donation platform",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    description: `Give to verified NGOs and religious institutions of all faiths. ${NGO_SHARE_PCT}% of every donation is routed directly to the organisation, with a full ledger entry per rupee and an instant 80G receipt.`,
    audience: { "@type": "Audience", audienceType: "Donors in India" },
  };
}
