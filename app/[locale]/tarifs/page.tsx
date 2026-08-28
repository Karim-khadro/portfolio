import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {CtaBand, PackageGrid} from '@/components/sections';
import {Card, CheckList, Section, SectionHeading} from '@/components/ui';
import {addOns as addOnsEn} from '@/content/en/packages';
import {addOns as addOnsFr} from '@/content/fr/packages';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale}>};

const addOnsByLocale = {fr: addOnsFr, en: addOnsEn};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.pricing'});

  return buildMetadata({
    locale,
    href: '/tarifs',
    title: t('title'),
    description: t('description')
  });
}

export default async function PricingPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'pricing'});
  const common = await getTranslations({locale, namespace: 'common'});
  const addOns = addOnsByLocale[locale];

  return (
    <>
      <Section>
        <SectionHeading as="h1" title={t('pageTitle')} intro={t('pageIntro')} />
        <PackageGrid locale={locale} />
      </Section>

      <Section className="bg-surface-warm">
        <SectionHeading title={t('addonsTitle')} />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {addOns.map((addOn) => (
            <Card key={addOn.name}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium text-ink">{addOn.name}</h3>
                <p className="whitespace-nowrap font-display font-semibold text-ink">
                  {common('from')} {new Intl.NumberFormat('fr-BE').format(addOn.price)} €
                </p>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{addOn.note}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading title={t('termsTitle')} />
            <div className="mt-6">
              <CheckList
                items={[
                  t('terms.payment'),
                  t('terms.vat'),
                  t('terms.floor'),
                  t('terms.addons')
                ]}
              />
            </div>
          </div>

          <div>
            <SectionHeading title={t('notIncludedTitle')} />
            <div className="mt-6">
              <CheckList
                items={[
                  t('notIncluded.one'),
                  t('notIncluded.two'),
                  t('notIncluded.three'),
                  t('notIncluded.four')
                ]}
                tone="negative"
              />
            </div>
          </div>
        </div>

        <Card className="mt-10 max-w-3xl border-accent/30">
          <h2 className="font-display text-lg font-semibold text-ink">
            {t('capacityTitle')}
          </h2>
          <p className="mt-2 text-ink-soft">{t('capacityText')}</p>
        </Card>
      </Section>

      <CtaBand locale={locale} />
    </>
  );
}
