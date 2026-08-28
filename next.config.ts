import path from 'path';
import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import {routing} from './i18n/routing';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const securityHeaders = [
  {key: 'X-Content-Type-Options', value: 'nosniff'},
  {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
  {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'},
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  }
];

const nextConfig: NextConfig = {
  // A stray lockfile in the home directory otherwise wins root inference.
  outputFileTracingRoot: path.resolve('.'),
  images: {
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      // 308 to the default locale. `localePrefix: 'always'` means / is never a
      // page of its own, so this is permanent, not a negotiation.
      {source: '/', destination: `/${routing.defaultLocale}`, permanent: true},
      // The old CRA site was one page with anchors. Fragments are never sent to
      // the server, so these only catch links that dropped the hash; the
      // client-side handler in components/layout/LegacyHashRedirect.tsx does the rest.
      {source: '/about', destination: `/${routing.defaultLocale}/a-propos`, permanent: true},
      {source: '/projects', destination: `/${routing.defaultLocale}/realisations`, permanent: true},
      {source: '/exp', destination: `/${routing.defaultLocale}/cv`, permanent: true},
      {source: '/profile', destination: `/${routing.defaultLocale}/a-propos`, permanent: true},
      {source: '/karim-khadro-cv.pdf', destination: '/cv.pdf', permanent: true}
    ];
  },
  async headers() {
    return [
      {source: '/:path*', headers: securityHeaders},
      {
        source: '/cv.pdf',
        headers: [{key: 'Content-Disposition', value: 'inline; filename="karim-khadro-cv.pdf"'}]
      }
    ];
  }
};

export default withNextIntl(nextConfig);
