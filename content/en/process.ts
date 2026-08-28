import type {ProcessStep} from '../schema';

export const process: ProcessStep[] = [
  {
    order: 1,
    title: 'A free 20-minute call',
    description:
      'You explain what is bothering you. I tell you honestly whether I am the right person. When I am not, I point you elsewhere — that has happened and it will happen again.',
    duration: '20 minutes',
    clientEffort: 'Fill in the form, then pick up the phone.'
  },
  {
    order: 2,
    title: 'The diagnostic',
    description:
      'Ninety structured minutes, a review of your tools, then a written 4–6 page report: three options ranked by effort and impact, what not to do, a budget per option.',
    duration: '1 week',
    clientEffort: '90 minutes of interview and read access to your current tools.'
  },
  {
    order: 3,
    title: 'A written quote, including what is not covered',
    description:
      'A written perimeter, a price, a date, and the explicit list of what is not included. You know exactly what you are buying before signing.',
    duration: '2 to 3 days',
    clientEffort: 'Read it, ask questions, decide.'
  },
  {
    order: 4,
    title: 'The build, with a weekly checkpoint',
    description:
      'You get a link to a live preview in week one and follow progress from there. No tunnel: you do not discover the result at the end.',
    duration: '3 to 6 weeks depending on the package',
    clientEffort: 'A 30-minute checkpoint each week, and your feedback.'
  },
  {
    order: 5,
    title: 'Go-live and training',
    description:
      'We launch, in your name. One hour of training, the documentation, and every account handed over to you.',
    duration: '1 day',
    clientEffort: 'One hour, with the people who will use the tool.'
  },
  {
    order: 6,
    title: 'Thirty days of fixes, then you choose',
    description:
      'For 30 days I fix what is wrong at no extra cost. After that, maintenance is an option, not a condition. The code and the accounts are yours either way.',
    duration: '30 days',
    clientEffort: 'Tell me what is not working.'
  }
];
