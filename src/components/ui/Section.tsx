import { cn } from "@/lib/cn";

type Tone = "paper" | "tint" | "dark";

const TONE: Record<Tone, string> = {
  paper: "bg-paper",
  tint: "bg-surface",
  dark: "bg-green-deep text-on-dark",
};

/**
 * One page section: full-bleed background, fluid vertical rhythm, and an inner
 * container so every section's content shares the same left and right edge.
 *
 * `id` doubles as the anchor target for the header nav - the ids live in
 * NAV_LINKS so the two can't drift.
 */
export function Section({
  id,
  tone = "paper",
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn(TONE[tone], "t-section", className)}>
      <div className="t-container">{children}</div>
    </section>
  );
}

/**
 * Duna's module header: a small tracked category label, a moderate headline,
 * and one paragraph. Repeated verbatim across sections 3-7, which is what makes
 * the page feel like a system rather than eight bespoke layouts.
 */
export function ModuleHeader({
  eyebrow,
  title,
  body,
  tone = "light",
  align = "start",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "start" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        align === "center" && "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      <p className={cn("t-eyebrow", dark ? "text-marigold" : "text-green")}>{eyebrow}</p>
      <h2 className={cn("mt-4 text-h2 max-w-[20ch]", dark && "text-on-dark")}>{title}</h2>
      {body ? (
        <p
          className={cn(
            "t-prose mt-5 text-lead",
            dark ? "text-on-dark-muted" : "text-copy",
            align === "center" && "mx-auto",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
