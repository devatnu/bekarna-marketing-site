import { APP_URL } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * The site's one call to action. Every instance points at bekarna.app.
 *
 * `rel="noopener"` because it's a cross-origin target; deliberately **not**
 * `nofollow` — we want the link equity to flow to the product domain. Press
 * states only, no hover-only affordance.
 */
export function AppCta({
  children = "Get the app",
  variant = "primary",
  fullWidth = false,
  className,
  /** Where on the page this CTA sits — surfaces in analytics later. */
  source,
}: {
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "onDark";
  fullWidth?: boolean;
  className?: string;
  source?: string;
}) {
  const base =
    "inline-flex min-h-[var(--tap-min)] items-center justify-center gap-2 rounded-[var(--radius-md)] px-6 " +
    "font-[family-name:var(--font-body)] text-[15px] font-semibold leading-none " +
    "transition-transform duration-100 ease-out active:scale-[0.97] motion-reduce:active:scale-100";

  const variants = {
    primary: "bg-ink text-white active:bg-[#1f241f]",
    outline: "border border-border bg-surface text-ink active:bg-surface-sunken",
    onDark: "bg-white text-ink active:bg-mint",
  } as const;

  return (
    <a
      href={source ? `${APP_URL}?utm_source=bekarna.in&utm_medium=site&utm_content=${source}` : APP_URL}
      rel="noopener"
      className={cn(base, variants[variant], fullWidth && "w-full", className)}
    >
      {children}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M4 12h16m0 0l-6-6m6 6l-6 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
