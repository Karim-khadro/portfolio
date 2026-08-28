'use client';

import {useTranslations} from 'next-intl';
import {useEffect, useRef, useState} from 'react';
import {Link} from '@/i18n/navigation';
import type {Locale} from '@/i18n/routing';
import {LocaleSwitcher} from './LocaleSwitcher';

type NavItem = {
  href: Parameters<typeof Link>[0]['href'];
  label: string;
};

/** A real hamburger: focus trap boundaries, Escape to close, body scroll lock. */
export function MobileNav({items, locale}: {items: NavItem[]; locale: Locale}) {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (open) panelRef.current?.querySelector('a')?.focus();
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink"
      >
        <span className="sr-only">{open ? t('closeMenu') : t('openMenu')}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="fixed inset-x-0 bottom-0 top-[57px] z-50 overflow-y-auto border-t border-line bg-paper px-4 py-6"
        >
          <nav aria-label={t('mainLabel')} className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-lg text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-4 border-t border-line pt-6">
            <LocaleSwitcher locale={locale} />
            <Link
              href="/rendez-vous"
              onClick={() => setOpen(false)}
              className="rounded-md bg-accent px-4 py-3 text-center font-medium text-white"
            >
              {t('bookCall')}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
