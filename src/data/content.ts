/**
 * Page content that is data rather than prose.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ EVERY NUMBER AND EVERY ORGANISATION NAME BELOW IS A PLACEHOLDER.        │
 * │ Nothing here has been confirmed. The page states these as fact, and the │
 * │ trust section claims each listed org passed KYC / 12A / 80G / bank      │
 * │ checks - so publishing an unverified name is an assertion we can't back.│
 * │ Replace every entry, or delete the section, before this site goes live. │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * No DB and no CMS by design: editing this file is the whole publishing flow.
 */

export interface Stat {
  /** The numeral itself. Pre-formatted - display only, never arithmetic. */
  value: string;
  /** Sits under the number. Two or three words. */
  label: string;
  /** Optional qualifier, e.g. the period the figure covers. */
  note?: string;
}

/** PLACEHOLDER - proof-of-scale trio. Duna runs three; keep it at three. */
export const STATS: Stat[] = [
  { value: "₹4.2 Cr", label: "Given through Be Karna", note: "since launch" },
  { value: "180+", label: "Verified organisations", note: "across 14 states" },
  { value: "95%", label: "Reaches the organisation", note: "the rest covers payment fees" },
];

export interface Partner {
  /** Stable slug; also the logo filename stem in public/ngos/. */
  slug: string;
  name: string;
}

/**
 * The logo wall under "India's Most Trusted NGOs".
 *
 * ⚠️ THESE ARE REAL, NAMED ORGANISATIONS and the section heading asserts both
 * that they are trusted partners and that they cleared our verification. Each
 * one needs written permission to use its name and mark before this ships -
 * photo consent doesn't cover trademark use.
 *
 * Two logos supplied in ~/Downloads/karna_web/ngos/ are deliberately NOT here:
 *  - Mid-size-IT.png     - the Accenture logo. A corporation, not an NGO.
 *  - Govt_Primary_Schools_mp.png - the MP Board of Secondary Education state
 *    emblem. A government body, and official emblems carry usage restrictions.
 * If either belongs on the page it needs its own row with an honest label.
 *
 * Logos are square (288×288), so they render in [mark + name] cards rather than
 * as bare images.
 */
export const PARTNERS: Partner[] = [
  { slug: "pratham", name: "Pratham" },
  { slug: "cry-india", name: "CRY India" },
  { slug: "teach-for-india", name: "Teach For India" },
  { slug: "helpage-india", name: "HelpAge India" },
  { slug: "katha", name: "Katha" },
  { slug: "nanhi-kali", name: "Nanhi Kali" },
  { slug: "sewa-international", name: "Sewa International" },
  { slug: "robin-hood-army", name: "Robin Hood Army" },
  { slug: "samar-foundation", name: "Samar Foundation" },
  { slug: "badri-kedarnath-trust", name: "Badri Kedarnath Trust" },
];

export interface GalleryPhoto {
  /** File stem in public/gallery/. Numbered 1-9 in the order they appear. */
  file: string;
  /** Alt text, written from the actual photograph. */
  alt: string;
  /**
   * Native pixel size of the supplied file. These drive the layout directly -
   * the wall renders every photo at its own aspect ratio, nothing is cropped,
   * so these numbers must match the files on disk.
   */
  width: number;
  height: number;
}

/**
 * The photo wall, numbered 1-9 as supplied: 1 top-left, 9 bottom-right.
 *
 * The mix of ratios is deliberate and is what makes the wall read as a wall
 * rather than a table - 2x 3:4, 2x 4:3, 2x 1:1, 1x 4:5, 2x 3:2. Don't normalise
 * them to a single ratio; see the note in Gallery.tsx.
 */
export const GALLERY: GalleryPhoto[] = [
  { file: "1", width: 1200, height: 1600, alt: "Students in school uniform seated at desks in a bright classroom." },
  { file: "2", width: 1200, height: 1200, alt: "Two women filling a steel bucket at a village handpump." },
  { file: "3", width: 1200, height: 800, alt: "Schoolgirls with backpacks walking together along a tree-lined road." },
  { file: "4", width: 1200, height: 1600, alt: "A volunteer kneeling to plant a sapling in red soil." },
  { file: "5", width: 1200, height: 900, alt: "Kitchen workers serving a hot meal from large steel vessels." },
  { file: "6", width: 1200, height: 1500, alt: "A nurse checking a woman's blood pressure inside a mobile clinic." },
  { file: "7", width: 1200, height: 1200, alt: "Women at sewing machines in a tailoring training unit." },
  { file: "8", width: 1200, height: 900, alt: "Volunteers unloading packed meals from a small truck." },
  { file: "9", width: 1200, height: 800, alt: "A care team with an elderly woman in a wheelchair at home." },
];

export interface Initiative {
  /** Also the image filename stem in public/initiatives/ (640×480 WebP). */
  slug: string;
  /** Card title - one line. Keep it concrete: what the money actually does. */
  title: string;
  /** The organisation running it. */
  org: string;
  /** Alt text for the card image. */
  alt: string;
}

