import { cn } from "@/lib/cn";

/**
 * Be Karna lotus/chakra mark — 10 radial petals with layered opacities.
 * Inherits colour via `currentColor`, so tint it by setting text colour.
 * Inline SVG (not next/image) so it costs no request and can't shift layout.
 */
export function LotusMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 528 555"
      fill="none"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      <path opacity="0.9" d="M263.512 0C118.796 101.028 263.512 277.076 263.512 277.076C263.512 277.076 408.228 101.028 263.512 0Z" fill="currentColor" />
      <path opacity="0.9" d="M0 191.468C51.3651 360.321 263.516 277.09 263.516 277.09C263.516 277.09 140.803 85.0545 0 191.468Z" fill="currentColor" />
      <path opacity="0.9" d="M100.667 501.249C277.127 504.577 263.528 277.088 263.528 277.088C263.528 277.088 42.9715 334.455 100.667 501.249Z" fill="currentColor" />
      <path d="M426.394 501.236C484.089 334.442 263.532 277.077 263.532 277.077C263.532 277.077 249.933 504.565 426.394 501.236Z" fill="currentColor" />
      <path opacity="0.9" d="M527.037 191.448C386.233 85.0346 263.521 277.07 263.521 277.07C263.521 277.07 475.675 360.3 527.037 191.448Z" fill="currentColor" />
      <path opacity="0.6" d="M0.00500488 362.712C140.808 469.125 263.521 277.089 263.521 277.089C263.521 277.089 51.3701 193.861 0.00500488 362.712Z" fill="currentColor" />
      <path opacity="0.6" d="M263.532 554.16C408.247 453.132 263.532 277.085 263.532 277.085C263.532 277.085 118.817 453.132 263.532 554.16Z" fill="currentColor" />
      <path opacity="0.6" d="M527.043 362.694C475.68 193.842 263.527 277.073 263.527 277.073C263.527 277.073 386.241 469.106 527.043 362.694Z" fill="currentColor" />
      <path opacity="0.6" d="M100.65 52.924C42.9552 219.719 263.512 277.083 263.512 277.083C263.512 277.083 277.111 49.5957 100.65 52.924Z" fill="currentColor" />
      <path opacity="0.6" d="M426.377 52.9128C249.916 49.5844 263.516 277.073 263.516 277.073C263.516 277.073 484.073 219.707 426.377 52.9128Z" fill="currentColor" />
    </svg>
  );
}

/** The lotus on its dark tile with a green keyline — the app icon, at any size. */
export function Wordmark({
  size = 32,
  showText = true,
}: {
  size?: number;
  showText?: boolean;
}) {
  return (
    <span className="flex items-center gap-2">
      <span
        className="flex shrink-0 items-center justify-center rounded-[10px] border border-green bg-ink"
        style={{ width: size, height: size, padding: Math.round(size * 0.19) }}
      >
        <LotusMark className="text-white" />
      </span>
      {showText && (
        <span className="font-[family-name:var(--font-display)] text-[17px] font-bold tracking-[-0.01em] text-ink">
          Be Karna
        </span>
      )}
    </span>
  );
}
