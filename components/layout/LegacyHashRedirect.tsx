'use client';

import {useEffect} from 'react';
import {useRouter} from '@/i18n/navigation';

/**
 * The old single-page site lived at /#about, /#projects, /#exp, /#contact.
 * Fragments never reach the server, so next.config redirects cannot catch them.
 * Keep this for a few months after cutover, then delete.
 */
const targets: Record<string, string> = {
  '#about': '/a-propos',
  '#profile': '/a-propos',
  '#projects': '/realisations',
  '#exp': '/cv',
  '#experiences': '/cv',
  '#contact': '/contact'
};

export function LegacyHashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const target = targets[window.location.hash];
    if (!target) return;

    history.replaceState(null, '', window.location.pathname);
    router.replace(target as never);
  }, [router]);

  return null;
}
