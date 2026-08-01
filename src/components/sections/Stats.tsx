import { STATS } from "@/data/content";

/**
 * 2 - Stats, straight after the fold.
 *
 * No headline and no eyebrow: the numbers arrive immediately as the first
 * substantiation of the hero's promise. Marigold is the only place the accent
 * colour appears at size.
 *
 * NOTE: every figure is placeholder - see the warning in src/data/content.ts.
 */
export function Stats() {
  return (
    <section className="border-b border-line bg-paper py-[clamp(2.5rem,6vw,4rem)]">
      <div className="t-container">
        <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-3">
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
      </div>
    </section>
  );
}
