import {getContent} from '@/content';
import type {Locale} from '@/i18n/routing';
import {site} from '@/lib/site';
import {absoluteUrl} from './alternates';

const personId = `${site.url}/#person`;
const serviceId = `${site.url}/#service`;
const websiteId = `${site.url}/#website`;

/**
 * One @graph, @id-linked rather than duplicated.
 *
 * LocalBusiness is deliberately skipped: Google expects a real PostalAddress and
 * openingHours, and only the municipality is published. ProfessionalService with
 * areaServed is the honest shape for a home-based provider.
 */
export function buildGraph(locale: Locale) {
  const content = getContent(locale);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: site.name,
        jobTitle:
          locale === 'fr'
            ? 'Développeur web et intégrateur IA indépendant'
            : 'Freelance web developer and AI integrator',
        url: absoluteUrl(locale, '/'),
        email: `mailto:${site.email}`,
        knowsLanguage: ['fr', 'en', 'ar'],
        sameAs: [site.linkedin, site.github],
        alumniOf: [
          {'@type': 'CollegeOrUniversity', name: 'Université de Liège'},
          {
            '@type': 'CollegeOrUniversity',
            name: 'Haute École de la Province de Liège'
          }
        ]
      },
      {
        '@type': 'ProfessionalService',
        '@id': serviceId,
        name: site.name,
        url: absoluteUrl(locale, '/'),
        provider: {'@id': personId},
        identifier: site.bce,
        priceRange: '€€',
        areaServed: site.areaServed.map((name) => ({
          '@type': 'AdministrativeArea',
          name
        })),
        serviceType:
          locale === 'fr'
            ? [
                'Intégration d’IA pour PME',
                'Création de site internet',
                'Développement d’application web',
                'Audit et conseil digital'
              ]
            : [
                'AI integration for small business',
                'Website design',
                'Web application development',
                'Digital audit and consulting'
              ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: locale === 'fr' ? 'Forfaits' : 'Packages',
          itemListElement: content.packages.map((pkg) => ({
            '@type': 'Offer',
            name: pkg.name,
            price: pkg.priceFrom,
            priceCurrency: 'EUR',
            url: absoluteUrl(locale, '/tarifs')
          }))
        }
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: absoluteUrl(locale, '/'),
        name: site.name,
        inLanguage: locale,
        publisher: {'@id': personId}
      }
    ]
  };
}

export function buildServiceSchema(
  locale: Locale,
  service: ReturnType<typeof getContent>['services'][number]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.tagline,
    provider: {'@id': personId},
    areaServed: site.areaServed,
    url: absoluteUrl(locale, {
      pathname: '/services/[slug]',
      params: {slug: service.slug}
    }),
    ...(service.startingPrice
      ? {
          offers: {
            '@type': 'Offer',
            price: service.startingPrice,
            priceCurrency: 'EUR'
          }
        }
      : {})
  };
}

/** Only ever called with FAQs that are actually rendered on the page. */
export function buildFaqSchema(items: {question: string; answer: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {'@type': 'Answer', text: item.answer}
    }))
  };
}

export function buildBreadcrumbs(
  trail: {name: string; url: string}[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
