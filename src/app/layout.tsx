import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLdScript } from "@/components/JsonLdScript";
import { organizationSchema, webSiteSchema } from "@/lib/jsonld";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

/**
 * Self-hosted at build time by next/font, with `display: swap` and automatic
 * size-adjust fallback metrics — text paints immediately and the swap causes no
 * layout shift, which keeps CLS at zero. Only the weights actually used are
 * requested, to keep the transferred CSS small.
 */
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  // Makes every relative canonical/OG URL below resolve absolutely.
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Donate to Verified NGOs in India`,
    // Child pages supply their own title; this keeps the brand suffixed.
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "Charity and Philanthropy",
  keywords: [
    "donate to NGO India",
    "verified NGOs India",
    "80G tax deductible donation",
    "online donation India",
    "transparent charity platform",
    "temple donation online",
    "faith-neutral giving",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: "/",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF7",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${bricolage.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        {/* Site-wide graphs. Page-specific WebPage/ItemList nodes are added per page. */}
        <JsonLdScript schemas={[organizationSchema(), webSiteSchema()]} />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-sm)] focus:bg-ink focus:px-4 focus:py-2 focus:text-[14px] focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
