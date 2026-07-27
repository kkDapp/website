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
    <section className="relative overflow-hidden border-b border-line bg-ink px-5 py-24 sm:px-8 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(212,175,55,0.16), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        <h1 className="hero-display tracking-tightest mt-5 text-4xl text-gold-gradient sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-silver sm:text-base">
            {description}
          </p>
        )}
      </div>
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
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{kicker}</p>
      )}
      <h2 className="hero-display tracking-tightest mt-3 text-3xl text-paper sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={`gold-rule mt-5 h-px w-16 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`card-surface rounded-xl p-6 ${className}`}>{children}</div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="hero-display tracking-tightest text-5xl text-gold-gradient sm:text-6xl">
        {value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-silver">{label}</p>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-row relative overflow-hidden border-y border-line bg-ink-2 py-5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-2 to-transparent sm:w-32"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-2 to-transparent sm:w-32"
      />
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.2em] text-silver"
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
    <section className="border-t border-line bg-ink-2 px-5 py-20 text-center sm:px-8 sm:py-28">
      <h2 className="hero-display tracking-tightest mx-auto max-w-3xl text-3xl text-gold-gradient sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-sm text-silver sm:text-base">{description}</p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Link href={primary.href} className="btn-gold rounded-full px-8 py-3.5 text-xs sm:text-sm">
          {primary.label}
        </Link>
        {secondary && (
          <Link
            href={secondary.href}
            className="btn-outline-gold rounded-full px-8 py-3.5 text-xs sm:text-sm"
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </section>
  );
}
