import { SCALE } from "@/data/partners";
import { LotusMark } from "@/components/LotusMark";

/**
 * Proof of scale. Social proof stated as plain counts — no "join thousands who
 * are changing lives", no manufactured momentum.
 *
 * The figures live in src/data/partners.ts and are placeholders until audited;
 * only publish numbers you can substantiate, since this is the section most
 * likely to be quoted back at you.
 */

function crores(rupees: number): string {
  const cr = rupees / 1_00_00_000;
  if (cr >= 1) return `₹${cr.toFixed(cr >= 10 ? 0 : 1).replace(/\.0$/, "")} crore`;
  return `₹${(rupees / 1_00_000).toFixed(0)} lakh`;
}

export function ProofOfScale() {
  const stats = [
    { value: SCALE.givers, label: "Givers on Be Karna" },
    { value: SCALE.organisations, label: "Verified organisations" },
    { value: crores(SCALE.totalGivenRupees), label: "Given so far" },
    { value: SCALE.statesCovered, label: "States and union territories" },
  ];

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-20 size-80 text-green opacity-[0.05]"
      >
        <LotusMark />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:py-20">
        <p className="t-label">Proof of scale</p>
        <h2 className="t-h1 mt-3 max-w-[22ch] text-balance">
          Giving is already happening here, quietly.
        </h2>

        <dl className="mt-11 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-[family-name:var(--font-display)] text-[clamp(1.75rem,7vw,2.5rem)] font-bold leading-none tracking-[-0.02em] text-ink">
                  {s.value}
                </span>
                <span className="t-caption mt-2 block">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
