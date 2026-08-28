'use client';

import {useParams} from 'next/navigation';
import {useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/navigation';
import {routing, type Locale} from '@/i18n/routing';

const labels: Record<string, string> = {
  fr: 'FR',
  en: 'EN'
};

/**
 * Switches locale while preserving the current route, including localised
 * slugs (/fr/tarifs ↔ /en/pricing). Derives its options from routing.locales,
 * so a third language appears here with no change to this file.
 */
export function LocaleSwitcher({
  locale,
  tone = 'light'
}: {
  locale: Locale;
  tone?: 'light' | 'dark';
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language">
      {routing.locales.map((candidate) => {
        const isCurrent = candidate === locale;

        return (
          <button
            key={candidate}
            type="button"
            lang={candidate}
            disabled={isCurrent || isPending}
            aria-current={isCurrent ? 'true' : undefined}
            onClick={() => {
              startTransition(() => {
                router.replace(
                  // @ts-expect-error — params shape is route-dependent and valid at runtime.
                  {pathname, params},
                  {locale: candidate}
                );
              });
            }}
            className={
              isCurrent
                ? `rounded-[0.2rem] px-2 py-1 text-sm font-semibold ${tone === 'dark' ? 'bg-accent-soft text-ink' : 'text-ink'}`
                : `rounded-[0.2rem] px-2 py-1 text-sm transition-colors ${tone === 'dark' ? 'text-[#aab4c5] hover:text-paper' : 'text-ink-muted hover:text-ink'}`
            }
          >
            {labels[candidate] ?? candidate.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
