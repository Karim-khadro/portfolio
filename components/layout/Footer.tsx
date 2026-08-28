import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {site} from '@/lib/site';

export async function Footer({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'footer'});
  const nav = await getTranslations({locale, namespace: 'nav'});
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-surface-warm">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">Karim Khadro</p>
          <p className="mt-2 text-sm text-ink-soft">{t('location')}</p>
          <p className="mt-2 text-sm text-ink-muted">{t('coverage')}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-block text-sm text-accent underline underline-offset-4"
          >
            {site.email}
          </a>
        </div>

        <nav className="text-sm" aria-label={t('sections.offer')}>
          <p className="font-semibold text-ink">{t('sections.offer')}</p>
          <ul className="mt-3 space-y-2 text-ink-soft">
            <li>
              <Link href="/services" className="hover:text-accent">
                {nav('services')}
              </Link>
            </li>
            <li>
              <Link
                href={{pathname: '/services/[slug]', params: {slug: 'ia-pme'}}}
                className="hover:text-accent"
              >
                {nav('aiForSmb')}
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:text-accent">
                {nav('pricing')}
              </Link>
            </li>
            <li>
              <Link href="/realisations" className="hover:text-accent">
                {nav('cases')}
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="text-sm" aria-label={t('sections.understand')}>
          <p className="font-semibold text-ink">{t('sections.understand')}</p>
          <ul className="mt-3 space-y-2 text-ink-soft">
            <li>
              <Link href="/processus" className="hover:text-accent">
                {t('process')}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-accent">
                {t('faq')}
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:text-accent">
                {t('guides')}
              </Link>
            </li>
            <li>
              <Link href="/demos" className="hover:text-accent">
                {t('demos')}
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-accent">
                {t('about')}
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="text-sm" aria-label={t('sections.practical')}>
          <p className="font-semibold text-ink">{t('sections.practical')}</p>
          <ul className="mt-3 space-y-2 text-ink-soft">
            <li>
              <Link href="/contact" className="hover:text-accent">
                {t('contact')}
              </Link>
            </li>
            <li>
              <Link href="/cv" className="hover:text-accent">
                {t('cv')}
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-accent">
                {t('legal')}
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-accent">
                {t('privacy')}
              </Link>
            </li>
            <li>
              <a
                href={site.linkedin}
                rel="noopener noreferrer me"
                target="_blank"
                className="hover:text-accent"
              >
                {t('linkedin')}
              </a>
            </li>
            <li>
              <a
                href={site.github}
                rel="noopener noreferrer me"
                target="_blank"
                className="hover:text-accent"
              >
                {t('github')}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-ink-muted sm:px-6">
          <p>
            {t('rights')} · {site.bce}
          </p>
          <p className="mt-1">{t('vatNotice')}</p>
          <p className="mt-1">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
