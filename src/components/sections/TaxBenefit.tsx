import { PhotoSlot } from "@/components/ui/MediaSlot";

/**
 * 7 - The rational nudge.
 *
 * Kept deliberately small and flat: no module header, no headline at h2 scale,
 * no CTA. It is a practical footnote arriving after the emotional case has
 * already been made, and treating it as a full section would overstate it.
 */
export function TaxBenefit() {
  return (
    <section className="bg-paper pb-[clamp(2rem,5vw,3rem)]">
      <div className="t-container">
        <div className="grid items-center gap-[clamp(1.5rem,4vw,3rem)] rounded-lg border border-line p-[clamp(1.5rem,4vw,2.5rem)] md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="t-eyebrow text-green">Section 80G</p>
            <h2 className="mt-3 text-h3">And it&rsquo;s tax-deductible.</h2>
            <p className="t-prose mt-2 text-body text-copy">
              Every organisation on Be Karna holds a valid 80G registration, so your
              donation qualifies for a deduction. The receipt reaches you as soon as the
              payment settles - there is nothing to request and nobody to follow up with
              in March.
            </p>
          </div>

          <div className="md:col-span-4">
            <PhotoSlot
              ratio="4 / 3"
              label="The 80G receipt"
              note="Small and literal: the receipt as it actually arrives, on a phone screen. Legible header, amount, and registration number."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
