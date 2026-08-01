import { cn } from "@/lib/cn";
import { APP_URL } from "@/lib/site";

/**
 * The only call to action on this site. Every instance points at bekarna.app -
 * there is deliberately no second destination competing with it.
 *
 * Press states rather than hover: the active scale reads correctly on touch,
 * where :hover either never fires or sticks after the tap.
 */
export function AppCta({
  children = "Start giving",
  variant = "primary",
  size = "md",
  className,
}: {
  children?: React.ReactNode;
  variant?: "primary" | "ink" | "onDark" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const variants = {
    primary: "bg-green text-white active:bg-green-dark",
    /** The header button. `ink` is the site's black - see the token. */
    ink: "bg-ink text-white active:bg-black",
    onDark: "bg-on-dark text-green-deep active:bg-mint",
    ghost: "bg-transparent text-ink border border-line active:bg-surface-2",
  } as const;

  // Radius lives here rather than in the shared base classes below, and rather
  // than being passed in via className: cn() is a plain joiner, so a `rounded-*`
  // from the caller would sit alongside the base one and let stylesheet order
  // decide the winner.
  const sizes = {
    // `sm` is the header button: exactly 40px tall with an 8px radius. A fixed
    // height, not a floor, so it can't grow with the line-height of its label.
    // That is just under the 44px touch-target guideline; accepted deliberately
    // for the header, where the 68px row keeps it comfortable to hit.
    sm: "h-10 rounded-cta-sm px-4 text-small",
    // The in-page CTAs: 16px radius, and they stay above the 44px floor.
    md: "min-h-[48px] rounded-cta px-6 text-[0.9375rem]",
    lg: "min-h-[56px] rounded-cta px-8 text-[1rem]",
  } as const;

  return (
    <a
      href={APP_URL}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-semibold",
        "transition-transform duration-150 active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
      <ArrowGlyph />
    </a>
  );
}

function ArrowGlyph() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-[0.9em] shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/**
 * Duna's quiet "Explore" affordance at the foot of each module. Anchors to a
 * section on this page - it is not a second CTA competing with the app.
 */
export function ExploreLink({
  href,
  children,
  tone = "light",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-[44px] items-center gap-1.5 text-[0.9375rem] font-semibold",
        tone === "dark" ? "text-marigold" : "text-green",
      )}
    >
      {children}
      <ArrowGlyph />
    </a>
  );
}
