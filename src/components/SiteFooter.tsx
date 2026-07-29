import Link from "next/link";
import { LotusMark } from "@/components/LotusMark";
import { APP_URL, NGO_SHARE_PCT, PLATFORM_FEE_PCT, SITE_NAME } from "@/lib/site";

/**
 * Footer. Carries the plain-language economics again (the 95/5 split is the
 * single most load-bearing trust fact on the site) and real internal links —
 * descriptive text, not "click here".
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-5xl px-5 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <span className="flex items-center gap-2">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] border border-green bg-ink p-1.5">
                <LotusMark className="text-white" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-[17px] font-bold text-ink">
                {SITE_NAME}
              </span>
            </span>
            <p className="t-caption mt-3">
              A giving platform connecting Indian givers to verified NGOs and
              religious institutions of all faiths. {NGO_SHARE_PCT}% of every
              donation reaches the organisation; {PLATFORM_FEE_PCT}% keeps the
              platform running.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <h2 className="t-label">Explore</h2>
            <Link href="/" className="t-body text-ink-soft">
              What Be Karna is
            </Link>
            <Link href="/partners" className="t-body text-ink-soft">
              Organisations we work with
            </Link>
            <a href={APP_URL} rel="noopener" className="t-body text-ink-soft">
              Open the giving app
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-caption">
            © {year} {SITE_NAME}. Built in Bharat.
          </p>
          <p className="t-caption">
            Donations are made in the app at{" "}
            <a href={APP_URL} rel="noopener" className="text-accent underline underline-offset-2">
              bekarna.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
