import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Section, SectionHeading} from '@/components/ui';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';
import {site} from '@/lib/site';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.legal'});

  return buildMetadata({
    locale,
    href: '/mentions-legales',
    title: t('title'),
    description: t('description')
  });
}

export default async function LegalPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'legal'});

  return (
    <Section>
      <SectionHeading as="h1" title={t('pageTitle')} />

      <div className="prose-copy mt-8 max-w-3xl">
        <h2>{t('editorTitle')}</h2>
        <p>{t('editorText', {city: `${site.city} (${site.region})`})}</p>
        <p>
          {t('bceLabel')} : {site.bce}
          <br />
          {t('contactLabel')} : <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <h2>{t('vatTitle')}</h2>
        <p>{site.vatNotice}</p>

        <h2>{t('hostingTitle')}</h2>
        <p>{t('hostingText')}</p>

        <h2>{t('ipTitle')}</h2>
        <p>{t('ipText')}</p>

        <h2>{t('liabilityTitle')}</h2>
        <p>{t('liabilityText')}</p>
      </div>
    </Section>
  );
}
