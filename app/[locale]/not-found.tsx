import {useTranslations} from 'next-intl';
import {Section, SectionHeading} from '@/components/ui';
import {Link} from '@/i18n/navigation';

export default function LocaleNotFound() {
  const t = useTranslations('notFound');

  return (
    <Section>
      <SectionHeading as="h1" title={t('title')} intro={t('text')} />
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className="rounded-md bg-accent px-5 py-3 font-medium text-white">
          {t('home')}
        </Link>
        <Link
          href="/services"
          className="rounded-md border border-line px-5 py-3 font-medium text-ink"
        >
          {t('services')}
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-line px-5 py-3 font-medium text-ink"
        >
          {t('contact')}
        </Link>
      </div>
    </Section>
  );
}
