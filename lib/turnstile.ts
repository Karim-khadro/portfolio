import 'server-only';

/**
 * Cloudflare Turnstile: cookieless and invisible, so it needs no consent banner —
 * which is the whole reason it is here instead of reCAPTCHA.
 *
 * When no secret is configured the check passes, so local dev and the first
 * preview deploy work without an account.
 */
export async function verifyTurnstile(token: string | null, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({secret, response: token, remoteip: ip})
      }
    );

    const result = (await response.json()) as {success: boolean};
    return result.success === true;
  } catch {
    return false;
  }
}
