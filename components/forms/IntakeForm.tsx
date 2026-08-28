'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useActionState, useRef} from 'react';
import {useFormStatus} from 'react-dom';
import {Link} from '@/i18n/navigation';
import {submitIntake} from '@/lib/actions/submit-intake';
import {emptyIntakeState} from '@/lib/actions/intake-state';
import {site} from '@/lib/site';
import {Turnstile} from './Turnstile';

const needOptions = [
  'newSite',
  'redoSite',
  'internalApp',
  'automate',
  'aiUnsure',
  'other'
] as const;

const budgetOptions = ['under2k', '2to5k', '5to15k', 'over15k', 'unsure'] as const;
const timingOptions = ['asap', '1to3', 'later'] as const;

function SubmitButton() {
  const t = useTranslations('contact.form');
  const {pending} = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-accent px-5 py-3 font-medium text-white disabled:opacity-60"
    >
      {pending ? t('submitting') : t('submit')}
    </button>
  );
}

/** Nine fields, one screen. Every extra field costs a lead. */
export function IntakeForm() {
  const t = useTranslations('contact.form');
  const locale = useLocale();
  const [state, formAction] = useActionState(submitIntake, emptyIntakeState);
  const startedAt = useRef(Date.now());

  return (
    <form action={formAction} className="grid gap-6">
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="startedAt" value={startedAt.current} />

      {/* Honeypot: off-screen rather than type="hidden", which bots skip. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t('name')} required error={state.errors.name && t('errors.name')}>
          <input
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-lg border border-line bg-surface p-3"
          />
        </Field>

        <Field label={`${t('company')} (${t('companyOptional')})`}>
          <input
            name="company"
            autoComplete="organization"
            className="w-full rounded-lg border border-line bg-surface p-3"
          />
        </Field>

        <Field label={t('email')} required error={state.errors.email && t('errors.email')}>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-line bg-surface p-3"
          />
        </Field>

        <Field label={`${t('phone')} — ${t('phoneHint')}`}>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-lg border border-line bg-surface p-3"
          />
        </Field>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-ink">{t('need')}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {needOptions.map((option) => (
            <label key={option} className="flex items-start gap-2 text-sm text-ink-soft">
              <input
                type="checkbox"
                name="needs"
                value={t(`needOptions.${option}`)}
                className="mt-1"
              />
              <span>{t(`needOptions.${option}`)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field
        label={t('message')}
        required
        error={state.errors.message && t('errors.message')}
      >
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t('messagePlaceholder')}
          className="w-full rounded-lg border border-line bg-surface p-3"
        />
      </Field>

      <fieldset>
        <legend className="text-sm font-medium text-ink">{t('budget')}</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {budgetOptions.map((option) => (
            <label key={option} className="flex items-start gap-2 text-sm text-ink-soft">
              <input
                type="radio"
                name="budget"
                value={t(`budgetOptions.${option}`)}
                defaultChecked={option === 'unsure'}
                className="mt-1"
              />
              <span>{t(`budgetOptions.${option}`)}</span>
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-ink-muted">{t('budgetNote')}</p>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-ink">{t('timing')}</legend>
        <div className="mt-2 flex flex-wrap gap-4">
          {timingOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm text-ink-soft">
              <input
                type="radio"
                name="timing"
                value={t(`timingOptions.${option}`)}
                defaultChecked={option === 'asap'}
              />
              <span>{t(`timingOptions.${option}`)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="flex items-start gap-2 text-sm text-ink-soft">
          <input type="checkbox" name="consent" className="mt-1" />
          <span>{t('consent')}</span>
        </label>
        <Link
          href="/confidentialite"
          className="mt-1 inline-block text-xs text-accent underline underline-offset-2"
        >
          {t('consentLink')}
        </Link>
        {state.errors.consent ? (
          <p className="mt-1 text-sm text-ochre">{t('errors.consent')}</p>
        ) : null}
      </div>

      <Turnstile />

      {state.errors.form ? (
        <p role="alert" className="rounded-lg bg-ochre-soft p-3 text-sm text-ochre">
          {state.errors.form === 'rateLimited'
            ? t('errors.rateLimited')
            : state.errors.form === 'tooFast'
              ? t('errors.tooFast')
              : t('errors.generic', {email: site.email})}
        </p>
      ) : null}

      <div>
        <SubmitButton />
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  required,
  error
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string;
}) {
  const t = useTranslations('contact.form');

  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-xs font-normal text-ink-muted">
            ({t('required')})
          </span>
        ) : null}
      </span>
      <span className="mt-1 block">{children}</span>
      {error ? <span className="mt-1 block text-sm text-ochre">{error}</span> : null}
    </label>
  );
}
