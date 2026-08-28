import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {AiScrollStory} from '@/components/home/AiScrollStory';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.home'});

  return buildMetadata({locale, href: '/', title: t('title'), description: t('description')});
}

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'home.next'});
  const cta = await getTranslations({locale, namespace: 'cta'});
  const steps = [1, 2, 3].map((index) => ({
    eyebrow: t(`story.steps.${index}.eyebrow`),
    title: t(`story.steps.${index}.title`),
    text: t(`story.steps.${index}.text`),
    detail: t(`story.steps.${index}.detail`)
  }));

  return (
    <div className="ai-home">
      <div className="ai-home__progress" aria-hidden="true" />

      <section className="ai-hero">
        <div className="ai-hero__glow" aria-hidden="true" />
        <div className="ai-shell ai-hero__grid">
          <div className="ai-hero__copy">
            <p className="ai-eyebrow">{t('hero.eyebrow')}</p>
            <h1>{t('hero.title')}</h1>
            <p className="ai-hero__intro">{t('hero.intro')}</p>
            <div className="ai-hero__actions">
              <a href="#how-it-works" className="ai-button ai-button--bright">
                {t('hero.primaryAction')} <span aria-hidden="true">↓</span>
              </a>
              <Link href="/rendez-vous" className="ai-button ai-button--outline">
                {cta('bookCall')}
              </Link>
            </div>
            <p className="ai-hero__note">{t('hero.note')}</p>
          </div>

          <div className="ai-orbit-card" aria-label={t('hero.visualLabel')}>
            <div className="ai-orbit-card__topline">
              <span>karim / ai</span>
              <span className="ai-orbit-card__status"><i /> {t('hero.status')}</span>
            </div>
            <div className="ai-orbit-card__core">
              <span className="ai-orbit-card__halo ai-orbit-card__halo--one" />
              <span className="ai-orbit-card__halo ai-orbit-card__halo--two" />
              <strong>AI</strong>
              <span className="ai-orbit-card__signal ai-orbit-card__signal--one" />
              <span className="ai-orbit-card__signal ai-orbit-card__signal--two" />
            </div>
            <div className="ai-orbit-card__bottom">
              <span>{t('hero.visualFrom')}</span>
              <b>{t('hero.visualTo')}</b>
            </div>
          </div>
        </div>
        <div className="ai-hero__ticker" aria-hidden="true">
          <span>{t('hero.ticker.0')}</span><span>✦</span>
          <span>{t('hero.ticker.1')}</span><span>✦</span>
          <span>{t('hero.ticker.2')}</span><span>✦</span>
          <span>{t('hero.ticker.0')}</span><span>✦</span>
        </div>
      </section>

      <section className="ai-intro">
        <div className="ai-shell ai-intro__grid">
          <p className="ai-eyebrow">{t('intro.eyebrow')}</p>
          <div><h2>{t('intro.title')}</h2><p>{t('intro.text')}</p></div>
        </div>
      </section>

      <AiScrollStory
        label={t('story.label')}
        title={t('story.title')}
        summary={t('story.summary')}
        steps={steps}
        visual={{message: t('story.visual.message'), draft: t('story.visual.draft'), approved: t('story.visual.approved'), live: t('story.visual.live')}}
      />

      <section className="ai-fit">
        <div className="ai-shell">
          <p className="ai-eyebrow">{t('fit.eyebrow')}</p>
          <div className="ai-fit__heading"><h2>{t('fit.title')}</h2><p>{t('fit.intro')}</p></div>
          <ul className="ai-fit__list">
            {[1, 2, 3].map((item) => <li key={item}><span>0{item}</span><p>{t(`fit.items.${item}`)}</p></li>)}
          </ul>
        </div>
      </section>

      <section className="ai-final">
        <div className="ai-shell ai-final__inner">
          <p className="ai-eyebrow">{t('final.eyebrow')}</p>
          <h2>{t('final.title')}</h2>
          <p>{t('final.text')}</p>
          <div className="ai-final__actions">
            <Link href="/rendez-vous" className="ai-button ai-button--bright">{cta('bookCall')} <span aria-hidden="true">↗</span></Link>
            <Link href="/contact" className="ai-text-link">{cta('contact')} <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="ai-final__note">{cta('callNote')}</p>
        </div>
      </section>
    </div>
  );
}
