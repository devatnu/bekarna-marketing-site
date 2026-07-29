import { AppCta } from "@/components/AppCta";
import { LotusMark } from "@/components/LotusMark";

/**
 * Closing CTA — the same single action as the hero, no competing offers. Warm,
 * not urgent: no countdowns, no guilt, no "children are waiting".
 */
export function ClosingCta() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:py-20">
      <div className="relative isolate overflow-hidden rounded-[20px] bg-ink px-6 py-12 text-white sm:px-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-16 size-72 text-green opacity-[0.14]"
        >
          <LotusMark />
        </div>

        <div className="relative max-w-[34ch]">
          <h2 className="t-h1 text-balance text-white">
            Daan is private. Proof shouldn&apos;t be.
          </h2>
          <p className="t-body-lg mt-4 text-white/70">
            Pick a verified cause, give what feels right, and see exactly where it
            went. Start with ₹100 in the app.
          </p>
          <div className="mt-8">
            <AppCta variant="onDark" source="closing">
              Get the app
            </AppCta>
          </div>
        </div>
      </div>
    </section>
  );
}
