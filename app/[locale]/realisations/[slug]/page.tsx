import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {CtaBand} from '@/components/sections';
import {JsonLd} from '@/components/ui/JsonLd';
import {Badge, Card, CheckList, Section, SectionHeading} from '@/components/ui';
import {getCaseStudy, getContent} from '@/content';
import {routing, type Locale} from '@/i18n/routing';
import {absoluteUrl} from '@/lib/seo/alternates';
import {buildBreadcrumbs} from '@/lib/seo/jsonld';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale; slug: string}>};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getContent(locale).caseStudies.map((study) => ({locale, slug: study.slug}))
  );
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, slug} = await params;
  const study = getCaseStudy(locale, slug);

  if (!study) return {};

  return buildMetadata({
    locale,
    href: {pathname: '/realisations/[slug]', params: {slug}},
    title: study.title,
    description: study.oneLiner.slice(0, 195)
  });
}

export default async function CaseStudyPage({params}: Props) {
  const {locale, slug} = await params;
  setRequestLocale(locale);

  const study = getCaseStudy(locale, slug);
  if (!study) notFound();

  const t = await getTranslations({locale, namespace: 'cases'});
  const common = await getTranslations({locale, namespace: 'common'});

  return (
    <>
      <Section>
        <Badge>{t(`labels.${study.label}`)}</Badge>
        <div className="mt-4">
          <SectionHeading as="h1" title={study.title} />
        </div>

        <Card className="mt-8 max-w-3xl border-accent/30">
          <p className="text-sm font-semibold text-ink">{t('oneLiner')}</p>
          <p className="mt-2 text-lg text-ink-soft">{study.oneLiner}</p>
        </Card>

        <div className="mt-10 max-w-3xl space-y-8">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {t('situation')}
            </h2>
            <p className="mt-2 text-ink-soft">{study.situation}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {t('constraint')}
            </h2>
            <p className="mt-2 text-ink-soft">{study.constraint}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {t('whatIDid')}
            </h2>
            <div className="mt-3">
              <CheckList items={study.whatIDid} />
            </div>

            {study.technicalDetail.length > 0 ? (
              <details className="mt-4 rounded-lg bg-surface-warm p-4">
                <summary className="cursor-pointer text-sm font-medium text-ink">
                  {common('technicalDetail')}
                </summary>
                <ul className="mt-3 space-y-1 text-sm text-ink-soft">
                  {study.technicalDetail.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            ) : null}
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {t('outcome')}
            </h2>
            <p className="mt-2 text-ink-soft">{study.outcome}</p>
          </div>

          <Card className="border-accent/30 bg-accent-soft">
            <h2 className="font-display text-lg font-semibold text-accent">
              {t('buyerTranslation')}
            </h2>
            <p className="mt-2 text-ink-soft">{study.buyerTranslation}</p>
          </Card>

          <dl className="grid gap-4 border-t border-line pt-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-medium text-ink">{t('role')}</dt>
              <dd className="mt-1 text-ink-soft">{study.role}</dd>
            </div>
            <div>
              <dt className="font-medium text-ink">{t('stack')}</dt>
              <dd className="mt-1 text-ink-soft">{study.stack.join(' · ')}</dd>
            </div>
            <div>
              <dt className="font-medium text-ink">Date</dt>
              <dd className="mt-1 text-ink-soft">{study.year}</dd>
            </div>
          </dl>
        </div>
      </Section>

      <CtaBand locale={locale} />

      <JsonLd
        data={buildBreadcrumbs([
          {name: t('pageTitle'), url: absoluteUrl(locale, '/realisations')},
          {
            name: study.title,
            url: absoluteUrl(locale, {
              pathname: '/realisations/[slug]',
              params: {slug}
            })
          }
        ])}
      />
    </>
  );
}
