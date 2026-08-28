'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useState} from 'react';
import {DEMO_MAX_INPUT_CHARS} from './constants';
import {DemoBadge, DemoFinished, DemoOutput, DemoShell} from './DemoShell';
import {useDemoStream} from './useDemoStream';

const trades = ['garage', 'bakery', 'construction', 'practice', 'retail'] as const;
const tones = ['warm', 'neutral', 'brief'] as const;

/** Splits the two blocks the prompt guarantees, tolerating a partial stream. */
function splitOutput(text: string) {
  const understoodStart = text.indexOf('[COMPRIS]');
  const replyStart = text.indexOf('[REPONSE]');

  if (understoodStart === -1) return {understood: '', reply: text.trim()};

  const understood = text
    .slice(understoodStart + '[COMPRIS]'.length, replyStart === -1 ? undefined : replyStart)
    .trim();

  const reply = replyStart === -1 ? '' : text.slice(replyStart + '[REPONSE]'.length).trim();

  return {understood, reply};
}

export function ReplyDrafter() {
  const t = useTranslations('demos.replyDrafter');
  const demos = useTranslations('demos');
  const locale = useLocale();

  const [message, setMessage] = useState('');
  const [trade, setTrade] = useState<(typeof trades)[number]>('garage');
  const [tone, setTone] = useState<(typeof tones)[number]>('neutral');

  const {text, isStreaming, outcome, turnsLeft, send} = useDemoStream(
    '/api/demos/reply-drafter'
  );

  const {understood, reply} = splitOutput(text);
  const finished = turnsLeft === 0;

  return (
    <DemoShell
      title={t('title')}
      intro={t('intro')}
      explainer={
        <code className="block whitespace-pre-wrap">
          {`Métier : ${t(`trades.${trade}`)}\nTon souhaité : ${t(`tones.${tone}`)}\n\nMessage reçu du client :\n"""${message.slice(0, 200)}${message.length > 200 ? '…' : ''}"""`}
        </code>
      }
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          send({
            locale,
            message: message.trim(),
            trade: t(`trades.${trade}`),
            tone: t(`tones.${tone}`)
          });
        }}
        className="grid gap-4"
      >
        <div>
          <label htmlFor="demo-message" className="text-sm font-medium text-ink">
            {t('inputLabel')}
          </label>
          <textarea
            id="demo-message"
            value={message}
            maxLength={DEMO_MAX_INPUT_CHARS}
            rows={4}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={t('inputPlaceholder')}
            className="mt-1 w-full rounded-lg border border-line bg-paper p-3 text-sm"
          />
          <button
            type="button"
            onClick={() => setMessage(t('inputPlaceholder'))}
            className="mt-1 text-xs text-accent underline underline-offset-2"
          >
            {t('sampleButton')}
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="demo-trade" className="text-sm font-medium text-ink">
              {t('tradeLabel')}
            </label>
            <select
              id="demo-trade"
              value={trade}
              onChange={(event) =>
                setTrade(event.target.value as (typeof trades)[number])
              }
              className="mt-1 w-full rounded-lg border border-line bg-paper p-3 text-sm"
            >
              {trades.map((value) => (
                <option key={value} value={value}>
                  {t(`trades.${value}`)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="demo-tone" className="text-sm font-medium text-ink">
              {t('toneLabel')}
            </label>
            <select
              id="demo-tone"
              value={tone}
              onChange={(event) => setTone(event.target.value as (typeof tones)[number])}
              className="mt-1 w-full rounded-lg border border-line bg-paper p-3 text-sm"
            >
              {tones.map((value) => (
                <option key={value} value={value}>
                  {t(`tones.${value}`)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={isStreaming || finished || message.trim().length === 0}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
          >
            {t('submit')}
          </button>
          <span className="text-xs text-ink-muted">
            {demos('turnsLeft', {count: turnsLeft})}
          </span>
          <DemoBadge outcome={outcome} />
        </div>
      </form>

      {text || isStreaming ? (
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <DemoOutput
            label={t('understoodTitle')}
            text={understood}
            isStreaming={isStreaming}
          />
          <DemoOutput
            label={t('replyTitle')}
            text={reply}
            isStreaming={isStreaming}
          />
        </div>
      ) : null}

      <p className="mt-4 text-sm italic text-ink-muted">{t('caption')}</p>

      {finished ? <DemoFinished /> : null}
    </DemoShell>
  );
}
