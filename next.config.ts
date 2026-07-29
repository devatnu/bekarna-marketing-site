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
   * none of. Partner logos are SVGs — a format next/image never optimises
   * anyway — so this costs nothing today. Raster logos should be exported at
   * the right size before being committed.
   */
  images: { unoptimized: true },
};

export default nextConfig;
