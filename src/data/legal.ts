/**
 * Scaffolding for the legal pages.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ THESE PAGES CONTAIN NO LEGAL TEXT, ON PURPOSE.                          │
 * │                                                                         │
 * │ Be Karna takes money from the public and passes it to third parties.    │
 * │ Terms, a privacy notice and a refund policy for that are documents with │
 * │ legal effect, and I am not the right author for them - invented clauses │
 * │ that look plausible are worse than an obvious gap, because nobody goes  │
 * │ back to check them.                                                     │
 * │                                                                         │
 * │ What's here is the STRUCTURE: the sections each document needs, with    │
 * │ notes on why, so counsel can draft against a checklist instead of a     │
 * │ blank page. Each page renders a visible "not yet in force" notice until  │
 * │ the text is filled in.                                                  │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * Why these five, for an Indian donation platform:
 *  - Privacy Policy - required under the DPDP Act 2023 and the SPDI Rules.
 *  - Terms of Use - defines that Be Karna is a platform, not the recipient.
 *  - Refund & Cancellation - every Indian payment gateway (Razorpay, PayU,
 *    Cashfree) requires a publicly reachable refund policy to activate an
 *    account. This is usually what blocks go-live.
 *  - Grievance Redressal - the IT Rules 2021 require a named grievance officer
 *    with contact details published, plus acknowledgement and resolution
 *    timelines. The DPDP Act adds a data-protection grievance route.
 *  - Contact - gateways require a reachable address and phone, not just a form.
 *
 * Still to consider, deliberately not scaffolded because they depend on facts I
 * don't have: an FCRA note (only if foreign contributions are accepted), an
 * AML/KYC policy, a cookie notice if analytics go beyond first-party, and a
 * "no goods shipped" delivery note that some gateways ask for.
 */

export interface LegalSection {
  heading: string;
  /** What this section has to establish. Guidance for counsel, not copy. */
  note: string;
}

