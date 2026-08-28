import type {z} from 'zod';
import type {aboutSchema} from '../schema';

export const about: z.infer<typeof aboutSchema> = {
  headline: 'One person, from the first call to go-live',
  intro: [
    'I am Karim Khadro. I build websites, web applications and AI tooling for companies of 1 to 15 people, from Liège in Belgium.',
    'I have been building since 2019: first a final-year project whose entire purpose was filtering private data before it reached a cloud chatbot, then geographic data and mapping, and today production web applications plus a cloud infrastructure I am the sole owner of.',
    'What that means for you: you talk to the person who designs, builds, deploys and then answers the phone. There is no salesperson promising and no developer discovering.'
  ],
  commitments: [
    'I reply to your messages within 24 working hours. Always.',
    'We can talk from 18:00 CET, over lunch, or on Saturday morning. You choose.',
    'I take two projects at a time, maximum. When I am full I tell you and give you an honest date rather than a deadline I will miss.',
    'A website takes three to four weeks with me. In exchange you get the same person from the first call to go-live.'
  ],
  wontSell: [
    'An AI that decides for you. The tool drafts, a human approves — especially when a customer or money is involved.',
    'AI on patient medical records. On those projects I work on the admin side and leave the record alone.',
    'A chatbot on your site because it looks modern. If it answers no real question it annoys your customers and costs you money.',
    'A subscription you cannot leave. Accounts and code are in your name.',
    'An invented number. I will not promise "+40% conversions": nobody can know that before measuring it at your place.'
  ],
  humanLine:
    'Outside work: Formula 1, travelling, and an admitted tendency to spend too long on details nobody else notices.'
};
