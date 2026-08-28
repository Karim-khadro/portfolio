import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {site} from '@/lib/site';

export async function Footer({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'footer'});
  const nav = await getTranslations({locale, namespace: 'nav'});
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="mx-auto grid max-w-[75rem] gap-10 px-4 py-16 sm:px-8 md:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-paper">Karim Khadro</p>
          <p className="mt-3 text-sm text-[#c5cbd4]">{t('location')}</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-[#8f9cad]">{t('coverage')}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm font-semibold text-accent-soft underline underline-offset-4"
          >
            {site.email}
          </a>
        </div>

        <nav className="text-sm" aria-label={t('sections.offer')}>
          <p className="font-semibold text-paper">{t('sections.offer')}</p>
          <ul className="mt-4 space-y-2.5 text-[#aab4c5]">
            <li>
              <Link href="/services" className="hover:text-accent-soft">
                {nav('services')}
              </Link>
            </li>
            <li>
              <Link
                href={{pathname: '/services/[slug]', params: {slug: 'ia-pme'}}}
                className="hover:text-accent-soft"
              >
                {nav('aiForSmb')}
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="hover:text-accent-soft">
                {nav('pricing')}
              </Link>
            </li>
            <li>
              <Link href="/realisations" className="hover:text-accent-soft">
                {nav('cases')}
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="text-sm" aria-label={t('sections.understand')}>
          <p className="font-semibold text-paper">{t('sections.understand')}</p>
          <ul className="mt-4 space-y-2.5 text-[#aab4c5]">
            <li>
              <Link href="/processus" className="hover:text-accent-soft">
                {t('process')}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-accent-soft">
                {t('faq')}
              </Link>
            </li>
            <li>
              <Link href="/guides" className="hover:text-accent-soft">
                {t('guides')}
              </Link>
            </li>
            <li>
              <Link href="/demos" className="hover:text-accent-soft">
                {t('demos')}
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:text-accent-soft">
                {t('about')}
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="text-sm" aria-label={t('sections.practical')}>
          <p className="font-semibold text-paper">{t('sections.practical')}</p>
          <ul className="mt-4 space-y-2.5 text-[#aab4c5]">
            <li>
              <Link href="/contact" className="hover:text-accent-soft">
                {t('contact')}
              </Link>
            </li>
            <li>
              <Link href="/cv" className="hover:text-accent-soft">
                {t('cv')}
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="hover:text-accent-soft">
                {t('legal')}
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="hover:text-accent-soft">
                {t('privacy')}
              </Link>
            </li>
            <li>
              <a
                href={site.linkedin}
                rel="noopener noreferrer me"
                target="_blank"
                className="hover:text-accent-soft"
              >
                {t('linkedin')}
              </a>
            </li>
            <li>
              <a
                href={site.github}
                rel="noopener noreferrer me"
                target="_blank"
                className="hover:text-accent-soft"
              >
                {t('github')}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-paper/15">
        <div className="mx-auto max-w-[75rem] px-4 py-6 text-xs text-[#7f8b9e] sm:px-8">
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
