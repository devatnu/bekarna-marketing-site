import type { Partner } from "@/data/content";
import { cn } from "@/lib/cn";

/**
 * Infinite horizontal logo scroll - the "in partnership with" wall.
 *
 * Pure CSS (see .t-marquee in globals.css): the list is rendered twice and the
 * track slides -50%, so it loops seamlessly with no JavaScript and no client
 * component. Duplicate copy is aria-hidden and the whole strip is exposed to
 * assistive tech once, as a plain list.
 *
 * Two rows travelling in opposite directions makes a modest number of partners
 * read as a crowd, which is the entire point of the device.
 */
export function LogoMarquee({ partners }: { partners: Partner[] }) {
  const half = Math.ceil(partners.length / 2);

  return (
    <div className="flex flex-col gap-3">
      <MarqueeRow partners={partners.slice(0, half)} duration="72s" />
      <MarqueeRow partners={partners.slice(half)} duration="88s" reverse />
    </div>
  );
}

function MarqueeRow({
  partners,
  duration,
  reverse = false,
}: {
  partners: Partner[];
  duration: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn("t-marquee", reverse && "t-marquee--reverse")}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      <ul className="t-marquee-track">
        {partners.map((partner) => (
          <LogoCard key={partner.slug} partner={partner} />
        ))}
        {/* Second pass: the seam the -50% slide lands on. */}
        {partners.map((partner) => (
          <LogoCard key={`dupe-${partner.slug}`} partner={partner} duplicate />
        ))}
      </ul>
    </div>
  );
}

function LogoCard({
  partner,
  duplicate = false,
}: {
  partner: Partner;
  duplicate?: boolean;
}) {
  return (
    <li
      aria-hidden={duplicate || undefined}
      className="flex min-h-[76px] w-[15rem] flex-col justify-center rounded-md border border-line bg-paper px-5"
    >
      <span className="truncate text-small font-semibold text-ink">{partner.name}</span>
    </li>
  );
}
