import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReplyDrafter} from '@/components/demos/ReplyDrafter';
import {
  CaseStudyGrid,
  CtaBand,
  PackageGrid,
  ProcessList,
  ServiceGrid,
  TrustSection
} from '@/components/sections';
import {Accordion} from '@/components/ui/Accordion';
import {Card, Container, Section, SectionHeading} from '@/components/ui';
import {getContent} from '@/content';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.home'});

  return buildMetadata({
    locale,
    href: '/',
    title: t('title'),
    description: t('description')
  });
}

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'home'});
  const cta = await getTranslations({locale, namespace: 'cta'});
  const common = await getTranslations({locale, namespace: 'common'});
  const {faq} = getContent(locale);

  // Only the objections actually rendered below — no FAQPage schema is emitted
  // for questions the visitor cannot see.
  const objections = faq.filter((item) => item.category === 'ai').slice(0, 4);

  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-24">
          <p className="text-sm font-medium text-accent">{t('heroLocation')}</p>
          <h1 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {t('heroTitle')}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">{t('heroSubtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/rendez-vous"
              className="rounded-md bg-accent px-5 py-3 font-medium text-white"
            >
              {cta('bookCall')}
            </Link>
            <Link
              href="/tarifs"
              className="rounded-md border border-line bg-paper px-5 py-3 font-medium text-ink"
            >
              {common('seePricing')}
            </Link>
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading title={t('painTitle')} />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {(['one', 'two', 'three', 'four'] as const).map((key) => (
            <Card key={key}>
              <p className="text-ink-soft">{t(`painItems.${key}`)}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="demo" className="bg-surface-warm">
        <SectionHeading title={t('demoTitle')} intro={t('demoIntro')} />
        <div className="mt-8">
          <ReplyDrafter />
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('servicesTitle')} intro={t('servicesIntro')} />
        <ServiceGrid locale={locale} />
      </Section>

      <Section className="bg-surface-warm">
        <SectionHeading title={t('processTitle')} intro={t('processIntro')} />
        <ProcessList locale={locale} />
      </Section>

      <Section>
        <SectionHeading title={t('proofTitle')} intro={t('proofIntro')} />
        <CaseStudyGrid locale={locale} slugs={['ookto', 'unisensor-cloud']} />
        <Link
          href="/realisations"
          className="mt-6 inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          {common('seeCases')}
        </Link>
      </Section>

      <Section className="bg-surface-warm">
        <SectionHeading title={t('pricingTitle')} intro={t('pricingIntro')} />
        <PackageGrid locale={locale} />
        <Link
          href="/tarifs"
          className="mt-6 inline-block text-sm font-medium text-accent underline underline-offset-4"
        >
          {common('seePricing')}
        </Link>
      </Section>

      <Section>
        <SectionHeading title={t('objectionsTitle')} />
        <div className="mt-8">
          <Accordion items={objections} />
        </div>
      </Section>

      <TrustSection locale={locale} />

      <CtaBand locale={locale} />
    </>
  );
}
