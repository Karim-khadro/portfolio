import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {IntakeForm} from '@/components/forms/IntakeForm';
import {Card, Container, Section, SectionHeading} from '@/components/ui';
import {getContent} from '@/content';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';
import {site} from '@/lib/site';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.contact'});

  return buildMetadata({
    locale,
    href: '/contact',
    title: t('title'),
    description: t('description')
  });
}

export default async function ContactPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'contact'});
  const {about} = getContent(locale);

  return (
    <Section>
      <Container>
        <SectionHeading as="h1" title={t('pageTitle')} intro={t('pageIntro')} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <IntakeForm />

          <aside className="space-y-6">
            <Card>
              <h2 className="font-display text-lg font-semibold text-ink">
                {t('directTitle')}
              </h2>
              <p className="mt-3 text-sm text-ink-soft">{t('email')}</p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-accent underline underline-offset-4"
              >
                {site.email}
              </a>
              <p className="mt-4 text-sm text-ink-soft">{t('orBook')}</p>
              <Link
                href="/rendez-vous"
                className="mt-2 inline-block rounded-md bg-accent px-4 py-2 text-sm font-medium text-white"
              >
                {t('orBook')}
              </Link>
            </Card>

            <Card>
              <ul className="space-y-3 text-sm text-ink-soft">
                {about.commitments.slice(0, 2).map((commitment) => (
                  <li key={commitment}>{commitment}</li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
