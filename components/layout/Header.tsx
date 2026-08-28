import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {LocaleSwitcher} from './LocaleSwitcher';
import {MobileNav} from './MobileNav';

export async function Header({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: 'nav'});

  // Five items, maximum. /cv, /guides and legal live in the footer only:
  // an SMB owner must never land on the CV.
  const items = [
    {href: '/services', label: t('services')} as const,
    {
      href: {pathname: '/services/[slug]', params: {slug: 'ia-pme'}},
      label: t('aiForSmb')
    } as const,
    {href: '/realisations', label: t('cases')} as const,
    {href: '/tarifs', label: t('pricing')} as const
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Karim Khadro
        </Link>

        <nav
          aria-label={t('mainLabel')}
          className="hidden items-center gap-6 lg:flex"
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} />
          <Link
            href="/rendez-vous"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            {t('bookCall')}
          </Link>
        </nav>

        <MobileNav items={items} locale={locale} />
      </div>
    </header>
  );
}
