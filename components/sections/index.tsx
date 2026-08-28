import {getTranslations} from 'next-intl/server';
import {getContent} from '@/content';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {Badge, Card, CheckList, Price, Section, SectionHeading} from '@/components/ui';

export async function CtaBand({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'cta'});

  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
          {t('bandTitle')}
        </h2>
        <p className="mt-3 max-w-2xl text-accent-soft">{t('bandText')}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/rendez-vous"
            className="rounded-md bg-white px-5 py-3 font-medium text-accent"
          >
            {t('bookCall')}
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-white/40 px-5 py-3 font-medium text-white"
          >
            {t('contact')}
          </Link>
        </div>
        <p className="mt-4 text-sm text-accent-soft">{t('callNote')}</p>
      </div>
    </section>
  );
}

export async function ServiceGrid({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'common'});
  const {services} = getContent(locale);

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <Card key={service.slug} className="flex flex-col">
          <h3 className="font-display text-xl font-semibold text-ink">
            {service.title}
          </h3>
          <p className="mt-2 text-ink-soft">{service.tagline}</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            {service.outcomes.slice(0, 3).map((outcome) => (
              <li key={outcome} className="flex gap-2">
                <span aria-hidden="true" className="text-accent">
                  ✓
                </span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-4">
            <div>
              {service.startingPrice ? (
                <Price amount={service.startingPrice} fromLabel={t('from')} />
              ) : null}
              <p className="text-xs text-ink-muted">{service.typicalTimeline}</p>
            </div>
            <Link
              href={{pathname: '/services/[slug]', params: {slug: service.slug}}}
              className="text-sm font-medium text-accent underline underline-offset-4"
            >
              {t('learnMore')}
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}

export async function PackageGrid({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'common'});
  const {packages} = getContent(locale);

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {packages.map((pkg) => (
        <Card
          key={pkg.slug}
          className={pkg.highlight ? 'border-accent/40 ring-1 ring-accent/20' : ''}
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold text-ink">{pkg.name}</h3>
            {pkg.highlight ? <Badge>★</Badge> : null}
          </div>
          <p className="mt-2 text-sm text-ink-soft">{pkg.bestFor}</p>

          <div className="mt-4">
            <Price amount={pkg.priceFrom} fromLabel={t('from')} />
            <p className="mt-1 text-xs text-ink-muted">{pkg.billing}</p>
            {pkg.recurring ? (
              <p className="text-xs text-ink-muted">{pkg.recurring}</p>
            ) : null}
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold text-ink">{t('included')}</p>
            <div className="mt-2">
              <CheckList items={pkg.includes} />
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold text-ink">{t('notIncluded')}</p>
            <div className="mt-2">
              <CheckList items={pkg.excludes} tone="negative" />
            </div>
          </div>

          <p className="mt-5 text-sm text-ink-muted">
            {t('timeline')} : {pkg.deliveryWeeks}
          </p>
        </Card>
      ))}
    </div>
  );
}

export async function ProcessList({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'process'});
  const {process} = getContent(locale);

  return (
    <ol className="mt-10 space-y-6">
      {process.map((step) => (
        <li key={step.order} className="flex gap-5">
          <span
            aria-hidden="true"
            className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft font-display font-semibold text-accent"
          >
            {step.order}
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-1 max-w-2xl text-ink-soft">{step.description}</p>
            <p className="mt-2 text-sm text-ink-muted">
              {t('duration')} : {step.duration} · {t('yourEffort')} : {step.clientEffort}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export async function CaseStudyGrid({
  locale,
  slugs
}: {
  locale: Locale;
  slugs?: string[];
}) {
  const t = await getTranslations({locale, namespace: 'cases'});
  const common = await getTranslations({locale, namespace: 'common'});
  const {caseStudies} = getContent(locale);

  const items = slugs
    ? caseStudies.filter((study) => slugs.includes(study.slug))
    : caseStudies;

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {items.map((study) => (
        <Card key={study.slug} className="flex flex-col">
          <Badge>{t(`labels.${study.label}`)}</Badge>
          <h3 className="mt-3 font-display text-xl font-semibold text-ink">
            {study.title}
          </h3>
          <p className="mt-2 text-ink-soft">{study.oneLiner}</p>
          <p className="mt-4 text-xs text-ink-muted">{study.stack.join(' · ')}</p>
          <Link
            href={{pathname: '/realisations/[slug]', params: {slug: study.slug}}}
            className="mt-4 text-sm font-medium text-accent underline underline-offset-4"
          >
            {common('learnMore')}
          </Link>
        </Card>
      ))}
    </div>
  );
}

export async function TrustSection({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'home'});

  return (
    <Section className="bg-surface-warm">
      <SectionHeading title={t('trustTitle')} intro={t('trustText')} />
      <div className="mt-8">
        <h3 className="font-display text-lg font-semibold text-ink">
          {t('guaranteeTitle')}
        </h3>
        <div className="mt-3 max-w-2xl">
          <CheckList
            items={[
              t('guarantees.one'),
              t('guarantees.two'),
              t('guarantees.three'),
              t('guarantees.four')
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
