import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {CtaBand} from '@/components/sections';
import {Accordion} from '@/components/ui/Accordion';
import {JsonLd} from '@/components/ui/JsonLd';
import {Section, SectionHeading} from '@/components/ui';
import {getContent} from '@/content';
import type {FaqItem} from '@/content/schema';
import type {Locale} from '@/i18n/routing';
import {buildFaqSchema} from '@/lib/seo/jsonld';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale}>};

const categories = ['ai', 'pricing', 'process', 'legal', 'tech'] as const;

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.faq'});

  return buildMetadata({
    locale,
    href: '/faq',
    title: t('title'),
    description: t('description')
  });
}

export default async function FaqPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'faq'});
  const {faq} = getContent(locale);

  const byCategory = categories
    .map((category) => ({
      category,
      items: faq.filter((item: FaqItem) => item.category === category)
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <Section>
        <SectionHeading as="h1" title={t('pageTitle')} intro={t('pageIntro')} />

        <div className="mt-10 space-y-12">
          {byCategory.map((group) => (
            <div key={group.category}>
              <h2 className="font-display text-xl font-semibold text-ink">
                {t(`categories.${group.category}`)}
              </h2>
              <div className="mt-4">
                <Accordion items={group.items} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} />

      {/* Every one of these questions is rendered above. */}
      <JsonLd data={buildFaqSchema(faq)} />
    </>
  );
}
