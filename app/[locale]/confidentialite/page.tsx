import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Section, SectionHeading} from '@/components/ui';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';
import {site} from '@/lib/site';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.privacy'});

  return buildMetadata({
    locale,
    href: '/confidentialite',
    title: t('title'),
    description: t('description')
  });
}

export default async function PrivacyPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'privacy'});

  return (
    <Section>
      <SectionHeading as="h1" title={t('pageTitle')} intro={t('intro')} />

      <div className="prose-copy mt-8 max-w-3xl">
        <h2>{t('controllerTitle')}</h2>
        <p>
          {t('controllerText', {
            city: `${site.city} (${site.region})`,
            bce: site.bce,
            email: site.email
          })}
        </p>

        <h2>{t('dataTitle')}</h2>
        <ul>
          <li>{t('dataForm')}</li>
          <li>{t('dataBooking')}</li>
          <li>{t('dataDemos')}</li>
          <li>{t('dataAnalytics')}</li>
        </ul>

        <h2>{t('retentionTitle')}</h2>
        <p>{t('retentionText')}</p>

        <h2>{t('processorsTitle')}</h2>
        <p>{t('processorsText')}</p>

        <h2>{t('cookiesTitle')}</h2>
        <p>{t('cookiesText')}</p>

        <h2>{t('rightsTitle')}</h2>
        <p>{t('rightsText', {email: site.email})}</p>
      </div>
    </Section>
  );
}
