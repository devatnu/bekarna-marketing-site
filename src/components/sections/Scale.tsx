import { PARTNERS, STATS } from "@/data/content";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { ModuleHeader } from "@/components/ui/Section";

/**
 * 6 - You're not alone.
 *
 * Duna's stat trio, lifted almost exactly: three oversized numerals under a
 * short headline. Marigold on the numbers is the only place the accent colour
 * appears at size.
 *
 * The partner wall below is a full-bleed scrolling marquee rather than a grid -
 * it has to run past both edges of the viewport for the effect to read, so it
 * sits outside .t-container while the header and stats stay inside it.
 *
 * NOTE: every figure and every organisation name here is placeholder - see the
 * warning at the top of src/data/content.ts.
 */
export function Scale() {
  return (
    <section id="scale" className="t-section bg-surface">
      <div className="t-container">
        <ModuleHeader
          eyebrow="Where we are"
          title="You're not the first one here."
          body="Real people funding real initiatives, run by organisations that have already been through the checks."
          align="center"
          className="max-w-[42rem]"
        />

        <dl className="mt-[clamp(2.5rem,6vw,4rem)] grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-stat font-bold text-marigold">
                  {stat.value}
                </span>
                <span className="mt-3 block text-h3 text-ink">{stat.label}</span>
                {stat.note ? (
                  <span className="mt-1 block text-small text-muted">{stat.note}</span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>

        <h3 className="t-eyebrow mt-[clamp(3rem,7vw,5rem)] text-center text-muted">
          In partnership with
        </h3>
      </div>

      {/* Full-bleed: outside the container so the rows run off both edges. */}
      <div className="mt-6">
        <LogoMarquee partners={PARTNERS} />
      </div>

      <div className="t-container">
        <p className="mt-6 text-center text-small text-muted">
          Wordmarks stand in until each organisation confirms and sends a logo.
        </p>
      </div>
    </section>
  );
}
