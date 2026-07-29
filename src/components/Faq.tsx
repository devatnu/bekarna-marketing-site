/**
 * The questions people actually type into search. This section exists as much
 * for long-tail SEO as for the reader, and it's paired with FAQPage JSON-LD on
 * the landing page (see FAQS being reused there) so it can win rich results.
 *
 * Native <details>: expandable with zero JavaScript, and the answer text is in
 * the initial HTML either way — collapsed content is still indexed.
 */

export const FAQS = [
  {
    q: "How much of my donation actually reaches the NGO?",
    a: "95%. The payment is split at settlement — 95% routes directly to the organisation's own bank account and 5% is retained to run the platform. Nothing further is deducted from the organisation's share.",
  },
  {
    q: "Is my donation tax-deductible under 80G?",
    a: "Yes, for donations to organisations registered under Section 80G. The receipt is generated instantly and stored in your giving passbook, with your financial-year total tallied for filing.",
  },
  {
    q: "How do you verify the NGOs listed on Be Karna?",
    a: "Before an organisation is listed we check its registration certificate, 80G and 12A certificates, organisation PAN, and a cancelled cheque matching the bank account that receives donations. Organisations that fail these checks are not listed.",
  },
  {
    q: "Can I donate to a temple, mosque, church or gurudwara?",
    a: "Yes. Be Karna is faith-neutral — religious institutions of all faiths are listed alongside secular NGOs, organised by cause and location rather than ranked by faith.",
  },
  {
    q: "What is the minimum donation amount?",
    a: "₹100. There is no upper limit, and no charge to you on top of the amount you choose to give.",
  },
  {
    q: "Where do I actually make the donation?",
    a: "In the Be Karna app at bekarna.app. This site explains how the platform works; giving, receipts and your passbook all live in the app.",
  },
] as const;

export function Faq() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:py-20">
        <p className="t-label">Common questions</p>
        <h2 className="t-h1 mt-3 max-w-[22ch] text-balance">
          Asked before giving, answered plainly.
        </h2>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex min-h-[var(--tap-min)] cursor-pointer list-none items-center justify-between gap-4 py-3 font-[family-name:var(--font-display)] text-[16px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-green transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="t-body max-w-[60ch] pb-4 pr-8 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
