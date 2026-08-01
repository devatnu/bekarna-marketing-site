import Image from "next/image";
import { INITIATIVES } from "@/data/content";

/**
 * 4 - Live initiatives, auto-scrolling.
 *
 * Reuses the marquee mechanism (.t-marquee in globals.css): the list is
 * rendered twice and the track slides -50% on a loop. A continuous crawl rather
 * than a slide-and-pause carousel, because paged carousels need JS for state
 * and this site has no client components.
 *
 * Full-bleed - the row has to run past both viewport edges for the effect to
 * read, so it sits outside .t-container.
 *
 * NOTE: every initiative is placeholder - see src/data/content.ts.
 */
export function InitiativesCarousel() {
  return (
    <section id="initiatives" className="t-section bg-surface">
      <div className="t-container">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="t-eyebrow text-green">Open right now</p>
          <h2 className="mt-4 text-h2">Initiatives you can fund today</h2>
          <p className="t-prose mx-auto mt-5 text-lead text-copy">
            Every one is a specific programme with a stated goal - not a general fund.
          </p>
        </div>
      </div>

      {/* tabIndex makes it keyboard-scrollable, and gives :focus-within
          something to match so the drift pauses while it's in use. */}
      <div
        className="t-marquee t-marquee--scroll mt-[clamp(2.5rem,5vw,3.5rem)]"
        style={{ "--marquee-duration": "80s" } as React.CSSProperties}
        tabIndex={0}
        role="group"
        aria-label="Open initiatives, scrollable"
      >
        <ul className="t-marquee-track">
          {INITIATIVES.map((initiative) => (
            <InitiativeCard key={initiative.slug} initiative={initiative} />
          ))}
          {/* Second pass: the seam the -50% slide lands on. */}
          {INITIATIVES.map((initiative) => (
            <InitiativeCard
              key={`dupe-${initiative.slug}`}
              initiative={initiative}
              duplicate
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function InitiativeCard({
  initiative,
  duplicate = false,
}: {
  initiative: (typeof INITIATIVES)[number];
  duplicate?: boolean;
}) {
  return (
    <li
      aria-hidden={duplicate || undefined}
      className="w-[clamp(15rem,72vw,20rem)] overflow-hidden rounded-lg border border-line bg-paper"
    >
      <Image
        src={`/initiatives/${initiative.slug}.webp`}
        alt={initiative.alt}
        width={640}
        height={480}
        sizes="(min-width: 640px) 320px, 72vw"
        className="aspect-[4/3] w-full border-b border-line object-cover"
      />

      <div className="p-5">
        <h3 className="text-h3">{initiative.title}</h3>
        <p className="mt-1.5 text-small text-muted">{initiative.org}</p>
      </div>
    </li>
  );
}
