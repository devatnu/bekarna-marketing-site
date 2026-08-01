import { VERIFICATION_CHECKS } from "@/data/content";
import { ModuleHeader } from "@/components/ui/Section";

/**
 * 4 - How verification works, as a focus wheel.
 *
 * Sits directly after the NGO wall, because that's where the page claims these are
 * India's most trusted organisations. Without this section that claim is an
 * adjective with nothing behind it.
 *
 * Each row rises to the front in turn - full size, opaque, white card, label in
 * ink - while its neighbours sit part-way through the same transition. The taper
 * away from the focused row is a side effect of the stagger rather than something
 * authored per row; see the .t-stack block in globals.css.
 *
 * Pure CSS, no client component. Every row is in the markup at full text, so the
 * animation never hides content from crawlers or from assistive tech.
 *
 * The list itself is unconfirmed - see the warning on VERIFICATION_CHECKS.
 */

/**
 * One hue per check. The only multi-accent surface on the site, and it stays
 * inside these 40px tiles. Ordered to match VERIFICATION_CHECKS.
 */
const CHIPS = [
  "bg-chip-violet",
  "bg-chip-blue",
  "bg-chip-teal",
  "bg-chip-green",
  "bg-chip-lavender",
  "bg-chip-tan",
  "bg-chip-sand",
];

export function Verification() {
  return (
    <section id="verification" className="t-section bg-surface">
      <div className="t-container">
        <div className="grid items-center gap-[clamp(2.5rem,6vw,4rem)] lg:grid-cols-12">
          <div className="lg:col-span-5">
            {/* No body copy: the seven rows are self-explanatory and read better
                without a paragraph competing with them. */}
            <ModuleHeader
              eyebrow="Verification"
              title="Every check, before a rupee is raised."
            />
          </div>

          <div className="lg:col-span-7">
            <ul className="t-stack mx-auto flex max-w-[30rem] flex-col gap-1.5">
              {VERIFICATION_CHECKS.map((check, i) => (
                <li
                  key={check.label}
                  style={{ "--i": i } as React.CSSProperties}
                  className="t-stack-item flex items-center gap-3.5 rounded-xl px-3.5 py-2.5 sm:gap-4 sm:px-4 sm:py-3"
                >
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-[0.7rem] text-white ${CHIPS[i]}`}
                  >
                    {ICONS[check.icon]}
                  </span>
                  {/* Inherits the row's animated colour. */}
                  <span className="text-h3 font-semibold">{check.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const svg = {
  "aria-hidden": true as const,
  viewBox: "0 0 24 24",
  className: "size-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS = {
  /** Scan frame, for identity. */
  identity: (
    <svg {...svg}>
      <path d="M4 8V5h3M20 8V5h-3M4 16v3h3M20 16v3h-3" />
      <path d="M8 12h8" />
    </svg>
  ),
  people: (
    <svg {...svg}>
      <circle cx="9" cy="9" r="2.6" />
      <path d="M4 19c0-2.5 2.2-4.2 5-4.2s5 1.7 5 4.2" />
      <path d="M16 7.2a2.6 2.6 0 0 1 0 5M17.5 14.9c1.6.5 2.5 1.8 2.5 3.6" />
    </svg>
  ),
  doc: (
    <svg {...svg}>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z" />
      <path d="M14 3v4h4M9 13h6M9 17h4" />
    </svg>
  ),
  /** Receipt with a torn foot, for 80G. */
  receipt: (
    <svg {...svg}>
      <path d="M6 3h12v16.5l-3-1.5-3 1.5-3-1.5-3 1.5z" />
      <path d="M9.5 8h5M9.5 12h5" />
    </svg>
  ),
  bank: (
    <svg {...svg}>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />
    </svg>
  ),
  pin: (
    <svg {...svg}>
      <path d="M12 21s6.5-6 6.5-11a6.5 6.5 0 1 0-13 0C5.5 15 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  ),
  /** Shield with a tick, for ongoing re-screening. */
  shield: (
    <svg {...svg}>
      <path d="M12 3 5 6v5.5c0 4.3 2.9 7.6 7 9.5 4.1-1.9 7-5.2 7-9.5V6z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </svg>
  ),
};
