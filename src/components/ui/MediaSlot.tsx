import { cn } from "@/lib/cn";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TEMPORARY. Every image on this site is currently a labelled rectangle.
 *
 * Each slot states what belongs in it and at what ratio, so the art direction
 * can be briefed straight off the page. Replacing one means swapping the
 * component for an <img>/next/image at the SAME aspect ratio - the ratio is
 * baked into the layout, so keeping it means nothing reflows.
 *
 * Delete this file, and the t-hatch utilities in globals.css, once the last
 * slot is filled.
 * ─────────────────────────────────────────────────────────────────────────────
 */

interface SlotProps {
  /** CSS aspect-ratio, e.g. "16 / 9". Drives the box; no fixed heights. */
  ratio: string;
  /** What this image is, in a few words. Shown in the placeholder. */
  label: string;
  /** The art direction brief - what should actually be shot or captured. */
  note: string;
  /** Match the surrounding section so the hatch stays legible. */
  tone?: "light" | "dark";
  className?: string;
}

function SlotFrame({
  ratio,
  label,
  note,
  tone = "light",
  kind,
  className,
}: SlotProps & { kind: string }) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg",
        dark ? "t-hatch-dark border border-on-dark-line" : "t-hatch border border-line",
        className,
      )}
      // Inline because the ratio is per-instance data, not a design token.
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-5 text-center">
        <span
          className={cn(
            "t-eyebrow rounded-full px-2.5 py-1",
            dark ? "bg-on-dark/10 text-on-dark-muted" : "bg-paper/80 text-muted",
          )}
        >
          {kind} · {ratio.replace(/\s/g, "")}
        </span>
        <span
          className={cn(
            "text-h3 font-display font-semibold",
            dark ? "text-on-dark" : "text-ink",
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            "max-w-[42ch] text-small",
            dark ? "text-on-dark-muted" : "text-muted",
          )}
        >
          {note}
        </span>
      </div>
    </div>
  );
}

/** A photograph slot - people, places, warmth. */
export function PhotoSlot(props: SlotProps) {
  return <SlotFrame {...props} kind="Photo" />;
}

/**
 * A product-screenshot slot, wrapped in a suggestion of app chrome so it reads
 * as "this is the actual product" rather than as another photo.
 */
export function AppSlot(props: SlotProps) {
  const dark = props.tone === "dark";
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border p-2 shadow-sm",
        dark
          ? "border-on-dark-line bg-on-dark/5"
          : "border-line bg-paper",
        props.className,
      )}
    >
      <div className="flex items-center gap-1.5 px-2 pb-2 pt-1">
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
        <span className="size-2 rounded-full bg-line" />
      </div>
      <SlotFrame {...props} className="rounded-md" kind="App UI" />
    </div>
  );
}

