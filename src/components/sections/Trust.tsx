import { TRUST_CHECKS } from "@/data/content";
import { PhotoSlot } from "@/components/ui/MediaSlot";
import { ModuleHeader, Section } from "@/components/ui/Section";

/**
 * 5 - Who's on the other end.
 *
 * Duna's four-up grid. The faith-neutral line gets its own panel rather than
 * being buried as a fifth card: it's a positioning statement, not a checklist
 * item, and it's the thing that makes this platform usable by everyone.
 */
export function Trust() {
  return (
    <Section id="trust">
      <div className="grid items-start gap-[clamp(2rem,5vw,4rem)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ModuleHeader
            eyebrow="Verification"
            title="We check who's on the other end."
            body="An organisation can't raise a rupee on Be Karna until it clears every one of these. The checks are ours to run, so you don't have to."
          />

          <PhotoSlot
            ratio="1 / 1"
            label="The people doing the work"
            note="Square. An organisation's team on the ground - mid-work, not lined up for the camera. Should feel like a specific place, not stock photography."
            className="mt-8"
          />
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-x-[clamp(1.5rem,3vw,2.5rem)] gap-y-7 sm:grid-cols-2">
            {TRUST_CHECKS.map((check) => (
              <li key={check.title} className="border-t border-line pt-5">
                <h3 className="text-h3">{check.title}</h3>
                <p className="mt-2 text-body text-copy">{check.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-lg bg-mint p-[clamp(1.5rem,3vw,2rem)]">
            <h3 className="text-h3">Every faith, no ranking</h3>
            <p className="t-prose mt-2 text-body text-copy">
              NGOs and religious institutions of all faiths are welcome here on the same
              terms and the same checks. We don&rsquo;t rank causes, we don&rsquo;t
              promote one tradition over another, and we don&rsquo;t steer you toward a
              cause you didn&rsquo;t choose.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
