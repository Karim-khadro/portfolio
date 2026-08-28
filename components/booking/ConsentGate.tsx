'use client';

import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {useLocale} from 'next-intl';

/**
 * The Cal.com iframe sets third-party cookies, and that alone is what would
 * force a site-wide consent banner. So it is never eager-loaded: everywhere
 * else on the site links here, and here it loads only on a click.
 */
export function ConsentGate({calLink}: {calLink: string}) {
  const t = useTranslations('booking');
  const locale = useLocale();
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="rounded-xl border border-dashed border-line bg-surface-warm p-8 text-center">
        <p className="font-display text-lg font-semibold text-ink">{t('gateTitle')}</p>
        <p className="mx-auto mt-2 max-w-xl text-sm text-ink-soft">{t('gateNotice')}</p>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="mt-5 rounded-md bg-accent px-5 py-3 font-medium text-white"
        >
          {t('gateButton')}
        </button>
      </div>
    );
  }

  return (
    <iframe
      title={t('gateTitle')}
      src={`https://cal.com/${calLink}?embed=true&theme=light&layout=month_view&locale=${locale}`}
      className="h-[720px] w-full rounded-xl border border-line bg-surface"
      loading="lazy"
    />
  );
}
