'use client';

import {useId, useState} from 'react';

type Item = {
  id: string;
  question: string;
  answer: string;
};

/**
 * Native <button> + aria-expanded rather than <details>, so the open state is
 * controllable and the keyboard behaviour is identical across browsers.
 */
export function Accordion({items}: {items: Item[]}) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-start justify-between gap-4 py-4 text-left"
              >
                <span className="font-medium text-ink">{item.question}</span>
                <span aria-hidden="true" className="mt-1 text-accent">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen} className="pb-5">
              <p className="max-w-3xl text-ink-soft">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
