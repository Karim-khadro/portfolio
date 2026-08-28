/**
 * Facts that appear in metadata, JSON-LD, the footer and the legal pages.
 * Anything still unknown at build time is marked TODO rather than invented —
 * mentions légales carrying a made-up BCE number is worse than none.
 */
export const site = {
  name: 'Karim Khadro',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://karimkhadro.be',
  email: 'karim@karimkhadro.be',
  // TODO: replace with the real number once the guichet d'entreprises confirms it.
  bce: 'BE 0000.000.000',
  vatNotice:
    'Assujetti exempté de la TVA en vertu de l’article 56bis du Code de la TVA.',
  city: 'Jemeppe',
  region: 'Liège',
  country: 'BE',
  areaServed: [
    'Liège',
    'Seraing',
    'Herstal',
    'Ans',
    'Flémalle',
    'Huy',
    'Verviers',
    'Wallonie'
  ],
  linkedin: 'https://www.linkedin.com/in/karim-khadro-8841461ba/',
  github: 'https://github.com/Karim-khadro/',
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? 'karim-khadro/appel-decouverte'
} as const;

export const ogLocales = {
  fr: 'fr_BE',
  en: 'en_US'
} as const;
