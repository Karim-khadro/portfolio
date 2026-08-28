import type {Locale} from '@/i18n/routing';
import {en} from './en';
import {fr} from './fr';
import {contentSchema, type Content} from './schema';

/**
 * The ONLY module pages may import content from.
 * No page ever does `import {services} from '@/content/fr/services'`.
 */
const byLocale: Record<Locale, Content> = {fr, en};

export function getContent(locale: Locale): Content {
  return byLocale[locale];
}

/** Used by the parity test — validates every locale in one pass. */
export function getValidatedContent(locale: Locale): Content {
  return contentSchema.parse(byLocale[locale]);
}

export function getService(locale: Locale, slug: string) {
  return getContent(locale).services.find((service) => service.slug === slug);
}

export function getCaseStudy(locale: Locale, slug: string) {
  return getContent(locale).caseStudies.find((study) => study.slug === slug);
}

export function getGuide(locale: Locale, slug: string) {
  return getContent(locale).guides.find((guide) => guide.slug === slug);
}

export function getPackage(locale: Locale, slug: string) {
  return getContent(locale).packages.find((pkg) => pkg.slug === slug);
}

export * from './schema';
