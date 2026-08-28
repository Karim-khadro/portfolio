import type {ReactNode} from 'react';

export function Container({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = '',
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  title,
  intro,
  as: As = 'h2'
}: {
  title: string;
  intro?: string;
  as?: 'h1' | 'h2' | 'h3';
}) {
  return (
    <div className="max-w-3xl">
      <As className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </As>
      {intro ? <p className="mt-3 text-lg text-ink-soft">{intro}</p> : null}
    </div>
  );
}

export function Card({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgba(27,26,23,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({children}: {children: ReactNode}) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
      {children}
    </span>
  );
}

export function Price({
  amount,
  fromLabel
}: {
  amount: number;
  fromLabel: string;
}) {
  return (
    <p className="text-ink">
      <span className="text-sm text-ink-muted">{fromLabel} </span>
      <span className="font-display text-2xl font-semibold">
        {new Intl.NumberFormat('fr-BE').format(amount)} €
      </span>
    </p>
  );
}

export function CheckList({
  items,
  tone = 'positive'
}: {
  items: string[];
  tone?: 'positive' | 'negative';
}) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-ink-soft">
          <span
            aria-hidden="true"
            className={tone === 'positive' ? 'text-accent' : 'text-ink-muted'}
          >
            {tone === 'positive' ? '✓' : '—'}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