export interface LegalDoc {
  slug: string;
  title: string;
  /** One line under the title, safe to publish as-is. */
  intro: string;
  sections: LegalSection[];
}

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    intro:
      "What personal data Be Karna collects, why, who it is shared with, and the rights you have over it.",
    sections: [
      {
        heading: "Who we are",
        note: "Registered entity name, address, and the email address for privacy questions.",
      },
      {
        heading: "What we collect",
        note: "Identity and contact details, PAN where an 80G receipt is issued, payment metadata, device and usage data. State plainly what is NOT collected - full card numbers, in particular.",
      },
      {
        heading: "Why we collect it, and on what basis",
        note: "Purpose for each category, and the DPDP Act 2023 basis - consent, or one of the legitimate uses.",
      },
      {
        heading: "Who we share it with",
        note: "The payment gateway, the recipient organisation (name and amount, for their own records and 80G issuance), and service providers. Name the categories.",
      },
      {
        heading: "How long we keep it",
        note: "Retention per category, and the statutory minimum that applies to donation and tax records.",
      },
      {
        heading: "Your rights",
        note: "Access, correction, erasure, nomination and grievance redressal under the DPDP Act, and how to exercise each.",
      },
      {
        heading: "Cookies and analytics",
        note: "What is set, whether any of it is third-party, and how to refuse. Keep this honest against what the site actually loads.",
      },
      {
        heading: "Security",
        note: "Measures in place, without overclaiming. Do not name a certification Be Karna does not hold.",
      },
      {
        heading: "Children",
        note: "Position on users under 18, and verifiable parental consent under the DPDP Act.",
      },
      {
        heading: "Changes, and how to reach us",
        note: "How changes are notified, plus the Data Protection Officer or equivalent contact.",
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use",
    intro:
      "The terms on which you may use Be Karna, and what Be Karna does and does not undertake.",
    sections: [
      {
        heading: "Acceptance and eligibility",
        note: "Who may use the platform, minimum age, and capacity to contract.",
      },
      {
        heading: "What Be Karna is",
        note: "The single most important clause: Be Karna is a platform connecting donors to organisations. It is not the recipient of the donation, not a trustee of the funds, and not the provider of the charitable activity.",
      },
      {
        heading: "Donations are voluntary and final",
        note: "That a donation is a voluntary contribution and cannot be reversed once settled with the organisation. Cross-reference the refund policy.",
      },
      {
        heading: "Fees and deductions",
        note: "Exactly what is deducted and by whom. This must agree with the figure stated on the marketing site - today the site claims 95% reaches the organisation.",
      },
      {
        heading: "Verification: scope and limits",
        note: "What the checks do and, critically, what they do not guarantee. The site lists seven checks; this clause has to match them and must not promise outcomes.",
      },
      {
        heading: "Tax receipts",
        note: "That 80G eligibility depends on the organisation's registration and the donor's own tax position, and that Be Karna does not give tax advice.",
      },
      {
        heading: "Acceptable use",
        note: "Prohibition on laundering, proceeds of crime, and contributions that would breach FCRA or sanctions rules.",
      },
      {
        heading: "Intellectual property",
        note: "Ownership of the platform, and the basis on which partner names and marks appear.",
      },
      {
        heading: "Liability and indemnity",
        note: "Limitation of liability, and the donor's indemnity. Drafted to survive Indian consumer protection law.",
      },
      {
        heading: "Governing law and disputes",
        note: "Governing law, seat of jurisdiction, and the dispute process.",
      },
      {
        heading: "Changes to these terms",
        note: "How amendments take effect and how users are told.",
      },
    ],
  },
  {
    slug: "refunds",
    title: "Refund & Cancellation Policy",
    intro:
      "When a donation can be reversed, when it cannot, and how to raise a payment problem.",
    sections: [
      {
        heading: "The general position",
        note: "Donations are final once settled with the organisation. Say it plainly and early.",
      },
      {
        heading: "Failed and duplicate payments",
        note: "What happens when a payment is debited but not recorded, or charged twice. This is the case that actually arises.",
      },
      {
        heading: "Raising a request",
        note: "The window, the channel, and what information is needed.",
      },
      {
        heading: "Timelines",
        note: "How long acknowledgement takes and how long a reversal takes to reach the original payment method.",
      },
      {
        heading: "What cannot be refunded",
        note: "Transfers already settled, and gateway charges where applicable.",
      },
    ],
  },
  {
    slug: "grievance",
    title: "Grievance Redressal",
    intro: "How to raise a complaint, who handles it, and how long it takes.",
    sections: [
      {
        heading: "How to raise a grievance",
        note: "The channel, and what to include.",
      },
      {
        heading: "Grievance Officer",
        note: "REQUIRED under the IT Rules 2021: name, designation, email address, postal address and telephone number of a real person. A generic support inbox does not satisfy this.",
      },
      {
        heading: "Timelines",
        note: "Acknowledgement within 24 hours and resolution within 15 days, per the IT Rules. Do not publish a timeline that cannot be met.",
      },
      {
        heading: "Data protection grievances",
        note: "The separate route for DPDP Act complaints, and escalation to the Data Protection Board.",
      },
      {
        heading: "If you are still not satisfied",
        note: "Escalation path, including the relevant consumer forum.",
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact Us",
    intro: "How to reach Be Karna.",
    sections: [
      {
        heading: "Registered office",
        note: "Full legal entity name and registered postal address. Payment gateways verify this against your registration documents.",
      },
      {
        heading: "Email and phone",
        note: "A monitored email address and a working telephone number. Gateways generally will not accept a contact form alone.",
      },
      {
        heading: "For organisations",
        note: "Where an NGO or institution applies to be listed.",
      },
      {
        heading: "For grievances",
        note: "Pointer to the Grievance Redressal page and the named officer.",
      },
    ],
  },
];

/** Footer link list, derived so the two can't drift apart. */
export const LEGAL_LINKS = LEGAL_DOCS.map((doc) => ({
  href: `/${doc.slug}`,
  label: doc.title,
}));
