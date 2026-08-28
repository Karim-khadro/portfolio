import {defineRouting} from 'next-intl/routing';

/**
 * The single source of truth for locales.
 *
 * Adding a third language is exactly three changes:
 *   1. an entry in `locales` below + its slugs in `pathnames`
 *   2. `messages/<locale>.json`
 *   3. `content/<locale>/*.ts`
 *
 * Nothing else in the codebase may write `'fr' | 'en'` as a literal union —
 * everything derives `Locale` from this array.
 */
export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'always',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/services': {fr: '/services', en: '/services'},
    '/services/[slug]': {fr: '/services/[slug]', en: '/services/[slug]'},
    '/tarifs': {fr: '/tarifs', en: '/pricing'},
    '/processus': {fr: '/processus', en: '/process'},
    '/realisations': {fr: '/realisations', en: '/case-studies'},
    '/realisations/[slug]': {fr: '/realisations/[slug]', en: '/case-studies/[slug]'},
    '/a-propos': {fr: '/a-propos', en: '/about'},
    '/rendez-vous': {fr: '/rendez-vous', en: '/book-a-call'},
    '/demos': {fr: '/demos-ia', en: '/ai-demos'},
    '/guides': {fr: '/guides', en: '/guides'},
    '/guides/[slug]': {fr: '/guides/[slug]', en: '/guides/[slug]'},
    '/mentions-legales': {fr: '/mentions-legales', en: '/legal-notice'},
    '/confidentialite': {fr: '/confidentialite', en: '/privacy'},
    '/merci': {fr: '/merci', en: '/thank-you'},
    '/cv': '/cv',
    '/contact': '/contact',
    '/faq': '/faq'
  }
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;
