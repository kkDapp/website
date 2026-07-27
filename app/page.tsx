import Image from "next/image";
import Link from "next/link";
import { CTABand, Marquee } from "@/components/ui";

const PROPERTIES = [
  {
    index: "01",
    tag: "iDPL",
    name: "India Dance Premier League",
    desc: "India's flagship multi-city professional dance league.",
    href: "/idpl",
  },
  {
    index: "02",
    tag: "PMF",
    name: "Parva Music Festival",
    desc: "Premium annual music festival with leading artists and DJs.",
    href: "/divisions",
  },
  {
    index: "03",
    tag: "PBF",
    name: "Parva Beats Festival",
    desc: "High-energy EDM built for youth culture.",
    href: "/divisions",
  },
  {
    index: "04",
    tag: "FSL",
    name: "Future Sports Leagues",
    desc: "Amateur, professional and corporate sports events.",
    href: "/divisions",
  },
  {
    index: "05",
    tag: "DEP",
    name: "Digital Entertainment",
    desc: "Streaming, original content and fan engagement.",
    href: "/divisions",
  },
  {
    index: "06",
    tag: "PF",
    name: "Parva Foundation",
    desc: "Scholarships, mentorship and community talent support.",
    href: "/foundation",
  },
];

const MARQUEE_ITEMS = [
  "India Dance Premier League",
  "Parva Music Festival",
  "Parva Beats Festival",
  "Future Sports Leagues",
  "Digital Entertainment",
  "Parva Foundation",
];

const CITIES = ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi NCR", "Pune"];

export default function Home() {
  return (
    <>
      {/* Hero: brand lockup is the composition — no duplicate headlines */}
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-black px-4 pb-16 pt-8 sm:px-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 42%, rgba(212,175,55,0.12), transparent 65%)",
          }}
          aria-hidden
        />

        <div className="brand-in relative w-full max-w-3xl lg:max-w-4xl">
          <Image
            src="/images/parva-hero.jpeg"
            alt="Parva Networks Sports and Entertainment — Connecting Passion. Creating Legacies."
            width={1600}
            height={1600}
            priority
            className="mx-auto h-auto w-full object-contain"
            sizes="(max-width: 1024px) 92vw, 896px"
          />
        </div>

        <div className="reveal reveal-delay-1 relative mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
          <Link href="/idpl" className="btn-gold rounded-sm px-8 py-3.5 text-[11px] sm:text-xs">
            Explore IDPL
          </Link>
          <Link
            href="/partner"
            className="btn-outline-gold rounded-sm px-8 py-3.5 text-[11px] sm:text-xs"
          >
            Partner With Us
          </Link>
        </div>

        <p className="reveal reveal-delay-2 mt-10 text-[10px] uppercase tracking-[0.35em] text-silver/50">
          Scroll
        </p>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      {/* One job: introduce the flagship */}
      <section className="border-b border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
              Flagship Intellectual Property
            </p>
            <h2 className="hero-display mt-4 text-5xl text-gold-gradient sm:text-7xl lg:text-8xl">
              India Dance
              <br />
              Premier League
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-silver sm:text-base">
              One nation. One stage. Endless moves. IDPL is the national platform for dancers —
              city auditions to a televised national grand finale.
            </p>
            <Link
              href="/idpl"
              className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light transition-colors hover:text-gold"
            >
              Discover IDPL <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="border-l border-line pl-8 sm:pl-10">
            <ul className="space-y-5">
              {[
                ["Season 1", "6 launch cities"],
                ["Scale", "4,000–7,000 registrations"],
                ["Format", "Auditions → City finals → National"],
                ["Year 5", "25+ cities nationwide"],
              ].map(([k, v]) => (
                <li key={k} className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-gold">{k}</span>
                  <span className="text-sm text-paper sm:text-base">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-silver/60">
            Season 1 Cities
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5">
            {CITIES.map((city) => (
              <span
                key={city}
                className="font-display text-2xl tracking-[0.08em] text-paper/90 sm:text-3xl"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* One job: portfolio */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
            The Parva Universe
          </p>
          <h2 className="hero-display mt-3 text-4xl text-paper sm:text-6xl">Properties</h2>
          <div className="mt-12 border-t border-line">
            {PROPERTIES.map((p) => (
              <Link key={p.name} href={p.href} className="property-row group block py-6 sm:py-7">
                <div className="flex items-baseline gap-5 sm:gap-8">
                  <span className="property-index font-display w-10 shrink-0 text-xl text-silver/30 transition-colors sm:text-2xl">
                    {p.index}
                  </span>
                  <div className="min-w-0 flex-1 sm:flex sm:items-baseline sm:justify-between sm:gap-8">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-gold">{p.tag}</p>
                      <h3 className="mt-1 font-display text-2xl tracking-[0.04em] text-paper sm:text-3xl">
                        {p.name}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm text-silver sm:hidden">{p.desc}</p>
                    </div>
                    <p className="mt-1 hidden max-w-sm text-right text-sm text-silver sm:block">
                      {p.desc}
                    </p>
                  </div>
                  <span
                    className="property-arrow shrink-0 text-lg text-silver/30 transition-all duration-300"
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="hero-display text-3xl leading-[1.05] text-paper sm:text-5xl">
            Not just events —
            <br />
            <span className="text-gold-gradient">India&rsquo;s future</span> in live entertainment.
          </p>
          <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            K. P. Prabhudev
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-silver">
            Managing Director
          </p>
        </div>
      </section>

      <CTABand
        title="Build with Parva"
        description="Investors, sponsors, brands, dancers and performers — one table. One vision."
        primary={{ href: "/partner", label: "Become a Partner" }}
        secondary={{ href: "/contact", label: "Get In Touch" }}
      />
    </>
  );
}
