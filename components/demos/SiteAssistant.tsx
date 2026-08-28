'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useState} from 'react';
import {Link} from '@/i18n/navigation';
import {DEMO_MAX_INPUT_CHARS} from './constants';
import {DemoBadge, DemoFinished, DemoOutput, DemoShell} from './DemoShell';
import {useDemoStream} from './useDemoStream';

function splitSources(text: string) {
  const index = text.indexOf('[SOURCES]');
  if (index === -1) return {answer: text.trim(), sources: ''};

  return {
    answer: text.slice(0, index).trim(),
    sources: text.slice(index + '[SOURCES]'.length).trim()
  };
}

export function SiteAssistant() {
  const t = useTranslations('demos.siteAssistant');
  const demos = useTranslations('demos');
  const locale = useLocale();
  const [question, setQuestion] = useState('');

  const {text, isStreaming, outcome, turnsLeft, send} = useDemoStream(
    '/api/demos/site-assistant'
  );

  const {answer, sources} = splitSources(text);
  const finished = turnsLeft === 0;
  // The refusal path is a feature: it proves the anti-hallucination claim.
  const refused = answer.length > 0 && answer.startsWith(t('handoff').slice(0, 20));

  return (
    <DemoShell
      title={t('title')}
      intro={t('intro')}
      explainer={
        <code className="block whitespace-pre-wrap">
          {`[consigne écrite + contenu de ce site]\n\n${question.slice(0, 200)}`}
        </code>
      }
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          send({locale, message: question.trim()});
        }}
        className="grid gap-4"
      >
        <div>
          <label htmlFor="assistant-question" className="text-sm font-medium text-ink">
            {t('inputLabel')}
          </label>
          <input
            id="assistant-question"
            type="text"
            value={question}
            maxLength={DEMO_MAX_INPUT_CHARS}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder={t('inputPlaceholder')}
            className="mt-1 w-full rounded-lg border border-line bg-paper p-3 text-sm"
          />
          <button
            type="button"
            onClick={() => setQuestion(t('inputPlaceholder'))}
            className="mt-1 text-xs text-accent underline underline-offset-2"
          >
            {t('sampleButton')}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={isStreaming || finished || question.trim().length === 0}
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
        <div className="mt-6 grid gap-4">
          <DemoOutput label={t('title')} text={answer} isStreaming={isStreaming} />
          {sources ? (
            <p className="text-xs text-ink-muted">
              <span className="font-medium text-ink-soft">{t('sources')} : </span>
              {sources}
            </p>
          ) : null}
          {refused ? (
            <Link
              href="/contact"
              className="inline-block w-fit rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent"
            >
              {t('handoffButton')}
            </Link>
          ) : null}
        </div>
      ) : null}

      {finished ? <DemoFinished /> : null}
    </DemoShell>
  );
}
