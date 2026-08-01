import type { MetadataRoute } from "next";
import { LEGAL_DOCS } from "@/data/legal";
import { SITE_URL } from "@/lib/site";

/** Required under `output: "export"` - metadata routes are dynamic by default,
 *  and a dynamic route can't be exported. Without this the build fails. */
export const dynamic = "force-static";

/**
 * The homepage plus the legal pages, the latter derived from LEGAL_DOCS so a new
 * document is never left out. A page missing from the sitemap is a page Google
 * finds late.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...LEGAL_DOCS.map((doc) => ({
      url: `${SITE_URL}/${doc.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
