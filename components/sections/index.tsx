import {getTranslations} from 'next-intl/server';
import {getContent} from '@/content';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {Badge, CheckList, Price, Section, SectionHeading} from '@/components/ui';

export async function CtaBand({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'cta'});

  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[75rem] px-4 py-[clamp(4.5rem,8vw,7rem)] sm:px-8">
        <h2 className="max-w-[15ch] font-display text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-none tracking-[-0.045em] text-paper">
          {t('bandTitle')}
        </h2>
        <p className="mt-5 max-w-2xl leading-7 text-[#abb4c2]">{t('bandText')}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/rendez-vous"
            className="rounded-[0.4rem] bg-accent-soft px-5 py-3 font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            {t('bookCall')}
          </Link>
          <Link
            href="/contact"
            className="rounded-[0.4rem] border border-paper/35 px-5 py-3 font-semibold text-paper transition-colors hover:border-accent-soft hover:text-accent-soft"
          >
            {t('contact')}
          </Link>
        </div>
        <p className="mt-4 text-sm text-[#aab4c5]">{t('callNote')}</p>
      </div>
    </section>
  );
}

export async function ServiceGrid({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'common'});
  const {services} = getContent(locale);

  return (
    <div className="mt-12 border-t border-line">
      {services.map((service) => (
        <article
          key={service.slug}
          className="grid gap-6 border-b border-line py-8 md:grid-cols-[minmax(0,0.85fr)_minmax(18rem,1fr)_auto] md:items-start"
        >
          <div>
            <h3 className="font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold leading-tight tracking-[-0.035em] text-ink">
              {service.title}
            </h3>
            <p className="mt-2 max-w-md leading-6 text-ink-soft">
              {service.tagline}
            </p>
          </div>
          <ul className="space-y-2 text-sm leading-6 text-ink-soft">
            {service.outcomes.slice(0, 3).map((outcome) => (
              <li key={outcome} className="flex gap-2">
                <span aria-hidden="true" className="font-semibold text-ink">
                  +
                </span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-end justify-between gap-6 md:min-w-40 md:flex-col md:items-end">
            <div>
              {service.startingPrice ? (
                <Price amount={service.startingPrice} fromLabel={t('from')} />
              ) : null}
              <p className="text-xs text-ink-muted">{service.typicalTimeline}</p>
            </div>
            <Link
              href={{pathname: '/services/[slug]', params: {slug: service.slug}}}
              className="text-sm font-semibold text-ink underline decoration-accent-soft decoration-4 underline-offset-4"
            >
              {t('learnMore')}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export async function PackageGrid({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'common'});
  const {packages} = getContent(locale);

  return (
    <div className="mt-12 border-t border-line">
      {packages.map((pkg) => (
        <article
          key={pkg.slug}
          className={`grid gap-8 border-b border-line py-8 md:grid-cols-[minmax(14rem,0.7fr)_minmax(0,1fr)_minmax(0,1fr)] ${pkg.highlight ? 'bg-accent-soft/55 px-5' : 'px-0'}`}
        >
          <div>
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                {pkg.name}
              </h3>
              {pkg.highlight ? <Badge>★</Badge> : null}
            </div>
            <p className="mt-2 text-sm leading-6 text-ink-soft">{pkg.bestFor}</p>
            <div className="mt-5">
              <Price amount={pkg.priceFrom} fromLabel={t('from')} />
              <p className="mt-1 text-xs text-ink-muted">{pkg.billing}</p>
              {pkg.recurring ? (
                <p className="text-xs text-ink-muted">{pkg.recurring}</p>
              ) : null}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">{t('included')}</p>
            <div className="mt-2">
              <CheckList items={pkg.includes} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">{t('notIncluded')}</p>
            <div className="mt-2">
              <CheckList items={pkg.excludes} tone="negative" />
            </div>
          </div>

          <p className="text-sm text-ink-muted md:col-start-3">
            {t('timeline')} : {pkg.deliveryWeeks}
          </p>
        </article>
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
            className="mt-1 w-9 shrink-0 border-t-2 border-ink pt-2 font-display font-semibold text-ink"
          >
            0{step.order}
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
    <div className="mt-12 border-t border-line">
      {items.map((study) => (
        <article
          key={study.slug}
          className="grid gap-5 border-b border-line py-7 md:grid-cols-[10rem_minmax(0,1fr)_auto] md:items-center"
        >
          <div>
            <Badge>{t(`labels.${study.label}`)}</Badge>
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
              {study.title}
            </h3>
            <p className="mt-2 max-w-2xl leading-6 text-ink-soft">{study.oneLiner}</p>
            <p className="mt-3 text-xs text-ink-muted">{study.stack.join(' · ')}</p>
          </div>
          <Link
            href={{pathname: '/realisations/[slug]', params: {slug: study.slug}}}
            className="text-sm font-semibold text-ink underline decoration-accent-soft decoration-4 underline-offset-4"
          >
            {common('learnMore')}
          </Link>
        </article>
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
