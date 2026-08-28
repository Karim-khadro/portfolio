'use client';

import Script from 'next/script';

/**
 * Renders nothing at all when no site key is configured, so no third-party
 * script is loaded in local dev or before the Cloudflare account exists.
 * Turnstile is cookieless — that is why it, and not reCAPTCHA, keeps this site
 * free of a consent banner.
 */
export function Turnstile() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />
      <div className="cf-turnstile" data-sitekey={siteKey} data-size="flexible" />
    </>
  );
}
