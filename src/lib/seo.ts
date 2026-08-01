import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

/**
 * Builds page metadata WITHOUT losing the root layout's Open Graph and Twitter
 * settings.
 *
 * This exists because of a Next behaviour that fails silently: a page's
 * `openGraph` / `twitter` objects REPLACE the root's rather than deep-merging
 * with them. Writing `openGraph: { title }` on a page therefore drops `type`,
 * `siteName` and `locale`; writing `twitter: { title }` drops `card`, and the
 * link preview quietly degrades from a large image card to a small summary. No
 * error, no warning.
 *
 * So every page must go through here rather than declaring metadata by hand.
 */
export function pageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path,
  index = true,
}: {
  title: string;
  description?: string;
  /** Route path, leading slash, e.g. "/privacy". */
  path: string;
  /** Set false for pages that shouldn't be in search results. */
  index?: boolean;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      // Re-stated, not inherited - see the note above.
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url: path,
      title: `${title} · ${SITE_NAME}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${SITE_NAME}`,
      description,
    },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
  };
}
