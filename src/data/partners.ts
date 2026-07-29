/**
 * Partner organisations and live initiatives shown on /partners.
 *
 * PLACEHOLDER CONTENT — these are illustrative entries, not real verified
 * partners. Replace each one with an actual organisation (and drop its logo into
 * public/partners/) before this site goes live: the page makes verification
 * claims, so listing an org here asserts it passed those checks.
 *
 * No DB, no CMS by design — editing this file is the whole publishing workflow.
 */

export interface Partner {
  /** Stable slug, also the logo filename stem in public/partners/. */
  slug: string;
  /** Full legal/display name — used in the logo's alt text and NGO schema. */
  name: string;
  /** City / state, shown under the name where there's room. */
  location: string;
  /** Cause label, matched to the app's categories. */
  cause: string;
  /** Their own site — the `sameAs`/`url` in NGO schema, and the backlink ask. */
  website?: string;
  /** Set true once the logo file exists; otherwise a text wordmark renders. */
  hasLogo?: boolean;
}

export interface Initiative {
  slug: string;
  /** Initiative title as it appears in the app. */
  title: string;
  /** The organisation running it — should match a Partner name. */
  org: string;
  cause: string;
  /** One plain sentence on what the money does. No urgency, no guilt. */
  summary: string;
  /** Whole rupees. Kept as rupees (not paise) — this is display-only content. */
  goalRupees: number;
  raisedRupees: number;
}

export const PARTNERS: Partner[] = [
  { slug: "asha-kiran-foundation", name: "Asha Kiran Foundation", location: "Pune, Maharashtra", cause: "Child education" },
  { slug: "seva-bharti-trust", name: "Seva Bharti Trust", location: "Jaipur, Rajasthan", cause: "Nutrition" },
  { slug: "navjeevan-health-society", name: "Navjeevan Health Society", location: "Kochi, Kerala", cause: "Healthcare" },
  { slug: "shiksha-setu", name: "Shiksha Setu", location: "Lucknow, Uttar Pradesh", cause: "Girl child education" },
  { slug: "annapurna-rasoi", name: "Annapurna Rasoi", location: "Varanasi, Uttar Pradesh", cause: "Community kitchens" },
  { slug: "prerna-womens-collective", name: "Prerna Women's Collective", location: "Ahmedabad, Gujarat", cause: "Women's livelihoods" },
  { slug: "jal-jeevan-samiti", name: "Jal Jeevan Samiti", location: "Nagpur, Maharashtra", cause: "Clean water" },
  { slug: "vriddha-seva-ashram", name: "Vriddha Seva Ashram", location: "Mysuru, Karnataka", cause: "Elder care" },
  { slug: "sneha-child-care", name: "Sneha Child Care", location: "Bhubaneswar, Odisha", cause: "Child welfare" },
  { slug: "roshni-skills-mission", name: "Roshni Skills Mission", location: "Indore, Madhya Pradesh", cause: "Vocational training" },
  { slug: "haritha-green-trust", name: "Haritha Green Trust", location: "Coimbatore, Tamil Nadu", cause: "Environment" },
  { slug: "ekta-community-fund", name: "Ekta Community Fund", location: "Hyderabad, Telangana", cause: "Disaster relief" },
];

export const INITIATIVES: Initiative[] = [
  {
    slug: "classrooms-for-500-children",
    title: "Classrooms for 500 children",
    org: "Asha Kiran Foundation",
    cause: "Child education",
    summary:
      "Funds teachers, books and mid-day meals for two municipal schools through the academic year.",
    goalRupees: 1_200_000,
    raisedRupees: 814_000,
  },
  {
    slug: "one-hot-meal-a-day",
    title: "One hot meal a day",
    org: "Annapurna Rasoi",
    cause: "Community kitchens",
    summary:
      "A community kitchen serving 300 daily meals to families near the ghats, run year-round.",
    goalRupees: 600_000,
    raisedRupees: 472_500,
  },
  {
    slug: "safe-births-in-rural-kerala",
    title: "Safe births in rural Kerala",
    org: "Navjeevan Health Society",
    cause: "Healthcare",
    summary:
      "Antenatal checkups, iron supplements and hospital transport for expectant mothers in six villages.",
    goalRupees: 900_000,
    raisedRupees: 331_000,
  },
  {
    slug: "she-finishes-school",
    title: "She finishes school",
    org: "Shiksha Setu",
    cause: "Girl child education",
    summary:
      "Covers fees, uniforms and travel so girls in Classes 9–12 don't drop out mid-year.",
    goalRupees: 750_000,
    raisedRupees: 690_000,
  },
  {
    slug: "clean-water-for-40-households",
    title: "Clean water for 40 households",
    org: "Jal Jeevan Samiti",
    cause: "Clean water",
    summary:
      "One borewell and a shared filtration unit for a settlement currently walking 2km for water.",
    goalRupees: 450_000,
    raisedRupees: 118_000,
  },
  {
    slug: "a-trade-in-six-months",
    title: "A trade in six months",
    org: "Roshni Skills Mission",
    cause: "Vocational training",
    summary:
      "Tailoring and electrical certification for 60 young adults, with placement support after.",
    goalRupees: 500_000,
    raisedRupees: 268_400,
  },
];

/**
 * Headline scale figures. PLACEHOLDER — replace with audited numbers before
 * launch, and only publish figures you can actually stand behind.
 */
export const SCALE = {
  givers: "1,20,000+",
  organisations: "340+",
  statesCovered: "18",
  /** Whole rupees given, for the "total daan" figure. */
  totalGivenRupees: 47_800_000,
} as const;
