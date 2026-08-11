import { LegalPage } from "@/components/LegalPage";
import { legalDoc } from "@/data/legal";
import { pageMetadata } from "@/lib/seo";

const doc = legalDoc("delivery")!;

// Through pageMetadata(), never hand-written: a page-level `openGraph` object
// REPLACES the root layout's instead of merging with it. See src/lib/seo.ts.
export const metadata = pageMetadata({
  title: doc.title,
  description: doc.intro,
  path: "/delivery",
});

export default function Page() {
  return <LegalPage doc={doc} />;
}
