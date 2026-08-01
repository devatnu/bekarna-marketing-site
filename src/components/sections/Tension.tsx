import { PhotoSlot } from "@/components/ui/MediaSlot";
import { ModuleHeader, Section } from "@/components/ui/Section";

/**
 * 2 - The tension.
 *
 * Names the quiet doubt and gets out of the way. Deliberately the shortest
 * section on the page: the brief is "brief - don't guilt", so there is no
 * statistic about misused funds and no second paragraph twisting the knife.
 * The portrait keeps it human rather than accusatory.
 */
export function Tension() {
  return (
    <Section tone="tint">
      <div className="grid items-center gap-[clamp(2rem,5vw,4rem)] md:grid-cols-12">
        <div className="md:col-span-7">
          <ModuleHeader
            eyebrow="The quiet part"
            title="You gave. Then nothing."
            body="Most giving in India ends at the payment screen. No confirmation that it arrived, no word on what it did, no way to check. The doubt that follows isn't cynicism - it's just the absence of an answer."
          />
        </div>

        <div className="md:col-span-5">
          <PhotoSlot
            ratio="4 / 5"
            label="The pause after giving"
            note="Portrait. One person, mid-thought, phone in hand - the ordinary moment after a donation goes through. Quiet and domestic. Not sad, not staged."
          />
        </div>
      </div>
    </Section>
  );
}
