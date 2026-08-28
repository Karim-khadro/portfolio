import {Bricolage_Grotesque, Manrope} from 'next/font/google';

/**
 * next/font downloads these at build time and serves them from our own origin —
 * no request to Google from the visitor's browser, so no consent banner and no
 * third-party connection. It also fixes the old site's bug, where two font
 * families were declared in tailwind.config.js and never actually loaded.
 */
export const body = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
});

export const display = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display'
});
