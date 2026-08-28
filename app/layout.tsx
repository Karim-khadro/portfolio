import type {ReactNode} from 'react';
import './globals.css';

/**
 * The <html> shell lives in app/[locale]/layout.tsx so that lang= is the real
 * locale. This root layout only exists because Next requires one.
 */
export default function RootLayout({children}: {children: ReactNode}) {
  return children;
}
