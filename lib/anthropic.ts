import 'server-only';
import Anthropic from '@anthropic-ai/sdk';

/**
 * `import 'server-only'` above makes an accidental client import a BUILD error
 * rather than a leaked key. ANTHROPIC_API_KEY is never NEXT_PUBLIC_*.
 *
 * Model choice: Haiku, not Opus. Grounded Q&A over a short document and
 * reply-drafting are exactly what it is good at, at a fraction of the cost.
 * Verify the current model id and pricing before deploying rather than
 * trusting this constant indefinitely.
 */
export const DEMO_MODEL = 'claude-haiku-4-5';

export const DEMO_LIMITS = {
  maxTokens: 400,
  maxInputChars: 1200,
  maxConversationChars: 6000,
  maxTurns: 2
} as const;

export function hasApiKey() {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

let client: Anthropic | null = null;

export function getAnthropic() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is not set');
  }

  client ??= new Anthropic({apiKey: process.env.ANTHROPIC_API_KEY});
  return client;
}
