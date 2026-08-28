import {getTranslations} from 'next-intl/server';
import {SiteAssistant} from '@/components/demos/SiteAssistant';
import {Card, CheckList, Section, SectionHeading} from '@/components/ui';
import {getContent} from '@/content';
import type {Locale} from '@/i18n/routing';

/**
 * The body of /services/ia-pme: definition box → the demo, high on the page,
 * before any argument → six situations → what he will not sell → your data.
 */
export async function AiForSmb({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'aiPage'});
  const common = await getTranslations({locale, namespace: 'common'});
  const {useCases, about} = getContent(locale);

  return (
    <>
      <Section className="bg-surface-warm">
        <Card className="max-w-3xl border-accent/30">
          <h2 className="font-display text-lg font-semibold text-ink">
            {t('definitionTitle')}
          </h2>
          <p className="mt-3 text-ink-soft">{t('definition')}</p>
        </Card>

        <div className="mt-10">
          <SiteAssistant />
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('useCasesTitle')} />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {useCases.map((useCase) => (
            <Card key={useCase.id}>
              <h3 className="font-display text-lg font-semibold text-ink">
                {useCase.sector}
              </h3>
              <dl className="mt-3 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-ink">{t('useCasePain')}</dt>
                  <dd className="mt-1 text-ink-soft">{useCase.painPoint}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">{t('useCaseDoes')}</dt>
                  <dd className="mt-1 text-ink-soft">{useCase.whatAiDoes}</dd>
                </div>
                <div>
                  <dt className="font-medium text-ink">{t('useCaseChanges')}</dt>
                  <dd className="mt-1 italic text-accent">{useCase.whatItChanges}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-ink-muted">
                {common('from')} {new Intl.NumberFormat('fr-BE').format(useCase.priceFrom)} €
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-warm">
        <SectionHeading title={t('wontSellTitle')} />
        <div className="mt-6 max-w-3xl">
          <CheckList items={about.wontSell} tone="negative" />
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('dataTitle')} intro={t('dataIntro')} />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-display text-lg font-semibold text-ink">
              {t('dataStays')}
            </h3>
            <p className="mt-2 text-sm text-ink-soft">{t('dataStaysText')}</p>
          </Card>
          <Card>
            <h3 className="font-display text-lg font-semibold text-ink">{t('dataEu')}</h3>
            <p className="mt-2 text-sm text-ink-soft">{t('dataEuText')}</p>
          </Card>
          <Card>
            <h3 className="font-display text-lg font-semibold text-ink">{t('dataUs')}</h3>
            <p className="mt-2 text-sm text-ink-soft">{t('dataUsText')}</p>
          </Card>
          <Card>
            <h3 className="font-display text-lg font-semibold text-ink">
              {t('dataAlternative')}
            </h3>
            <p className="mt-2 text-sm text-ink-soft">{t('dataAlternativeText')}</p>
          </Card>
        </div>

        <p className="mt-8 max-w-3xl border-l-2 border-accent pl-4 text-ink-soft">
          {t('credibilityLine')}
        </p>
        <p className="mt-4 max-w-3xl text-sm text-ink-muted">{t('honestyNote')}</p>
      </Section>
    </>
  );
}
