import type {Metadata} from 'next';
import Image from 'next/image';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import profile from '@/assets/images/profile.jpg';
import {CtaBand} from '@/components/sections';
import {Card, CheckList, Section, SectionHeading} from '@/components/ui';
import {getContent} from '@/content';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.about'});

  return buildMetadata({
    locale,
    href: '/a-propos',
    title: t('title'),
    description: t('description')
  });
}

export default async function AboutPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'about'});
  const {about} = getContent(locale);

  return (
    <>
      <Section>
        <div className="grid gap-10 md:grid-cols-[220px_1fr] md:items-start">
          <Image
            src={profile}
            alt={t('photoAlt')}
            placeholder="blur"
            sizes="(min-width: 768px) 220px, 160px"
            // The only priority image on the site: the above-fold portrait.
            priority
            className="w-40 rounded-xl object-cover md:w-full"
          />
          <div>
            <SectionHeading as="h1" title={about.headline} />
            <div className="mt-6 max-w-2xl space-y-4 text-ink-soft">
              {about.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-warm">
        <SectionHeading title={t('commitmentsTitle')} />
        <div className="mt-6 max-w-3xl">
          <CheckList items={about.commitments} />
        </div>
      </Section>

      <Section>
        <SectionHeading title={t('wontSellTitle')} />
        <div className="mt-6 max-w-3xl">
          <CheckList items={about.wontSell} tone="negative" />
        </div>

        <Card className="mt-10 max-w-3xl">
          <h2 className="font-display text-lg font-semibold text-ink">
            {t('humanTitle')}
          </h2>
          <p className="mt-2 text-ink-soft">{about.humanLine}</p>
        </Card>
      </Section>

      <CtaBand locale={locale} />
    </>
  );
}
