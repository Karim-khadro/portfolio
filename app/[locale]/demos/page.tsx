import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReplyDrafter} from '@/components/demos/ReplyDrafter';
import {SiteAssistant} from '@/components/demos/SiteAssistant';
import {CtaBand} from '@/components/sections';
import {Section, SectionHeading} from '@/components/ui';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.demos'});

  return buildMetadata({
    locale,
    href: '/demos',
    title: t('title'),
    description: t('description')
  });
}

export default async function DemosPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'demos'});

  return (
    <>
      <Section>
        <SectionHeading as="h1" title={t('pageTitle')} intro={t('pageIntro')} />
        <div className="mt-10 space-y-10">
          <ReplyDrafter />
          <SiteAssistant />
        </div>
      </Section>
      <CtaBand locale={locale} />
    </>
  );
}
