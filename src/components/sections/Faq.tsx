import { FAQ } from "@/data/content";
import { JsonLdScript } from "@/components/JsonLdScript";
import { faqSchema } from "@/lib/jsonld";
import { ModuleHeader } from "@/components/ui/Section";

/**
 * 9 - FAQ, and the last thing before the footer.
 *
 * Native <details>/<summary>, so it opens and closes with no JavaScript and no
 * client component. `name="faq"` makes the group mutually exclusive - opening one
 * closes the others - which is a browser behaviour, not a script.
 *
 * The FAQPage JSON-LD is generated from the same array that renders here, so the
 * markup and the structured data cannot disagree.
 *
 * ⚠️ Four of these answers are unconfirmed - the fee, the settlement window, the
 * refund policy and the payment stack. Structured data makes them eligible to
 * appear directly in search results, so a wrong answer gets published twice.
 * They're flagged in src/data/content.ts.
 */
export function Faq() {
  return (
    <section id="faq" className="t-section bg-surface">
      <div className="t-container">
        <JsonLdScript schema={faqSchema()} />

        <ModuleHeader
          eyebrow="Questions"
          title="The things people ask first."
          align="center"
          className="max-w-[40rem]"
        />

        <div className="mx-auto mt-[clamp(2.5rem,6vw,3.5rem)] max-w-[44rem]">
          <ul className="divide-y divide-line border-y border-line">
            {FAQ.map((item) => (
              <li key={item.q}>
                <details name="faq" className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 py-4 text-left active:bg-paper">
                    <h3 className="text-h3">{item.q}</h3>
                    {/* Rotates when the parent <details> is open. CSS only. */}
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-green transition-transform duration-200 group-open:rotate-45"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    </span>
                  </summary>
                  <p className="t-prose pb-5 pr-10 text-body text-copy">{item.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
