# Repositioning karimkhadro.be: developer portfolio → freelance services site

## Context

`karimkhadro.be` is a **job-seeker portfolio**. Its contact section says *"I'm currently looking for new opportunities... whether you have a job proposition or just want to say hi"*, the hero says *"I'm a Passionate, Motivated and Unstoppable Developer"*, and the proof is five hobby GitHub repos — one of which advertises in its own description that it is unfinished. Right site for landing a salaried job. Wrong site for what Karim is now doing.

Karim is employed full-time at Unisensor and is starting **after-hours freelancing** as an `indépendant à titre complémentaire`. The offer:

1. Running a project **from A to Z** — one person, start to finish.
2. Building **webapps and websites**.
3. Above all: **integrating AI and agents into small businesses, and explaining in plain language what it will actually do for them.**

The buyer is a **non-technical owner of a 1–15 person business, mostly local** (Liège basin). That single fact invalidates most of the current site: a bakery owner does not care that Java is rated 5 stars and XML is rated 2, and does not read English marketing copy as comfortably as French.

**Outcome:** a bilingual FR/EN services site a local business owner understands in thirty seconds, that makes the AI offer concrete rather than buzzwordy, and that converts via a booked call or a qualifying form — with a separate technical track for recruiters.

### Decisions

| | |
|---|---|
| Stack | **Next.js** App Router, TypeScript, Tailwind 4 |
| Locales | **FR + EN**. `fr` default. Third language **deferred** — architecture must make it a 3-file drop-in |
| Audiences | **Two tracks**: services site for SMBs + `/cv` for recruiters |
| Conversion | Cal.com booking (primary) + qualifying intake form |
| Pricing | Shown, "à partir de", plus a **paid €690 diagnostic as the entry product** |
| Homepage lead | **AI & agents for small businesses** |
| AI demos | **Open, no signup**, hard-capped at **2 turns**, cheap model, scripted fallback |
| Employment | **Not disclosed** on the services site (see §7) |
| Address | **Municipality only** ("Jemeppe, Liège"), full address on request |
| Brand | Personal name, not an agency |
| Hosting | **Vercel**, functions in `fra1` |
| Rollout | **Old site stays live** on the domain until cutover in Phase 3 |

### Belgian setup (drives pricing and the footer)

- `Indépendant à titre complémentaire`, **personne physique**. Guichet d'entreprises (~€100) + caisse d'assurances sociales + TVA. **No SRL yet** — notary and ~€1,500–2,500/yr accountancy only pay off at much higher profit.
- **Franchise de la TVA** under €25k turnover: no VAT charged, no quarterly returns. Real advantage over agencies for clients who can't deduct VAT (physios, some retail) — worth one line on `/tarifs`. But no VAT deduction on tools, and at his capacity €25k is a plausible ceiling to actually hit. Plan for crossing it.
- **Money math that sets the floor:** ~20.5% social contributions on net professional income, then a ~45–50% marginal IPP bracket because it stacks on a full salary. **He keeps roughly 40% of every euro invoiced.** With ~6–10 usable hours a week, a "cheap" €1,200 site eating 30 evening hours pays **~€13/h net**. Underpricing here is not suboptimal, it's irrational.
- **Check the Unisensor contract for an exclusivity / accessory-activity clause before launch.** Never market to Unisensor's market (industrial optical inspection). This is the only item that can genuinely block the plan.
- Mentions légales must carry the **BCE number** and, under the franchise regime, *"Assujetti exempté de la TVA en vertu de l'article 56bis du Code de la TVA."* Confirm the municipality-only address satisfies the requirement with the guichet.
- *Verify thresholds with a comptable — figures shift yearly.*

---

## Current state (verified)

Single-page React 17 app; `src/MainPage.js` (295 lines) **is** the site, `src/texts.js` (186 lines) is all the content.

**Must preserve — two independent Google verifications:**
1. Meta tag, `public/index.html:5`, content `ONZp-spMzNMISjE0MPueGoo8hEV7w1zwvaA2QyO62WA`.
2. File method, `src/google8ecce8b8bce39204.html` — **currently not verified at all**, because CRA only serves `public/`. `git mv` it to `public/`, content byte-identical.

Then add a **Search Console Domain property via DNS TXT** before cutover; that one survives any future host or framework change.

**Must preserve — the template story.** `README.md` markets this repo as a reusable portfolio template, and `texts.js:161` lists it as a shipped project. Before touching `main`: `git tag -a v1-cra-template` and push. Costs nothing, keeps that project item honest.

**Must fix:**
- `public/index.html:11` ships the CRA default `content="Web site created using create-react-app"` — **live in production**. No canonical, OG, Twitter, JSON-LD, sitemap or hreflang anywhere.
- Mobile is broken: `grid-cols-2`/`grid-cols-3` with no breakpoints, no hamburger.
- Fonts declared in `tailwind.config.js` (`'BR Firma'`, `'mono'`) are **never loaded**.
- CV is a webpack *import* (`navBar.js:3`) → hashed filename, unshareable and uncrawlable.
- `src/index.js` is mangled JSX (`< React.StrictMode >` split across lines) — compiles by luck.
- `texts.js:12` says Theux; the CV says Jemeppe. Contact is a personal hotmail.
- Typos to not carry over: `Ourgée`→Ougrée, `Sprint boot`→Spring Boot, `Beck-end`→Back-end, `Hight school`, `reperation`, `manageniong`, `self hoster`.

**Must delete:** 22 of 27 deps (the Redux trio with no store, `bcryptjs`, `crypto-js`, `date-fns`, `dotenv`, `env-cmd`, `reactjs-popup`, `serve`, `web-vitals`, `react-social-icons` → two inline SVGs, all `@testing-library/*`, `typescript` with zero TS files, `craco`, `react-scripts`); ~13.5 MB of images (`20220618_150336.jpg` 2.9 MB and `test2.png` 900 KB are referenced by nothing; `tsd.png` is 3.1 MB in **both** dirs **and is loaded**); `reportWebVitals.js` (never imported); `App.test.js` (asserts "learn react" → `npm test` fails); `Karim-khadro-CV-nocontact.pdf`; the "Know more…" button pointing at a nonexistent `/profile`.

**Do not** `git filter-repo` the images. It changes every SHA and breaks forks of a public template repo to save 10 MB nobody will notice. `git rm` and move on.

---

## 1. Migration

**Fresh `create-next-app` scaffold, committed in-place into this repo, on a branch.** Not an in-place upgrade, not a new repo.

Not an upgrade: CRA→Next shares zero config, and React 17→19 plus Tailwind 2→4 (which drops `tailwind.config.js` entirely for CSS-first `@theme`) are both breaking rewrites. Of ~500 lines, maybe 60 survive. An "upgrade" is a rewrite wearing a costume, and the evenings go into fighting `postcss7-compat` instead of building.

Not a new repo: 40+ dated commits proving continuous work since 2021 are genuinely useful on a GitHub profile, and the repo URL is live.

```bash
git tag -a v1-cra-template -m "Final CRA portfolio template" && git push origin v1-cra-template
git switch -c next-rebuild
npx create-next-app@latest /tmp/kk-next --ts --tailwind --app --eslint --src-dir=false --import-alias "@/*"
# copy scaffold in, then git rm the CRA surface
git mv src/google8ecce8b8bce39204.html public/
```

Rename the GitHub repo `portfolio` → `karimkhadro.be`; GitHub 301s the old URL and remotes keep working. Rewrite `README.md` to point v1 at the tag.

---

## 2. Structure

