import { AppCta } from "@/components/AppCta";
import { LotusMark } from "@/components/LotusMark";
import { NGO_SHARE_PCT } from "@/lib/site";

/**
 * The page's one <h1>. Written so the primary keywords ("donate to verified
 * NGOs in India", "80G") sit in real sentences rather than being stuffed — the
 * heading is also the honest description of the product.
 *
 * No hero image: the LCP element is text, which renders as soon as the HTML and
 * font land. Cheapest possible LCP, and it dodges the stock-charity clichés.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      {/* Watermark lotus — decorative, absolutely positioned so it can't shift text. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 size-[340px] text-green opacity-[0.06] sm:-right-10 sm:size-[420px]"
      >
        <LotusMark />
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 pb-14 pt-12 sm:pb-20 sm:pt-16">
        <p className="t-label karna-rise">Bharat ke selfless givers</p>

        <h1 className="t-display karna-rise mt-4 max-w-[19ch] text-balance">
          Give to NGOs you can actually verify.
        </h1>

        <p className="t-body-lg karna-rise mt-5 max-w-[46ch] text-ink-soft">
          Be Karna connects Indian givers to verified NGOs and religious
          institutions of all faiths. {NGO_SHARE_PCT}% of what you give goes
          straight to the organisation, every rupee is ledgered, and your 80G
          receipt arrives instantly.
        </p>

        <div className="karna-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <AppCta source="hero">Start giving on the app</AppCta>
          <a
            href="#how-it-works"
            className="inline-flex min-h-[var(--tap-min)] items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface px-6 font-[family-name:var(--font-body)] text-[15px] font-semibold text-ink active:bg-surface-sunken"
          >
            See how the money moves
          </a>
        </div>

        {/* Three facts, not three slogans. */}
        <dl className="karna-rise mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-3">
          {[
            {
              term: `${NGO_SHARE_PCT}% reaches the cause`,
              desc: "Split at the payment gateway, not promised afterwards.",
            },
            {
              term: "Verified before listed",
              desc: "KYC, 80G/12A certificates and bank proof, checked by us.",
            },
            {
              term: "Every faith, no preference",
              desc: "Temples, mosques, churches, gurudwaras and secular NGOs alike.",
            },
          ].map((f) => (
            <div key={f.term} className="bg-surface px-5 py-5">
              <dt className="font-[family-name:var(--font-display)] text-[16px] font-semibold text-ink">
                {f.term}
              </dt>
              <dd className="t-caption mt-1.5">{f.desc}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
