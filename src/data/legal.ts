import {
  CONTACT,
  ENTITY,
  EFFECTIVE_DATE,
  GRIEVANCE_OFFICER,
  POLICY_VERSION,
  officeOneLine,
} from "@/data/entity";

/**
 * The legal pages.
 *
 * Reviewed and approved by the business owner, and in force as published.
 *
 * Written against Indian law as it applies to a donation platform: the DPDP Act 2023
 * and the SPDI Rules, the IT Rules 2021, the Consumer Protection Act 2019, and the
 * 80G / Form 10BD regime under the Income-tax Act.
 *
 * ⚠️ Any change in substance must bump POLICY_VERSION in src/data/entity.ts, because
 * the app records that string against every consent it captures and re-asks the user
 * when it moves. A typo fix does not count; a changed obligation does.
 *
 * Why these seven, for an Indian donation platform:
 *  - Privacy Policy — required under the DPDP Act 2023 and the SPDI Rules.
 *  - Terms of Use — establishes that Be Karna is a platform, not the recipient.
 *  - Refund & Cancellation — every Indian payment gateway requires a publicly
 *    reachable refund policy to activate an account. This is usually what blocks
 *    go-live.
 *  - Grievance Redressal — the IT Rules 2021 require a named grievance officer
 *    with published contact details and stated timelines. The DPDP Act adds a
 *    separate data-protection route.
 *  - Contact — gateways require a reachable address and phone, not just a form.
 *  - Cookie Notice — needed once analytics land, and referenced by the privacy
 *    policy.
 *  - Delivery & Service Policy — the "no goods are shipped" statement that
 *    gateways ask of non-physical-goods merchants.
 *
 * Deliberately NOT included: an FCRA policy. Be Karna accepts donations from
 * within India only at launch, so the Foreign Contribution (Regulation) Act does
 * not apply. If foreign-source donations are ever accepted, that decision needs
 * its own document and per-NGO FCRA routing before a single rupee moves.
 */

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  /** A callout — used for the things a reader must not miss. */
  | { type: "callout"; text: string }
  /** Label/value rows, for entity and officer details. */
  | { type: "rows"; rows: { label: string; value: string | string[] }[] };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  /** One line under the title. */
  intro: string;
  sections: LegalSection[];
}

const BRAND = ENTITY.brandName;
const LEGAL = ENTITY.legalName;

/* -------------------------------------------------------------------------- */
/* Privacy Policy                                                             */
/* -------------------------------------------------------------------------- */

