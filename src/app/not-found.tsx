import type { Metadata } from "next";
import Link from "next/link";
import { AppCta } from "@/components/AppCta";

/** 404s must never be indexed — a soft-404 in the index outranks nothing and
 * dilutes crawl budget. */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="flex flex-1 items-center">
      <div className="mx-auto w-full max-w-5xl px-5 py-24">
        <p className="t-label">404</p>
        <h1 className="t-h1 mt-3 max-w-[22ch] text-balance">
          That page isn&apos;t here.
        </h1>
        <p className="t-body mt-4 max-w-[44ch] text-ink-soft">
          It may have moved. Start from the beginning, or open the app if you came
          here to give.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-[var(--tap-min)] items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface px-6 font-[family-name:var(--font-body)] text-[15px] font-semibold text-ink active:bg-surface-sunken"
          >
            Back to home
          </Link>
          <AppCta source="404">Get the app</AppCta>
        </div>
      </div>
    </main>
  );
}
