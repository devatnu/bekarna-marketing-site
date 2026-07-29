import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyTrust } from "@/components/WhyTrust";
import { Faq, FAQS } from "@/components/Faq";
import { ClosingCta } from "@/components/ClosingCta";
import { JsonLdScript } from "@/components/JsonLdScript";
import { faqSchema, serviceSchema, webPageSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Donate to Verified NGOs in India — 95% Reaches the Cause";
const DESCRIPTION =
  "Give to verified NGOs and religious institutions of all faiths. 95% of every donation reaches the organisation, every rupee is ledgered, and 80G receipts are instant.";

/**
 * Statically generated — no request-time APIs anywhere in this tree, so Next
 * prerenders it to HTML at build. All copy ships in that HTML; nothing is
 * injected on the client.
 */
export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <main id="main" className="flex-1">
      <JsonLdScript
        schemas={[
          webPageSchema({ path: "/", name: TITLE, description: DESCRIPTION }),
          serviceSchema(),
          // Mirrors the <details> list in <Faq /> — the same text, so the markup
          // and the structured data can never disagree.
          faqSchema(FAQS.map((f) => ({ q: f.q, a: f.a }))),
        ]}
      />

      <Hero />
      <HowItWorks />
      <WhyTrust />
      <Faq />
      <ClosingCta />
    </main>
  );
}
