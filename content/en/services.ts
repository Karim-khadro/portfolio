import type {Service} from '../schema';

/**
 * EN is a different pitch, not a translation: the reader is a remote or
 * international client (or a recruiter), so the angle is CET overlap, English
 * fluency, senior technical depth and async working.
 */
export const services: Service[] = [
  {
    slug: 'ia-pme',
    title: 'AI for a small business, explained without the jargon',
    tagline: 'One tool, one bounded task, done well and under your control.',
    problem:
      'You hear about AI everywhere and still have no idea what it would do in your company, what it would cost, or where your data would end up.',
    outcomes: [
      'You get hours back from repetitive text work: replying, sorting, copying, summarising.',
      'You answer same-day the requests arriving by email and messaging apps.',
      'The answers stay yours: the tool drafts, your team approves.',
      'You know in writing what leaves your premises and what does not.'
    ],
    deliverables: [
      'A single use case, chosen during the diagnostic because it is the one costing you the most time.',
      'A tool connected to your real data: site content, price list, PDFs, mailbox, spreadsheet.',
      'A human validation step, designed in from the start.',
      'A one-page note describing where your data travels.',
      'Staff training and 30 days of tuning after go-live.'
    ],
    forWho: [
      'A 3–15 person company drowning in repetitive written work.',
      'An owner who wants to understand before buying.',
      'A trade where a mistake is visible — so a human signs off before anything is sent.'
    ],
    typicalTimeline: '4 to 6 weeks',
    startingPrice: 2900,
    relatedPackages: ['diagnostic', 'assistant-ia'],
    relatedCaseStudies: ['ookto', 'i-pulses'],
    faq: [
      {
        question: 'Will this replace my staff?',
        answer:
          'I go after the part nobody enjoys: retyping, sorting, searching, writing the same answer for the tenth time. In a 3–15 person company the problem is not having too many people. The tool drafts, your team approves.'
      },
      {
        question: 'What if it makes things up?',
        answer:
          'It happens. Three guardrails: the tool answers only from your documents, it cites where the information came from, and it says "I don’t know, I’m passing this on" instead of inventing. On sensitive tasks a human approves before anything is sent.'
      }
    ],
    seo: {
      title: 'AI integration for small businesses — Liège, Belgium',
      description:
        'Practical AI and agent integration for small companies: six concrete use cases, published prices, and a plain-language explanation of what happens to your data.'
    }
  },
  {
    slug: 'site-vitrine',
    title: 'A website that actually works for you',
    tagline: 'Four to six pages that make the phone ring, not a brochure.',
    problem:
      'You have no site, or one you would rather not show: unreadable on a phone, invisible on Google, and nobody remembers who holds the password.',
    outcomes: [
      'People searching for you find you, and understand what you do in thirty seconds.',
      'The site is fast and readable on a phone, where most of your visitors are.',
      'You show up properly on Google Maps and in local searches.',
      'Enquiries land in your inbox, not in a form nobody checks.'
    ],
    deliverables: [
      '4 to 6 pages (second language optional, €490).',
      'Copy built with you — I do not leave you staring at a blank page.',
      'Contact or booking form.',
      'Google Business Profile set up or repaired, local SEO basics.',
      'Analytics, hosting in your name, 1 h of training, 30 days of fixes.'
    ],
    forWho: [
      'Trades, practices, restaurants, small retail.',
      'A company whose site was built in the 2010s and never touched since.'
    ],
    typicalTimeline: '3 to 4 weeks',
    startingPrice: 1900,
    relatedPackages: ['site-vitrine'],
    relatedCaseStudies: ['ookto'],
    faq: [
      {
        question: 'Will I be able to edit the site myself?',
        answer:
          'Yes for the parts that change — opening hours, prices, news. We set that up and I train you for an hour. For everything else, a change takes me minutes and I would rather do it properly.'
      },
      {
        question: 'Who owns the site?',
        answer:
          'You do. Domain, hosting and accounts are in your name from day one. If you ever want to work with someone else, you leave with everything.'
      }
    ],
    seo: {
      title: 'Website design for small businesses — Liège, Belgium',
      description:
        'Websites for small companies in the Liège area: 4–6 pages, mobile-first, local SEO, hosting in your name, code and accounts handed over. From €1,900.'
    }
  },
  {
    slug: 'application-web',
    title: 'A web application, end to end',
    tagline: 'For when the process runs on a spreadsheet and email, and it is breaking.',
    problem:
      'An important process in your company lives in a shared spreadsheet, an inbox, and the heads of two people. It worked for years. It does not any more.',
    outcomes: [
      'An internal tool that matches how you work, rather than the other way round.',
      'Everyone sees what they should: roles and access are defined with you.',
      'No more "final_v3_ok.xlsx".',
      'The code and the accounts are yours — no lock-in.'
    ],
    deliverables: [
      'Scoping and user flows (Figma) before a line of code.',
      'Architecture, development, authentication and role management.',
      'Cloud deployment with CI/CD, tests, monitoring and alerts.',
      'Handover documentation and transfer of the repository.'
    ],
    forWho: [
      'A company whose business process has outgrown what a spreadsheet can do.',
      'A team that wants one person accountable from first call to production.'
    ],
    typicalTimeline: '8 to 14 weeks, sold in phases',
    startingPrice: 9500,
    relatedPackages: ['application-web'],
    relatedCaseStudies: ['unisensor-cloud', 'unisensor-livraison'],
    faq: [
      {
        question: 'Why no firm price up front?',
        answer:
          'Because a firm price on a three-month project that has not been scoped is fiction, for you as much as for me. We start with paid scoping (€1,500) producing the flows and the perimeter; phase 1 is then quoted firmly.'
      }
    ],
    seo: {
      title: 'Custom web application development — freelance developer, Belgium',
      description:
        'Custom internal web applications for small companies: scoping, build, cloud deployment, tests and handover. Sold in phases, code ownership transferred.'
    }
  },
  {
    slug: 'diagnostic',
    title: 'AI & digital diagnostic',
    tagline: 'For everyone who says "I don’t know what I need". That is most people.',
    problem:
      'You sense there is something to gain, but every supplier sells you their own speciality and you have no way to judge between them.',
    outcomes: [
      'You know your three best options, ranked by effort and payoff.',
      'More importantly, you know what not to do, and why.',
      'You have a budget per option before committing to anything.',
      'The report is yours: nothing obliges you to work with me afterwards.'
    ],
    deliverables: [
      'A structured 90-minute call.',
      'A review of your current tools, site and workflow.',
      'A written 4–6 page report: 3 ranked opportunities, what not to do, a budget per option, the recommended first step.',
      'A 30-minute debrief.'
    ],
    forWho: [
      'Any 1–15 person company hesitating between five ideas.',
      'A director who wants an independent opinion before investing.'
    ],
    typicalTimeline: '1 week',
    startingPrice: 690,
    relatedPackages: ['diagnostic'],
    relatedCaseStudies: [],
    faq: [
      {
        question: 'What if the conclusion is that there is nothing to do?',
        answer:
          'Then I write that down. I have concluded before that there was no AI to add anywhere and that the Google Business Profile needed fixing first. A diagnostic that saves you a €3,000 mistake has paid for its €690.'
      },
      {
        question: 'Do I lose the €690 if I go ahead?',
        answer:
          'No. It is credited in full against any package started within 60 days.'
      }
    ],
    seo: {
      title: 'AI & digital diagnostic for small businesses — €690',
      description:
        'An independent one-week diagnostic: a 90-minute interview, a written 4–6 page report, three options ranked by effort and impact, and what not to do.'
    }
  }
];
