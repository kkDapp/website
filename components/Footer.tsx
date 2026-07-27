import Link from "next/link";

const IPS = [
  "India Dance Premier League",
  "Parva Music Festival",
  "Parva Beats Festival",
  "Future Sports Leagues",
  "Digital Entertainment",
  "Parva Foundation",
];

const SITE_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/idpl", label: "IDPL" },
  { href: "/divisions", label: "Divisions" },
  { href: "/foundation", label: "Parva Foundation" },
  { href: "/leadership", label: "Leadership" },
  { href: "/partner", label: "Partner With Us" },
];

const SOCIALS = ["Instagram", "LinkedIn", "YouTube", "Facebook"];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl tracking-[0.12em] text-gold-gradient">PARVA</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-silver">
              Sports and Entertainment Pvt. Ltd.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver">
              Connecting Passion. Creating Legacies.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              Explore
            </p>
            <ul className="space-y-2.5">
              {SITE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-silver hover:text-gold-light">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              Our Properties
            </p>
            <ul className="space-y-2.5">
              {IPS.map((ip) => (
                <li key={ip} className="text-sm text-silver">
                  {ip}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-silver">
              <li>
                <a
                  href="mailto:parvanetworksentertainment@gmail.com"
                  className="hover:text-gold-light"
                >
                  parvanetworksentertainment@gmail.com
                </a>
              </li>
              <li>www.parvanetworks.com</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-wide text-silver"
                  title="Social link to be added"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-rule my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-silver/70 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Parva Networks Sports and Entertainment Pvt. Ltd.
            All rights reserved.
          </p>
          <p className="font-display text-sm tracking-[0.14em] text-gold-gradient">
            Connecting Passion. Creating Legacies.
          </p>
        </div>
      </div>
    </footer>
  );
}
