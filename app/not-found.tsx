import Link from 'next/link';
import './globals.css';

/**
 * Rendered for paths outside any locale segment, so it carries its own <html>.
 * Text is hard-coded bilingual: there is no locale to translate against here.
 */
export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className="flex min-h-screen items-center justify-center bg-paper px-6 text-center">
        <main>
          <h1 className="font-display text-2xl font-semibold text-ink">
            Page introuvable · Page not found
          </h1>
          <p className="mt-3 text-ink-soft">
            Ce site a été entièrement refait. · This site has been rebuilt.
          </p>
          <Link
            href="/fr"
            className="mt-6 inline-block rounded-md bg-accent px-5 py-3 font-medium text-white"
          >
            Accueil · Home
          </Link>
        </main>
      </body>
    </html>
  );
}
