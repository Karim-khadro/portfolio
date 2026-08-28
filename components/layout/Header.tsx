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
    <header className="sticky top-0 z-40 border-b border-paper/15 bg-ink/95 text-paper backdrop-blur-md">
      <div className="mx-auto flex max-w-[75rem] items-center justify-between gap-4 px-4 py-3.5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-paper"
        >
          <span aria-hidden="true" className="h-2.5 w-2.5 bg-accent-soft" />
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
              className="text-sm text-[#c5cbd4] transition-colors hover:text-accent-soft"
            >
              {item.label}
            </Link>
          ))}
          <LocaleSwitcher locale={locale} tone="dark" />
          <Link
            href="/rendez-vous"
            className="rounded-[0.4rem] bg-accent-soft px-4 py-2 text-sm font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            {t('bookCall')}
          </Link>
        </nav>

        <MobileNav items={items} locale={locale} />
      </div>
    </header>
  );
}
