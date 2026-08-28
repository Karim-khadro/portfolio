import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Section, SectionHeading} from '@/components/ui';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';
import {site} from '@/lib/site';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.thanks'});

  return buildMetadata({
    locale,
    href: '/merci',
    title: t('title'),
    description: t('description'),
    noindex: true
  });
}

export default async function ThanksPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'thanks'});

  return (
    <Section>
      <SectionHeading as="h1" title={t('title')} intro={t('text')} />
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/rendez-vous"
          className="rounded-md bg-accent px-5 py-3 font-medium text-white"
        >
          {t('bookInstead')}
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="text-sm text-accent underline underline-offset-4"
        >
          {site.email}
        </a>
        <Link href="/" className="text-sm text-ink-soft underline underline-offset-4">
          {t('backHome')}
        </Link>
      </div>
    </Section>
  );
}