```
app/
  layout.tsx                 # <html> shell, verification meta
  globals.css                # Tailwind 4 @import + @theme tokens
  robots.ts  sitemap.ts  manifest.ts  not-found.tsx
  api/demos/{reply-drafter,site-assistant}/route.ts
  [locale]/
    layout.tsx               # NextIntlClientProvider, Header, Footer, JSON-LD @graph
    page.tsx                 # HOME
    opengraph-image.tsx
    services/page.tsx  services/[slug]/page.tsx
    demos/page.tsx
    tarifs/page.tsx  processus/page.tsx  faq/page.tsx  a-propos/page.tsx
    realisations/page.tsx  realisations/[slug]/page.tsx
    contact/page.tsx  rendez-vous/page.tsx  merci/page.tsx      # merci = noindex
    guides/page.tsx  guides/[slug]/page.tsx
    cv/page.tsx  cv/opengraph-image.tsx
    mentions-legales/page.tsx  confidentialite/page.tsx
i18n/{routing.ts,navigation.ts,request.ts}
middleware.ts
messages/{fr.json,en.json}
content/
  schema.ts                  # Zod schemas + inferred types
  index.ts                   # getContent(locale) — the ONLY entry point pages import
  {fr,en}/{services,packages,process,faq,about,cv,testimonials,guides}.ts
  case-studies/*.{locale}.mdx
components/{layout,sections,forms,booking,demos,cv,ui}/
lib/
  anthropic.ts               # import 'server-only'
  ratelimit.ts  email/send.ts  actions/submit-intake.ts
  seo/{metadata.ts,alternates.ts,jsonld.ts}  og.tsx
assets/{images,fonts}/       # statically imported → hashed + optimized
public/cv.pdf  public/google8ecce8b8bce39204.html
tests/{messages-parity,content-parity}.test.ts
```

Nav, max 5 items: **Services · IA pour PME · Réalisations · Tarifs · [Réserver un appel]**. `/cv`, `/guides` and legal live in the footer only — **an SMB owner must never land on the CV.**

### Two skins, one token set

**Do not keep `#0a192f`/`#64ffda` on the services track.** It's the widely-cloned Brittany Chiang palette — it reads "junior dev portfolio 2020" to any developer, and dark-navy-with-mint says *developer* to developers while saying nothing to a 55-year-old who runs a carpentry business.

- **Services track**: light-first, warm neutral, one confident accent that isn't mint (deep teal or warm ochre).
- **`/cv`**: keeps navy + mint as a deliberate, self-aware nod.

Two audiences *see* they're in different places. Both from one CSS-variable token set in `@theme`, which also makes dark mode a later drop-in — **ship light-only**; dark mode doubles design QA across ~15 pages and 3 demo UIs and converts nobody.

Self-host fonts in `assets/fonts` via `next/font` (this is also what fixes the never-loaded font bug). Every grid gets breakpoints; the nav gets a real hamburger.

---

## 3. i18n — `next-intl`

`next-i18next` doesn't support the App Router at all. Hand-rolling means reimplementing locale negotiation, cookie persistence, prefix-preserving `Link`, `setRequestLocale` for static rendering, FR ICU plurals, and localised pathnames — 400+ lines of the lowest-visibility infrastructure on the site.

```ts
// i18n/routing.ts
export const routing = defineRouting({
  locales: ['fr', 'en'],          // adding a locale here is 1 of the 3 changes
  defaultLocale: 'fr',
  localePrefix: 'always',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/services': { fr: '/services', en: '/services' },
    '/tarifs': { fr: '/tarifs', en: '/pricing' },
    '/processus': { fr: '/processus', en: '/process' },
    '/realisations': { fr: '/realisations', en: '/case-studies' },
    '/a-propos': { fr: '/a-propos', en: '/about' },
    '/rendez-vous': { fr: '/rendez-vous', en: '/book-a-call' },
    '/demos': { fr: '/demos-ia', en: '/ai-demos' },
    '/mentions-legales': { fr: '/mentions-legales', en: '/legal-notice' },
    '/confidentialite': { fr: '/confidentialite', en: '/privacy' },
    '/cv': '/cv', '/contact': '/contact', '/faq': '/faq',
  },
});
```

**`always`, with middleware 308-redirecting `/` → `/fr`.** `as-needed` looks nicer but costs three things: every future locale is asymmetric (DE gets `/de/…` while FR stays bare, and the `alternates` builder grows a permanent special case); `/` and `/services` both mean "the FR site" *and* "the site", which is the duplicate-content shape Google mishandles; and middleware must disambiguate a bare `/services` from a locale segment forever. The usual counter-argument — don't lose equity on existing bare URLs — **does not apply**, because the live site is one page whose meta description is literally the CRA default. There is no equity to lose. Take the clean structure while it's free.

**The rule that makes a third language a drop-in:** `'fr' | 'en'` is never written as a literal union anywhere except `i18n/routing.ts`. Everything derives `type Locale = (typeof routing.locales)[number]` — the sitemap loop, `lib/seo/alternates.ts`, the `LocaleSwitcher`, the parity tests. Adding a locale is then exactly: one array entry + its `pathnames` slugs, `messages/xx.json`, `content/xx/*.ts`.

Required for static rendering: `generateStaticParams` returning `routing.locales`, and `setRequestLocale(locale)` at the top of every page — otherwise every page silently goes dynamic and loses the CDN.

*(Third-language note for later: Ostbelgien is ~78k people; Flanders + Brussels is millions, and Brussels SMBs pay better than Liège. If a third locale is ever added for commercial reasons, NL is the stronger bet than DE — unless the goal is the DACH remote market.)*

---

## 4. Content model — replacing `texts.js`

`texts.js` is a CV schema; the new site is 80% marketing. Don't port it — **classify it and split three ways.**