/**
 * The auto-scrolling carousel.
 *
 * ⚠️ Titles, amounts and the organisation names below are still PLACEHOLDER -
 * only the photographs are real. Pair each card with an actual live initiative
 * before launch.
 */
export const INITIATIVES: Initiative[] = [
  {
    slug: "classrooms-for-500",
    title: "A year of school for 500 children",
    org: "Pratham",
    alt: "Children at work in a classroom.",
  },
  {
    slug: "community-kitchen",
    title: "Hot meals, every day",
    org: "Robin Hood Army",
    alt: "A hot meal being served from steel vessels.",
  },
  {
    slug: "clean-water-nagpur",
    title: "Clean water for eleven villages",
    org: "Samar Foundation",
    alt: "A working handpump in a village.",
  },
  {
    slug: "mobile-health-clinic",
    title: "A mobile clinic for remote hamlets",
    org: "HelpAge India",
    alt: "A health worker at a mobile clinic.",
  },
  {
    slug: "girls-scholarships",
    title: "Scholarships for 200 girls",
    org: "Nanhi Kali",
    alt: "Girls in school uniform on their way to class.",
  },
  {
    slug: "womens-livelihoods",
    title: "Sewing units for 80 women",
    org: "Katha",
    alt: "Women at work in a tailoring unit.",
  },
  {
    slug: "elder-care",
    title: "Daily care for 60 elders",
    org: "HelpAge India",
    alt: "An elderly person with a carer.",
  },
  {
    slug: "tree-planting",
    title: "Twelve thousand saplings",
    org: "Sewa International",
    alt: "A sapling being planted in red soil.",
  },
];

export interface LedgerEntry {
  date: string;
  org: string;
  /**
   * The counting sequence for the amount, ending on the real figure. Rendered as
   * a vertical strip that steps down, so all entries need the SAME number of
   * steps or their counters fall out of sync.
   */
  steps: string[];
}

/**
 * The self-writing passbook in the Passbook section.
 *
 * ⚠️ ILLUSTRATIVE. These are real organisation names against invented amounts
 * and dates - a fabricated transaction ledger. The card carries an "Illustrative
 * entries" caption for that reason. Swap in real settled transfers, or switch to
 * generic labels, before launch.
 */
export const LEDGER: LedgerEntry[] = [
  {
    date: "12 Aug",
    org: "Asha Kiran Foundation",
    steps: ["₹0", "₹240", "₹610", "₹880", "₹1,000"],
  },
  {
    date: "12 Aug",
    org: "Katha",
    steps: ["₹0", "₹120", "₹300", "₹430", "₹500"],
  },
  {
    date: "11 Aug",
    org: "Pratham",
    steps: ["₹0", "₹500", "₹1,200", "₹1,700", "₹2,000"],
  },
  {
    date: "11 Aug",
    org: "Teach For India",
    steps: ["₹0", "₹180", "₹430", "₹620", "₹750"],
  },
];

export interface Feature {
  title: string;
  body: string;
}

/** Section 3 - the answer. Duna's three-up feature grid. */
export const DIRECT_STEPS: Feature[] = [
  {
    title: "Choose one initiative",
    body: "Not a general fund and not a cause category - a specific programme, run by a specific organisation, with a stated goal.",
  },
  {
    title: "It transfers straight there",
    body: "The money moves to that organisation's verified bank account. Nothing is pooled, held back, or quietly moved to another cause.",
  },
  {
    title: "You hear when it lands",
    body: "A confirmation when the transfer settles, and an update from the organisation as the initiative progresses.",
  },
];

export interface TrustBadge {
  line1: string;
  line2?: string;
  /** Accessible description; the badge art itself is decorative text. */
  alt: string;
  unverified?: boolean;
}

/**
 * Certification badges in the "Safe and secure" band.
 *
 * ⚠️ ALL THREE ARE UNVERIFIED CLAIMS, and badges are the highest-stakes kind of
 * placeholder on the site - a visitor reads them as proof, not as copy.
 *
 * Rendered as monochrome text medallions rather than official artwork, on
 * purpose:
 *  - ISO prohibits use of the ISO logo by certified organisations. You reference
 *    the standard in text and use your certification BODY's mark, never ISO's.
 *  - The RBI emblem is restricted, and RBI does not certify donation platforms.
 *    It authorises payment aggregators - so the only honest version of this badge
 *    is about the gateway, not about Be Karna.
 *
 * Delete any badge Be Karna cannot produce a certificate for.
 */
export const TRUST_BADGES: TrustBadge[] = [
  {
    line1: "ISO/IEC",
    line2: "27001",
    alt: "ISO/IEC 27001 information security certified",
    unverified: true,
  },
  {
    line1: "RBI",
    line2: "authorised gateway",
    alt: "Payments processed through an RBI-authorised payment gateway",
    unverified: true,
  },
  {
    line1: "PCI",
    line2: "DSS",
    alt: "PCI DSS compliant payment handling",
    unverified: true,
  },
];

