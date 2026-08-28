'use client';

import {useTranslations} from 'next-intl';
import type {ReactNode} from 'react';
import {Link} from '@/i18n/navigation';

export function DemoBadge({outcome}: {outcome: string}) {
  const t = useTranslations('demos');

  if (outcome === 'fallback') {
    return (
      <span className="inline-flex items-center rounded-full bg-ochre-soft px-3 py-1 text-xs text-ochre">
        {t('fallbackBadge')}
      </span>
    );
  }

  if (outcome === 'error') {
    return (
      <span className="inline-flex items-center rounded-full bg-ochre-soft px-3 py-1 text-xs text-ochre">
        {t('errorBadge')}
      </span>
    );
  }

  return null;
}

export function DemoFinished() {
  const t = useTranslations('demos');
  const cta = useTranslations('cta');

  return (
    <div className="mt-6 rounded-lg border border-accent/30 bg-accent-soft p-5">
      <p className="font-display text-lg font-semibold text-accent">
        {t('finishedTitle')}
      </p>
      <p className="mt-2 text-sm text-ink-soft">{t('finishedText')}</p>
      <Link
        href="/rendez-vous"
        className="mt-4 inline-block rounded-md bg-accent px-4 py-2 text-sm font-medium text-white"
      >
        {cta('bookCall')}
      </Link>
    </div>
  );
}

export function DemoShell({
  title,
  intro,
  children,
  explainer
}: {
  title: string;
  intro: string;
  children: ReactNode;
  explainer?: ReactNode;
}) {
  const t = useTranslations('demos');

  return (
    <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2 max-w-2xl text-ink-soft">{intro}</p>

      <div className="mt-6">{children}</div>

      <p className="mt-6 text-xs text-ink-muted">{t('privacyNotice')}</p>

      {explainer ? (
        <details className="mt-4 rounded-lg bg-surface-warm p-4">
          <summary className="cursor-pointer text-sm font-medium text-ink">
            {t('explainerTitle')}
          </summary>
          <p className="mt-2 text-sm text-ink-soft">{t('explainerText')}</p>
          <div className="mt-3 text-xs text-ink-muted">{explainer}</div>
        </details>
      ) : null}
    </div>
  );
}

/** Model output is always rendered as plain text, never as HTML. */
export function DemoOutput({
  label,
  text,
  isStreaming
}: {
  label: string;
  text: string;
  isStreaming: boolean;
}) {
  const t = useTranslations('common');

  return (
    <div>
      <p className="text-sm font-semibold text-ink">{label}</p>
      <div
        aria-live="polite"
        aria-busy={isStreaming}
        className="mt-2 min-h-24 whitespace-pre-wrap rounded-lg border border-line bg-paper p-4 text-sm text-ink-soft"
      >
        {text || (isStreaming ? t('loading') : null)}
      </div>
    </div>
  );
}
