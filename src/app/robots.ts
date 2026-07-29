import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Required by `output: "export"` — emits robots.txt as a file at build time. */
export const dynamic = "force-static";

/**
 * robots.txt — everything is crawlable; this is a brochure site with no private
 * routes. `host` names the canonical domain, which matters here because
 * bekarna.in and bekarna.app are separate properties.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next's build output; nothing indexable, and crawling it wastes budget.
        disallow: ["/_next/static/chunks/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
