import { LEDGER } from "@/data/content";

/**
 * 5 - The passbook, writing itself.
 *
 * Rows cascade in, the amount counts up to its real figure, and a tick draws
 * itself once the transfer settles. Then the ledger clears in the same order and
 * starts again.
 *
 * This shows the product rather than a metaphor for it, which is the point of the
 * section: the claim is "you can see the entry", so the entry is what to animate.
 * The previous version - coins sliding along a line between two cards - argued
 * the same thing at one remove, and less well.
 *
 * Mechanism is in the .t-ledger block in globals.css. Transform, opacity and
 * stroke-dashoffset only, so none of it touches layout; no client component.
 *
 * The entries are illustrative, and the card says so - see the warning on LEDGER
 * in src/data/content.ts.
 */
export function Passbook() {
  return (
    <section id="passbook" className="t-section bg-paper">
      <div className="t-container">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="t-eyebrow text-green">The passbook</p>
          <h2 className="mt-4 text-h2">Every rupee writes itself down.</h2>
          <p className="t-prose mx-auto mt-5 text-lead text-copy">
            No common pool, no holding account, no middle layer. Your money goes to the
            organisation running the initiative you chose, and the entry appears the
            moment it settles.
          </p>
        </div>

        <div className="mx-auto mt-[clamp(2.5rem,6vw,4rem)] max-w-[34rem]">
          <div className="t-ledger overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
            {/* Plain divs, not <header>/<footer>: this is a picture of a UI, and
                real landmark elements here compete with the page's own. */}
            <div className="flex items-center justify-between border-b border-line bg-paper px-5 py-3.5">
              <h3 className="text-small font-semibold text-ink">Your passbook</h3>
              <span className="t-eyebrow text-muted">Settled</span>
            </div>

            <ul className="divide-y divide-line/70">
              {LEDGER.map((entry, i) => (
                <li
                  key={entry.org}
                  className="t-ledger-row grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-3 px-5 py-3.5 text-small sm:gap-x-4"
                  // Published once here; the row's three animations all read it.
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span className="tabular-nums text-muted">{entry.date}</span>

                  <span className="truncate font-medium text-ink">{entry.org}</span>

                  <span className="t-count text-right font-semibold text-ink">
                    <span className="t-count-strip">
                      {entry.steps.map((step, s) => (
                        <span key={s}>{step}</span>
                      ))}
                    </span>
                  </span>

                  <Tick />
                </li>
              ))}
            </ul>

            <div className="border-t border-line bg-paper px-5 py-3.5">
              <p className="text-small text-muted">
                Each line names the organisation that received the money and the
                initiative it funded.
              </p>
            </div>
          </div>

          <p className="mt-3 text-center text-small text-muted">Illustrative entries.</p>
        </div>
      </div>
    </section>
  );
}

/**
 * The settled tick. `pathLength={1}` normalises the stroke length so the CSS can
 * animate dashoffset from 1 to 0 without knowing the real path length.
 */
function Tick() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="t-tick size-[18px] shrink-0 text-green"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path pathLength={1} d="M4 10.5 8 14.5 16 6" />
    </svg>
  );
}
