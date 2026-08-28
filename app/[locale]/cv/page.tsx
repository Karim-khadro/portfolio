import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {getContent} from '@/content';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {buildMetadata} from '@/lib/seo/metadata';
import {site} from '@/lib/site';

type Props = {params: Promise<{locale: Locale}>};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta.cv'});

  return buildMetadata({
    locale,
    href: '/cv',
    title: t('title'),
    description: t('description')
  });
}

/**
 * The recruiter track. Navy + mint is kept here deliberately — a self-aware nod
 * to the old portfolio — so the two audiences can see they are in different
 * places. Nothing on the services track links here except the footer.
 */
export default async function CvPage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'cv'});
  const {cv} = getContent(locale);

  return (
    <div className="cv-skin bg-cv-bg text-cv-text">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <header>
          <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Karim Khadro
          </h1>
          <p className="mt-2 text-xl text-cv-accent">{cv.headline}</p>
          <p className="mt-4 max-w-2xl text-cv-muted">{cv.summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <span className="text-cv-muted">{cv.location}</span>
            <a
              href={`mailto:${site.email}`}
              className="text-cv-accent underline underline-offset-4"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cv-accent underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cv-accent underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="/cv.pdf"
              className="rounded-md border border-cv-accent px-3 py-1.5 text-cv-accent"
            >
              {t('downloadPdf')}
            </a>
          </div>

          <p className="mt-6 rounded-lg border border-cv-line bg-cv-surface p-4 text-sm text-cv-muted">
            {t('audienceNote')}{' '}
            <Link href="/services" className="text-cv-accent underline underline-offset-4">
              {t('servicesLink')}
            </Link>
          </p>
        </header>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-white">
            {t('experience')}
          </h2>
          <div className="mt-6 space-y-8">
            {cv.work.map((job) => (
              <article key={`${job.company}-${job.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {job.title} · {job.company}
                  </h3>
                  <p className="text-sm text-cv-muted">
                    {job.period} — {job.location}
                  </p>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-cv-text">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-cv-accent">{job.stack.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-white">
            {t('education')}
          </h2>
          <div className="mt-6 space-y-6">
            {cv.education.map((entry) => (
              <article key={`${entry.institution}-${entry.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                  <p className="text-sm text-cv-muted">
                    {entry.period} — {entry.location}
                  </p>
                </div>
                <p className="text-cv-accent">{entry.institution}</p>
                <p className="mt-2 text-cv-text">{entry.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-white">
            {t('skills')}
          </h2>
          {/* Grouped and unrated on purpose: a star rating publishes weaknesses
              for free, and reads junior to anyone who would be hiring. */}
          <dl className="mt-6 space-y-4">
            {cv.skillGroups.map((group) => (
              <div key={group.group} className="sm:flex sm:gap-6">
                <dt className="w-44 shrink-0 font-semibold text-cv-accent">
                  {group.group}
                </dt>
                <dd className="text-cv-text">{group.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              {t('languages')}
            </h2>
            <ul className="mt-4 space-y-1 text-cv-text">
              {cv.languages.map((language) => (
                <li key={language.name}>
                  {language.name} — {language.level}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-white">
              {t('tools')}
            </h2>
            <p className="mt-4 text-cv-text">{cv.tools.join(' · ')}</p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-white">
            {t('sideProjects')}
          </h2>
          <ul className="mt-4 space-y-3">
            {cv.sideProjects.map((project) => (
              <li key={project.url}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cv-accent underline underline-offset-4"
                >
                  {project.name}
                </a>
                <p className="text-cv-text">{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
