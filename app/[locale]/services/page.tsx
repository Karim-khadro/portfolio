import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {CtaBand, ServiceGrid} from '@/components/sections';
import {Section, SectionHeading} from '@/components/ui';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.services'});

  return buildMetadata({
    locale,
    href: '/services',
    title: t('title'),
    description: t('description')
  });
}

export default async function ServicesPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'services'});

  return (
    <>
      <Section>
        <SectionHeading as="h1" title={t('pageTitle')} intro={t('pageIntro')} />
        <ServiceGrid locale={locale} />
      </Section>
      <CtaBand locale={locale} />
    </>
  );
}
