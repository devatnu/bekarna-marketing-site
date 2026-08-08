import Image from "next/image";
import Link from "next/link";
import { Wordmark } from "@/components/ui/Logo";
import { LEGAL_LINKS } from "@/data/legal";
import { APP_URL, SITE_NAME } from "@/lib/site";

/**
 * Full-bleed photographic footer: link columns over the sky, legal line along the
 * bottom, white type throughout. Same treatment on mobile, columns just go two
 * across instead of four.
 *
 * The artwork is a 3:4 portrait frame, centre-cropped by the container - plain
 * `object-cover object-center`, no pre-cropping and no per-breakpoint art
 * direction. It survives that because the composition is a horizon: sky above,
 * sand below, uniform left to right. The horizon lands near the middle of the
 * footer at every width, so the columns sit over sky and the legal line over
 * sand.
 *
 * The scrim is NOT optional here. Unlike the hero, nothing is darkened in this
 * image, and white type has to hold over a mid-tone teal sky at the top and over
 * bright sunlit sand at the bottom - the legal line is the weakest pairing on the
 * page without it. See `t-footer-scrim` in globals.css.
 */

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { href: "#ngos", label: "Verified NGOs" },
      { href: "#verification", label: "Verification" },
      { href: "#initiatives", label: "Initiatives" },
    ],
  },
  {
    heading: "Transparency",
    links: [
      { href: "#passbook", label: "Passbook" },
      { href: "#receipt", label: "Receipts" },
      { href: "#security", label: "Security" },
    ],
  },
  {
    heading: "More",
    links: [
      { href: "#gallery", label: "Gallery" },
      { href: "#faq", label: "Questions" },
    ],
  },
  {
    heading: "Be Karna",
    links: [
      { href: APP_URL, label: "Start giving" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    // Derived from LEGAL_DOCS, so a new document appears here automatically.
    links: LEGAL_LINKS.filter((link) => link.href !== "/contact"),
  },
];

/**
 * The footer mixes three kinds of destination: same-page anchors, real routes,
 * and my.bekarna.app. Routes go through next/link; the other two must stay plain
 * anchors, since Link would try to route "#faq" and an external URL.
 */
function FooterLink({ href, children }: { href: string; children: string }) {
  const className =
    "inline-flex min-h-[36px] items-center text-small text-white/85 active:text-white";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-green-deep text-on-dark">
      <Image
        src="/footer-backdrop.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      <div aria-hidden="true" className="t-footer-scrim absolute inset-0 -z-10" />

      <div className="t-container">
        <div className="flex min-h-[clamp(26rem,42vw,34rem)] flex-col justify-between pb-6 pt-[clamp(3rem,6vw,4.5rem)]">
          <nav aria-label="Footer">
            <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
              {COLUMNS.map((column) => (
                <div key={column.heading}>
                  <h2 className="text-small font-bold text-white">{column.heading}</h2>
                  <ul className="mt-3 flex flex-col">
                    {column.links.map((link) => (
                      <li key={link.href + link.label}>
                        <FooterLink href={link.href}>{link.label}</FooterLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          <div className="mt-[clamp(3rem,8vw,5rem)] flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-small text-white/80">
              <p>
                &copy; {new Date().getFullYear()} {SITE_NAME}
              </p>
              <a href="#security" className="active:text-white">
                Security
              </a>
              <p>Made in India.</p>
            </div>

            <Wordmark tone="dark" className="shrink-0" />
          </div>
        </div>
      </div>
    </footer>
  );
}