export interface FaqItem {
  q: string;
  /** Plain text. Also becomes the answer in the FAQPage structured data. */
  a: string;
  /** True where the answer states something not yet confirmed. */
  unverified?: boolean;
}

/**
 * The FAQ, and the source for the FAQPage JSON-LD.
 *
 * ⚠️ FOUR ANSWERS BELOW ARE UNCONFIRMED - every one marked `unverified`. They
 * state a fee, a refund policy, a settlement window and a payment stack that
 * nobody has given me. Structured data makes these eligible for search results,
 * so a wrong answer here is published twice over. Fix or delete each one before
 * launch.
 */
export const FAQ: FaqItem[] = [
  {
    q: "Is my donation tax-deductible?",
    a: "Yes. Every organisation on Be Karna holds a valid 80G registration, which we confirm directly rather than taking on trust. Your receipt reaches you as soon as the payment settles, so there is nothing to request and nobody to chase in March.",
  },
  {
    q: "How do I know the money actually reached the organisation?",
    a: "Your passbook carries a line for every donation: the amount, the date it settled, the organisation that received it and the initiative it funded. It is the same record we hold, not a summary of it.",
  },
  {
    q: "Can I give to a temple, mosque, church or gurudwara?",
    a: "Yes. NGOs and religious institutions of every faith are listed on the same terms and clear the same checks. We do not rank causes, we do not promote one tradition over another, and we never move your money to a cause you did not choose.",
  },
  {
    q: "How are organisations verified?",
    a: "Four checks before an organisation can raise a single rupee: KYC on the organisation and every trustee, direct confirmation of its 12A and 80G registrations, and a bank account matched to the registered entity. Verification is then re-run on a schedule, because registrations lapse and details change.",
  },
  {
    q: "Can I choose exactly which initiative my money funds?",
    a: "Yes, and that is the point. You give to a specific programme run by a specific organisation, not to a general fund. There is no common pool in the middle and nothing gets reassigned later.",
  },
  {
    q: "What does Be Karna deduct?",
    a: "95% of what you give reaches the organisation. The remainder covers payment gateway charges.",
    unverified: true,
  },
  {
    q: "How long does a transfer take to settle?",
    a: "Most transfers settle within two working days, and your passbook entry appears the moment the money lands.",
    unverified: true,
  },
  {
    q: "Can I get a refund?",
    a: "Once a transfer has settled with an organisation it cannot be reversed. If something has gone wrong with a payment, contact us before it settles and we will sort it out.",
    unverified: true,
  },
  {
    q: "Is my payment secure?",
    a: "Payments are handled by a PCI-DSS compliant gateway. Be Karna never sees or stores your card or bank details.",
    unverified: true,
  },
];

export interface VerificationCheck {
  label: string;
  /** Which glyph to draw. See ICONS in Verification.tsx. */
  icon: "identity" | "people" | "doc" | "receipt" | "bank" | "pin" | "shield";
}

/**
 * The verification stack - a focus wheel, one row per check.
 *
 * Seven because the stack needs enough rows to read as a stack; four looked like
 * a list. Labels only, no descriptions: the rows are self-explanatory and the FAQ
 * carries the detail.
 *
 * ⚠️ THIS LIST IS A CLAIM ABOUT WHAT BE KARNA ACTUALLY CHECKS. Nobody has
 * confirmed it. FCRA in particular only applies to organisations receiving
 * foreign contributions, and "re-screened every quarter" states a cadence I
 * invented. Confirm every line or cut it - this is the section the whole trust
 * claim rests on, so an overstatement here is the worst kind.
 */
export const VERIFICATION_CHECKS: VerificationCheck[] = [
  { label: "Identity verification", icon: "identity" },
  { label: "Trustees and office bearers", icon: "people" },
  { label: "12A registration", icon: "doc" },
  { label: "80G registration", icon: "receipt" },
  { label: "Bank account match", icon: "bank" },
  { label: "Registered address", icon: "pin" },
  { label: "Ongoing re-screening", icon: "shield" },
];

/** Longer-form version of the checks, used by the hidden Trust section. */
export const TRUST_CHECKS: Feature[] = [
  {
    title: "KYC on the organisation",
    body: "Registration documents and the identity of every trustee or office bearer, checked before a single rupee can be raised.",
  },
  {
    title: "12A and 80G verified",
    body: "We confirm the registrations directly, so the tax exemption you're claiming is one the organisation actually holds.",
  },
  {
    title: "Bank account matched",
    body: "The receiving account has to belong to the registered entity - not to an individual, and not to a related trust.",
  },
  {
    title: "Reviewed continuously",
    body: "Verification isn't a one-time badge. Registrations lapse and details change, so we re-check on a schedule.",
  },
];
