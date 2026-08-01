import Image from "next/image";
import { cn } from "@/lib/cn";
import { SITE_NAME } from "@/lib/site";

/**
 * The Be Karna lotus.
 *
 * Both files in public/brand/ were derived from the supplied logo_light.png and
 * logo_dark.png, which ship with their backgrounds baked in (a white square and
 * a #2B312D square). Those were un-matted to real alpha and resized 3200px →
 * 256px - an opaque square would have blocked the header's backdrop blur, and
 * 159KB is a lot to spend on a 28px mark.
 *
 * Two tone variants because the artwork is a flat colour, not a recolourable
 * silhouette: `light` is the green lotus for pale backgrounds, `dark` the white
 * one for the green-deep sections.
 */
export function LotusMark({
  tone = "light",
  size = 28,
  priority = false,
  className,
}: {
  tone?: "light" | "dark";
  size?: number;
  /** Preload. Only the header mark earns this - it's the one above the fold. */
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={tone === "dark" ? "/brand/lotus-white.png" : "/brand/lotus-green.png"}
      alt=""
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}

/** Lotus plus wordmark, as it appears in the header and footer. */
export function Wordmark({
  tone = "light",
  priority = false,
  className,
}: {
  tone?: "light" | "dark";
  priority?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <LotusMark tone={tone} size={28} priority={priority} />
      <span
        className={cn(
          "font-display text-[1.0625rem] font-bold tracking-[-0.02em]",
          tone === "dark" ? "text-on-dark" : "text-ink",
        )}
      >
        {SITE_NAME}
      </span>
    </span>
  );
}
