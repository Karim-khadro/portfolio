import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {CaseStudyGrid, CtaBand} from '@/components/sections';
import {Card, Section, SectionHeading} from '@/components/ui';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.cases'});

  return buildMetadata({
    locale,
    href: '/realisations',
    title: t('title'),
    description: t('description')
  });
}

export default async function CasesPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'cases'});

  return (
    <>
      <Section>
        <SectionHeading as="h1" title={t('pageTitle')} />
        <Card className="mt-6 max-w-3xl border-accent/30">
          <p className="text-ink-soft">{t('honestyNote')}</p>
        </Card>
        <CaseStudyGrid locale={locale} />
      </Section>
      <CtaBand locale={locale} />
    </>
  );
}
