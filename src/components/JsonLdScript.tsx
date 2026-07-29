import type { JsonLd } from "@/lib/jsonld";

/**
 * Renders one or more JSON-LD graphs into the document.
 *
 * Deliberately a server component: structured data must be present in the
 * initial HTML, since crawlers that don't execute JavaScript would otherwise
 * never see it.
 */
export function JsonLdScript({ schemas }: { schemas: JsonLd[] }) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Serialised server-side from our own literals — no user input reaches
          // this, and `<` is escaped so the JSON can't break out of the tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
