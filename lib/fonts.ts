import {Fraunces, Inter} from 'next/font/google';

/**
 * next/font downloads these at build time and serves them from our own origin —
 * no request to Google from the visitor's browser, so no consent banner and no
 * third-party connection. It also fixes the old site's bug, where two font
 * families were declared in tailwind.config.js and never actually loaded.
 */
export const body = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
});

export const display = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
  variable: '--font-display'
});
