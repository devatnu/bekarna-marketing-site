/**
 * Renders JSON-LD into the document.
 *
 * A plain <script> tag rather than next/script: this has to be in the static HTML
 * for crawlers that don't run JavaScript, which is the entire point of it.
 * dangerouslySetInnerHTML is required because React escapes text children, and
 * escaped JSON is invalid JSON-LD. The content is compiled from typed data in
 * this repo, never from user input.
 */
export function JsonLdScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
