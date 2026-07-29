import { NGO_SHARE_PCT, PLATFORM_FEE_PCT } from "@/lib/site";

/**
 * The 95/5 split, made concrete with an actual worked example rather than a
 * claim. A ₹1,000 breakdown is the single clearest trust signal we have, and it
 * doubles as long-tail content ("how much of my donation reaches the NGO").
 */

const STEPS = [
  {
    n: "01",
    title: "You pick a cause and an amount",
    body: "Browse verified organisations by cause — education, healthcare, nutrition, clean water, elder care, or a place of worship. Start at ₹100.",
  },
  {
    n: "02",
    title: "The split happens at the gateway",
    body: `Your payment is divided the moment it settles: ${NGO_SHARE_PCT}% routes directly to the organisation's own bank account, ${PLATFORM_FEE_PCT}% is retained to run the platform. Be Karna never holds your money.`,
  },
  {
    n: "03",
    title: "Three ledger entries are written",
    body: "Gross received, platform fee, amount transferred. You can read the entries for every gift you've ever made in your giving passbook.",
  },
  {
    n: "04",
    title: "Your 80G receipt arrives",
    body: "Issued against the organisation's 80G registration, so the donation is tax-deductible when you file. No chasing anyone for paperwork.",
  },
];

/** A ₹1,000 gift, in rupees. */
const EXAMPLE = { gross: 1000, ngo: 950, fee: 50 };

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:py-20">
        <p className="t-label">How it works</p>
        <h2 className="t-h1 mt-3 max-w-[24ch] text-balance">
          You should be able to trace your donation, not just trust it.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          <ol className="flex flex-col gap-8">
            {STEPS.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="font-[family-name:var(--font-display)] text-[15px] font-bold text-green"
                >
                  {s.n}
                </span>
                <div className="min-w-0">
                  <h3 className="t-h3">{s.title}</h3>
                  <p className="t-body mt-1.5 max-w-[52ch] text-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* The worked example. Plain <table> so it's readable to crawlers and
              screen readers alike, not a decorative chart. */}
          <aside className="h-fit rounded-[var(--radius-lg)] border border-border bg-surface p-6 lg:sticky lg:top-24">
            <h3 className="t-h3">A ₹1,000 gift, in full</h3>
            <p className="t-caption mt-1.5">
              The same arithmetic applies at any amount.
            </p>

            <table className="mt-5 w-full border-collapse text-left">
              <caption className="sr-only">
                Breakdown of a ₹1,000 donation on Be Karna
              </caption>
              <tbody className="font-[family-name:var(--font-body)] text-[15px]">
                <tr className="border-b border-border">
                  <th scope="row" className="py-3 font-medium text-ink-soft">
                    You give
                  </th>
                  <td className="py-3 text-right font-semibold text-ink">
                    {inr(EXAMPLE.gross)}
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <th scope="row" className="py-3 font-medium text-ink-soft">
                    Reaches the NGO
                  </th>
                  <td className="py-3 text-right font-semibold text-accent">
                    {inr(EXAMPLE.ngo)}
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 font-medium text-ink-soft">
                    Platform fee ({PLATFORM_FEE_PCT}%)
                  </th>
                  <td className="py-3 text-right font-semibold text-ink">
                    {inr(EXAMPLE.fee)}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Proportion bar — decorative, the table above carries the meaning. */}
            <div
              aria-hidden="true"
              className="mt-5 flex h-2.5 overflow-hidden rounded-full bg-surface-sunken"
            >
              <span className="bg-accent" style={{ width: `${NGO_SHARE_PCT}%` }} />
              <span className="bg-ink" style={{ width: `${PLATFORM_FEE_PCT}%` }} />
            </div>
            <p className="t-caption mt-3">
              No cut is taken from the NGO&apos;s share afterwards, and there is no
              charge to the organisation for being listed.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
