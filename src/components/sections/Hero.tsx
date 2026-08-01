import Image from "next/image";
import { AppCta } from "@/components/ui/AppCta";

/**
 * 1 - Top fold. The supplied artwork sits full-bleed behind the copy. That is the
 * whole treatment: one image, nothing layered over it.
 *
 * The white wash is BAKED INTO the image - it fades to paper across the lower
 * half, with a faint lotus pattern in the white. So there is NO CSS gradient
 * here and there should never be one: the artwork already provides the clean
 * space the copy sits in, and a second gradient would only wash the photograph.
 *
 * Anchored `object-top`, so the frame reads from the top of the artwork down.
 * A wide, short window therefore trims the very bottom of the white band; at
 * ordinary window sizes there's plenty of white left under the copy, and this
 * keeps the composition sitting where it was designed to.
 *
 * Content is bottom-aligned. The title rotates through three
 * variants, both halves at once - ink line and gradient line - on a CSS-only
 * loop (.t-roll in globals.css). No client component.
 */

const SUBTITLE = "Verified NGOs and religious institutions across India.";

/**
 * Three titles on rotation. `lead` renders in ink, `accent` in the gradient, and
 * both halves change together - all three share one grid cell so the block is
 * as tall as the longest and the CTA below never moves.
 *
 * Keep each half under about 22 characters: that is what survives a 360px
 * screen without spilling to a third line.
 */
const TITLES = [
  { lead: "Give with your heart.", accent: "And your eyes open" },
  { lead: "Every rupee you give,", accent: "on the record" },
  { lead: "Checked, verified,", accent: "then funded." },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-paper">
      <Image
        src="/hero-backdrop.webp"
        alt="A classroom of children holding up slates with Hindi letters chalked on them."
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-top"
      />

      <div className="t-container">
        <div className="flex min-h-[clamp(34rem,88vh,50rem)] flex-col justify-end pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(8rem,28vh,14rem)]">
          <div className="mx-auto flex max-w-[52rem] flex-col items-center text-center">
            <p className="t-eyebrow text-green">Giving, made honest</p>

            <h1 className="mt-5 text-display">
              {/* Screen readers get one stable sentence rather than three
                  competing titles fading in and out. */}
              <span className="sr-only">
                {TITLES[0].lead} {TITLES[0].accent}
              </span>

              <span aria-hidden="true" className="t-roll">
                {TITLES.map((title) => (
                  <span key={title.accent}>
                    <span className="block">{title.lead}</span>
                    <span className="block">
                      <span className="t-gradient">{title.accent}</span>
                    </span>
                  </span>
                ))}
              </span>
            </h1>

            <p className="mt-6 max-w-[48ch] text-lead text-copy">{SUBTITLE}</p>

            <AppCta size="lg" className="mt-9 w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
