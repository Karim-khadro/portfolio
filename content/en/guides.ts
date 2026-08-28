import type {Guide} from '../schema';

export const guides: Guide[] = [
  {
    slug: 'prix-site-internet-belgique',
    title: 'What does a website cost in Belgium? The real ranges',
    summary:
      'What a website actually costs depending on who builds it, and why the gap between €900 and €7,000 is not a question of margin.',
    readingMinutes: 6,
    sections: [
      {
        heading: 'The four ranges',
        body: [
          'A do-it-yourself site on a website builder costs €500 to €900, mostly in subscription and your own time. That is an honest option if you have the time and the site does not need to bring in customers.',
          'A freelancer charges €1,500 to €4,000 for a custom brochure site. An agency charges €3,000 to €7,000 for the same scope, with a project manager added and, often, a junior subtracted.',
          'Below €1,200 you are not buying a website, you are buying a filled-in template. That is not an insult, it is a description. Sometimes it is exactly what you need.'
        ]
      },
      {
        heading: 'Where the money goes',
        body: [
          'Design and development are less than half the price. The rest is the work on your copy, local search setup, technical configuration, training, and fixes after launch.',
          'That is precisely what disappears from a €900 quote. The site exists, but nobody finds it and you have nobody to call.'
        ]
      },
      {
        heading: 'The recurring costs nobody mentions',
        body: [
          'Domain: €15–30 a year. Hosting: €0–30 a month depending on the technology. Maintenance: €0–100 a month depending on what you want to delegate.',
          'Always ask who owns the domain and the hosting. If it is not you, it is not your site.'
        ]
      },
      {
        heading: 'How to decide',
        body: [
          'Ask one question: what is a new customer worth to you? If a customer is worth €500, a €1,900 site pays for itself with four of them. If a customer is worth €40, the answer is probably a good Google Business Profile rather than a site.',
          'I will tell you which of the two, free, in twenty minutes.'
        ]
      }
    ]
  },
  {
    slug: 'ia-pme-usages-concrets',
    title: 'AI for a small company: 6 concrete uses, and 3 where it is pointless',
    summary:
      'Six tasks where an AI tool saves hours in a company of under fifteen people — and three where it is wasted money.',
    readingMinutes: 7,
    sections: [
      {
        heading: 'The rule to remember',
        body: [
          'An AI model is very good at writing, summarising, classifying and retrieving information. It is bad at arithmetic, at deciding for you, and at guaranteeing it is not wrong.',
          'Every use that works follows from that sentence. So does every use that fails.'
        ]
      },
      {
        heading: 'The six that work',
        body: [
          'Answering repetitive customer questions from your own information. Sorting and preparing quote requests. Turning a voice note or a photo of a notebook into a clean document. Classifying and renaming incoming documents while extracting amounts. Searching your internal procedures in plain language. Drafting the first version of your recurring written replies.',
          'The common thread: the output is text, a human reads it, and the task comes back several times a week.'
        ]
      },
      {
        heading: 'The three where it is pointless',
        body: [
          'Bookkeeping in the strict sense: a language model does not calculate reliably. A spreadsheet does.',
          'Decisions with direct consequences — granting payment terms, approving a file. The proposal, yes; the decision, no.',
          'A chatbot dropped onto a site that contains no useful information. It cannot manufacture what you never wrote; it annoys your visitors and costs you a subscription.'
        ]
      }
    ]
  },
  {
    slug: 'vos-donnees-et-l-ia',
    title: 'Your data and AI: what really goes to the cloud',
    summary:
      'What actually leaves your company when you use an AI tool, and the three ways to reduce it.',
    readingMinutes: 6,
    sections: [
      {
        heading: 'What leaves, concretely',
        body: [
          'When an AI tool answers a question, two things go to the model provider: the question, and the extracts from your documents the tool judged useful for answering it. Nothing else. Not your whole database, not your files.',
          'So what matters is what you let the tool reach for. That is a design decision, taken before writing code — not a checkbox afterwards.'
        ]
      },
      {
        heading: 'Three ways to reduce it',
        body: [
          'Filter before sending: replace names, addresses and numbers with neutral placeholders, then restore them on the way back. That was exactly my final-year project, in 2019.',
          'Do not send what is not needed: most questions need the business context, not the personal data.',
          'Choose EU hosting where the feature allows it, and sign a processing agreement with the provider.'
        ]
      },
      {
        heading: 'What can honestly be written',
        body: [
          '"Hosted in Europe" is defensible. "Your data never leaves the EU" almost never is, the moment a US model is called.',
          'Be wary of a supplier promising you the second sentence without conditions. Either they have not checked, or they are counting on you not checking.'
        ]
      }
    ]
  },
  {
    slug: 'chatbot-utile-ou-gadget',
    title: 'A chatbot on your site: useful or gimmick?',
    summary:
      'Four conditions to meet before installing a chatbot. If three are missing, do not install one.',
    readingMinutes: 4,
    sections: [
      {
        heading: 'The four conditions',
        body: [
          'You get the same questions several times a week. The answers already exist somewhere in writing. A wrong answer has no serious immediate consequence. And you have somebody to take over when the tool does not know.',
          'Three out of four: worth doing. Two out of four: put up an FAQ page and keep your money.'
        ]
      },
      {
        heading: 'What separates the two',
        body: [
          'A useful chatbot answers only from your documents, cites its source, and says "I don’t know, I’m passing this on" instead of inventing a price or a deadline.',
          'A gimmick chatbot answers everything, confidently, including wrongly. It is the second one that gave the first a bad name.'
        ]
      }
    ]
  },
  {
    slug: 'preparer-refonte-site',
    title: 'What to prepare before having your site rebuilt',
    summary:
      'Seven things to gather before the first meeting. They save two weeks on the project.',
    readingMinutes: 5,
    sections: [
      {
        heading: 'Access, first',
        body: [
          'Who owns the domain name, and where? Who has access to the hosting and the business mailbox? This is the number one cause of delay on a rebuild, by a wide margin.',
          'If you do not know, start looking now: recovering lost access can take weeks.'
        ]
      },
      {
        heading: 'The content',
        body: [
          'High-resolution photos, your logo in a vector format if you have one, up-to-date prices, and the real list of what you sell — not the one on the current site.',
          'You do not need to write the copy. Structuring it with you is my job.'
        ]
      },
      {
        heading: 'The decision',
        body: [
          'Two questions to settle before starting: what should a visitor do on this site — call, book, order, come in? And who, on your side, approves? A project with three decision-makers and no referee takes twice as long.'
        ]
      }
    ]
  }
];
