import { ReactNode } from "react";
import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="stage-atmosphere relative overflow-hidden border-b border-line px-5 py-24 sm:px-8 sm:py-36">
      <div className="stage-beams opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="reveal font-display text-[11px] font-semibold uppercase tracking-[0.36em] text-gold sm:text-xs">
          {eyebrow}
        </p>
        <h1 className="hero-display tracking-tightest reveal reveal-delay-1 mt-5 text-4xl text-gold-gradient sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="reveal reveal-delay-2 mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-silver sm:text-base">
            {description}
          </p>
        )}
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"
        aria-hidden
      />
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  center = false,
}: {
  kicker?: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {kicker && (
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.32em] text-gold sm:text-xs">
          {kicker}
        </p>
      )}
      <h2 className="hero-display tracking-tightest mt-3 text-3xl text-paper sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={`gold-rule mt-6 h-px w-20 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card-surface rounded-2xl p-6 sm:p-7 ${className}`}>{children}</div>;
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="hero-display tracking-tightest text-4xl text-gold-gradient sm:text-5xl lg:text-6xl">
        {value}
      </p>
      <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-silver sm:text-xs">{label}</p>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-row relative overflow-hidden border-y border-line bg-ink-2 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-2 to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-2 to-transparent sm:w-32" />
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-xs font-semibold uppercase tracking-[0.22em] text-silver/80"
          >
            {item}
            <span className="text-gold">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CTABand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="stage-atmosphere relative overflow-hidden border-t border-line px-5 py-24 text-center sm:px-8 sm:py-32">
      <div className="stage-beams opacity-30" aria-hidden />
      <div className="relative">
        <h2 className="hero-display tracking-tightest mx-auto max-w-3xl text-3xl text-gold-gradient sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-silver sm:text-base">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href={primary.href} className="btn-gold rounded-full px-9 py-3.5 text-xs sm:text-sm">
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="btn-outline-gold rounded-full px-9 py-3.5 text-xs sm:text-sm"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
