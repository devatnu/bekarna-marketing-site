import { AppCta } from "@/components/AppCta";
import { LotusMark } from "@/components/LotusMark";

/**
 * Fixed bottom CTA bar for the partners page — always visible, one action.
 *
 * `position: fixed` with no JavaScript, so it costs nothing at load. The page
 * adds matching bottom padding (see /partners) so the bar can never cover the
 * footer's last line, and it respects the iOS safe-area inset.
 */
export function StickyCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center gap-4 px-5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-green bg-ink p-1.5 sm:size-10">
          <LotusMark className="text-white" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="truncate font-[family-name:var(--font-display)] text-[14px] font-semibold text-ink sm:text-[15px]">
            Give to any of these organisations
          </p>
          <p className="t-caption hidden truncate sm:block">
            Verified NGOs, 95% to the cause, instant 80G receipts.
          </p>
        </div>

        <AppCta source="partners-sticky" className="shrink-0 px-4 text-[14px]">
          Get the app
        </AppCta>
      </div>
    </div>
  );
}
