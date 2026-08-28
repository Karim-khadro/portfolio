import type {UseCase} from '../schema';

export const useCases: UseCase[] = [
  {
    id: 'boulangerie',
    sector: 'Bakery, restaurant',
    painPoint:
      'The same questions all day, by phone and by messenger: opening hours, allergens, whether you cater for twenty people, whether you are open on a bank holiday.',
    whatAiDoes:
      'An assistant answers from your own information — menu, hours, prices — and hands over to a human the moment it does not know.',
    whatItChanges: 'The phone rings less during the lunch rush.',
    priceFrom: 2900
  },
  {
    id: 'garage',
    sector: 'Garage, workshop',
    painPoint:
      'Quote requests arrive by email and messaging apps, unsorted, and you deal with them in the evening. Sometimes two days later, by which time the customer has gone elsewhere.',
    whatAiDoes:
      'Each request is read and structured: make, model, problem, urgency. A draft reply and a price band are proposed; you approve in one click.',
    whatItChanges: 'You answer same-day, so you win jobs you were losing to slowness.',
    priceFrom: 2900
  },
  {
    id: 'cabinet',
    sector: 'Physiotherapy, small practice',
    painPoint:
      'No-shows, admin questions interrupting sessions, and an intake form nobody has time to read beforehand.',
    whatAiDoes:
      'Automatic reminders, answers to admin questions, and a summary of the intake form before the session. Patient medical data stays out of it — I explicitly recommend keeping AI away from the patient record.',
    whatItChanges:
      'Fewer lost slots, and a session that starts without ten minutes of paperwork.',
    priceFrom: 2900
  },
  {
    id: 'construction',
    sector: 'Construction, site work',
    painPoint:
      'The site report gets written in the evening, from memory, out of a notebook and some photos. Or it does not get written at all.',
    whatAiDoes:
      'Forty seconds of voice note, or a photo of a notebook page, becomes a clean site report and quote lines to approve.',
    whatItChanges: 'Two hours less paperwork in the evening.',
    priceFrom: 2900
  },
  {
    id: 'fiduciaire',
    sector: 'Accountant, bookkeeping practice',
    painPoint:
      'Client documents arrive in every format imaginable and someone has to read, rename, file them and retype the amounts.',
    whatAiDoes:
      'Documents are read, classified, renamed, and amounts extracted for human checking.',
    whatItChanges: 'Data entry becomes proofreading.',
    priceFrom: 2900
  },
  {
    id: 'pme',
    sector: 'Any small company',
    painPoint:
      'Procedures, prices and contracts are somewhere on the server. The new hire asks everyone.',
    whatAiDoes:
      'Plain-language search across your internal documents, with the source cited on every answer.',
    whatItChanges: 'The new hire stops asking everyone.',
    priceFrom: 2900
  }
];
