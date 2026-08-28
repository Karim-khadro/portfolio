import {z} from 'zod';
import {DEMO_LIMITS} from '@/lib/anthropic';
import {replyDrafterFallback} from '@/lib/demos/fallbacks';
import {replyDrafterSystem} from '@/lib/demos/prompts';
import {runDemo} from '@/lib/demos/run';
import {routing} from '@/i18n/routing';

export const runtime = 'nodejs';

const bodySchema = z.object({
  locale: z.enum(routing.locales),
  message: z.string().min(1).max(DEMO_LIMITS.maxInputChars),
  trade: z.string().max(40),
  tone: z.string().max(40),
  turnstileToken: z.string().max(4000).nullable().optional()
});

export async function POST(request: Request) {
  const parsed = bodySchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return new Response('Invalid input', {status: 400});
  }

  const {locale, message, trade, tone, turnstileToken} = parsed.data;

  // Trade and tone travel in the user turn, never in the cached system prefix.
  const userMessage = `Métier : ${trade}\nTon souhaité : ${tone}\n\nMessage reçu du client :\n"""\n${message}\n"""`;

  return runDemo({
    request,
    system: replyDrafterSystem[locale],
    userMessage,
    fallback: replyDrafterFallback[locale],
    turnstileToken: turnstileToken ?? null
  });
}
