import Image from "next/image";

/**
 * 7 - The receipt.
 *
 * The one real product image on the page: public/samples/funded-receipt.png,
 * supplied from the app. Note it's a "Mission Success / FUNDED" share card with a
 * Download receipt button - not literally an 80G certificate - so the copy
 * describes what the image actually shows rather than overclaiming.
 *
 * 1152x608 native; rendered at the same 1.9:1 so it never resamples awkwardly.
 */

/**
 * Three statements on rotation instead of one dense paragraph, which is what this
 * was: a single block carrying the receipt, its contents and the 80G point all at
 * once, and too long to read beside the image.
 *
 * Seven words each, split across two lines. Keep them within a word or two of
 * each other - all three share one grid cell, so the longest sets the height and
 * an uneven set leaves a visible gap under the short ones.
 */
const LINES = [
  ["The receipt arrives the moment", "it completes."],
  ["Amount, organisation, and what", "it paid for."],
  ["80G on every organisation.", "Nothing to chase."],
];

export function Receipt() {
  return (
    <section id="receipt" className="t-section bg-surface">
      <div className="t-container">
        <div className="grid items-center gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="t-eyebrow text-green">80G &middot; tax deductible</p>
            <h2 className="mt-4 max-w-[20ch] text-h2">
              You get a receipt, not a thank-you note.
            </h2>

            {/* A longer cycle than the hero's 9s, so the two rollers on this page
                never settle into changing at the same moment. */}
            <div
              className="t-roll mt-6 text-lead text-copy"
              style={{ "--roll-cycle": "10.5s" } as React.CSSProperties}
            >
              {LINES.map(([first, second]) => (
                <p key={first}>
                  <span className="block">{first}</span>
                  <span className="block">{second}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Image
              src="/samples/funded-receipt.png"
              alt="A completed Be Karna initiative: Mission Success, one month of school for Anjali, run by Katha Foundation, marked funded and verified, with a download receipt button."
              width={1152}
              height={608}
              className="h-auto w-full rounded-lg border border-line"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
