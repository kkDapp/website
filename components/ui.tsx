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
    <section className="relative overflow-hidden border-b border-line bg-black px-5 py-24 sm:px-8 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(212,175,55,0.14), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
        <h1 className="hero-display mt-4 text-5xl text-gold-gradient sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-silver sm:text-base">
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
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">{kicker}</p>
      )}
      <h2 className="hero-display mt-3 text-4xl text-paper sm:text-5xl lg:text-6xl">{title}</h2>
      <div className={`gold-rule mt-5 h-px w-16 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card-surface rounded-sm p-6 sm:p-7 ${className}`}>{children}</div>;
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="hero-display text-5xl text-gold-gradient sm:text-6xl">{value}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-silver">{label}</p>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-row relative overflow-hidden border-y border-line bg-ink-2 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink-2 to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink-2 to-transparent sm:w-24" />
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.24em] text-silver/70"
          >
            {item}
            <span className="text-gold">◆</span>
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
    <section className="relative overflow-hidden border-t border-line bg-black px-5 py-24 text-center sm:px-8 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(212,175,55,0.1), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative">
        <h2 className="hero-display mx-auto max-w-3xl text-5xl text-gold-gradient sm:text-7xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm text-silver">{description}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href={primary.href} className="btn-gold rounded-sm px-8 py-3.5 text-[11px] sm:text-xs">
            {primary.label}
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="btn-outline-gold rounded-sm px-8 py-3.5 text-[11px] sm:text-xs"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
