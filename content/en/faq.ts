import type {FaqItem} from '../schema';

export const faq: FaqItem[] = [
  {
    id: 'cost-for-nothing',
    category: 'ai',
    question: 'This will cost a lot and change nothing.',
    answer:
      'We start with a €690 diagnostic that tells you what the payoff would be before you invest. If no option holds up, I tell you so, in writing. And the €690 is credited if you go ahead.'
  },
  {
    id: 'where-data-goes',
    category: 'ai',
    question: 'Where does my data go?',
    answer:
      'We list together what leaves your premises, before writing any code. A lot of it does not need to leave. EU hosting where feasible, a signed processing agreement, and a one-page document describing where your data travels. Your data is not used to train a model.'
  },
  {
    id: 'replace-staff',
    category: 'ai',
    question: 'Will this replace my staff?',
    answer:
      'I go after the part nobody enjoys: retyping, sorting, searching, writing the same answer for the tenth time. In a 3–15 person company the problem is not having too many people. The tool drafts, your team approves.'
  },
  {
    id: 'hallucination',
    category: 'ai',
    question: 'It makes things up.',
    answer:
      'Sometimes, yes. Three guardrails: the tool answers only from your documents, it cites its source, and it says "I don’t know, I’m passing this on" instead of inventing. On sensitive tasks a human approves before anything is sent.'
  },
  {
    id: 'gdpr',
    category: 'legal',
    question: 'What about GDPR?',
    answer:
      'A constraint, not an obstacle. We collect only what is useful, document the processing, tell your customers when they are talking to an automated system, and you keep the ability to delete everything. I supply the documents for your processing register.'
  },
  {
    id: 'too-small',
    category: 'ai',
    question: 'I am too small for this.',
    answer:
      'Three people and an inbox is already enough. Large AI projects fail often; small ones aimed at one specific task almost always work.'
  },
  {
    id: 'why-not-cheaper',
    category: 'pricing',
    question: 'I was quoted €900. Why the gap?',
    answer:
      'Because €900 buys a template filled in quickly, with no work on your copy, no local SEO, and nobody to call three months later. If your budget is €900 I would rather say so honestly: I am not the right supplier. If the budget is tight but serious, we reduce scope — three pages at €1,400 — never quality.'
  },
  {
    id: 'payment-terms',
    category: 'pricing',
    question: 'How does payment work?',
    answer:
      '40% on order, 60% on delivery, payable within 15 days. No deposit on the diagnostic: it is paid when the report is delivered.'
  },
  {
    id: 'capacity',
    category: 'process',
    question: 'When are you available?',
    answer:
      'I take on two projects at a time, maximum. When I am full I say so and give you an honest date rather than a deadline I will miss. I reply within 24 working hours, and we can talk from 18:00, over lunch, or on Saturday morning — including across time zones with a CET overlap.'
  },
  {
    id: 'ownership',
    category: 'tech',
    question: 'If we stop working together, do I lose everything?',
    answer:
      'No. Domain, hosting and accounts are in your name from day one, and the code of a custom application is transferred to you. There is nothing of yours left on my side.'
  },
  {
    id: 'meet-in-person',
    category: 'process',
    question: 'Can we meet?',
    answer:
      'Yes. I am in Jemeppe, near Liège, and I travel around the region. For remote clients everything runs async with a weekly call in CET hours — which is how the work gets done anyway.'
  },
  {
    id: 'vat',
    category: 'legal',
    question: 'Is there VAT on your invoices?',
    answer:
      'Not currently: I fall under the Belgian VAT franchise scheme, so the listed price is the price you pay. For a customer who cannot reclaim VAT, that is 21% less than an agency for identical work.'
  }
];
