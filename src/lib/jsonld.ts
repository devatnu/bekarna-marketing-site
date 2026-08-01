import { FAQ } from "@/data/content";

/**
 * FAQPage structured data, generated from the same array the page renders.
 *
 * Deriving it from FAQ rather than hand-writing a second copy is deliberate:
 * Google treats an answer in the markup that disagrees with the answer in the
 * schema as a reason to drop the rich result, and hand-maintained duplicates
 * always drift.
 */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
