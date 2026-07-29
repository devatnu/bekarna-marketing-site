import Image from "next/image";
import { PARTNERS, type Partner } from "@/data/partners";

/**
 * Auto-scrolling logo marquee — pure CSS, zero JavaScript, so it can never
 * block render or cost INP.
 *
 * The track holds the list twice and translates exactly -50%, which makes the
 * loop seamless. The second copy is aria-hidden so assistive tech and crawlers
 * read each organisation once. Pauses while pressed (and on focus-within, so a
 * keyboard user can stop it to reach a name); the reduced-motion rule in
 * globals.css stops the animation entirely and makes the row swipeable instead.
 */

/** Text wordmark stand-in until a real logo file lands in public/partners/. */
function LogoPlaceholder({ partner }: { partner: Partner }) {
  return (
    <span className="font-[family-name:var(--font-display)] text-[15px] font-semibold leading-tight text-ink-soft">
      {partner.name}
    </span>
  );
}

function LogoTile({ partner }: { partner: Partner }) {
  return (
    <li className="flex h-20 w-[210px] shrink-0 items-center justify-center px-5">
      <span className="flex h-full w-full items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface px-4 text-center">
        {partner.hasLogo ? (
          <Image
            src={`/partners/${partner.slug}.svg`}
            // Descriptive alt: the organisation's name is the information here.
            alt={`${partner.name} logo`}
            width={150}
            height={44}
            className="h-11 w-auto object-contain"
          />
        ) : (
          <LogoPlaceholder partner={partner} />
        )}
      </span>
    </li>
  );
}

export function LogoMarquee() {
  // Scale duration with the list so items move at a constant speed as it grows.
  const duration = `${Math.max(24, PARTNERS.length * 3.5)}s`;

  return (
    <div
      className="karna-marquee relative isolate overflow-hidden py-2"
      style={{ ["--marquee-duration" as string]: duration }}
    >
      {/* Edge fades, so tiles enter and leave rather than being clipped. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-base to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-base to-transparent"
      />

      <div className="karna-marquee-track">
        <ul className="flex items-center">
          {PARTNERS.map((p) => (
            <LogoTile key={p.slug} partner={p} />
          ))}
        </ul>
        {/* Duplicate purely to close the loop — hidden from AT and crawlers. */}
        <ul className="flex items-center" aria-hidden="true">
          {PARTNERS.map((p) => (
            <LogoTile key={`dup-${p.slug}`} partner={p} />
          ))}
        </ul>
      </div>
    </div>
  );
}
