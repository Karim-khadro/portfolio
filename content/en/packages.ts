import type {Package} from '../schema';

export const packages: Package[] = [
  {
    slug: 'diagnostic',
    name: 'AI & digital diagnostic',
    priceFrom: 690,
    billing: 'fixed price, credited in full against any package started within 60 days',
    bestFor: 'You know something has to change, but not what.',
    includes: [
      'Structured 90-minute call',
      'Review of your current tools, site and workflow',
      'Written 4–6 page report: 3 opportunities ranked by effort and impact',
      'What not to do, and why',
      'A budget per option and the recommended first step',
      '30-minute debrief'
    ],
    excludes: ['No development at this stage', 'No obligation to continue with me'],
    deliveryWeeks: '1 week',
    ctaKey: 'bookDiagnostic',
    highlight: true
  },
  {
    slug: 'site-vitrine',
    name: 'A website that works for you',
    priceFrom: 1900,
    billing: '40% on order, 60% on go-live',
    bestFor: 'Trades, practices, restaurants and small retail with no site, or a dead one.',
    includes: [
      '4 to 6 pages (second language: +€490)',
      'Mobile-first design',
      'Copy structured with you',
      'Contact or booking form',
      'Google Business Profile and local SEO basics',
      'Analytics',
      'Hosting and domain in your name',
      '1 h of training and 30 days of fixes'
    ],
    excludes: [
      'Online shop and payment',
      'Writing every word without your input',
      'Professional photography and logo design'
    ],
    deliveryWeeks: '3 to 4 weeks',
    ctaKey: 'bookCall',
    recurring: 'maintenance €35/month'
  },
  {
    slug: 'assistant-ia',
    name: 'Custom AI assistant',
    priceFrom: 2900,
    billing: '40% on order, 60% on go-live',
    bestFor: 'A company drowning in repetitive written work.',
    includes: [
      'One bounded use case, chosen during the diagnostic',
      'Connected to your real data: site content, price list, PDFs, mailbox, spreadsheet',
      'A human validation step, designed in from the start',
      'A written note describing what leaves your premises',
      'EU hosting where technically feasible',
      'Staff training',
      '30 days of tuning after go-live'
    ],
    excludes: [
      'Any automatic decision without human review',
      'Processing patient medical records',
      'Model API costs, billed separately and passed through at cost'
    ],
    deliveryWeeks: '4 to 6 weeks',
    ctaKey: 'bookDiagnostic',
    highlight: true,
    recurring: '€150/month (hosting, monitoring, monthly tweaks, API at cost)'
  },
  {
    slug: 'application-web',
    name: 'Web application, end to end',
    priceFrom: 9500,
    billing: 'sold in phases: paid scoping at €1,500, then phase by phase',
    bestFor: 'A process running on spreadsheets and email that needs a real tool.',
    includes: [
      'Scoping, user flows and Figma designs',
      'Architecture and development',
      'Authentication and role management',
      'Cloud deployment with continuous integration',
      'Automated tests and monitoring',
      'Handover documentation',
      'Transfer of code and repository ownership'
    ],
    excludes: [
      'A firm price for the whole project before scoping',
      'Third-party licences and subscriptions',
      'Migrating unstructured data without prior analysis'
    ],
    deliveryWeeks: '8 to 14 weeks',
    ctaKey: 'bookCall',
    recurring: 'maintenance from €250/month'
  }
];

export const addOns = [
  {
    name: 'Taking over or rescuing an existing project',
    price: 690,
    note: 'audit first, quote second'
  },
  {
    name: 'AWS and cloud cost audit',
    price: 1200,
    note: 'cost governance and access reviews'
  },
  {
    name: 'Half-day AI training for your team',
    price: 690,
    note: 'on your real cases, not generic examples'
  },
  {
    name: 'Second language for a website',
    price: 490,
    note: 'adapted, not word-for-word'
  }
];
