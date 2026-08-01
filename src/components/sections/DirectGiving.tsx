import { DIRECT_STEPS } from "@/data/content";
import { AppSlot } from "@/components/ui/MediaSlot";
import { ExploreLink } from "@/components/ui/AppCta";
import { ModuleHeader, Section } from "@/components/ui/Section";

/**
 * 3 - The answer. The "aha", placed immediately after the tension so the doubt
 * is never left hanging.
 *
 * Duna's three-up feature grid under a module header, with the product shot
 * doing the explaining. Stacks to one column on mobile.
 */
export function DirectGiving() {
  return (
    <Section id="how-it-works">
      <ModuleHeader
        eyebrow="How it works"
        title="Your money goes to one initiative. Directly."
        body="You pick the specific programme you want to fund, and it transfers to that organisation. There is no common pool in the middle, and nothing gets reassigned to a different cause later."
      />

      <AppSlot
        ratio="3 / 2"
        label="Choosing an initiative"
        note="App screen: a single initiative page - its organisation, what the money funds, the goal, and the amount raised so far. The give button in reach."
        className="mt-[clamp(2.5rem,5vw,3.5rem)]"
      />

      <ol className="mt-[clamp(2.5rem,5vw,3.5rem)] grid gap-x-[clamp(1.5rem,3vw,2.5rem)] gap-y-8 md:grid-cols-3">
        {DIRECT_STEPS.map((step, i) => (
          <li key={step.title}>
            <span className="t-eyebrow inline-flex size-8 items-center justify-center rounded-full bg-mint text-green">
              {i + 1}
            </span>
            <h3 className="mt-4 text-h3">{step.title}</h3>
            <p className="mt-2 text-body text-copy">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <ExploreLink href="#ledger">See how it&rsquo;s tracked</ExploreLink>
      </div>
    </Section>
  );
}
