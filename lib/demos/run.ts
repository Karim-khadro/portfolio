import 'server-only';
import {DEMO_LIMITS, DEMO_MODEL, getAnthropic, hasApiKey} from '@/lib/anthropic';
import {
  checkDemoRateLimit,
  getClientIp,
  hashIp,
  isBudgetExceeded,
  recordTokenUsage
} from '@/lib/ratelimit';
import {verifyTurnstile} from '@/lib/turnstile';

export type DemoOutcome = 'live' | 'fallback' | 'error';

function textStream(text: string, outcome: DemoOutcome) {
  const encoder = new TextEncoder();

  return new Response(
    new ReadableStream({
      async start(controller) {
        // Typed out through the same UI as a live response, so a fallback is
        // indistinguishable in feel — only the badge differs.
        for (const chunk of text.match(/[\s\S]{1,24}/g) ?? []) {
          controller.enqueue(encoder.encode(chunk));
          await new Promise((resolve) => setTimeout(resolve, 18));
        }
        controller.close();
      }
    }),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Demo-Outcome': outcome
      }
    }
  );
}

type RunOptions = {
  request: Request;
  system: string;
  userMessage: string;
  fallback: string;
  turnstileToken: string | null;
};

/**
 * One path for both demos: validate cheaply, then try live, then always degrade
 * to the recorded transcript. Nothing here can return a 500 to the visitor.
 */
export async function runDemo({
  request,
  system,
  userMessage,
  fallback,
  turnstileToken
}: RunOptions): Promise<Response> {
  if (
    userMessage.length === 0 ||
    userMessage.length > DEMO_LIMITS.maxInputChars ||
    system.length + userMessage.length > 200_000
  ) {
    return new Response('Invalid input', {status: 400});
  }

  const ip = getClientIp(request);

  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return textStream(fallback, 'fallback');
  }

  if (!hasApiKey()) {
    return textStream(fallback, 'fallback');
  }

  const ipHash = hashIp(ip);
  const [rate, overBudget] = await Promise.all([
    checkDemoRateLimit(ipHash),
    isBudgetExceeded()
  ]);

  if (!rate.success || overBudget) {
    return textStream(fallback, 'fallback');
  }

  try {
    const stream = getAnthropic().messages.stream({
      model: DEMO_MODEL,
      max_tokens: DEMO_LIMITS.maxTokens,
      system: [
        {
          type: 'text',
          text: system,
          // Every visitor sends an identical prefix — the single biggest cost
          // lever, and it is free.
          cache_control: {type: 'ephemeral'}
        }
      ],
      messages: [{role: 'user', content: userMessage}]
    });

    const encoder = new TextEncoder();

    const body = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }

          const final = await stream.finalMessage();

          if (final.stop_reason === 'refusal') {
            controller.enqueue(encoder.encode('\n\n' + fallback));
          }

          await recordTokenUsage(
            final.usage.input_tokens + final.usage.output_tokens
          );
        } catch {
          controller.enqueue(encoder.encode(fallback));
        } finally {
          controller.close();
        }
      }
    });

    return new Response(body, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Demo-Outcome': 'live'
      }
    });
  } catch {
    return textStream(fallback, 'error');
  }
}
