import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { TrustedNgos } from "@/components/sections/TrustedNgos";
import { InitiativesCarousel } from "@/components/sections/InitiativesCarousel";
import { Passbook } from "@/components/sections/Passbook";
import { Receipt } from "@/components/sections/Receipt";
import { Verification } from "@/components/sections/Verification";
import { Gallery } from "@/components/sections/Gallery";
import { SafeAndSecure } from "@/components/sections/SafeAndSecure";
import { Faq } from "@/components/sections/Faq";

/**
 * The whole site - one scroll.
 *
 *   1 Hero         backdrop photo, title, subtitle, CTA
 *   2 Stats        the numbers, immediately
 *   3 TrustedNgos  "India's Most Trusted NGOs" - fading logo wall, 120+ more
 *   4 Verification the four checks, clearing one after another
 *   5 Initiatives  auto-scrolling carousel of what's open now
 *   6 Passbook     the ledger writing itself
 *   7 Receipt      the funded/80G receipt
 *   8 Gallery      what the money turns into
 *   9 SafeAndSecure certification badges, a quiet band before the questions
 *  10 Faq          objections, and the FAQPage structured data
 *
 * Verification has to stay adjacent to TrustedNgos: section 3 claims these are
 * the most trusted organisations in India, and section 4 is the evidence.
 *
 * Two calls to action, both to my.bekarna.app: the hero's own button, and a small
 * one in the sticky header. There is deliberately NO fixed bottom bar - two
 * attempts at hiding it while the hero CTA was on screen both failed without
 * JavaScript (see the note in SiteHeader.tsx), so the header carries it instead.
 *
 * HIDDEN, NOT DELETED - the earlier eight-beat narrative sections are still in
 * src/components/sections/ and simply aren't rendered: Tension, DirectGiving,
 * Ledger, Trust, Scale, TaxBenefit, ClosingCta. Import one back to bring it
 * onto the page.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <TrustedNgos />
      <Verification />
      <InitiativesCarousel />
      <Passbook />
      <Receipt />
      <Gallery />
      <SafeAndSecure />
      <Faq />
    </main>
  );
}
