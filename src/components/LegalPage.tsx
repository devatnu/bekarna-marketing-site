import Link from "next/link";
import type { LegalBlock, LegalDoc } from "@/data/legal";
import { EFFECTIVE_DATE, ENTITY_COMPLETE, POLICY_VERSION, TBC } from "@/data/entity";

/**
 * Shared shell for the legal pages.
 *
 * These documents are published as being in force. The one guard that remains is
 * `ENTITY_COMPLETE`: while any value in src/data/entity.ts is still `TBC` — the
 * LLPIN, the registered address, the Grievance Officer's name — a notice appears
 * at the top of every document. A Terms page that reads as final while its
 * registered office is blank is worse than one that admits the gap, and the
 * Grievance Officer's details in particular are a statutory requirement rather
 * than a nicety.
 *
 * The notice disappears on its own the moment those values land. Nothing else
 * needs deleting.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <main id="top" className="t-section bg-paper">
      <article className="t-container">
        <div className="mx-auto max-w-[46rem]">
          <p className="t-eyebrow text-green">Legal</p>
          <h1 className="mt-4 text-h2">{doc.title}</h1>
          <p className="t-prose mt-5 text-lead text-copy">{doc.intro}</p>

          <p className="mt-4 text-small text-muted">
            Version {POLICY_VERSION} · Effective {EFFECTIVE_DATE}
          </p>

          {!ENTITY_COMPLETE && (
            <div className="mt-8 rounded-lg border border-marigold bg-marigold/10 p-5">
              <p className="text-small font-semibold text-ink">
                Some entity details are still being finalised.
              </p>
              <p className="mt-1.5 text-small text-copy">
                Fields shown as <Placeholder /> below — company identifiers, the registered
                address, or grievance contact details — are being completed. Everything else on
                this page applies as written. For anything urgent, reach us through the Contact
                page.
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-col gap-9">
            {doc.sections.map((section, i) => (
              <section key={section.heading}>
                <h2 className="text-h3">
                  <span className="mr-2 tabular-nums text-muted">{i + 1}.</span>
                  {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-3.5">
                  {section.blocks.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </div>
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

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p className="t-prose text-body text-copy">{withPlaceholders(block.text)}</p>;

    case "ul":
      return (
        <ul className="t-prose flex flex-col gap-2 text-body text-copy">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5">
              <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-green" />
              <span>{withPlaceholders(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="t-prose flex flex-col gap-2 text-body text-copy">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="shrink-0 tabular-nums font-semibold text-green">{i + 1}.</span>
              <span>{withPlaceholders(item)}</span>
            </li>
          ))}
        </ol>
      );

    // The clauses a reader must not skim past — what Be Karna is not, that a Daan
    // Receipt is not Form 10BE, that a settled donation cannot be reversed.
    case "callout":
      return (
        <div className="rounded-lg border border-green/40 bg-mint/40 p-4">
          <p className="t-prose text-body font-medium text-ink">
            {withPlaceholders(block.text)}
          </p>
        </div>
      );

    case "rows":
      return (
        <dl className="flex flex-col divide-y divide-line rounded-lg border border-line">
          {block.rows.map((row) => (
            <div key={row.label} className="flex flex-col gap-1 p-4 sm:flex-row sm:gap-4">
              <dt className="shrink-0 text-small text-muted sm:w-48">{row.label}</dt>
              <dd className="text-body text-ink">
                {Array.isArray(row.value)
                  ? row.value.map((line, i) => <div key={i}>{withPlaceholders(line)}</div>)
                  : withPlaceholders(row.value)}
              </dd>
            </div>
          ))}
        </dl>
      );
  }
}

/** Visible marker for a value not yet supplied. */
function Placeholder() {
  return (
    <span className="rounded bg-marigold/25 px-1.5 py-0.5 text-small font-medium text-ink">
      to be confirmed
    </span>
  );
}

/**
 * Swap any literal `TBC` in published text for the visible marker.
 *
 * Done at render time rather than in the data so that a missing value can never
 * reach a reader as the bare string "TBC", which would look like a typo instead
 * of an admission.
 */
function withPlaceholders(text: string): React.ReactNode {
  if (!text.includes(TBC)) return text;
  return text.split(TBC).flatMap((part, i) => (i === 0 ? [part] : [<Placeholder key={i} />, part]));
}
