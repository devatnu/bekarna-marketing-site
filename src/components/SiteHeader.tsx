import { AppCta } from "@/components/ui/AppCta";
import { Wordmark } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/site";

/**
 * Sticky header, Duna's arrangement: wordmark left, section links centre-left,
 * one CTA hard right.
 *
 * The mobile menu is a native <details> - it opens and closes with no
 * JavaScript, which is what keeps this a pure static export with zero client
 * components. Known trade-off: tapping a link scrolls the page but leaves the
 * disclosure open, because nothing closes it without JS. Acceptable while the
 * nav is four anchors on one page; revisit if the nav ever grows real routes.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <div className="t-container">
        <div className="flex min-h-[68px] items-center justify-between gap-4">
          <a
            href="#top"
            aria-label="Be Karna - back to top"
            className="flex shrink-0 items-center py-2"
          >
            <Wordmark priority />
          </a>

          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center rounded-full px-3.5 text-[0.9375rem] font-medium text-copy active:bg-surface"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5">
            {/* The site's persistent CTA. It lives here rather than in a fixed
                bottom bar: hiding such a bar while the hero's own CTA is on
                screen needs JavaScript. A pure-CSS scroll-timeline version only
                worked in Chromium, and a position:sticky version pinned itself
                immediately because the hero is 88vh - shorter than the viewport,
                so its bottom edge never falls below the pin threshold. */}
            <AppCta size="sm" variant="ink">
              {/* Wordmark + full label + hamburger overflows a 320px header. */}
              <span className="sm:hidden">Give</span>
              <span className="hidden sm:inline">Start giving</span>
            </AppCta>

            <details className="relative md:hidden">
              <summary
                aria-label="Sections menu"
                className="flex size-11 cursor-pointer items-center justify-center rounded-full text-ink active:bg-surface"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                >
                  <path d="M3 6h14M3 10h14M3 14h14" />
                </svg>
              </summary>

              <nav
                aria-label="Sections"
                className="absolute right-0 top-[calc(100%+0.5rem)] w-[min(17rem,calc(100vw-2rem))] rounded-lg border border-line bg-paper p-2 shadow-lg"
              >
                <ul className="flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex min-h-[48px] items-center rounded-md px-3 text-[1rem] font-medium text-copy active:bg-surface"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}

