"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/idpl", label: "IDPL" },
  { href: "/divisions", label: "Divisions" },
  { href: "/foundation", label: "Foundation" },
  { href: "/leadership", label: "Leadership" },
  { href: "/partner", label: "Partner With Us" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const path = pathname.replace(/\/$/, "") || "/";

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/images/parva-logo.jpeg"
            alt="Parva Networks"
            width={40}
            height={40}
            className="rounded-full ring-1 ring-gold/30"
            priority
          />
          <span className="hidden font-display text-sm tracking-[0.22em] text-gold-gradient sm:inline">
            PARVA NETWORKS
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-gold-light ${
                path === link.href ? "text-gold" : "text-silver"
              }`}
            >
              {link.label}
              {path === link.href && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-gold" />
              )}
            </Link>
          ))}
          <Link
            href="/partner"
            className="btn-gold rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em]"
          >
            Partner With Us
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-gold transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 rounded-full bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 rounded-full bg-gold transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-ink px-5 py-4 lg:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded px-2 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] ${
                path === link.href ? "text-gold" : "text-silver"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