| Content | Home | Why |
|---|---|---|
| UI chrome: nav, buttons, form labels, validation, footer, aria | `messages/{locale}.json` via `useTranslations` | short strings, ICU plurals, needed in client components |
| Structured entities: services, packages, process, FAQ, about, CV, testimonials | **typed TS modules** in `content/{locale}/`, Zod-validated | needs shape, types, and cross-references (a package's CTA → a service slug) |
| Long-form: case studies, guides | **MDX** with frontmatter | prose with headings and images |

Rejected: messages-only (a pricing table becomes `packages.0.features.2` with no types — an untyped CMS inside a translation file); MDX-for-everything (`priceFrom: 1500` as frontmatter you hope is a number); **and a real CMS (Sanity/Payload) — a bad idea for phase 1**: one person editing content in an IDE they live in, deploying on push. A CMS adds a vendor, a GDPR sub-processor, an editing UI used twice a year, and a build-time fetch that can fail.

Schema shape:

```ts
Service  { slug, title, tagline, problem, outcomes[], deliverables[], forWho[],
           typicalTimeline, startingPrice?, relatedPackages[], relatedCaseStudies[], faq[], seo }
Package  { slug, name, priceFrom, billing, includes[], excludes[], bestFor,
           deliveryWeeks, ctaKey, highlight? }
CaseStudy{ slug, label: 'personnel'|'en-poste'|'client', oneLiner, situation,
           constraint, whatIDid[], outcome, buyerTranslation, stack[], role, year }
ProcessStep { order, title, description, duration, clientEffort }
FaqItem  { question, answer, category: 'ai'|'pricing'|'process'|'legal'|'tech' }
Testimonial { author, role, company?, quote, consentOnFile: boolean }
UseCase  { sector, painPoint, whatAiDoes, whatItChanges, priceFrom }
CvContent{ education[], work[], skillGroups[], languages: CEFR[], tools[], sideProjects[] }
```

`outcomes[]` not features. `Testimonial.consentOnFile` exists from day one — publishing a client's name needs written permission.

**Migration notes.** All facts come from **the new CV PDF**, not `texts.js` — the CV descriptions are far richer and the old file's facts are stale. Split `"a<br>b<br>c"` into `string[]` at authoring time, which deletes the `.split('<br>')` parsing in `MainPage.js:66-77`. Drop `birth_date` and `calculate_age()` (which also removes the `useEffect`-without-deps bug at `MainPage.js:128`). Convert language stars to **CEFR** (`FR native, EN C1, AR native`) — recruiters read CEFR. Move the hotmail to `karim@karimkhadro.be`.

**FR/EN sync is a build failure, not a hope.** Two vitest files in CI:
- `messages-parity.test.ts` — deep-collect dot-paths from every locale, assert set equality.
- `content-parity.test.ts` — `contentSchema.parse(getContent(locale))` per locale, then assert identity arrays match across locales by key (`services.map(s => s.slug)`, `packages.map(p => p.slug)`, `process.map(p => p.order)`). This catches "I added a 4th service in FR only", which is the failure mode that actually happens.

`content/index.ts` is the **only** module pages import from. No page ever does `import services from '@/content/fr/services'`.

---

## 5. Services and pricing

**Hard floor: never accept a project below €1,500.** Target ≥€75/h gross effective. Reference rate for negotiation only: **€550/day** — **never on the page.** An hourly rate anchors on his time, invites offshore comparison, and structurally caps revenue when his hours are capped.

| Package | For whom | Included | Timeline | À partir de |
|---|---|---|---|---|
| **Diagnostic IA & digital** | anyone who says *"je ne sais pas ce qu'il me faut"* — the majority | 90-min structured call; review of current tools/site/workflow; written 4–6 page report: 3 opportunities ranked by effort/impact, what **not** to do, budget per option, recommended first step; 30-min debrief. Vendor-neutral — he says out loud when the answer is "no AI needed, fix your Google Business profile" | 1 week | **€690 fixed, fully credited against any package started within 60 days** |
| **Site vitrine qui travaille pour vous** | artisans, cabinets, restaurants, small retail with no site or a dead 2010s site | 4–6 pages, FR (+EN €490), mobile-first, copy structured with the client, contact/booking form, Google Business Profile setup, local SEO basics, analytics, hosting in their name, 1h training, 30 days of fixes | 3–4 weeks | **€1,900** · maintenance €35/mo |
| **Assistant IA sur mesure** *(flagship)* | a business drowning in repetitive text work | one bounded use case chosen in the diagnostic; connected to their real data (site content, price list, PDFs, mailbox, spreadsheet); **a human validation step by design**; a written data-flow note stating what leaves the premises; EU hosting where feasible; staff training; 30 days of tuning | 4–6 weeks | **€2,900** + **€150/mo** (hosting, API pass-through priced explicitly — do not absorb it, monitoring, monthly tweaks) |
| **Application web de A à Z** | a process running on Excel + email that needs a real internal tool | cadrage & flows (Figma), architecture, build, auth & roles, cloud deploy with CI/CD, tests, monitoring, handover docs, **code and repo ownership transferred** | 8–14 weeks | **€9,500**, "most projects land €10k–25k" · maintenance €250/mo |

Add-ons worth listing: reprise/sauvetage d'un projet existant (audit €690); **audit AWS & coûts cloud from €1,200** — he does exactly this at work, including cost governance and access reviews; formation IA équipe, demi-journée €690.

**Why these numbers.** Walloon market for a real custom site: ~€1,500–4,000 freelance, €3,000–7,000 agency, €500–900 DIY. €1,900 sits just above the bottom of the professional band — credible, not cheap, and it lets him decline the €900 crowd politely. At ~25 hours that's €76/h gross. The AI assistant at €2,900 (~35h → €83/h) must stay above the website tier, or he'd be selling his scarcest, most differentiated capacity cheaper than his commodity work. The €690 diagnostic is priced to be an easy yes that still filters tyre-kickers, and the 60-day credit removes the last objection to buying it.

**When a lead balks, reduce scope (3 pages, €1,400), never discount.**

**Flag on the webapp package.** The price is right; the *fit* is the risk. A 14-week evening-paced project with an SMB is where a `complémentaire` freelancer gets destroyed — scope creep with no daytime slack. Keep it on the site for credibility, but **sell it in phases** (cadrage payant €1,500 → phase 1 quoted → subsequent phases) and take **at most one at a time**. Never quote a fixed price for the whole thing up front.

**Cap the free discovery call at 20 minutes and screen it through the form.** An uncapped free-consultation offer will consume every evening he has. This is the most likely operational failure of the whole plan.

`/tarifs` also carries: what's *not* included, 40/60 payment terms, the franchise-TVA line, and the capacity statement — *« Je prends deux projets en parallèle, maximum. Quand c'est complet, je le dis et je vous donne une date. »*

---

## 6. The AI narrative, and the demos

### Three rules of register
1. **Never sell "l'IA". Sell the hour back.** The unit of value is *"vous récupérez 4 heures par semaine"*.
2. **Name the boring thing** — not "automatisation intelligente des processus" but "recopier les bons de commande dans la compta".
3. **Say out loud what it can't do.** A section titled *« Ce que je ne vous vendrai pas »* buys more credibility with a sceptical Walloon owner than any claim. Hype is the competition's move; being the only honest one is the position.

Definition box, verbatim on the page:
> « Un modèle d'IA, c'est un logiciel qui lit du texte et qui en écrit. Il est très bon pour rédiger, résumer, classer et retrouver de l'information. Il n'est pas bon pour compter, pour décider à votre place, ni pour garantir qu'il ne se trompe pas. Un "agent", c'est simplement ce logiciel auquel on a donné le droit de faire quelques actions précises — envoyer un brouillon, créer une fiche, remplir un document — dans des limites que nous fixons ensemble. »

### Six use cases (the spine of `/services/ia-pme`)
1. **Boulangerie / restaurant** — the same questions all day by phone and Messenger. *Ce que ça change : le téléphone sonne moins pendant le coup de feu.*
2. **Garage** — quote requests by mail and WhatsApp read into marque/modèle/problème with a draft reply and price band to validate in one click. *On répond le jour même, donc on gagne des jobs qu'on perdait par lenteur.*
3. **Kiné / cabinet** — reminders cut no-shows; admin questions answered; intake form summarised before the session. **Health data is a case where he recommends keeping AI away from the patient record** — admin only. The carve-out is a selling point, not a limitation.
4. **Construction** — 40 seconds of voice note or a photo of a notebook becomes a clean site report and devis lines. *Deux heures de paperasse le soir en moins.*
5. **Comptable / fiduciaire** — client documents read, classified, renamed, amounts extracted for human check. *La saisie devient de la relecture.*
6. **Any SMB** — plain-language search over internal procedures, tarifs, contrats. *Le nouveau ne vient plus poser la question à tout le monde.*

### `/services/ia-pme` structure
H1 (*« L'IA pour une petite entreprise, expliquée sans jargon »*) → definition box → **the demo, high on the page, before any argument** → six situations (problème / ce que fait l'outil / ce que ça change / à partir de) → *« Ce que je ne vous vendrai pas »* → **Vos données** (plain-language data-flow: what stays on their machine, what goes to an EU service, what goes to a US model provider, and the alternatives) → objections → the €690 diagnostic → CTA.

The **I-Pulses 2019 work is the strongest asset on this page** and belongs in the data section as one line, not a brag: *« En 2019, mon premier vrai projet consistait précisément à filtrer les données privées avant qu'elles n'atteignent un chatbot dans le cloud. La question de vos données, je ne la découvre pas aujourd'hui. »* Genuine, verifiable, and it predates the concern being mainstream.

### The six objections, with the answers to draft
- **« Ça va coûter cher pour rien. »** → On commence par un diagnostic à 690 €, qui vous dit ce que ça rapporterait avant d'investir. Si aucune piste ne tient debout, je vous le dis, par écrit.
- **« Mes données vont où ? »** → On liste ensemble ce qui sort de chez vous, avant de coder. Beaucoup de choses n'ont pas besoin de sortir. Hébergement européen quand c'est possible, accord de sous-traitance signé, et un document d'une page décrivant le trajet de vos données. Vos données ne servent pas à entraîner un modèle.
- **« Ça va remplacer mon personnel. »** → Je m'attaque à la partie que personne n'aime : recopier, trier, chercher, rédiger dix fois la même réponse. Dans une entreprise de 3 à 15 personnes, le problème n'est pas d'avoir trop de monde. L'outil propose, votre équipe valide.
- **« Ça raconte n'importe quoi. »** → Oui, ça arrive. Trois garde-fous : l'outil ne répond qu'à partir de vos documents, il cite d'où vient l'information, et il dit « je ne sais pas, je transmets » plutôt que d'inventer. Sur les tâches sensibles, un humain valide avant l'envoi.
- **« Et le RGPD ? »** → Une contrainte, pas un obstacle. On ne collecte que l'utile, on documente le traitement, on informe vos clients quand ils parlent à un système automatisé, et vous gardez la possibilité de tout effacer. Je fournis les documents pour votre registre.
- **« Je suis trop petit pour ça. »** → Trois personnes et une boîte mail, c'est déjà assez. Les gros projets d'IA échouent souvent ; les petits, ciblés sur une tâche précise, marchent presque toujours.

### The demos — open, no signup, hard-capped

**Two demos, not three.** Two that work flawlessly beat three where one is broken, and a broken demo on an AI services page is fatal.

What makes a demo persuasive rather than a gimmick: the visitor supplies their own input; zero signup; result under 10 seconds; the output is something they'd actually send; it maps 1:1 onto a package with the price underneath; it fails honestly; and **it shows its work**, so it looks like a tool rather than a magic box.

**Demo 1 — « Répondez à ce client en 30 secondes »** *(build first)*
Paste an incoming customer message (or one-click a realistic sample), pick a trade and a tone. Out comes a ready-to-send French reply, plus a side panel showing *what it understood*: client, demande, urgence, informations manquantes. Every owner recognises the pain in one second, the output is instantly evaluable, and it works in French — itself a local proof point. Caption: *« Ici, l'outil ne connaît rien de votre entreprise. Chez vous, il connaît vos tarifs, vos disponibilités et vos anciens devis. »*

**Demo 2 — « Posez-moi une question sur ce site »**
A chatbot grounded strictly on his own site content — prices, packages, process, availability, what he doesn't do — answering with citations and links, and saying *« je ne sais pas, écrivez-lui »* with a one-click handoff into the intake form. The product demonstrating itself: the visitor simultaneously sees the deliverable, verifies the anti-hallucination claim, and gets pre-qualified. **It must never invent a price** — grounded retrieval only, refusal by default.

*(Deferred: the invoice/photo extractor. High wow, but arbitrary file upload means unbounded cost, an abuse vector, and inbound third-party PII with no lawful basis. If it ships later, curated samples only, in-memory, never written.)*

**Cost and abuse architecture** — the constraint is "open but capped, cost very low", and that is achievable to the point of being nearly free:

- **`claude-haiku-4-5`** for both demos, not Opus. Grounded Q&A over a short document and reply-drafting are exactly what Haiku is good at, at roughly a fifth the cost. *Check the `claude-api` skill for current model IDs and pricing at implementation time rather than trusting these from memory.*
- **2 turns maximum per session**, then the demo closes with *« Démo terminée — parlons de votre cas »* and the booking CTA. The cap is a **conversion feature**, not just a cost control.
- **Curated sample inputs one click away**, so most visitors run a known-good prompt — predictable cost *and* predictable quality.
- **Prompt caching** (`cache_control: ephemeral`) on the system block. Every visitor sends an identical prefix, so this is the single biggest lever and it's free. Keep the prefix **byte-stable**: no `new Date()`, no locale interpolation inside the cached block — put "réponds en français" *after* the breakpoint, or freeze one prompt per locale. Verify via `usage.cache_read_input_tokens`; if it's always 0, something volatile leaked in.
- `max_tokens: 400`, input ≤1,200 chars, total conversation ≤6,000 chars — rejected with a 400 before costing a token.
- **Cloudflare Turnstile** on the first call per session (cookieless, invisible, no consent banner — unlike reCAPTCHA), then a 30-min HttpOnly signed session cookie so turn 2 doesn't re-challenge.
- **Upstash Redis rate limits** on a *hashed* IP (GDPR minimisation): 4 messages/10 min, 12/day.
- **Global daily budget counter** — `INCRBY` estimated tokens on `demo:budget:{YYYY-MM-DD}`, TTL-reset. Over threshold → the scripted fallback. This is the circuit breaker.
- **A dedicated Anthropic Workspace with a hard monthly spend limit, set in the Console before the first deploy.** This is the only cap that cannot be bypassed by a bug in the code.

With 2 turns, Haiku, a cached prefix and 400-token replies, a full session costs on the order of a fraction of a cent. Even a thousand sessions a month is a rounding error, and the counter caps the tail regardless.

**Build the scripted fallback transcripts first.** Each demo ships a canned transcript that types out through the same streaming UI, and plays when the key is missing (local dev, preview deploys), when rate-limited, on any 5xx, and when the budget trips — with a small *« démo enregistrée — réessayez dans quelques minutes »* badge. Consequence: **the demo UI is fully clickable before the API is touched, and the marketing page is never broken by an outage.**

**Engineering details.** `lib/anthropic.ts` starts with `import 'server-only'` so an accidental client import is a *build* error, not a leaked key; `ANTHROPIC_API_KEY` is never `NEXT_PUBLIC_*`; separate low-limit key for Preview. `runtime = 'nodejs'`, streaming via `client.messages.stream()` piped into a `ReadableStream`. Prompt-injection blast radius is deliberately zero — no tools, no DB, no email, no fetch; worst case a visitor makes a fictional carpenter rude. Never render model output as HTML; plain text through his own components. Handle `stop_reason === 'refusal'`.

**Using the raw SDK, not the Vercel AI SDK** — for two fixed-shape demos, a provider abstraction sits between him and the exact parameters that matter (`cache_control`, `max_tokens` caps, effort), and abstraction drift on those is how cost caps silently stop working.

**Disclosure under each demo input:** *« Votre message est envoyé à l'API d'Anthropic pour générer la réponse. Ne saisissez pas de données personnelles ou confidentielles. »* — plus Anthropic named as a processor in the privacy policy, and **no persistent logging of demo prompts** (token counts and status codes only).

---

## 7. Case studies, disclosure, cut list, trust

### Case study template — 6 blocks
Result-oriented title + a label badge (`Projet personnel` / `En poste` / `Client`) → **En une ligne** for a non-technical reader → **La situation** → **La contrainte** (this block is what separates a case study from a screenshot; it's where judgment shows) → **Ce que j'ai fait**, in plain language with the *why*, technical detail in a collapsible block → **Le résultat** + **« Ce que j'en retire pour vos projets »**, one paragraph translating it into a benefit for an SMB reader. That last block is what makes employment work sellable without inventing metrics.

Honest framing sentence on `/realisations`:
> *« Je démarre mon activité indépendante. Les projets ci-dessous sont soit mon propre produit, soit des réalisations menées dans le cadre de mes emplois — je les présente comme telles, sans les faire passer pour des missions de freelance, et sans divulguer d'information confidentielle. »*

**Can claim:** what he personally built and owned; technologies and architectures; scope ("3 applications en production", "seul responsable de l'architecture AWS"); Play Store release; a JHipster/Keycloak stack from infra setup to go-live; that he built the CI/CD pipeline; qualitative mechanisms (SSR/SSG improved performance and SEO).

**Cannot claim:** any revenue/traffic/uptime/cost-saving number from Unisensor or Geo Solutions; employers' clients' names; internal UI screenshots; Ookto traction; anything implying these were freelance engagements. **No "+40% de performance" without the trace and permission.**

Writable today:

- **CS1 — Ookto** *(flagship)*. Solo, no team, no budget. Next.js + Tailwind with SSR/SSG for SEO; Supabase for auth/realtime/Postgres to avoid building plumbing; **Neo4j** because a relational schema made recommendations painful; LLM features for content generation, semantic search and contextual recommendations; S3 media; Elastic Beanstalk with auto-scaling. Each choice justified by "solo builder, no ops budget". No traction claims. *Buyer translation:* he has personally made every trade-off an SMB project needs, with his own money on the line — and has shipped AI features in a real product, not a tutorial.
- **CS2a — « Devenir le seul responsable d'une infrastructure cloud »** (Unisensor). EC2/S3/RDS/VPC/IAM/security groups/load balancers/auto-scaling, CloudWatch dashboards and alarms, cost governance, security audits and access reviews, Boto3 provisioning, Bitbucket Pipelines CI/CD. *Buyer translation: « votre application ne dépendra pas de mon humeur ni de mon PC : elle se déploie, se surveille et s'alerte toute seule. »* **The single most credible evidence on the site for "A to Z"** — sole ownership of a production cloud environment outweighs any hobby repo.
- **CS2b — « Du serveur vide à la mise en production »**. SpringBoot + Angular (JHipster + Keycloak) from infra to go-live; the Next.js app where SSR/SSG and SEO were the point; an Angular front end built from scratch with a reusable component library; an Android app on the Play Store; JUnit/Mockito/Pytest in CI.
- **CS3 — Geo Solutions, « Rendre lisible une donnée complexe »**. GeoServer WMS/WFS layers published and wired into Angular for dynamic maps; R pipelines (`sf`, `terra`); Airflow DAGs. A genuine local niche — communes, bureaux d'études, agriculture, environnement — worth one line on the services page.
- **CS4 — I-Pulses 2019**, labelled a student placement. Short as a project, disproportionate as positioning (§6).

### No testimonials — handle it, don't fake it
No stock-photo clients, and **never** an employer logo strip implying clientele — locally, someone will notice. In order:
1. **Say it out loud:** *« Pas encore de témoignages : je démarre. En attendant, voici ce que vous pouvez vérifier vous-même : mon code sur GitHub, mon parcours sur LinkedIn, mon numéro d'entreprise, et mes démos qui tournent en direct sur ce site. »* Naming the gap converts better than a suspicious silence.
2. **Get 2–3 LinkedIn recommendations from named colleagues now** — free, real, verifiable, quoted with name/role/company and linked.
3. **Two « places pilotes » at −25%**, capped at two, framed as launch pricing with a deadline. At a €1,900 floor that still lands at €1,425 — acceptable *once*, to buy a portfolio honestly.
4. **Substitute a guarantee for social proof:** 30-day post-launch fixes, code and accounts handed over, no lock-in, and *« si le premier livrable ne vous convient pas, vous ne payez pas le solde »* on the site package. Risk reversal does the job testimonials would.

### Employment: not disclosed, but commitments are explicit

Per the decision, the services site **does not state that this is after-hours work**. `/cv` names Unisensor as a normal CV fact, so it remains discoverable without being advertised.

**One concern, stated once:** the design pass argued the real risk is a client discovering it mid-project and feeling misled, in a small market where that story travels. The mitigation, which delivers the trust benefit *without* the disclosure, is to publish the **availability and capacity commitments** as policy — nothing here reveals a day job, and concrete commitments read as professionalism where vagueness reads as a hobby:

> • Je réponds à vos messages sous 24 heures ouvrables. Toujours.
> • On peut se parler par téléphone en soirée à partir de 18h, sur l'heure de midi, ou le samedi matin. Vous choisissez.
> • Je prends deux projets à la fois, maximum. Quand c'est complet, je vous le dis et je vous donne une date honnête plutôt qu'un délai que je ne tiendrai pas.
> • Un site vitrine, c'est trois à quatre semaines chez moi. En échange, vous avez la même personne du premier appel à la mise en ligne.

On `/a-propos`, `/tarifs` (capacity) and `/contact` (response time). **Not in the hero** — the hero sells the outcome.

### Cut list

| Current | Verdict |
|---|---|
| **38 star-rated skills** | **Delete entirely.** The most junior-coded element on the site, and it publishes his weaknesses for free — `UI/UX 2/5`, `Azure 2/5`, `Bootstrap 2/5`. `Deep learning 3/5` actively undermines the AI positioning. `/cv` gets 5 grouped **unrated** lines (Backend · Frontend · Cloud & DevOps · Mobile · Data & AI). **The homepage carries zero technology names.** Delete the `Format_ab` star renderer. |
| **Birth date + computed age** | **Delete.** No upside, and being visibly 29 is a liability with a 55-year-old deciding whether to hand over €3,000. Also deletes the `useEffect` bug. |
| **"Theux, Belgium, Planet Earth"** | Delete the joke, fix the city → **Jemeppe (Liège)**. A wrong city breaks local SEO and local trust. Mention Seraing, Herstal, Ans, Flémalle, Huy, Verviers in the coverage line. |
| **Crypto** | **Delete. Non-negotiable.** To a conservative Walloon SMB buyer it reads speculative-and-slightly-dodgy, and it directly attacks the trust he's building with people worried about their data and their money. Not even on `/cv`. |
| **F1 / travelling / "much more"** | Cut from the homepage. Exactly one human line at the bottom of `/a-propos`. |
| **"Passionate, Motivated and Unstoppable Developer"** | Delete. Adjectives about himself, zero information, and "unstoppable" is a red flag to anyone hiring for reliability. |
| **About text, section titles ("Know Me", "Some Projects", "Next Step:")** | Delete. Addressed to an employer; "Next Step:" is job-hunting language. |
| **Tasky** (*"only the To-Do list is completed"*) | **Delete immediately.** An advertised unfinished project on a page selling A-to-Z delivery is self-sabotage. (`src/images/tasky.png` is already a broken reference.) |
| **Repo Creator, Kucoin, "Portfolio"** | Delete from the site. Listing your own portfolio as a portfolio item is a tell, and *"no programming knowledge"* is a strange thing to advertise. |
| **Traffic sign detection** | `/cv` only, one line. The one hobby project with real ML, but weak homepage AI proof — Ookto and I-Pulses carry that. |
| **ULiège "I quit after the first year"** | Keep, reword: *« Master en sciences informatiques (systèmes intelligents), ULiège — première année suivie (2020-2021), interrompue pour entrer en entreprise. »* Truthful, non-defensive. |
| **Contact text ("looking for new opportunities… job proposition")** | **Delete.** The highest-cost line on the current site: it tells a paying client he's job-hunting. |

Net effect: the homepage loses every technology name, every star, every hobby repo and every personal fact, and gains outcomes, prices, a working demo and a written process.

### Trust signals, ranked
1. **A working AI demo, no signup, 10 seconds.** The only signal that proves competence *and* the positioning at once, and the only one a competitor with a template site can't fake.
2. **Real name, real face, real mobile, `.be` email on the domain.** A **new professional headshot is a task** — it's the highest-ROI asset on a personal-brand lead-gen site, and a hotmail address negates a good photo.
3. **Visible specific pricing.** "À partir de 1 900 €" says he knows what he's doing and won't price by reading the client's shoes. Most local competitors hide behind "sur devis".
4. **A named, verifiable employer with real responsibility** (on `/cv`) — third-party-verifiable competence.
5. **BCE number + Belgian municipality + complete mentions légales.**
6. **Written process and written scope**, including what's *not* included. Every SMB owner has been burned by an open-ended IT bill.
7. **Explicit response-time and capacity commitments.**
8. **Risk reversal**: 30-day fixes, code and accounts handed over, no lock-in.
9. **Local proximity, named.** *« Jemeppe, près de Liège — on peut se voir »* beats a lot of credentials.
10. **LinkedIn recommendations from named colleagues.**
11. GitHub (footer and `/cv`, not the homepage — matters to recruiters, near-zero to a baker; worth auditing, since its top repos are the ones being deleted from the site).
12. **The site's own quality** — fast, correct French, no typos, working on mobile. The site is the sample. Another reason the rebuild isn't cosmetic.

*(An AWS SAA certification would be a genuine later addition, and a realistic evening investment given how much of his day job is AWS.)*

---

## 8. Forms, booking, GDPR, analytics

**Booking: Cal.com** over Calendly — EU entity option, self-hostable, working FR localisation, free tier covers one event type with calendar sync. Two event types: `appel-decouverte` (20 min, free, primary CTA) and later a paid diagnostic slot.

**Embed behind a consent gate.** The Cal.com iframe sets third-party cookies, and that alone is what would force a site-wide banner. `/rendez-vous` renders a styled `<ConsentGate>` placeholder — *« Afficher le calendrier (Cal.com) »* + a one-line notice — that loads the embed on click. Everywhere else (header CTA, CTA bands) links to `/rendez-vous`. **Never eager-load the iframe.**

**Form: server action + Zod + Resend/React Email.** `IntakeForm` (client, `useActionState`) → `lib/actions/submit-intake.ts` → validate → anti-spam → send → `redirect('/[locale]/merci')`.

**Nine fields, one screen, plain-language labels:**

| Field | Notes |
|---|---|
| Votre nom | required |
| Nom de votre entreprise | optional — a pre-launch solo shouldn't be blocked |
| E-mail | required |
| Téléphone | optional, labelled *« le plus rapide pour vous répondre »* — local owners prefer phone |
| De quoi avez-vous besoin ? | multi-checkbox: nouveau site / refaire mon site / application ou outil interne / automatiser une tâche répétitive / **de l'IA, mais je ne sais pas encore comment** / autre. Doubles as education |
| Racontez-moi en quelques phrases | textarea, placeholder *« Pas besoin de termes techniques. Décrivez ce qui vous embête aujourd'hui. »* |
| Budget envisagé | radio: <2k / 2–5k / 5–15k / >15k / **je ne sais pas encore, conseillez-moi**. Reassurance line: *« Cette information me permet de vous proposer quelque chose de réaliste, pas de vous enfermer. »* **The highest-value field on the site** — the `<2k` answer saves him a call |
| Pour quand ? | dès que possible / 1–3 mois / plus tard |
| Consentement | unticked, links `/confidentialite` |

**Do not ask** company size, sector, "how did you hear about us", website URL, employee count, or anything containing the word "requirements". Every extra field costs a lead his capacity can't afford to lose.

`/merci`: *« Reçu. Je vous réponds sous 24 heures ouvrables, en général avec deux ou trois questions et une fourchette de prix. »* + booking link + phone. `noindex`.

**Spam, four layers by cost:** off-screen honeypot (`aria-hidden`, `tabIndex={-1}`, not `type="hidden"`) → silent success; hidden `startedAt` time trap rejecting <3s or >2h; **Turnstile** verified server-side (not reCAPTCHA — cookies and a consent banner for no benefit); Upstash rate limit, 3/hour/hashed-IP.

**Email provider — a flag.** Resend has the best DX (React Email, 3k/mo free) but is **US-based**, which sits awkwardly beside an "your data stays in Europe" pitch. Ship Resend, isolate it entirely in `lib/email/send.ts`, and swap to **Brevo** (French, GDPR-native) if EU residency becomes part of the sales pitch — that's a one-file change. Set SPF/DKIM/DMARC on the domain and `replyTo` the lead so replies come from his normal inbox.

**GDPR — he becomes a controller the moment the form works.** Consent basis, unbundled and unticked; the notice states who (named, with BCE number), what, why, retention (24 months), processors (Resend/Brevo, Cal.com, Vercel, Cloudflare, Anthropic, Upstash), and rights including complaint to the APD/GBA. A newsletter opt-in, if ever, is a **second separate optional** checkbox.

**Do not persist leads to a database in Phase 1.** Email-only means the retention policy is "my mailbox", the breach surface is his mailbox, and he owes no DSAR tooling. A `leads` table buys a CRM he doesn't need and a storage-limitation obligation he does. Revisit above ~10 leads/month. Keep a one-page `docs/registre-traitements.md`; 30 minutes, and it's what a client's DPO would ask for.

**Analytics: `@vercel/analytics` + `@vercel/speed-insights`.** Cookieless, free on the plan he's already on, two components, gives pageviews + Core Web Vitals + custom events (`track('intake_submitted')`). **Plausible** (€9/mo, EU-hosted) later, when funnels and UTM reporting are actually needed. **Reject GA4** — it forces a consent banner that measurably suppresses conversion and adds a CLS-heavy overlay to LCP, consent mode makes the data worse than cookieless analytics anyway, and multiple EU DPAs have found GA transfers unlawful in specific cases.

**No cookie banner — achieved by architecture.** The only client-side storage is next-intl's `NEXT_LOCALE` (functional) and the demo session cookie (strictly necessary, security). Turnstile is cookieless; analytics is cookieless; fonts are self-hosted; rate-limit keys are server-side hashed IPs. The single third-party cookie source, Cal.com, is behind the click-to-load gate. **Adding a LinkedIn Insight Tag or Meta Pixel would require a full CMP** — treat that as a deliberate later decision, not a Phase 3 impulse.

---

## 9. SEO

**Metadata.** One `lib/seo/metadata.ts` `buildMetadata({ locale, path, title, description })` used by every `generateMetadata`. Composes `title.template` (`%s | Karim Khadro`), `alternates.canonical`, `alternates.languages` built by looping `routing.locales` through `getPathname` **so localised slugs resolve correctly** — this is the part people get wrong with `pathnames` — plus `openGraph` (`locale: 'fr_BE' | 'en_US'`), `twitter.card`, and `metadataBase` from `NEXT_PUBLIC_SITE_URL`. **`alternates.languages` must include `'x-default'` → the FR URL; a missing `x-default` is the most common hreflang error.**

**Sitemap.** Single `app/sitemap.ts` — static route manifest × locales × dynamic slugs, each entry carrying `alternates.languages`. Correct and simpler than per-locale sitemaps until a few hundred URLs. Referenced from `app/robots.ts`, which disallows `/api/` and `/*/merci`.

**JSON-LD** as one `@graph` in the `[locale]` layout, `@id`-linked rather than duplicated:
- `Person` — name, jobTitle, url, image, `sameAs: [linkedin, github]`, `knowsLanguage: ['fr','en','ar']`, `alumniOf` (ULiège, HEPL).
- `ProfessionalService` — home. `provider` → the `Person` by `@id`, `areaServed` (Liège, Seraing, Herstal, Verviers, + Wallonie as an AdministrativeArea), `serviceType`, `priceRange: '€€'`, BCE as `identifier`, `hasOfferCatalog` built from `content/*/packages.ts`.
- **Skip `LocalBusiness`.** Google expects it to carry a real `PostalAddress` and `openingHours`; without them it's a weak entity that invites a mismatch with a Google Business Profile. `ProfessionalService` + `areaServed` is the honest, well-supported shape for a home-based provider. Upgrade only if a full address is ever published — and then make it byte-identical to the GBP listing.
- `Service` per `/services/[slug]`; `FAQPage` **only for FAQs actually visible on the page**; `BreadcrumbList` on nested routes; `WebSite` with `inLanguage`.

**OG images.** `opengraph-image.tsx` + `ImageResponse`, shared template in `lib/og.tsx`. **Self-host the font as `.woff2` in `assets/fonts` and load it via `import.meta.url`** — fetching Google Fonts inside an OG route is the classic flaky build. `twitter-image.tsx` re-exports it. This matters because SMB owners forward links over **WhatsApp**, where a bare card looks broken.

**`/cv.pdf`** as a real static file in `public/`, plus a `redirects()` entry from `/karim-khadro-cv.pdf` (the name that ends up in a recruiter's Downloads folder) and a `headers()` rule setting `Content-Disposition: inline`. Keep it out of the sitemap but link it plainly from `/cv` — a CV PDF ranking for his own name is good.

**Also rolled in:** `app/manifest.ts` replaces **both** conflicting manifests with real names and a `theme_color` that matches the design; `app/apple-icon.png` replaces the dangling `logo192.png`; `<html lang>` becomes the actual locale.

**Keywords worth targeting:** `développeur web freelance Liège`; `création site internet` + commune variants (`Seraing`, `Herstal`, `Ans`, `Jemeppe`, `Flémalle`, `Huy`, `Verviers`); `refonte site internet Liège`; `intégration intelligence artificielle PME Belgique`, `consultant IA PME Wallonie` (low volume, near-zero competition, very high intent — **the real opportunity**); `chatbot pour site web PME Belgique`; `automatiser les tâches administratives PME`; `application web sur mesure Liège`; `prix création site internet Belgique` (→ the guide page); `développeur AWS freelance Belgique` (→ `/cv`); and the defensible niche `développeur SIG freelance Belgique`, `GeoServer WMS WFS Belgique` — tiny volume, almost no competitors, and the buyers (communes, bureaux d'études) have budget.

**Hopeless, don't spend a word:** `création site internet Belgique`, `agence web Liège`, bare `développeur web`, `intelligence artificielle`, `IA`, `chatbot`, `automatisation`, `AI consultant`.

**What outranks on-page work at his scale**, in order: a properly filled **Google Business Profile** with the Liège service radius; a real page per service *and* per intent rather than one long homepage; the structured data above; genuinely fast statically-rendered pages; a handful of legitimate local citations (Pages d'Or, UCM or a local network, the commune directory); correct sitemap and hreflang.

**FR and EN are different pitches, not translations.**

| | FR (`/fr`) | EN (`/en`) |
|---|---|---|
| Reader | non-technical owner, 1–15 people, Liège basin | remote/international clients, recruiters |
| Angle | proximity, plain language, fixed prices, *« on peut se voir »* | CET overlap, English fluency, senior technical depth, async working |
| Only here | commune pages, Belgian pricing guide, RGPD/AI-Act framing, local trades (boulangerie, garage, kiné) | deeper stack rationale, `/cv` surfaced early, remote terms |
| Tone | vouvoiement, short sentences, no anglicisms where a French word exists (*hébergement*, not *hosting*) | direct, more technical, still outcome-led |

**If EN can't be maintained properly at launch, ship FR complete plus one good `/en` page and `/cv`, and expand later.** A half-translated site is worse than a smaller one, and FR is where the money is.

**No blog — `/guides` instead.** A dated blog posted to twice and abandoned is worse than none: *"dernier article : mars 2025"* tells an owner he's already given up, and every writing evening is a non-billing evening. So: **no chronological feed, no dates displayed, no "latest posts"** — 5–6 permanent undated guide pages that double as SEO landing pages and as answers he'd otherwise repeat on calls:
- *Combien coûte un site internet en Belgique ? (fourchettes réelles)* — the highest commercial intent of anything he can write.
- *L'IA pour une PME : 6 usages concrets (et 3 où ça ne sert à rien)*
- *Vos données et l'IA : ce qui part vraiment dans le cloud, et comment l'éviter* — the I-Pulses credential as content. Nobody local writes this.
- *Chatbot sur votre site : utile ou gadget ?*
- *Ce qu'il faut préparer avant de faire refaire son site*

One per quarter, maximum. Ship three and stop if that's the honest capacity — undated, they don't rot. Each ends in the diagnostic CTA.

---

## 10. Hosting, DNS, images

**Vercel**, functions pinned to `fra1`. Server actions, streaming, `ImageResponse` and ISR are all first-party with zero config — four requirements met. Cloudflare Workers via `@opennextjs/cloudflare` has the better residency story but `@anthropic-ai/sdk` on `workerd` needs care and `ImageResponse` has been the rough edge; **the scarce resource is evenings, not dollars.** Netlify's App Router support trails with no upside.

**State residency honestly.** `fra1` keeps his functions and their logs in Frankfurt, but Vercel is a US company (DPA + SCCs, listed as a processor) and the Anthropic call leaves the region regardless. *« Hébergé en Europe »* is defensible; *« vos données ne quittent jamais l'UE »* is **not** — don't write it. A strict-EU client is a per-project deployment, not a reason to handicap the marketing site.

**Steps:**
1. Import the repo; production branch `main`, `next-rebuild` as preview — **a live preview URL from evening one**, which is what makes the phasing safe while the old site stays on the domain.
2. Env vars in three scopes (Production / Preview / Development): `NEXT_PUBLIC_SITE_URL`, `ANTHROPIC_API_KEY` (**separate low-limit key for Preview**), `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `TURNSTILE_SITE_KEY`/`_SECRET_KEY`, `UPSTASH_REDIS_REST_URL`/`_TOKEN`, `NEXT_PUBLIC_CAL_LINK`.
3. **Before cutover:** add the Search Console **Domain property via DNS TXT** and confirm it verifies.
4. **Cutover:** lower TTL a day ahead, then at NS1 replace the two AWS A records (`35.157.26.135`, `63.176.8.218`) with Vercel's apex A record, add `www` CNAME → `cname.vercel-dns.com`, add CAA records, and Resend's SPF/DKIM/DMARC TXT in the same pass. Pick apex as canonical and never change it.
5. `next.config.ts`: `redirects()` for legacy anchors (`/#about` → `/fr/a-propos`, `/#projects` → `/fr/realisations`, `/#exp` → `/fr/cv`, `/#contact` → `/fr/contact`) — **pure fragments can't be server-redirected, so also keep a small client-side hash handler on `/` for a few months**. `headers()` for CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.

**Images.** Delete everything in `public/images/` and `src/images/`. Keep four: a **new professional headshot** (1200² and 600², → ~60 KB AVIF); the logo **redrawn as SVG** (it's a 32×32 render today, and an SVG is reusable in the OG template and favicon pipeline); the side-project thumbnails recaptured at 1600px and `sharp`-converted, lazy, on `/cv` only; and the map pin replaced by an inline SVG.

Rules: **static imports** for everything local (`import profile from '@/assets/images/profile.jpg'` → `<Image placeholder="blur" sizes="…" />`) so Next derives dimensions and generates the blur — string paths from `public/` lose all of that, which is exactly today's bug. `priority` on **exactly one** image, the above-fold portrait. Always set `sizes`. `images: { formats: ['image/avif','image/webp'] }`. Enable `@next/next/no-img-element` as an **error** — no raw `<img>` except inside `ImageResponse`.

---

## 11. Phasing

Every phase ends with a deployable `main`. The shell ships in Phase 0 and every later phase only *adds* routes, so nothing is ever half-broken. Evening ≈ 2–3 focused hours.

| # | Phase | Ships | Evenings |
|---|---|---|---|
| **0** | **Foundation** | Tag `v1-cra-template`; branch; scaffold; delete CRA surface, 22 deps, all images; next-intl wiring + `generateStaticParams` + `setRequestLocale`; self-hosted fonts; `@theme` tokens for both skins; Header + **working mobile hamburger** + Footer + LocaleSwitcher; `/fr` + `/en` home with placeholder hero; `public/cv.pdf`; **both Google verifications**; single `app/manifest.ts`; Vercel project + preview URL | 3 |
| **1** | **Content model + recruiter track** | `content/schema.ts` (Zod) + `content/index.ts`; port `exp`/`projects` into `content/{fr,en}/cv.ts` (no scores, no age, `<br>` split, typos fixed, CEFR); `/cv` complete in the navy+mint skin; `messages/*.json` for all chrome; **both parity tests in CI**. *Already strictly better than today's site.* | 4 |
| **2** | **Services track** | `content/{fr,en}/{services,packages,process,faq,about}.ts`; home (hero → pain → services → demo slot → process → proof → pricing teaser → objections → CTA); `/services` + 4 slugs incl. `/services/ia-pme`; `/tarifs`; `/processus`; `/a-propos`; `/faq`; MDX pipeline + `/realisations` with Ookto + CS2a | 5 |
| **3** | **Conversion, legal, GO LIVE** | Cal.com + `ConsentGate` + `/rendez-vous`; intake form server action + Zod + Resend + honeypot + time trap + Turnstile + rate limit; `/merci`; `/mentions-legales` + `/confidentialite`; DNS + Search Console domain property + **cutover**; Vercel Analytics + goal events | 3 |
| **4** | **SEO & performance** | `buildMetadata` everywhere; sitemap with alternates + `x-default`; robots; JSON-LD `@graph`; OG templates; legacy hash redirects; security headers; image conversion; Lighthouse ≥95 mobile; a11y pass (focus rings, contrast, keyboard nav on accordion + hamburger) | 3 |
| **5** | **AI demos** | `DemoShell` + streaming hook + **both fallback transcripts first**; Anthropic Workspace spend cap; `lib/anthropic.ts` with `server-only`; `lib/ratelimit.ts` (Turnstile session → per-IP → 2-turn cap → global budget); the two routes with prompt caching; `/demos` hub with the *« voici ce que l'IA a reçu »* explainer panels; demo privacy notice | 4 |
| **6** | **Growth** | `/guides` + the pricing and AI-usage articles; remaining case studies (CS2b, CS3, CS4); LinkedIn recommendations requested; Plausible if funnels are needed; third locale as a 3-file drop-in if ever wanted | 3+ |

**~25 evenings ≈ 8 weeks at 3/week. Phases 0–3 (15 evenings, ~5 weeks) get a live, converting, compliant site.**

**Phase 5 is last, not first.** The temptation is to build the shiny demos immediately — but demos without a pricing page and a booking link generate zero leads.

**Phase 0 also includes the non-code prerequisites:** read the employment contract; BCE registration; `karim@karimkhadro.be` mailbox; Cal.com, Resend, Upstash, Cloudflare Turnstile and Anthropic Workspace accounts; **book the headshot.**

---

## Verification

**Per phase, locally**
- `npm run dev`, walk every route in both locales.
- `npm run build` clean — Tailwind 4 and next-intl both surface config errors only at build time.
- Chrome DevTools MCP: emulate 390px on every page (**the failure mode of the current site**); Lighthouse on home and `/services/ia-pme`, target ≥95 SEO and Accessibility.
- Keyboard-only pass: hamburger, FAQ accordion, form, locale switcher, consent gate.

**i18n**
- Both parity tests pass; deliberately delete a FR key and confirm CI **fails**.
- Locale switcher preserves the current route including localised slugs (`/fr/tarifs` ↔ `/en/pricing`).
- `curl -s $URL/en/services | grep hreflang` shows `fr`, `en` **and `x-default`**.
- Temporarily add a third locale to `routing.locales` and confirm nothing crashes — proves the drop-in claim.
- `curl -sI $URL/` returns 308 → `/fr`.

**Conversion, end to end**
- Submit the form → email arrives with the lead's address as `replyTo`; `/merci` renders and is `noindex`.
- Honeypot filled → silent success, no email. Submit in <3s → rejected. Bad Turnstile token → rejected. Fourth submission in an hour → rate-limited.
- `/rendez-vous` loads **no** Cal.com iframe until the gate is clicked (verify in the Network panel — this is what keeps the site banner-free).
- Book a slot; confirm the calendar invite arrives.

**Demos**
- With `ANTHROPIC_API_KEY` unset, both demos play their scripted fallback through the same streaming UI. **This must work before the API is wired at all.**
- Turn 3 is refused with the *« Démo terminée »* CTA, not an error.
- Exceed the per-IP limit → friendly fallback, no 500.
- Force `demo:budget:{today}` over threshold → both demos degrade gracefully.
- Confirm `usage.cache_read_input_tokens > 0` on the second request — if it's always 0, something volatile leaked into the cached prefix.
- Ask demo 2 for a price that isn't on the site → it must refuse and hand off, not invent.
- Grep the build output for the API key: `grep -r "sk-ant" .next/static` returns nothing.

**SEO, after cutover**
- `/sitemap.xml` and `/robots.txt` — both locales, alternates present, `Sitemap:` line present.
- Rich Results Test validates `Person` + `ProfessionalService` + `FAQPage`.
- `curl -s https://karimkhadro.be/fr | grep create-react-app` returns **nothing**.
- `curl -I https://karimkhadro.be/cv.pdf` → 200, `Content-Disposition: inline`.
- `https://karimkhadro.be/google8ecce8b8bce39204.html` → 200; both Search Console properties still verified; sitemap resubmitted.
- Paste the URL into WhatsApp and LinkedIn — the OG card renders with an image.
- `/#about` from an old bookmark lands somewhere sensible.

**The real test.** Read the FR homepage aloud to someone non-technical and ask two questions: *what does Karim sell, and what does it cost?* If they can't answer both, the copy has failed regardless of the Lighthouse score.
