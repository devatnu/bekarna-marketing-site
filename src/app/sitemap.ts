import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Required by `output: "export"` — emits sitemap.xml as a file at build time
 * rather than as a route handler. */
export const dynamic = "force-static";

/**
 * sitemap.xml — generated at build time (no request-time APIs, so Next caches
 * it statically). Only canonical, indexable URLs belong here: listing a
 * non-canonical or noindex URL sends crawlers a contradictory signal.
 *
 * bekarna.app is deliberately absent — it's a separate property with its own
 * sitemap, and claiming its URLs here would split ranking between the domains.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Fixed date rather than new Date(): lastModified should reflect when the
  // content actually changed, not when the build ran, or every deploy tells
  // crawlers that every page is new.
  const lastModified = new Date("2026-07-29");

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/partners`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
