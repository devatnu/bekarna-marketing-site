/**
 * How organisations are verified — the actual document checks, named. This is
 * the page's credibility core and prime long-tail SEO surface ("how are NGOs
 * verified", "80G 12A certificate check").
 *
 * Deliberately specific: naming the exact documents is what makes the claim
 * falsifiable, and therefore worth believing.
 */

const CHECKS = [
  {
    title: "Registration certificate",
    body: "Proof the organisation legally exists — trust deed, society registration, or Section 8 company incorporation. We check the registering authority and number.",
  },
  {
    title: "80G and 12A certificates",
    body: "12A confirms the organisation's income-tax exemption; 80G is what makes your donation deductible. We verify both are current, not lapsed.",
  },
  {
    title: "Organisation PAN",
    body: "Matched against the name on the registration certificate. A mismatch stops the listing until it's resolved.",
  },
  {
    title: "Bank account proof",
    body: "A cancelled cheque or bank letter, in the organisation's own name. Donations settle only to this verified account — never to an individual.",
  },
  {
    title: "Contactable, accountable people",
    body: "A working phone number and a named person responsible for the organisation, so questions have somewhere to land.",
  },
  {
    title: "Ongoing review",
    body: "Verification isn't a one-time gate. Certificates expire, bank details change, and an organisation that stops responding is delisted.",
  },
];

export function VerifySteps() {
  return (
    <section
      id="how-we-verify"
      className="scroll-mt-20 border-b border-border bg-surface"
    >
      <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:py-20">
        <p className="t-label">How we verify organisations</p>
        <h2 className="t-h1 mt-3 max-w-[26ch] text-balance">
          Six checks before an organisation can receive a single rupee.
        </h2>
        <p className="t-body mt-4 max-w-[56ch] text-ink-soft">
          Anyone can claim to be verified. These are the documents we actually
          collect and check, so you can judge the standard for yourself.
        </p>

        <ol className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {CHECKS.map((c, i) => (
            <li key={c.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-mint font-[family-name:var(--font-display)] text-[13px] font-bold text-accent-deep"
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="t-h3">{c.title}</h3>
                <p className="t-body mt-1.5 max-w-[46ch] text-ink-soft">{c.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="t-caption mt-10 max-w-[60ch] rounded-[var(--radius-md)] border border-border bg-base p-4">
          Verification confirms an organisation is real, registered and
          accountable. It is not an endorsement of any particular programme, and
          it does not guarantee outcomes — which is exactly why every rupee is
          ledgered and visible to you afterwards.
        </p>
      </div>
    </section>
  );
}
