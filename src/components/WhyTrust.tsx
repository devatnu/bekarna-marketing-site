import Link from "next/link";
import { LotusMark } from "@/components/LotusMark";

/**
 * Credibility section. Each claim is a checkable fact, not an adjective —
 * trust on a giving platform comes from verifiability, so anything we can't
 * substantiate doesn't belong here.
 */

const PILLARS = [
  {
    title: "Verified before an organisation is ever listed",
    body: "We collect and check registration documents, 80G and 12A certificates, organisation PAN, and a cancelled cheque against the bank account that will receive money. An organisation stays unlisted until those checks pass.",
    link: { href: "/partners", label: "See how we verify organisations" },
  },
  {
    title: "Faith-neutral, genuinely",
    body: "Temples, mosques, churches and gurudwaras sit alongside secular NGOs, sorted by cause and location — never ranked by faith. You give where you want to give; we don't nudge.",
  },
  {
    title: "80G receipts, issued instantly",
    body: "Every donation to an 80G-registered organisation generates its receipt straight away, filed in your giving passbook with your financial-year total already added up for you.",
  },
  {
    title: "Your money never sits with us",
    body: "Donations settle directly into the organisation's own bank account through the payment gateway's split-settlement. Be Karna is never the custodian of your funds.",
  },
];

export function WhyTrust() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-24 size-[380px] text-green opacity-[0.05]"
      >
        <LotusMark />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:py-20">
        <p className="t-label">Why it&apos;s trustworthy</p>
        <h2 className="t-h1 mt-3 max-w-[26ch] text-balance">
          Four things we can prove, not four things we say.
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <article key={p.title}>
              <h3 className="t-h3 max-w-[28ch]">{p.title}</h3>
              <p className="t-body mt-2 max-w-[50ch] text-ink-soft">{p.body}</p>
              {p.link && (
                <Link
                  href={p.link.href}
                  className="mt-3 inline-flex min-h-[40px] items-center font-[family-name:var(--font-body)] text-[14px] font-semibold text-accent underline underline-offset-4"
                >
                  {p.link.label}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
