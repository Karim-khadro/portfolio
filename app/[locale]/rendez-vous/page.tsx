import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ConsentGate} from '@/components/booking/ConsentGate';
import {CheckList, Section, SectionHeading} from '@/components/ui';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';
import {site} from '@/lib/site';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.booking'});

  return buildMetadata({
    locale,
    href: '/rendez-vous',
    title: t('title'),
    description: t('description')
  });
}

export default async function BookingPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'booking'});

  return (
    <Section>
      <SectionHeading as="h1" title={t('pageTitle')} intro={t('pageIntro')} />

      <div className="mt-8 max-w-2xl">
        <h2 className="font-display text-lg font-semibold text-ink">{t('expect')}</h2>
        <div className="mt-3">
          <CheckList
            items={[
              t('expectItems.one'),
              t('expectItems.two'),
              t('expectItems.three')
            ]}
          />
        </div>
      </div>

      <div className="mt-10">
        <ConsentGate calLink={site.calLink} />
      </div>

      <p className="mt-6 text-sm text-ink-soft">
        <Link href="/contact" className="text-accent underline underline-offset-4">
          {t('gateAlternative')}
        </Link>
      </p>
    </Section>
  );
}
