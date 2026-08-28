import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {CtaBand} from '@/components/sections';
import {Section, SectionHeading} from '@/components/ui';
import {getContent, getGuide} from '@/content';
import {routing, type Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';

type Props = {params: Promise<{locale: Locale; slug: string}>};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getContent(locale).guides.map((guide) => ({locale, slug: guide.slug}))
  );
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale, slug} = await params;
  const guide = getGuide(locale, slug);

  if (!guide) return {};

  return buildMetadata({
    locale,
    href: {pathname: '/guides/[slug]', params: {slug}},
    title: guide.title,
    description: guide.summary.slice(0, 195)
  });
}

export default async function GuidePage({params}: Props) {
  const {locale, slug} = await params;
  setRequestLocale(locale);

  const guide = getGuide(locale, slug);
  if (!guide) notFound();

  const common = await getTranslations({locale, namespace: 'common'});

  return (
    <>
      <Section>
        <SectionHeading as="h1" title={guide.title} intro={guide.summary} />
        <p className="mt-3 text-xs text-ink-muted">
          {common('readingTime', {minutes: guide.readingMinutes})}
        </p>

        <article className="prose-copy mt-10 max-w-3xl">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
      </Section>

      <CtaBand locale={locale} />
    </>
  );
}
