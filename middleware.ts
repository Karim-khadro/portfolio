import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Everything except: API routes, Next internals, files with an extension
  // (cv.pdf, favicon.ico, the Google verification HTML file) — and the bare
  // root, which next.config redirects permanently (308) rather than
  // temporarily (307) as the middleware would.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).+)']
};
