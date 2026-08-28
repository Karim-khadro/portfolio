import {describe, expect, it} from 'vitest';
import {en} from '../content/en';
import {fr} from '../content/fr';
import {contentSchema, type Content} from '../content/schema';
import {routing} from '../i18n/routing';

const byLocale: Record<string, Content> = {fr, en};

describe('content parity', () => {
  it('every locale validates against the schema', () => {
    for (const locale of routing.locales) {
      expect(() => contentSchema.parse(byLocale[locale])).not.toThrow();
    }
  });

  /**
   * Catches "I added a fourth service in FR only", which is the drift that
   * actually happens. Identity arrays must match across locales.
   */
  it('identity keys match across locales', () => {
    const reference = routing.defaultLocale;
    const base = byLocale[reference];

    const identities = (content: Content) => ({
      services: content.services.map((item) => item.slug),
      packages: content.packages.map((item) => item.slug),
      caseStudies: content.caseStudies.map((item) => item.slug),
      guides: content.guides.map((item) => item.slug),
      process: content.process.map((item) => item.order),
      faq: content.faq.map((item) => item.id),
      useCases: content.useCases.map((item) => item.id),
      caseStudyLabels: content.caseStudies.map((item) => item.label),
      packagePrices: content.packages.map((item) => item.priceFrom),
      servicePrices: content.services.map((item) => item.startingPrice ?? null)
    });

    for (const locale of routing.locales) {
      if (locale === reference) continue;
      expect(identities(byLocale[locale]), locale).toEqual(identities(base));
    }
  });

  it('cross-references resolve', () => {
    for (const locale of routing.locales) {
      const content = byLocale[locale];
      const packageSlugs = new Set(content.packages.map((item) => item.slug));
      const caseSlugs = new Set(content.caseStudies.map((item) => item.slug));

      for (const service of content.services) {
        for (const slug of service.relatedPackages) {
          expect(packageSlugs.has(slug), `${locale}: package ${slug}`).toBe(true);
        }
        for (const slug of service.relatedCaseStudies) {
          expect(caseSlugs.has(slug), `${locale}: case study ${slug}`).toBe(true);
        }
      }
    }
  });

  it('never publishes a testimonial without consent on file', () => {
    for (const locale of routing.locales) {
      for (const testimonial of byLocale[locale].testimonials) {
        expect(testimonial.consentOnFile).toBe(true);
      }
    }
  });
});
