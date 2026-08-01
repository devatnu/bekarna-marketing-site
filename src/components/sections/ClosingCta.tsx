import { AppCta } from "@/components/ui/AppCta";
import { LotusMark } from "@/components/ui/Logo";
import { PhotoSlot } from "@/components/ui/MediaSlot";

/**
 * 8 - The invitation.
 *
 * Restates the feeling from the hero and offers one clean way in. No urgency
 * device, no countdown, no second CTA - the page has earned this or it hasn't.
 */
export function ClosingCta() {
  return (
    <section className="t-section bg-green-deep text-on-dark">
      <div className="t-container">
        <div className="mx-auto flex max-w-[46rem] flex-col items-center text-center">
          {/* The white lotus as a sign-off - the mark bookends the page. */}
          <LotusMark tone="dark" size={48} className="mb-7 opacity-90" />

          <h2 className="text-h2 text-on-dark">
            Give in a way you can look back on.
          </h2>
          <p className="mt-5 max-w-[44ch] text-lead text-on-dark-muted">
            Pick an initiative that means something to you. We&rsquo;ll show you where it
            went - and keep showing you.
          </p>
          <AppCta variant="onDark" size="lg" className="mt-9 w-full sm:w-auto">
            Start giving
          </AppCta>
        </div>

        <PhotoSlot
          ratio="21 / 9"
          label="Where it lands"
          note="Wide and warm, the bookend to the hero. Everyday life inside a funded initiative, months later - ordinary, ongoing, unremarkable in the best way."
          tone="dark"
          className="mt-[clamp(2.5rem,6vw,4rem)]"
        />
      </div>
    </section>
  );
}
