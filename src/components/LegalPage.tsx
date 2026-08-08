import Link from "next/link";
import type { LegalDoc } from "@/data/legal";

/**
 * Shared shell for the legal pages.
 *
 * Renders the document's section structure plus a visible notice that the text
 * isn't in force yet. The notice is deliberately on the page rather than only in
 * a code comment: an empty Terms page that looks finished is a trap, and this is
 * the one thing that stops the site going live with placeholder legals.
 *
 * Delete the notice, and the per-section guidance, as counsel's text replaces it.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <main className="t-section bg-paper">
      <article className="t-container">
        <div className="mx-auto max-w-[46rem]">
          <p className="t-eyebrow text-green">Legal</p>
          <h1 className="mt-4 text-h2">{doc.title}</h1>
          <p className="t-prose mt-5 text-lead text-copy">{doc.intro}</p>

          <div className="mt-8 rounded-lg border border-marigold bg-marigold/10 p-5">
            <p className="text-small font-semibold text-ink">
              This document is not yet in force.
            </p>
            <p className="mt-1.5 text-small text-copy">
              The sections below are an outline awaiting review by legal counsel. Be
              Karna must not accept donations until this page carries the final text.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-8">
            {doc.sections.map((section, i) => (
              <section key={section.heading}>
                <h2 className="text-h3">
                  <span className="mr-2 tabular-nums text-muted">{i + 1}.</span>
                  {section.heading}
                </h2>
                {/* Drafting note, not published copy. Replace with the real text. */}
                <p className="t-prose mt-2 border-l-2 border-line pl-4 text-body text-muted">
                  {section.note}
                </p>
              </section>
            ))}
          </div>

          <p className="mt-12 text-small text-muted">
            <Link href="/" className="font-semibold text-green">
              Back to bekarna.app
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
