import {describe, expect, it} from 'vitest';
import {routing} from '../i18n/routing';

type Messages = Record<string, unknown>;

function collectPaths(value: unknown, prefix = ''): string[] {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return [prefix];
  }

  return Object.entries(value as Messages).flatMap(([key, child]) =>
    collectPaths(child, prefix ? `${prefix}.${key}` : key)
  );
}

async function loadMessages(locale: string): Promise<Messages> {
  return (await import(`../messages/${locale}.json`)).default;
}

describe('message parity', () => {
  it('every locale defines exactly the same keys', async () => {
    const reference = routing.defaultLocale;
    const referencePaths = new Set(collectPaths(await loadMessages(reference)));

    for (const locale of routing.locales) {
      if (locale === reference) continue;

      const paths = new Set(collectPaths(await loadMessages(locale)));

      const missing = [...referencePaths].filter((path) => !paths.has(path));
      const extra = [...paths].filter((path) => !referencePaths.has(path));

      expect(
        missing,
        `${locale}.json is missing keys present in ${reference}.json`
      ).toEqual([]);
      expect(
        extra,
        `${locale}.json has keys absent from ${reference}.json`
      ).toEqual([]);
    }
  });

  it('no message is an empty string', async () => {
    for (const locale of routing.locales) {
      const messages = await loadMessages(locale);
      const empty = collectPaths(messages).filter((path) => {
        const value = path
          .split('.')
          .reduce<unknown>((node, key) => (node as Messages)?.[key], messages);
        return typeof value === 'string' && value.trim() === '';
      });

      expect(empty, `${locale}.json has empty strings`).toEqual([]);
    }
  });
});
