import {getTranslations} from 'next-intl/server';
import {routing, type Locale} from '@/i18n/routing';
import {ogContentType, ogSize, renderOgImage} from '@/lib/og';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Karim Khadro';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function OpengraphImage({
  params
}: {
  params: {locale: Locale};
}) {
  const t = await getTranslations({locale: params.locale, namespace: 'home'});

  return renderOgImage({
    title: t('heroTitle'),
    subtitle: t('heroLocation')
  });
}
