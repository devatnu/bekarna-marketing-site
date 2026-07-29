import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { NGO_SHARE_PCT, SITE_NAME } from "@/lib/site";

/**
 * The site-wide social share card (WhatsApp, X, LinkedIn previews).
 *
 * Living at the app root means Next attaches it to every page's og:image and
 * twitter:image automatically — one branded card, no per-page wiring. Rendered
 * once at build time, since nothing here is request-dependent.
 */

export const alt =
  "Be Karna — donate to verified NGOs and religious institutions of all faiths in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const GREEN = "#58A870";

/** Brand fonts. satori reads ttf/otf/woff only — never woff2. */
async function fonts() {
  const dir = path.join(process.cwd(), "public", "fonts");
  const [display, body] = await Promise.all([
    readFile(path.join(dir, "bricolage-grotesque-latin-700-normal.woff")),
    readFile(path.join(dir, "inter-latin-400-normal.woff")),
  ]);
  return [
    { name: "Bricolage", data: display, weight: 700 as const, style: "normal" as const },
    { name: "Inter", data: body, weight: 400 as const, style: "normal" as const },
  ];
}

/** Lotus mark, inlined — satori renders SVG paths but not our component's
 * currentColor setup. Petal opacities carry the depth. */
function Lotus({ size: s, color, opacity = 1 }: { size: number; color: string; opacity?: number }) {
  return (
    <svg width={s} height={(s * 555) / 528} viewBox="0 0 528 555" style={{ opacity }}>
      <path opacity="0.9" d="M263.512 0C118.796 101.028 263.512 277.076 263.512 277.076C263.512 277.076 408.228 101.028 263.512 0Z" fill={color} />
      <path opacity="0.9" d="M0 191.468C51.3651 360.321 263.516 277.09 263.516 277.09C263.516 277.09 140.803 85.0545 0 191.468Z" fill={color} />
      <path opacity="0.9" d="M100.667 501.249C277.127 504.577 263.528 277.088 263.528 277.088C263.528 277.088 42.9715 334.455 100.667 501.249Z" fill={color} />
      <path d="M426.394 501.236C484.089 334.442 263.532 277.077 263.532 277.077C263.532 277.077 249.933 504.565 426.394 501.236Z" fill={color} />
      <path opacity="0.9" d="M527.037 191.448C386.233 85.0346 263.521 277.07 263.521 277.07C263.521 277.07 475.675 360.3 527.037 191.448Z" fill={color} />
      <path opacity="0.6" d="M0.00500488 362.712C140.808 469.125 263.521 277.089 263.521 277.089C263.521 277.089 51.3701 193.861 0.00500488 362.712Z" fill={color} />
      <path opacity="0.6" d="M263.532 554.16C408.247 453.132 263.532 277.085 263.532 277.085C263.532 277.085 118.817 453.132 263.532 554.16Z" fill={color} />
      <path opacity="0.6" d="M527.043 362.694C475.68 193.842 263.527 277.073 263.527 277.073C263.527 277.073 386.241 469.106 527.043 362.694Z" fill={color} />
      <path opacity="0.6" d="M100.65 52.924C42.9552 219.719 263.512 277.083 263.512 277.083C263.512 277.083 277.111 49.5957 100.65 52.924Z" fill={color} />
      <path opacity="0.6" d="M426.377 52.9128C249.916 49.5844 263.516 277.073 263.516 277.073C263.516 277.073 484.073 219.707 426.377 52.9128Z" fill={color} />
    </svg>
  );
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          padding: "0 74px",
          backgroundColor: "#FAFAF7",
        }}
      >
        {/* Watermark lotus, bleeding off the right. */}
        <div style={{ position: "absolute", right: -120, bottom: -160, display: "flex" }}>
          <Lotus size={540} color={GREEN} opacity={0.1} />
        </div>

        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 54,
              height: 54,
              borderRadius: 16,
              border: `2px solid ${GREEN}`,
              backgroundColor: "#2B312D",
            }}
          >
            <Lotus size={30} color="#FFFFFF" />
          </div>
          <span style={{ fontFamily: "Bricolage", fontSize: 32, color: "#2B312D" }}>
            {SITE_NAME}
          </span>
        </div>

        <span
          style={{
            fontFamily: "Bricolage",
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: -1.6,
            color: "#2B312D",
            marginTop: 42,
            maxWidth: 900,
          }}
        >
          Give to NGOs you can actually verify.
        </span>

        <span
          style={{
            fontFamily: "Inter",
            fontSize: 29,
            lineHeight: 1.5,
            color: "#4A524C",
            marginTop: 26,
            maxWidth: 860,
          }}
        >
          {NGO_SHARE_PCT}% reaches the cause. Every rupee ledgered. Instant 80G
          receipts. NGOs and religious institutions of all faiths.
        </span>

        {/* Domain strip */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 46 }}>
          <div style={{ display: "flex", width: 46, height: 3, backgroundColor: GREEN }} />
          <span style={{ fontFamily: "Inter", fontSize: 24, color: "#6B6B66" }}>
            bekarna.in
          </span>
        </div>
      </div>
    ),
    { ...size, fonts: await fonts() },
  );
}