const PRIVACY: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  intro: `What personal data ${BRAND} collects, why, who it is shared with, and the rights you have over it.`,
  sections: [
    {
      heading: "Who we are",
      blocks: [
        {
          type: "p",
          text: `${BRAND} is operated by ${LEGAL}, a limited liability partnership incorporated in India, with its registered office at ${officeOneLine()}. In this policy, "we", "us" and "our" mean ${LEGAL}. For the purposes of the Digital Personal Data Protection Act, 2023, we are the Data Fiduciary in respect of the personal data described below.`,
        },
        {
          type: "p",
          text: `Questions about this policy, or about your personal data, should go to ${CONTACT.privacyEmail}.`,
        },
      ],
    },
    {
      heading: "What we collect",
      blocks: [
        {
          type: "p",
          text: "We collect the following categories of personal data:",
        },
        {
          type: "ul",
          items: [
            "Identity and contact data — your name, mobile number, and email address where you choose to give one. Your mobile number is the account identifier and is verified by one-time password. We do not email receipts; they are downloaded from the app.",
            "Profile data — your city, a profile photo where you upload one, and the causes you tell us you care about.",
            "Donation data — the amount, date, recipient organisation and campaign for each gift, and the resulting receipt.",
            "Payment metadata — the reference identifiers, status and method returned to us by our payment processor.",
            "Tax data — your Permanent Account Number, only where you choose to give it so that a donation can be reported by the recipient organisation.",
            "Device and usage data — IP address, browser and device type, and the pages you visit, used to keep the service secure and to understand how it is used.",
            "Correspondence — support requests you raise and our replies.",
          ],
        },
        {
          type: "p",
          text: "For organisations applying to be listed, we additionally collect registration and tax documents, authorised-signatory details and bank account details, which are necessary to verify the organisation and to settle donations to it.",
        },
        {
          type: "callout",
          text: "We never receive or store your full card number, CVV, UPI PIN, or net-banking credentials. Payment details are entered directly with our payment processor and are never transmitted to us.",
        },
      ],
    },
    {
      heading: "Why we collect it, and on what basis",
      blocks: [
        {
          type: "p",
          text: "Under the Digital Personal Data Protection Act, 2023, we process personal data either with your consent or, where the Act permits, for a certain legitimate use. Our purposes and bases are:",
        },
        {
          type: "ul",
          items: [
            "To create and secure your account, and to verify your mobile number — consent, given when you sign up.",
            "To process a donation you have chosen to make, issue your Daan Receipt, and maintain your giving record — consent, and performance of the service you have asked for.",
            "To report a donation to the recipient organisation so it can meet its own statutory obligations, including its annual statement of donations — consent, and compliance with law.",
            "To meet our own obligations under tax, accounting and anti-money-laundering law, and to retain records for the periods those laws require — compliance with law.",
            "To detect, prevent and investigate fraud, abuse and security incidents — a legitimate use under the Act.",
            "To answer your support requests — consent, and performance of the service.",
            "To send you updates about your giving by WhatsApp, SMS or email — separate, optional consent, which you may withdraw at any time without affecting your ability to give.",
          ],
        },
        {
          type: "p",
          text: "Consent for marketing messages is asked for separately from consent to these terms and to this policy, and is never a condition of using the platform.",
        },
      ],
    },
    {
      heading: "Who we share it with",
      blocks: [
        {
          type: "ul",
          items: [
            "The recipient organisation — your name and the amount, date and purpose of your gift, and your Permanent Account Number where you have given one. The organisation needs these for its own records and to issue you the statutory certificate of donation where section 80G applies. It is a separate Data Fiduciary in respect of what it receives.",
            "Our payment processor, Razorpay Software Private Limited, an RBI-authorised payment aggregator — the data necessary to take your payment and settle it to the organisation.",
            "Our communications provider, to send the one-time password to your mobile number.",
            "Our hosting, storage and error-monitoring providers, who process data on our instructions under contract.",
            "Government authorities, courts and regulators, where we are required by law to disclose.",
            "A successor entity, in the event of a merger, reorganisation or transfer of the business, subject to the same protections.",
          ],
        },
        {
          type: "p",
          text: "We do not sell your personal data, and we do not share it with advertisers or data brokers.",
        },
        {
          type: "p",
          text: "Personal data is stored on servers located in Singapore and, for some assets, in other regions used by our storage provider. Where personal data is processed outside India, we do so on contractual terms requiring protection equivalent to that described here, and only to countries not restricted by the Central Government under the Act.",
        },
      ],
    },
    {
      heading: "How long we keep it",
      blocks: [
        {
          type: "ul",
          items: [
            "Donation records, receipts and ledger entries — at least eight years from the end of the relevant financial year, as required by Indian tax and accounting law. These cannot be deleted on request within that period.",
            "Account and profile data — for as long as your account is open, and for one year after you close it, so that a returning user is not orphaned from their giving record.",
            "Records of consent, including withdrawal — for as long as we rely on them, and for three years afterwards, so that we can demonstrate the basis on which we processed your data.",
            "Organisation verification documents — for the duration of the partnership and eight years after it ends.",
            "One-time password records — deleted within thirty days.",
            "Device and usage logs — twelve months.",
            "Support correspondence — three years from resolution.",
          ],
        },
      ],
    },
    {
      heading: "Your rights",
      blocks: [
        {
          type: "p",
          text: "Under the Digital Personal Data Protection Act, 2023 you have the right to:",
        },
        {
          type: "ul",
          items: [
            "Access a summary of the personal data we hold about you and how we process it.",
            "Have inaccurate or incomplete data corrected, completed or updated.",
            "Have your personal data erased, except where we are required by law to retain it — in practice, your donation and receipt records.",
            "Nominate another person to exercise these rights on your behalf in the event of your death or incapacity.",
            "Withdraw consent at any time, as easily as you gave it. Marketing consent can be withdrawn from the account screen in the app.",
            "Have a grievance about your personal data addressed by us, and to escalate to the Data Protection Board of India if you are not satisfied.",
          ],
        },
        {
          type: "p",
          text: `To exercise any of these, write to ${CONTACT.privacyEmail} from the email address on your account, or contact our Grievance Officer using the details on the Grievance Redressal page. We will respond within thirty days. Withdrawing consent does not undo processing already carried out, and may mean we can no longer provide part of the service.`,
        },
      ],
    },
    {
      heading: "Cookies and analytics",
      blocks: [
        {
          type: "p",
          text: `We use a small number of cookies and similar technologies. What is set, and how to refuse it, is described in our Cookie Notice.`,
        },
        {
          type: "p",
          text: "We do not use third-party advertising cookies and we do not permit third parties to track you across other websites through our service.",
        },
      ],
    },
    {
      heading: "Security",
      blocks: [
        {
          type: "p",
          text: "We protect personal data with measures appropriate to the risk, including encryption of data in transit, encryption at rest for stored records, access controls limiting staff access to what their role requires, one-time-password authentication rather than stored passwords, session tokens held in HTTP-only cookies, and logging of administrative access.",
        },
        {
          type: "p",
          text: "Payments are processed by an RBI-authorised payment aggregator subject to its own PCI-DSS obligations; we do not handle card or UPI credentials.",
        },
        {
          type: "callout",
          text: "No system is perfectly secure, and we do not claim otherwise. We hold no security certification at the date of this policy, and we will not claim one we do not hold. If a personal data breach occurs, we will notify the Data Protection Board of India and affected users as the Act requires.",
        },
      ],
    },
    {
      heading: "Children",
      blocks: [
        {
          type: "p",
          text: `${BRAND} is intended for users aged 18 and over, who are competent to contract under Indian law. We do not knowingly collect personal data from a child, and we do not undertake tracking, behavioural monitoring or targeted advertising directed at children. If we learn that we hold a child's personal data without verifiable consent from a parent or lawful guardian, we will delete it.`,
        },
      ],
    },
    {
      heading: "Changes, and how to reach us",
      blocks: [
        {
          type: "p",
          text: `This policy is version ${POLICY_VERSION}, effective ${EFFECTIVE_DATE}. Where we change it in substance we will publish the new version here, update the version stamp, and — where the change affects what you consented to — ask for your consent again the next time you use the app. Continuing to use ${BRAND} after a change means you accept the updated policy, save for anything that requires fresh consent.`,
        },
        {
          type: "rows",
          rows: [
            { label: "Entity", value: LEGAL },
            { label: "Registered office", value: [...ENTITY.registeredOffice] },
            { label: "Privacy contact", value: CONTACT.privacyEmail },
            { label: "Grievance Officer", value: GRIEVANCE_OFFICER.name },
          ],
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Terms of Use                                                               */
/* -------------------------------------------------------------------------- */

const TERMS: LegalDoc = {
  slug: "terms",
  title: "Terms of Use",
  intro: `The terms on which you may use ${BRAND}, and what ${BRAND} does and does not undertake.`,
  sections: [
    {
      heading: "Acceptance and eligibility",
      blocks: [
        {
          type: "p",
          text: `These terms are a binding agreement between you and ${LEGAL}, a limited liability partnership incorporated in India on ${ENTITY.incorporatedOnLabel} under the Limited Liability Partnership Act, 2008 (LLPIN ${ENTITY.llpin}), with its registered office at ${officeOneLine()}. By creating an account or making a donation through ${BRAND} you accept these terms. If you do not accept them, do not use the platform.`,
        },
        {
          type: "p",
          text: "You must be at least 18 years old and competent to contract under the Indian Contract Act, 1872. You must use your own mobile number and your own payment instrument, and the information you give us must be true.",
        },
        {
          type: "p",
          text: "At present we accept donations from within India only. You must not use the platform to make a donation that would constitute a foreign contribution under the Foreign Contribution (Regulation) Act, 2010. If you are a foreign citizen or an Overseas Citizen of India, do not donate through the platform until we say otherwise. A donation by a citizen of India holding an Indian passport, resident abroad, is not a foreign contribution.",
        },
      ],
    },
    {
      heading: `What ${BRAND} is`,
      blocks: [
        {
          type: "callout",
          text: `${BRAND} is a technology platform that connects you with charitable organisations and religious institutions. ${LEGAL} is not the recipient of your donation. It is not a trustee, custodian or fiduciary of donated funds, it does not carry out the charitable activity, and it does not control how a recipient organisation spends what it receives.`,
        },
        {
          type: "p",
          text: "Your donation is made to the organisation you select. We facilitate the payment and, where possible, the money is settled directly to that organisation's own bank account by our payment processor without passing through our hands.",
        },
        {
          type: "p",
          text: `${LEGAL} is a for-profit limited liability partnership. It is not a charitable institution and it holds no registration under section 12A or section 80G of the Income-tax Act, 1961.`,
        },
      ],
    },
    {
      heading: "Donations are voluntary and final",
      blocks: [
        {
          type: "p",
          text: "Every donation you make is voluntary. You choose the organisation and the amount, and nothing on the platform obliges you to give.",
        },
        {
          type: "p",
          text: "Once a donation has been settled with the recipient organisation it cannot be reversed, because the money is no longer ours to return. Failed payments, duplicate charges and amounts debited but not recorded are dealt with under our Refund & Cancellation Policy, which forms part of these terms.",
        },
        {
          type: "p",
          text: "A donation does not entitle you to any goods, service, benefit or consideration in return, and it does not give you any right to direct how the recipient organisation uses the funds.",
        },
      ],
    },
    {
      heading: "What is deducted, and by whom",
      blocks: [
        {
          type: "p",
          text: `Of every donation, ${LEGAL} retains 5%, described on the payment screen as "Be Karna Initiatives". The remaining 95% is settled to the recipient organisation. You may decline the 5% at the time of payment, by ticking the option shown; if you do, the whole of your donation is settled to the organisation and we retain nothing.`,
        },
        {
          type: "p",
          text: `The retained amount is consideration for the platform, verification and payment services ${LEGAL} provides, and for initiatives it runs itself. It is revenue of ${LEGAL} and is not a donation to it. It is not eligible for deduction under section 80G.`,
        },
        {
          type: "p",
          text: "Your payment method or bank may separately charge you a fee. That is a matter between you and them, and we do not receive it.",
        },
      ],
    },
    {
      heading: "Verification: what we check, and what we do not promise",
      blocks: [
        {
          type: "p",
          text: "Before an organisation is listed, we carry out checks on the information and documents it supplies. These typically include its legal registration, its tax registrations where it claims them, the identity of its authorised signatory, its bank account details, its stated address and contact details, and a review of the campaigns it wishes to publish.",
        },
        {
          type: "callout",
          text: "These checks confirm that documents were produced and appeared valid at the time we looked at them. They are not an audit, not an endorsement, and not a guarantee. We do not warrant that an organisation will use funds as described, that a campaign will reach its goal, that a stated outcome will be achieved, or that an organisation's registrations remain current after we checked them.",
        },
        {
          type: "p",
          text: "We may suspend or remove an organisation or a campaign at any time, including where information turns out to be inaccurate or where we receive a credible complaint.",
        },
      ],
    },
    {
      heading: "Receipts and tax",
      blocks: [
        {
          type: "p",
          text: "For each settled donation we issue a Daan Receipt — an acknowledgment of your gift, issued by us on the recipient organisation's behalf, which you can download as a PDF or an image.",
        },
        {
          type: "callout",
          text: "A Daan Receipt is not Form 10BE and is not a certificate of donation under section 80G. Since the Finance Act, 2021, the statutory certificate is Form 10BE, which the recipient organisation issues after it furnishes its annual statement of donations in Form 10BD to the Income Tax Department, on or before 31 May following the financial year. We cannot issue it, and no document we generate is a substitute for it.",
        },
        {
          type: "p",
          text: "Whether a deduction is available at all depends on the organisation's own registration under section 80G, on the limits and conditions of that section, and on your personal tax position. Many temples, mosques, churches and gurudwaras hold no section 80G registration; where we know an organisation is not registered, we say so on its page.",
        },
        {
          type: "p",
          text: "Where a deduction is available, it is computed on the amount the organisation actually received — that is, on the 95%, not on the gross amount you paid, unless you declined the retained share in which case the two are the same.",
        },
        {
          type: "p",
          text: `${LEGAL} does not provide tax advice. Consult your own adviser before claiming any deduction.`,
        },
      ],
    },
    {
      heading: "Your account",
      blocks: [
        {
          type: "p",
          text: "Your account is identified by your mobile number and secured by one-time password. You are responsible for keeping access to that number and for activity carried out through your account. Tell us at once if you believe your account has been used without your authority.",
        },
        {
          type: "p",
          text: "We may suspend or close an account where we reasonably believe it is being used in breach of these terms or of law, or where required by a regulator or court.",
        },
      ],
    },
    {
      heading: "Acceptable use",
      blocks: [
        { type: "p", text: "You must not use the platform:" },
        {
          type: "ul",
          items: [
            "to launder money, to move the proceeds of crime, or to fund anything unlawful, including terrorism;",
            "to make a payment that would breach the Foreign Contribution (Regulation) Act, 2010, or any applicable sanctions;",
            "with a payment instrument you are not entitled to use;",
            "to impersonate another person, or to give false information about yourself or an organisation;",
            "to interfere with, probe or overload the platform, to attempt unauthorised access, or to scrape it by automated means;",
            "to upload anything unlawful, defamatory, obscene, infringing, or harmful to a computer system;",
            "to solicit donations for a cause or organisation not listed by us.",
          ],
        },
        {
          type: "p",
          text: "We report suspected offences to the appropriate authority and cooperate with lawful investigations.",
        },
      ],
    },
    {
      heading: "Intellectual property",
      blocks: [
        {
          type: "p",
          text: `The platform, its software, design, text and the ${BRAND} name and marks belong to ${LEGAL} or its licensors. You may use the platform to give and to view your own records; you may not copy, adapt, reverse-engineer or redistribute it.`,
        },
        {
          type: "p",
          text: "Names, logos and other marks of recipient organisations belong to those organisations, and appear on the platform and on Daan Receipts with their permission and solely to identify them. Nothing on the platform grants you any right to use them.",
        },
      ],
    },
    {
      heading: "Third-party services",
      blocks: [
        {
          type: "p",
          text: "Payments are processed by Razorpay Software Private Limited, an RBI-authorised payment aggregator, under its own terms. Other providers deliver our messaging, hosting and storage. We choose these providers with care but we do not control them, and their acts are not within our control.",
        },
      ],
    },
    {
      heading: "Liability",
      blocks: [
        {
          type: "p",
          text: "We provide the platform with reasonable skill and care, but we do not warrant that it will be uninterrupted or error-free.",
        },
        {
          type: "p",
          text: "To the extent permitted by law, we are not liable for the acts or omissions of a recipient organisation, for how it applies funds, for the outcome of any campaign, for the failure of a payment method or bank, or for loss you suffer because information an organisation gave us was untrue.",
        },
        {
          type: "p",
          text: "Where we are found liable, our aggregate liability to you is limited to the greater of the amount we retained from your donations in the twelve months before the claim, or one thousand rupees.",
        },
        {
          type: "callout",
          text: "Nothing in these terms excludes or limits liability for fraud, for wilful misconduct, for death or personal injury caused by negligence, or for anything else that cannot lawfully be excluded — including your rights under the Consumer Protection Act, 2019, which are not affected by this clause.",
        },
      ],
    },
    {
      heading: "Indemnity",
      blocks: [
        {
          type: "p",
          text: "You agree to indemnify us against loss, claims and reasonable costs arising from your breach of these terms, from your use of the platform in breach of law, or from information you gave us that was untrue. This does not apply to the extent the loss was caused by us.",
        },
      ],
    },
    {
      heading: "Governing law and disputes",
      blocks: [
        {
          type: "p",
          text: `These terms are governed by the laws of India. Subject to the paragraph below, the courts at ${ENTITY.jurisdictionCity} have exclusive jurisdiction.`,
        },
        {
          type: "p",
          text: `Before going to court, please raise the matter with us: most problems are resolved quickly. Use the Grievance Redressal page, or write to ${CONTACT.supportEmail}. We will acknowledge within 24 hours and aim to resolve within 15 days.`,
        },
        {
          type: "p",
          text: "If you are a consumer, nothing here prevents you from bringing a complaint before the consumer forum having jurisdiction where you reside.",
        },
      ],
    },
    {
      heading: "Changes to these terms",
      blocks: [
        {
          type: "p",
          text: `These terms are version ${POLICY_VERSION}, effective ${EFFECTIVE_DATE}. We will publish any new version here and update the version stamp. Where a change materially affects your rights we will ask you to accept the new terms in the app before you next give. Continuing to use the platform after a change means you accept it.`,
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Refund & Cancellation                                                      */
/* -------------------------------------------------------------------------- */

const REFUNDS: LegalDoc = {
  slug: "refunds",
  title: "Refund & Cancellation Policy",
  intro: "When a donation can be reversed, when it cannot, and how to raise a payment problem.",
  sections: [
    {
      heading: "The general position",
      blocks: [
        {
          type: "callout",
          text: "A donation is a voluntary gift. Once it has been settled with the recipient organisation it cannot be reversed or refunded, because the money is no longer held by us.",
        },
        {
          type: "p",
          text: "Please check the organisation, the campaign and the amount before you confirm payment. The payment screen shows all three, together with what the organisation will receive.",
        },
        {
          type: "p",
          text: "There is nothing to cancel after the fact: we do not operate recurring donations at present, so no mandate or standing instruction is created when you give.",
        },
      ],
    },
    {
      heading: "Failed and duplicate payments",
      blocks: [
        {
          type: "p",
          text: "These are the cases that actually arise, and we will put them right:",
        },
        {
          type: "ul",
          items: [
            "Debited but not recorded — money left your account but no donation appears in your Giving Passport. The amount was not settled to any organisation. Our payment processor normally reverses it automatically within 5 to 7 working days. If it has not reached you in 7 working days, contact us.",
            "Charged twice for the same gift — where the same donation is captured more than once, we will refund the duplicate in full.",
            "Wrong amount taken — where the amount debited does not match the amount you confirmed, we will refund the difference.",
            "Payment failed at the gateway — no donation is created and no money is settled. Any hold on your account is released by your bank.",
          ],
        },
        {
          type: "p",
          text: "In each of these cases the refund goes back to the original payment method. We cannot send it anywhere else.",
        },
      ],
    },
    {
      heading: "Discretionary reversals",
      blocks: [
        {
          type: "p",
          text: "We will consider a request outside the cases above, and will do what we reasonably can, where you tell us promptly that:",
        },
        {
          type: "ul",
          items: [
            "your account or payment instrument was used without your authority;",
            "you selected the wrong organisation or campaign and tell us before the money has been settled;",
            "an organisation is removed from the platform in circumstances where it should not have received your gift.",
          ],
        },
        {
          type: "p",
          text: "Where the funds have already reached the organisation, a reversal depends on that organisation agreeing to return them. We will ask, and we will tell you the outcome, but we cannot compel it.",
        },
      ],
    },
    {
      heading: "Raising a request",
      blocks: [
        {
          type: "p",
          text: `Raise a payment problem within 30 days of the transaction, either from the Support screen in the app or by writing to ${CONTACT.supportEmail}. Please include:`,
        },
        {
          type: "ul",
          items: [
            "the mobile number on your account;",
            "the date and amount of the payment;",
            "the organisation or campaign, if you know it;",
            "the payment reference or UPI transaction id, if you have it;",
            "and what went wrong.",
          ],
        },
      ],
    },
    {
      heading: "Timelines",
      blocks: [
        {
          type: "ul",
          items: [
            "We acknowledge a request within 24 hours.",
            "We decide it, and tell you the outcome with reasons, within 15 days.",
            "Where a refund is approved, we initiate it within 3 working days of that decision.",
            "Once initiated, it typically reaches your account within 5 to 7 working days, depending on your bank. That last leg is not within our control.",
          ],
        },
      ],
    },
    {
      heading: "What cannot be refunded",
      blocks: [
        {
          type: "ul",
          items: [
            "Donations already settled with the recipient organisation, unless that organisation agrees to return them.",
            "Any amount already disbursed or spent by the organisation.",
            "Charges levied by your own bank or payment provider, which we never receive.",
            "Where we refund a donation from which we retained the 5% Be Karna Initiatives share, that share is refunded to you along with the rest — we do not keep it on a reversed gift.",
          ],
        },
      ],
    },
    {
      heading: "If you are not satisfied",
      blocks: [
        {
          type: "p",
          text: "Escalate to our Grievance Officer using the details on the Grievance Redressal page. You may also raise the matter with your card issuer or bank, or with the consumer forum having jurisdiction where you reside.",
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Grievance Redressal                                                        */
/* -------------------------------------------------------------------------- */

const GRIEVANCE: LegalDoc = {
  slug: "grievance",
  title: "Grievance Redressal",
  intro: "How to raise a complaint, who handles it, and how long it takes.",
  sections: [
    {
      heading: "How to raise a grievance",
      blocks: [
        {
          type: "p",
          text: `Write to our Grievance Officer at the email address below, or by post to the address below. You can also raise an issue from the Support screen in the app, which reaches the same team.`,
        },
        { type: "p", text: "So that we can deal with it quickly, please include:" },
        {
          type: "ul",
          items: [
            "the mobile number on your account;",
            "what happened, and when;",
            "the donation date, amount and organisation, if the complaint concerns a gift;",
            "any payment reference you have;",
            "and what outcome you are looking for.",
          ],
        },
      ],
    },
    {
      heading: "Grievance Officer",
      blocks: [
        {
          type: "p",
          text: `Appointed under rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.`,
        },
        {
          type: "rows",
          rows: [
            { label: "Name", value: GRIEVANCE_OFFICER.name },
            { label: "Designation", value: GRIEVANCE_OFFICER.designation },
            { label: "Email", value: GRIEVANCE_OFFICER.email },
            { label: "Telephone", value: GRIEVANCE_OFFICER.phone },
            { label: "Address", value: [...GRIEVANCE_OFFICER.address] },
            { label: "Entity", value: LEGAL },
          ],
        },
      ],
    },
    {
      heading: "Timelines",
      blocks: [
        {
          type: "ul",
          items: [
            "We acknowledge your grievance within 24 hours of receiving it.",
            "We resolve it, and tell you the outcome with reasons, within 15 days.",
            "Where a complaint concerns content that is unlawful on its face, we act within the shorter period the IT Rules require.",
            "If we need longer because a third party — a bank, or a recipient organisation — has to respond, we will tell you why and give you a revised date.",
          ],
        },
      ],
    },
    {
      heading: "Data protection grievances",
      blocks: [
        {
          type: "p",
          text: `A complaint about your personal data — access, correction, erasure, or withdrawal of consent — can go to ${CONTACT.privacyEmail} or to the Grievance Officer above. We will respond within thirty days.`,
        },
        {
          type: "p",
          text: "Under the Digital Personal Data Protection Act, 2023 you must give us the opportunity to address the complaint first. If you are not satisfied with our response, or we do not respond in time, you may complain to the Data Protection Board of India.",
        },
      ],
    },
    {
      heading: "If you are still not satisfied",
      blocks: [
        {
          type: "ul",
          items: [
            "For a payment dispute — your card issuer or bank, and the Reserve Bank of India's Integrated Ombudsman Scheme, which covers regulated payment system participants.",
            "For a consumer complaint — the District, State or National Consumer Disputes Redressal Commission having jurisdiction where you reside, under the Consumer Protection Act, 2019.",
            "For a personal data complaint — the Data Protection Board of India.",
            "For a complaint about a recipient organisation's own conduct — that organisation, and the authority with which it is registered.",
          ],
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Contact                                                                    */
/* -------------------------------------------------------------------------- */

const CONTACT_DOC: LegalDoc = {
  slug: "contact",
  title: "Contact Us",
  intro: `How to reach ${BRAND}.`,
  sections: [
    {
      heading: "Registered office",
      blocks: [
        {
          type: "rows",
          rows: [
            { label: "Entity", value: LEGAL },
            { label: "LLPIN", value: ENTITY.llpin },
            { label: "PAN", value: ENTITY.pan },
            ...(ENTITY.gstin ? [{ label: "GSTIN", value: ENTITY.gstin }] : []),
            { label: "Registered office", value: [...ENTITY.registeredOffice] },
          ],
        },
      ],
    },
    {
      heading: "Email and phone",
      blocks: [
        {
          type: "rows",
          rows: [
            { label: "Support", value: CONTACT.supportEmail },
            { label: "Telephone", value: CONTACT.supportPhone },
            { label: "Privacy and data protection", value: CONTACT.privacyEmail },
          ],
        },
        {
          type: "p",
          text: "We answer support email within one working day.",
        },
      ],
    },
    {
      heading: "For organisations",
      blocks: [
        {
          type: "p",
          text: `An NGO, temple, mosque, church or gurudwara wishing to be listed can apply from within the ${BRAND} app by choosing the organisation path at sign-up, or write to ${CONTACT.partnersEmail}. We will ask for your registration certificate, tax registrations where you hold them, authorised-signatory details and bank account proof, and we verify these before you can receive a donation.`,
        },
      ],
    },
    {
      heading: "For grievances",
      blocks: [
        {
          type: "p",
          text: `Complaints go to our Grievance Officer, ${GRIEVANCE_OFFICER.name}. Full contact details, and the timelines we work to, are on the Grievance Redressal page.`,
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Cookie Notice                                                              */
/* -------------------------------------------------------------------------- */

const COOKIES: LegalDoc = {
  slug: "cookies",
  title: "Cookie Notice",
  intro: "What we store on your device, why, and how to refuse it.",
  sections: [
    {
      heading: "What we use",
      blocks: [
        {
          type: "p",
          text: "We keep this deliberately small. At present we use:",
        },
        {
          type: "ul",
          items: [
            "A session cookie, set when you sign in, which keeps you signed in. It is strictly necessary — without it the app cannot tell who you are. It is HTTP-only, meaning scripts cannot read it, and it expires after 30 days or when you sign out.",
            "Local storage on your device, used to remember interface preferences such as whether you have dismissed a prompt. This never leaves your device.",
            "Where analytics are enabled, first-party measurement of which pages are visited and which actions succeed, used to find and fix problems. This is not used to build an advertising profile.",
          ],
        },
      ],
    },
    {
      heading: "What we do not use",
      blocks: [
        {
          type: "ul",
          items: [
            "Third-party advertising or retargeting cookies.",
            "Cross-site tracking pixels.",
            "Cookies that identify you to advertisers or data brokers.",
          ],
        },
        {
          type: "p",
          text: "If this changes, we will update this notice and, where consent is required, ask for it before setting anything new.",
        },
      ],
    },
    {
      heading: "How to refuse or remove them",
      blocks: [
        {
          type: "p",
          text: "Every browser lets you block or delete cookies, usually under Settings, then Privacy. Blocking the session cookie will sign you out and prevent you from signing back in, because it is how the service recognises you; the rest can be blocked without breaking anything.",
        },
      ],
    },
    {
      heading: "More",
      blocks: [
        {
          type: "p",
          text: `How we handle personal data generally is set out in our Privacy Policy. Questions to ${CONTACT.privacyEmail}.`,
        },
      ],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Delivery & Service Policy                                                  */
/* -------------------------------------------------------------------------- */

const DELIVERY: LegalDoc = {
  slug: "delivery",
  title: "Delivery & Service Policy",
  intro: "What you receive when you give, and when you receive it. No physical goods are shipped.",
  sections: [
    {
      heading: "No goods are shipped",
      blocks: [
        {
          type: "callout",
          text: `${BRAND} does not sell or ship any physical product. A payment made through the platform is a donation to a charitable organisation or religious institution. Nothing is dispatched, and no shipping, courier or delivery charge is ever levied.`,
        },
      ],
    },
    {
      heading: "What you receive, and when",
      blocks: [
        {
          type: "ul",
          items: [
            "Confirmation on screen, immediately on successful payment.",
            "The donation recorded in your Giving Passport in the app, immediately.",
            "Your Daan Receipt, available to download immediately after the payment settles, from the confirmation screen and from the transaction in your Giving Passport. Receipts are not emailed — they are always available to download, so there is nothing to lose track of in an inbox.",
            "The statutory certificate of donation under section 80G, where the recipient organisation is registered — issued by that organisation, not by us, after it files its annual statement of donations with the Income Tax Department by 31 May following the financial year.",
          ],
        },
      ],
    },
    {
      heading: "Settlement to the organisation",
      blocks: [
        {
          type: "p",
          text: "Donations are settled to the recipient organisation's own bank account by our payment processor, normally within 2 to 5 working days of a successful payment, subject to that processor's settlement cycle and to banking holidays.",
        },
      ],
    },
    {
      heading: "If something does not arrive",
      blocks: [
        {
          type: "p",
          text: `If a donation does not appear in your Giving Passport, or a receipt does not reach you, write to ${CONTACT.supportEmail} with the date and amount. Payments debited but not recorded are dealt with under our Refund & Cancellation Policy.`,
        },
      ],
    },
  ],
};

export const LEGAL_DOCS: LegalDoc[] = [
  TERMS,
  PRIVACY,
  REFUNDS,
  DELIVERY,
  COOKIES,
  GRIEVANCE,
  CONTACT_DOC,
];

/** Look up a document by slug, for the route pages. */
export function legalDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((d) => d.slug === slug);
}

/** Footer link list, derived so the two can't drift apart. */
export const LEGAL_LINKS = LEGAL_DOCS.map((doc) => ({
  href: `/${doc.slug}`,
  label: doc.title,
}));

/**
 * The documents the app links to at sign-up, in the order they are named in the
 * consent notice. The app's consent record stores these URLs verbatim, so that a
 * consent captured today can be tied to exactly what was linked.
 */
export const SIGNUP_CONSENT_DOCS = ["terms", "privacy"] as const;
