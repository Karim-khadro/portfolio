import type {Metadata} from 'next';
import {Analytics} from '@vercel/analytics/next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {notFound} from 'next/navigation';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';
import {Footer} from '@/components/layout/Footer';
import {Header} from '@/components/layout/Header';
import {LegacyHashRedirect} from '@/components/layout/LegacyHashRedirect';
import {JsonLd} from '@/components/ui/JsonLd';
import {routing, type Locale} from '@/i18n/routing';
import {body, display} from '@/lib/fonts';
import {buildGraph} from '@/lib/seo/jsonld';
import {site} from '@/lib/site';
import '../globals.css';

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta'});

  return {
    metadataBase: new URL(site.url),
    title: {
      template: `%s | ${t('siteTitle')}`,
      default: `${t('siteTitle')} — ${t('tagline')}`
    },
    description: t('home.description'),
    authors: [{name: site.name, url: site.url}],
    creator: site.name,
    verification: {
      // Preserved from the CRA site — do not remove without re-verifying.
      google: 'ONZp-spMzNMISjE0MPueGoo8hEV7w1zwvaA2QyO62WA'
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-icon.png'
    }
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Without this, every page silently goes dynamic and loses the CDN.
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'nav'});

  return (
    <html lang={locale} className={`${body.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col">
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
          >
            {t('skipToContent')}
          </a>
          <Header locale={locale as Locale} />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer locale={locale as Locale} />
          <LegacyHashRedirect />
        </NextIntlClientProvider>
        <JsonLd data={buildGraph(locale as Locale)} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
