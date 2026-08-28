import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {ReplyDrafter} from '@/components/demos/ReplyDrafter';
import {
  CaseStudyGrid,
  CtaBand,
  PackageGrid,
  ProcessList,
  TrustSection
} from '@/components/sections';
import {Accordion} from '@/components/ui/Accordion';
import {Container, Section, SectionHeading} from '@/components/ui';
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

function WorkflowPanel({
  serviceTitle,
  serviceTagline,
  finalStep,
  live,
  requestLabel,
  requestText,
  resultLabel
}: {
  serviceTitle: string;
  serviceTagline: string;
  finalStep: string;
  live: string;
  requestLabel: string;
  requestText: string;
  resultLabel: string;
}) {
  return (
    <div className="home-workflow" aria-label={serviceTitle}>
      <div className="home-workflow__topline">
        <span>01 / 03</span>
        <span className="home-status"><i /> {live}</span>
      </div>
      <div className="home-workflow__request">
        <span className="home-workflow__eyebrow">{requestLabel}</span>
        <p>{requestText}</p>
      </div>
      <div className="home-workflow__line" aria-hidden="true"><span /></div>
      <div className="home-workflow__result">
        <span className="home-workflow__eyebrow">{resultLabel}</span>
        <strong>{serviceTitle}</strong>
        <p>{serviceTagline}</p>
      </div>
      <div className="home-workflow__check">
        <span>✓</span>
        <p>{finalStep}</p>
      </div>
    </div>
  );
}

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'home'});
  const cta = await getTranslations({locale, namespace: 'cta'});
  const common = await getTranslations({locale, namespace: 'common'});
  const {faq, services} = getContent(locale);
  const [aiService] = services;
  const objections = faq.filter((item) => item.category === 'ai').slice(0, 4);
  const priceFormatter = new Intl.NumberFormat(locale, {maximumFractionDigits: 0});

  return (
    <div className="home-page">
      <div className="home-scroll-progress" aria-hidden="true" />

      <section className="home-hero">
        <Container className="home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-kicker">{t('heroLocation')}</p>
            <h1>{t('heroTitle')}</h1>
            <p className="home-hero__intro">{t('heroSubtitle')}</p>
            <div className="home-hero__actions">
              <Link href="/rendez-vous" className="button button--light">
                {cta('bookCall')}
              </Link>
              <Link href="/tarifs" className="button button--quiet">
                {common('seePricing')}
              </Link>
            </div>
          </div>

          <WorkflowPanel
            serviceTitle={aiService.title}
            serviceTagline={aiService.tagline}
            finalStep={aiService.outcomes[2]}
            live={t('workflow.live')}
            requestLabel={t('workflow.requestLabel')}
            requestText={t('workflow.requestText')}
            resultLabel={t('workflow.resultLabel')}
          />
        </Container>
        <div className="home-hero__footer" aria-hidden="true">
          <span>{t('heroFooter.sites')}</span>
          <span>{t('heroFooter.apps')}</span>
          <span>{t('heroFooter.ai')}</span>
        </div>
      </section>

      <section className="home-diagnosis home-reveal">
        <Container>
          <div className="home-section-label">01 / {t('sections.diagnosis')}</div>
          <div className="home-diagnosis__lead">
            <SectionHeading title={t('painTitle')} />
            <p>{t('diagnosisIntro')}</p>
          </div>
          <ol className="home-pain-list">
            {(['one', 'two', 'three', 'four'] as const).map((key, index) => (
              <li key={key}>
                <span>0{index + 1}</span>
                <p>{t(`painItems.${key}`)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="demo" className="home-demo home-reveal">
        <Container>
          <div className="home-demo__heading">
            <div>
              <div className="home-section-label">02 / {t('sections.demo')}</div>
              <SectionHeading title={t('demoTitle')} intro={t('demoIntro')} />
            </div>
            <span className="home-demo__note">{t('demoNote')}</span>
          </div>
          <div className="home-demo__surface">
            <ReplyDrafter />
          </div>
        </Container>
      </section>

      <section className="home-offer home-reveal">
        <Container>
          <div className="home-offer__heading">
            <div>
              <div className="home-section-label">03 / {t('sections.services')}</div>
              <SectionHeading title={t('servicesTitle')} intro={t('servicesIntro')} />
            </div>
            <Link href="/services" className="home-inline-link">
              {common('seeAllServices')} <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="home-service-list">
            {services.map((service, index) => (
              <article key={service.slug} className="home-service">
                <span className="home-service__index">0{index + 1}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.tagline}</p>
                </div>
                <div className="home-service__details">
                  <span>{service.typicalTimeline}</span>
                  {service.startingPrice ? (
                    <strong>
                      {common('from')} {priceFormatter.format(service.startingPrice)} €
                    </strong>
                  ) : null}
                </div>
                <Link
                  href={{pathname: '/services/[slug]', params: {slug: service.slug}}}
                  className="home-service__link"
                  aria-label={`${common('learnMore')} : ${service.title}`}
                >
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Section className="home-process home-reveal">
        <div className="home-section-label">04 / {t('sections.process')}</div>
        <SectionHeading title={t('processTitle')} intro={t('processIntro')} />
        <ProcessList locale={locale} />
      </Section>

      <Section className="home-cases home-reveal">
        <div className="home-cases__heading">
          <div>
            <div className="home-section-label">05 / {t('sections.cases')}</div>
            <SectionHeading title={t('proofTitle')} intro={t('proofIntro')} />
          </div>
          <Link href="/realisations" className="home-inline-link">
            {common('seeCases')} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <CaseStudyGrid locale={locale} slugs={['ookto', 'unisensor-cloud']} />
      </Section>

      <Section className="home-pricing home-reveal">
        <div className="home-section-label">06 / {t('sections.pricing')}</div>
        <SectionHeading title={t('pricingTitle')} intro={t('pricingIntro')} />
        <PackageGrid locale={locale} />
        <Link href="/tarifs" className="home-inline-link home-pricing__link">
          {common('seePricing')} <span aria-hidden="true">↗</span>
        </Link>
      </Section>

      <Section className="home-faq home-reveal">
        <div className="home-section-label">07 / {t('sections.faq')}</div>
        <SectionHeading title={t('objectionsTitle')} />
        <div className="mt-8">
          <Accordion items={objections} />
        </div>
      </Section>

      <div className="home-reveal">
        <TrustSection locale={locale} />
      </div>
      <CtaBand locale={locale} />
    </div>
  );
}
