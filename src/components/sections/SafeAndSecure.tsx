import { TRUST_BADGES } from "@/data/content";
import { ExploreLink } from "@/components/ui/AppCta";
import { ModuleHeader } from "@/components/ui/Section";

/**
 * 9 - Safe and secure. A quiet trust band before the FAQ.
 *
 * Badges are rendered as monochrome text medallions, not official brand artwork.
 * That follows the reference, and it also avoids two real problems: ISO forbids
 * certified organisations from using the ISO logo, and the RBI emblem is
 * restricted and would imply a regulatory approval Be Karna does not hold.
 *
 * ⚠️ Every badge here is an unverified claim - see TRUST_BADGES in
 * src/data/content.ts. A visitor reads a badge as proof, so these are the worst
 * placeholders on the site to leave standing.
 *
 * The Explore link points at the FAQ rather than a security page, because there
 * isn't one yet. Repoint it when there is.
 */
export function SafeAndSecure() {
  return (
    <section id="security" className="t-section bg-surface">
      <div className="t-container">
        <div className="grid items-center gap-[clamp(2.5rem,6vw,4rem)] lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ModuleHeader
              eyebrow="Security"
              title="Safe and secure."
              body="Your trust is the whole product. Payments are handled by a certified gateway, Be Karna never stores your card or bank details, and every transfer is on the record."
            />

            <div className="mt-7">
              <ExploreLink href="#faq">Read the security answers</ExploreLink>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-end">
              {TRUST_BADGES.map((badge) => (
                <li key={badge.line1 + badge.line2}>
                  <Medallion badge={badge} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * A certification medallion: an outlined circle with the standard set in text.
 * Monochrome and deliberately quiet - a badge that shouts reads as marketing,
 * which is the opposite of what it's for.
 */
function Medallion({ badge }: { badge: (typeof TRUST_BADGES)[number] }) {
  return (
    <span
      role="img"
      aria-label={badge.alt}
      className="flex size-[6.5rem] flex-col items-center justify-center rounded-full border border-line bg-paper px-3 text-center sm:size-[7.5rem]"
    >
      <span className="text-[0.9375rem] font-bold leading-tight tracking-[-0.01em] text-muted">
        {badge.line1}
      </span>
      {badge.line2 ? (
        <span className="mt-0.5 text-[0.6875rem] font-semibold uppercase leading-tight tracking-[0.06em] text-muted">
          {badge.line2}
        </span>
      ) : null}
    </span>
  );
}
