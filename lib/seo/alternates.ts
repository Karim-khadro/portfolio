import {getPathname} from '@/i18n/navigation';
import {routing, type AppPathname, type Locale} from '@/i18n/routing';
import {site} from '@/lib/site';

type Href =
  | AppPathname
  | {pathname: AppPathname; params: Record<string, string | string[]>};

export function absoluteUrl(locale: Locale, href: Href): string {
  const pathname = getPathname({
    // The typed `pathnames` map makes this cast necessary; the runtime shape is correct.
    href: href as never,
    locale
  });

  return `${site.url}${pathname}`;
}

/**
 * hreflang for every locale plus x-default → the default locale.
 * Built by looping `routing.locales` so localised slugs (/fr/tarifs ↔ /en/pricing)
 * resolve correctly, and so a third locale needs no change here.
 */
export function buildAlternates(locale: Locale, href: Href) {
  const languages: Record<string, string> = {};

  for (const candidate of routing.locales) {
    languages[candidate] = absoluteUrl(candidate, href);
  }

  languages['x-default'] = absoluteUrl(routing.defaultLocale, href);

  return {
    canonical: absoluteUrl(locale, href),
    languages
  };
}
