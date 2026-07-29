import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Builds a page's complete Metadata.
 *
 * This helper exists because of a real Next.js metadata trap: `openGraph` and
 * `twitter` are **replaced** by a child page, not deep-merged with the root
 * layout's. A page that declares `openGraph: { title, description }` silently
 * loses the root's `type`, `siteName` and `locale`, and one declaring
 * `twitter: { title }` loses `card`, degrading the preview to a small `summary`
 * card. Both are easy to ship without noticing, since the tags simply go
 * missing rather than erroring.
 *
 * So: every page builds its social tags here, in full, from one call.
 * `og:image` is the exception — the app-root opengraph-image.tsx file
 * convention is merged in separately by Next and needs no wiring.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  /** Page title without the brand — the layout's template appends it. */
  title: string;
  description: string;
  /** Site-relative canonical path, e.g. "/" or "/partners". */
  path: string;
}): Metadata {
  const socialTitle = `${title} · ${SITE_NAME}`;

  return {
    title,
    description,
    // Canonical per page, so no two URLs compete for the same content.
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url: new URL(path, SITE_URL).toString(),
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
