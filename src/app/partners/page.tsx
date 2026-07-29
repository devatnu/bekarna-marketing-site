import type { Metadata } from "next";
import { LogoMarquee } from "@/components/LogoMarquee";
import { InitiativeCards } from "@/components/InitiativeCards";
import { VerifySteps } from "@/components/VerifySteps";
import { ProofOfScale } from "@/components/ProofOfScale";
import { StickyCtaBar } from "@/components/StickyCtaBar";
import { JsonLdScript } from "@/components/JsonLdScript";
import {
  initiativesItemListSchema,
  partnersItemListSchema,
  webPageSchema,
} from "@/lib/jsonld";
import { INITIATIVES, PARTNERS } from "@/data/partners";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Verified NGOs & Institutions We Work With";
const DESCRIPTION =
  "The NGOs, temples, mosques, churches and gurudwaras verified on Be Karna — plus the exact document checks every organisation clears before it can receive a donation.";

// Clean, lowercase, hyphenated path, canonicalised so /partners is the one URL
// for this content regardless of how it's linked or parameterised.
export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/partners",
});

export default function PartnersPage() {
  return (
    /* pb-24 clears the fixed bottom CTA bar so it never covers the footer. */
    <main id="main" className="flex-1 pb-24">
      <JsonLdScript
        schemas={[
          webPageSchema({ path: "/partners", name: TITLE, description: DESCRIPTION }),
          partnersItemListSchema(PARTNERS),
          initiativesItemListSchema(INITIATIVES),
        ]}
      />

      {/* Top fold */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-5xl px-5 pb-10 pt-12 sm:pb-12 sm:pt-16">
          <p className="t-label karna-rise">Those connected with us</p>
          <h1 className="t-display karna-rise mt-4 max-w-[20ch] text-balance">
            {PARTNERS.length > 0 ? "Organisations that cleared every check." : "Our verified organisations."}
          </h1>
          <p className="t-body-lg karna-rise mt-5 max-w-[48ch] text-ink-soft">
            Registered, document-verified and paid directly — NGOs and religious
            institutions of all faiths, across {new Set(PARTNERS.map((p) => p.location.split(", ")[1])).size}{" "}
            states.
          </p>
        </div>

        <div className="pb-8">
          <LogoMarquee />
        </div>
      </section>

      <InitiativeCards />
      <VerifySteps />
      <ProofOfScale />

      <StickyCtaBar />
    </main>
  );
}
