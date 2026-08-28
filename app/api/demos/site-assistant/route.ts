import {z} from 'zod';
import {DEMO_LIMITS} from '@/lib/anthropic';
import {siteAssistantFallback} from '@/lib/demos/fallbacks';
import {siteAssistantSystem} from '@/lib/demos/prompts';
import {runDemo} from '@/lib/demos/run';
import {routing} from '@/i18n/routing';

export const runtime = 'nodejs';

const bodySchema = z.object({
  locale: z.enum(routing.locales),
  message: z.string().min(1).max(DEMO_LIMITS.maxInputChars),
  turnstileToken: z.string().max(4000).nullable().optional()
});

export async function POST(request: Request) {
  const parsed = bodySchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return new Response('Invalid input', {status: 400});
  }

  const {locale, message, turnstileToken} = parsed.data;

  return runDemo({
    request,
    system: siteAssistantSystem(locale),
    userMessage: message,
    fallback: siteAssistantFallback[locale],
    turnstileToken: turnstileToken ?? null
  });
}
