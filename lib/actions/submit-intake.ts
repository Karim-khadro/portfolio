'use server';

import {z} from 'zod';
import {redirect} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';
import {sendLead} from '@/lib/email/send';
import {checkIntakeRateLimit, getClientIp, hashIp} from '@/lib/ratelimit';
import {verifyTurnstile} from '@/lib/turnstile';
import {headers} from 'next/headers';
import {emptyIntakeState, type IntakeState} from './intake-state';

const schema = z.object({
  locale: z.enum(routing.locales),
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional(),
  email: z.email().max(180),
  phone: z.string().trim().max(40).optional(),
  needs: z.array(z.string().max(60)).max(6),
  message: z.string().trim().min(20).max(4000),
  budget: z.string().max(60),
  timing: z.string().max(60),
  consent: z.literal('on'),
  startedAt: z.coerce.number(),
  // Off-screen field: a human never fills it.
  website: z.string().max(200).optional()
});

export async function submitIntake(
  _previous: IntakeState,
  formData: FormData
): Promise<IntakeState> {
  const raw = {
    locale: formData.get('locale'),
    name: formData.get('name'),
    company: formData.get('company') || undefined,
    email: formData.get('email'),
    phone: formData.get('phone') || undefined,
    needs: formData.getAll('needs').map(String),
    message: formData.get('message'),
    budget: formData.get('budget') ?? '',
    timing: formData.get('timing') ?? '',
    consent: formData.get('consent'),
    startedAt: formData.get('startedAt') ?? 0,
    website: formData.get('website') || undefined
  };

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    const errors: IntakeState['errors'] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (field === 'name') errors.name = 'name';
      else if (field === 'email') errors.email = 'email';
      else if (field === 'message') errors.message = 'message';
      else if (field === 'consent') errors.consent = 'consent';
      else errors.form = 'generic';
    }
    return {status: 'error', errors};
  }

  const data = parsed.data;

  // Layer 1 — honeypot. Report success and send nothing.
  if (data.website && data.website.length > 0) {
    redirect({href: '/merci', locale: data.locale});
    return emptyIntakeState;
  }

  // Layer 2 — time trap. Faster than 3s or older than 2h is not a human filling a form.
  const elapsed = Date.now() - data.startedAt;
  if (elapsed < 3_000 || elapsed > 2 * 60 * 60 * 1000) {
    return {status: 'error', errors: {form: 'tooFast'}};
  }

  const requestHeaders = await headers();
  const ip = getClientIp(new Request('https://local', {headers: requestHeaders}));

  // Layer 3 — Turnstile, verified server-side.
  const token = formData.get('cf-turnstile-response');
  if (!(await verifyTurnstile(typeof token === 'string' ? token : null, ip))) {
    return {status: 'error', errors: {form: 'generic'}};
  }

  // Layer 4 — rate limit on a hashed IP.
  const limit = await checkIntakeRateLimit(hashIp(ip));
  if (!limit.success) {
    return {status: 'error', errors: {form: 'rateLimited'}};
  }

  try {
    await sendLead({
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      needs: data.needs,
      message: data.message,
      budget: data.budget,
      timing: data.timing,
      locale: data.locale
    });
  } catch {
    return {status: 'error', errors: {form: 'generic'}};
  }

  redirect({href: '/merci', locale: data.locale});
  // Unreachable: redirect() throws. Present only so the function has a
  // terminating return for the type checker.
  return emptyIntakeState;
}
