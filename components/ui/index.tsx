import type {ReactNode} from 'react';

export function Container({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[75rem] px-4 sm:px-8 ${className}`}>
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
    <section id={id} className={`py-[clamp(4.5rem,9vw,8rem)] ${className}`}>
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
  const headingClass =
    As === 'h1'
      ? 'max-w-[14ch] font-display text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-ink text-balance'
      : 'max-w-[18ch] font-display text-[clamp(2rem,4vw,3.65rem)] font-semibold leading-[1] tracking-[-0.045em] text-ink text-balance';

  return (
    <div className="max-w-4xl">
      <As className={headingClass}>{title}</As>
      {intro ? (
        <p className="mt-6 max-w-[65ch] text-base leading-7 text-ink-soft sm:text-lg">
          {intro}
        </p>
      ) : null}
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
      className={`rounded-[0.4rem] border border-line bg-surface p-6 shadow-none ${className}`}
    >
      {children}
    </div>
  );
}

export function Badge({children}: {children: ReactNode}) {
  return (
    <span className="inline-flex items-center rounded-[0.2rem] bg-accent-soft px-2.5 py-1 text-xs font-semibold text-ink">
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
        <li key={item} className="flex gap-3 border-b border-line/70 py-2.5 text-sm leading-6 text-ink-soft last:border-0">
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
