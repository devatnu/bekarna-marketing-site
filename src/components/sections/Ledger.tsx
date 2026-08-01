import { AppSlot } from "@/components/ui/MediaSlot";
import { ModuleHeader, Section } from "@/components/ui/Section";

/**
 * 4 - The proof. The charity:water moment, and the emotional peak of the page.
 *
 * The one dark section on the site. That's a deliberate departure from Duna's
 * all-white run of modules: this is the claim the whole site rests on, and
 * giving it its own scene stops it reading as just another feature block. The
 * ledger screenshot is the largest image on the page.
 */
export function Ledger() {
  return (
    <Section id="ledger" tone="dark">
      <div className="mx-auto max-w-[46rem] text-center">
        <ModuleHeader
          eyebrow="Transparency"
          title="Every rupee, on the record."
          body="Open the ledger and find the entry for your donation: what you gave, the day it moved, the organisation that received it, and the initiative it funded. Not a summary - the actual line."
          tone="dark"
          align="center"
        />
      </div>

      <AppSlot
        ratio="16 / 10"
        label="The ledger"
        note="The hero product shot. A real ledger view: dated entries, amounts, receiving organisation, initiative. Legible enough to read a row - this image is the proof, so it can't be a blurred mock."
        tone="dark"
        className="mt-[clamp(2.5rem,6vw,4rem)]"
      />

      <ul className="mt-[clamp(2rem,4vw,3rem)] grid gap-6 sm:grid-cols-3">
        {LEDGER_FACTS.map((fact) => (
          <li key={fact.title} className="border-t border-on-dark-line pt-4">
            <h3 className="text-h3 text-on-dark">{fact.title}</h3>
            <p className="mt-1.5 text-small text-on-dark-muted">{fact.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

const LEDGER_FACTS = [
  {
    title: "Timestamped",
    body: "Each entry carries the date and time the transfer actually settled.",
  },
  {
    title: "Named",
    body: "The receiving organisation and the funded initiative, on every line.",
  },
  {
    title: "Yours to keep",
    body: "Export your full giving history whenever you want it.",
  },
];
