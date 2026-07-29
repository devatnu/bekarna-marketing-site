import { INITIATIVES, type Initiative } from "@/data/partners";
import { APP_URL } from "@/lib/site";

/**
 * Live initiatives. Each card states the organisation, the cause, what the money
 * does and how far along it is — no thermometer urgency, no "only 3 days left".
 *
 * Progress is rendered as a <progress> element so the value is exposed to
 * assistive tech natively rather than being implied by a coloured div.
 */

const inr = (rupees: number) => `₹${rupees.toLocaleString("en-IN")}`;

/** Compact Indian format: 8,14,000 → ₹8.1L. */
function inrCompact(rupees: number): string {
  if (rupees >= 1_00_00_000) return `₹${trim(rupees / 1_00_00_000)}Cr`;
  if (rupees >= 1_00_000) return `₹${trim(rupees / 1_00_000)}L`;
  if (rupees >= 1_000) return `₹${trim(rupees / 1_000)}K`;
  return `₹${rupees}`;
}

function trim(n: number): string {
  return n.toFixed(1).replace(/\.0$/, "");
}

function InitiativeCard({ item }: { item: Initiative }) {
  const pct = Math.min(100, Math.round((item.raisedRupees / item.goalRupees) * 100));

  return (
    <article className="flex flex-col rounded-[var(--radius-lg)] border border-border bg-surface p-5">
      <p className="t-label">{item.cause}</p>
      <h3 className="t-h3 mt-2.5 text-balance">{item.title}</h3>
      <p className="t-caption mt-1">by {item.org}</p>

      <p className="t-body mt-3 flex-1 text-ink-soft">{item.summary}</p>

      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-[family-name:var(--font-display)] text-[17px] font-bold text-ink">
            {inrCompact(item.raisedRupees)}
            <span className="ml-1 font-[family-name:var(--font-body)] text-[13px] font-normal text-muted">
              of {inrCompact(item.goalRupees)}
            </span>
          </span>
          <span className="font-[family-name:var(--font-body)] text-[13px] font-semibold text-accent">
            {pct}%
          </span>
        </div>

        <progress
          value={item.raisedRupees}
          max={item.goalRupees}
          className="mt-2.5 h-[6px] w-full appearance-none overflow-hidden rounded-full border-0 bg-surface-sunken [&::-moz-progress-bar]:bg-accent [&::-webkit-progress-bar]:bg-surface-sunken [&::-webkit-progress-value]:bg-accent"
        >
          {/* Fallback text for browsers without <progress> styling support. */}
          {inr(item.raisedRupees)} raised of {inr(item.goalRupees)}
        </progress>
      </div>
    </article>
  );
}

export function InitiativeCards() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:py-20">
        <p className="t-label">Live initiatives</p>
        <h2 className="t-h1 mt-3 max-w-[24ch] text-balance">
          What these organisations are raising for right now.
        </h2>
        <p className="t-body mt-4 max-w-[54ch] text-ink-soft">
          Each initiative is run by a verified organisation and funded directly.
          Giving happens in the app, where you can read the full plan and the
          ledger behind every rupee.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INITIATIVES.map((item) => (
            <InitiativeCard key={item.slug} item={item} />
          ))}
        </div>

        <p className="t-caption mt-8">
          Figures update as donations settle.{" "}
          <a
            href={APP_URL}
            rel="noopener"
            className="font-semibold text-accent underline underline-offset-2"
          >
            Browse every live initiative in the app
          </a>
          .
        </p>
      </div>
    </section>
  );
}
