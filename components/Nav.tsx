"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/idpl", label: "IDPL" },
  { href: "/divisions", label: "Divisions" },
  { href: "/foundation", label: "Foundation" },
  { href: "/leadership", label: "Leadership" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const path = pathname.replace(/\/$/, "") || "/";

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.12em] text-gold-gradient"
          onClick={() => setOpen(false)}
        >
          PARVA
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-gold-light ${
                path === link.href ? "text-gold" : "text-silver"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/partner"
            className="btn-gold rounded-sm px-4 py-2 text-[10px] font-semibold"
          >
            Partner
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-gold transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-gold transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-black px-5 py-4 lg:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-2 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] ${
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
