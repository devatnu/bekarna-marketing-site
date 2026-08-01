import Image from "next/image";
import { PARTNERS } from "@/data/content";

/**
 * 3 - India's Most Trusted NGOs.
 *
 * The supplied logos are all square (288×288), so each one sits in a card
 * alongside its name rather than being dropped in bare. Square marks in a wide
 * cell would float in dead space, and several of these are illegible at logo
 * size without the name next to them.
 *
 * Cards fade in and out on staggered loops (.t-twinkle in globals.css) - the
 * wall breathes without anything moving position.
 *
 * ⚠️ These are real organisations and this heading claims them as verified
 * partners. See the warning in src/data/content.ts before publishing.
 */
export function TrustedNgos() {
  return (
    <section id="ngos" className="t-section bg-paper">
      <div className="t-container">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="t-eyebrow text-green">Verified partners</p>
          <h2 className="mt-4 text-h2">India&rsquo;s Most Trusted NGOs</h2>
        </div>

        <ul className="t-twinkle mt-[clamp(2.5rem,6vw,4rem)] grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNERS.map((partner) => (
            <li
              key={partner.slug}
              className="flex flex-col items-center gap-3 rounded-lg border border-line bg-surface p-4 text-center sm:flex-row sm:gap-4 sm:text-left"
            >
              <Image
                src={`/ngos/${partner.slug}.png`}
                alt=""
                width={288}
                height={288}
                sizes="56px"
                className="size-12 shrink-0 rounded-md bg-paper object-contain p-1 sm:size-11"
              />
              <span className="text-small font-semibold leading-tight text-ink">
                {partner.name}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-lead text-copy">
          <span className="font-display font-bold text-ink">120+ more</span> verified
          organisations on Be Karna.
        </p>
      </div>
    </section>
  );
}
