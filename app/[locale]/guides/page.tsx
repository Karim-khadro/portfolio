import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {CtaBand} from '@/components/sections';
import {Card, Section, SectionHeading} from '@/components/ui';
import {getContent} from '@/content';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.guides'});

  return buildMetadata({
    locale,
    href: '/guides',
    title: t('title'),
    description: t('description')
  });
}

export default async function GuidesPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'guides'});
  const common = await getTranslations({locale, namespace: 'common'});
  const {guides} = getContent(locale);

  return (
    <>
      <Section>
        <SectionHeading as="h1" title={t('pageTitle')} intro={t('pageIntro')} />

        {/* No dates, no feed, no "latest posts" — undated guides do not rot. */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Card key={guide.slug}>
              <h2 className="font-display text-lg font-semibold text-ink">
                <Link
                  href={{pathname: '/guides/[slug]', params: {slug: guide.slug}}}
                  className="hover:text-accent"
                >
                  {guide.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-ink-soft">{guide.summary}</p>
              <p className="mt-3 text-xs text-ink-muted">
                {common('readingTime', {minutes: guide.readingMinutes})}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand locale={locale} />
    </>
  );
}
