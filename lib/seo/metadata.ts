import type {Metadata} from 'next';
import type {AppPathname, Locale} from '@/i18n/routing';
import {ogLocales, site} from '@/lib/site';
import {absoluteUrl, buildAlternates} from './alternates';

type Href =
  | AppPathname
  | {pathname: AppPathname; params: Record<string, string | string[]>};

type BuildMetadataOptions = {
  locale: Locale;
  href: Href;
  title: string;
  description: string;
  noindex?: boolean;
};

/** Every generateMetadata in the app goes through this one function. */
export function buildMetadata({
  locale,
  href,
  title,
  description,
  noindex = false
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(locale, href);

  return {
    title,
    description,
    alternates: buildAlternates(locale, href),
    robots: noindex ? {index: false, follow: true} : undefined,
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: site.name,
      locale: ogLocales[locale]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}
