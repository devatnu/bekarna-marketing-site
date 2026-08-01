import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Pure static export to `out/` — plain HTML, CSS, JS and images with no Node
   * server anywhere. That's what makes this site immune to the cold-start
   * problem: a CDN has nothing to wake up.
   *
   * The site is a brochure with no auth, no DB and no request-time data, so
   * nothing is given up here. If a genuinely dynamic route is ever needed, drop
   * `output` and pick a host that runs the Next server.
   */
  output: "export",

  /**
   * next/image's optimiser needs a running server, which a static export has
   * none of. Export raster images at the size they're displayed before
   * committing them; nothing resizes them at request time.
   */
  images: { unoptimized: true },
};

export default nextConfig;
