# karimkhadro.be

The services site of Karim Khadro — websites, web applications and AI
integration for small businesses in the Liège area, plus a separate recruiter
track at `/cv`.

Next.js App Router · TypeScript · Tailwind 4 · next-intl (FR/EN) · Vercel.

> **Looking for the old portfolio template?** The CRA/React 17 version this repo
> used to be is tagged [`v1-cra-template`](https://github.com/Karim-khadro/portfolio/tree/v1-cra-template).
> It still works; it is simply no longer what this repository is.

## Running it

```bash
npm install
cp .env.example .env.local   # every value is optional in dev
npm run dev
```

Nothing external is required to run the site locally. Without keys:

- the AI demos play their **recorded transcripts** through the live streaming UI,
- the contact form validates, applies every anti-spam layer, and logs the lead
  to the console instead of emailing it,
- Turnstile renders nothing at all and no third-party script is loaded.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build — Tailwind 4 and next-intl surface config errors only here |
| `npm test` | The two parity suites |
| `npm run lint` | ESLint, including `no-img-element` as an error |

## Layout

```
app/[locale]/      routes; every page calls setRequestLocale
content/           typed, Zod-validated entities per locale — pages import only content/index.ts
messages/          UI chrome strings (nav, buttons, labels, errors)
i18n/              routing, navigation, request config
lib/               seo, anthropic, ratelimit, email, actions
components/        layout, sections, forms, booking, demos, ui
tests/             messages-parity, content-parity
```

## Adding a third language

By design this is three changes and nothing else:

1. an entry in `routing.locales` in `i18n/routing.ts`, plus its slugs in `pathnames`
2. `messages/<locale>.json`
3. `content/<locale>/*.ts`

Everything else — the sitemap, `hreflang`, the locale switcher, the parity tests
— derives `Locale` from that array. `'fr' | 'en'` is never written as a literal
union anywhere else.

## Things worth knowing before changing them

- **Two Google Search Console verifications are live.** The meta tag in
  `app/[locale]/layout.tsx` and `public/google8ecce8b8bce39204.html`. Removing
  either un-verifies the property.
- **No cookie banner, by architecture.** The only client-side storage is the
  locale cookie and the demo session. Cal.com is behind a click-to-load consent
  gate, analytics and Turnstile are cookieless, fonts are self-hosted. Adding a
  LinkedIn Insight Tag or a Meta Pixel would require a full consent platform —
  treat that as a deliberate decision, not a quick win.
- **Demo cost controls are layered**: a 2-turn cap, a 400-token ceiling, an input
  length cap rejected with a 400 before any token is spent, prompt caching on a
  byte-stable prefix, a per-IP rate limit on a *hashed* IP, and a global daily
  token budget acting as a circuit breaker. The one cap that a bug in this repo
  cannot bypass is the monthly spend limit on the Anthropic Workspace — set it
  in the Console before deploying.
- **Model output is never rendered as HTML.** Plain text only.
