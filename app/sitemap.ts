import type {MetadataRoute} from 'next';
import {getContent} from '@/content';
import {routing, type AppPathname} from '@/i18n/routing';
import {absoluteUrl} from '@/lib/seo/alternates';

type Href =
  | AppPathname
  | {pathname: AppPathname; params: Record<string, string | string[]>};

/**
 * One sitemap: static routes × locales × dynamic slugs, each entry carrying its
 * own alternates. Simpler and just as correct as per-locale sitemaps until
 * there are a few hundred URLs. /merci is excluded (noindex).
 */
const staticRoutes: {href: AppPathname; priority: number}[] = [
  {href: '/', priority: 1},
  {href: '/services', priority: 0.9},
  {href: '/tarifs', priority: 0.9},
  {href: '/demos', priority: 0.8},
  {href: '/processus', priority: 0.7},
  {href: '/realisations', priority: 0.7},
  {href: '/a-propos', priority: 0.6},
  {href: '/faq', priority: 0.6},
  {href: '/guides', priority: 0.6},
  {href: '/contact', priority: 0.8},
  {href: '/rendez-vous', priority: 0.8},
  {href: '/cv', priority: 0.5},
  {href: '/mentions-legales', priority: 0.2},
  {href: '/confidentialite', priority: 0.2}
];

function entry(href: Href, priority: number): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = absoluteUrl(locale, href);
  }

  return {
    url: absoluteUrl(routing.defaultLocale, href),
    lastModified: new Date(),
    priority,
    alternates: {languages}
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const content = getContent(routing.defaultLocale);

  return [
    ...staticRoutes.map((route) => entry(route.href, route.priority)),
    ...content.services.map((service) =>
      entry({pathname: '/services/[slug]', params: {slug: service.slug}}, 0.8)
    ),
    ...content.caseStudies.map((study) =>
      entry({pathname: '/realisations/[slug]', params: {slug: study.slug}}, 0.6)
    ),
    ...content.guides.map((guide) =>
      entry({pathname: '/guides/[slug]', params: {slug: guide.slug}}, 0.6)
    )
  ];
}
