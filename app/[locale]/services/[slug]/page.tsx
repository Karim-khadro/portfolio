import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {AiForSmb} from '@/components/sections/AiForSmb';
import {CaseStudyGrid, CtaBand} from '@/components/sections';
import {Accordion} from '@/components/ui/Accordion';
import {JsonLd} from '@/components/ui/JsonLd';
import {Card, CheckList, Price, Section, SectionHeading} from '@/components/ui';
import {getContent, getService} from '@/content';
import {Link} from '@/i18n/navigation';
import {routing, type Locale} from '@/i18n/routing';
import {absoluteUrl} from '@/lib/seo/alternates';
import {buildBreadcrumbs, buildFaqSchema, buildServiceSchema} from '@/lib/seo/jsonld';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale; slug: string}>};

export function generateStaticParams() {
  // Slugs are identical across locales by design (see content-parity.test.ts).
  return routing.locales.flatMap((locale) =>
    getContent(locale).services.map((service) => ({locale, slug: service.slug}))
  );
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, slug} = await params;
  const service = getService(locale, slug);

  if (!service) return {};

  return buildMetadata({
    locale,
    href: {pathname: '/services/[slug]', params: {slug}},
    title: service.seo.title,
    description: service.seo.description
  });
}

export default async function ServicePage({params}: Props) {
  const {locale, slug} = await params;
  setRequestLocale(locale);

  const service = getService(locale, slug);
  if (!service) notFound();

  const t = await getTranslations({locale, namespace: 'services'});
  const common = await getTranslations({locale, namespace: 'common'});
  const nav = await getTranslations({locale, namespace: 'nav'});
  const {packages} = getContent(locale);

  const related = packages.filter((pkg) => service.relatedPackages.includes(pkg.slug));

  return (
    <>
      <Section>
        <SectionHeading as="h1" title={service.title} intro={service.tagline} />

        <div className="mt-8 max-w-3xl">
          <h2 className="font-display text-lg font-semibold text-ink">
            {t('problemTitle')}
          </h2>
          <p className="mt-2 text-ink-soft">{service.problem}</p>
        </div>
      </Section>

      {/* On the AI page the demo comes high, before any argument. */}
      {slug === 'ia-pme' ? <AiForSmb locale={locale} /> : null}

      <Section className="bg-surface-warm">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {common('outcomes')}
            </h2>
            <div className="mt-4">
              <CheckList items={service.outcomes} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {common('deliverables')}
            </h2>
            <div className="mt-4">
              <CheckList items={service.deliverables} />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {common('forWho')}
            </h2>
            <div className="mt-4">
              <CheckList items={service.forWho} />
            </div>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {common('timeline')}
            </h2>
            <p className="mt-4 text-ink-soft">{service.typicalTimeline}</p>
            {service.startingPrice ? (
              <div className="mt-4">
                <Price amount={service.startingPrice} fromLabel={common('from')} />
              </div>
            ) : null}
          </div>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section>
          <SectionHeading title={t('relatedTitle')} />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((pkg) => (
              <Card key={pkg.slug}>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {pkg.name}
                </h3>
                <div className="mt-2">
                  <Price amount={pkg.priceFrom} fromLabel={common('from')} />
                </div>
                <p className="mt-2 text-sm text-ink-muted">{pkg.billing}</p>
                <Link
                  href="/tarifs"
                  className="mt-4 inline-block text-sm font-medium text-accent underline underline-offset-4"
                >
                  {nav('pricing')}
                </Link>
              </Card>
            ))}
          </div>
        </Section>
      ) : null}

      {service.relatedCaseStudies.length > 0 ? (
        <Section className="bg-surface-warm">
          <SectionHeading title={t('casesTitle')} />
          <CaseStudyGrid locale={locale} slugs={service.relatedCaseStudies} />
        </Section>
      ) : null}

      {service.faq.length > 0 ? (
        <Section>
          <SectionHeading title={t('faqTitle')} />
          <div className="mt-8">
            <Accordion
              items={service.faq.map((item, index) => ({
                id: `${slug}-${index}`,
                question: item.question,
                answer: item.answer
              }))}
            />
          </div>
          <JsonLd data={buildFaqSchema(service.faq)} />
        </Section>
      ) : null}

      <CtaBand locale={locale} />

      <JsonLd data={buildServiceSchema(locale, service)} />
      <JsonLd
        data={buildBreadcrumbs([
          {name: nav('services'), url: absoluteUrl(locale, '/services')},
          {
            name: service.title,
            url: absoluteUrl(locale, {pathname: '/services/[slug]', params: {slug}})
          }
        ])}
      />
    </>
  );
}
