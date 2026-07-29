import Link from "next/link";
import { Wordmark } from "@/components/LotusMark";
import { AppCta } from "@/components/AppCta";

/**
 * Site chrome. A real <nav> with descriptive link text (not "click here"), and
 * no JavaScript — two destinations don't warrant a hamburger menu.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-base/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-4 px-5">
        <Link href="/" aria-label="Be Karna home" className="shrink-0">
          <Wordmark size={30} />
        </Link>

        <nav aria-label="Main" className="ml-auto flex items-center gap-1">
          <Link
            href="/partners"
            className="flex min-h-[40px] items-center rounded-[var(--radius-sm)] px-3 font-[family-name:var(--font-body)] text-[14px] font-medium text-ink-soft active:bg-surface-sunken"
          >
            Partner NGOs
          </Link>
        </nav>

        <AppCta source="header" className="hidden px-4 text-[14px] sm:inline-flex">
          Get the app
        </AppCta>
      </div>
    </header>
  );
}
