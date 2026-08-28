'use client';

import {useCallback, useRef, useState} from 'react';
import {DEMO_MAX_TURNS} from './constants';

type Outcome = 'idle' | 'live' | 'fallback' | 'error';

/**
 * One streaming hook for both demos. The 2-turn cap is enforced here for the
 * UI and again server-side; it is a conversion feature as much as a cost cap.
 */
export function useDemoStream(endpoint: string) {
  const [text, setText] = useState('');
  const [isStreaming, setStreaming] = useState(false);
  const [outcome, setOutcome] = useState<Outcome>('idle');
  const [turns, setTurns] = useState(0);
  const abortRef = useRef<AbortController | null>(null);

  const send = useCallback(
    async (payload: Record<string, unknown>) => {
      if (isStreaming || turns >= DEMO_MAX_TURNS) return;

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setText('');
      setStreaming(true);
      setOutcome('idle');

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload),
          signal: controller.signal
        });

        setOutcome(
          (response.headers.get('X-Demo-Outcome') as Outcome | null) ?? 'error'
        );

        if (!response.ok || !response.body) {
          setOutcome('error');
          setStreaming(false);
          return;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        for (;;) {
          const {done, value} = await reader.read();
          if (done) break;
          setText((current) => current + decoder.decode(value, {stream: true}));
        }

        setTurns((count) => count + 1);
      } catch {
        setOutcome('error');
      } finally {
        setStreaming(false);
      }
    },
    [endpoint, isStreaming, turns]
  );

  return {
    text,
    isStreaming,
    outcome,
    turns,
    turnsLeft: Math.max(0, DEMO_MAX_TURNS - turns),
    send
  };
}
