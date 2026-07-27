import Image from "next/image";
import Link from "next/link";
import { CTABand, Marquee, SectionHeading, Stat } from "@/components/ui";

const PROPERTIES = [
  {
    index: "01",
    tag: "iDPL",
    name: "India Dance Premier League",
    desc: "India's flagship, multi-city professional dance league — the national platform for talent.",
    href: "/idpl",
  },
  {
    index: "02",
    tag: "PMF",
    name: "Parva Music Festival",
    desc: "A premium annual music festival featuring leading artists, bands and DJs.",
    href: "/divisions",
  },
  {
    index: "03",
    tag: "PBF",
    name: "Parva Beats Festival",
    desc: "A high-energy EDM and electronic music experience built for youth culture.",
    href: "/divisions",
  },
  {
    index: "04",
    tag: "FSL",
    name: "Future Sports Leagues",
    desc: "Amateur and professional sports leagues and corporate sports events.",
    href: "/divisions",
  },
  {
    index: "05",
    tag: "DEP",
    name: "Digital Entertainment Platform",
    desc: "Live streaming, original content and fan engagement across every property.",
    href: "/divisions",
  },
  {
    index: "06",
    tag: "PF",
    name: "Parva Foundation",
    desc: "Scholarships, mentorship and community initiatives that give back to talent.",
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

export default function Home() {
  return (
    <>
      <section className="stage-atmosphere relative min-h-[88vh] overflow-hidden border-b border-line px-5 py-20 sm:px-8 sm:py-28 lg:min-h-[92vh] lg:py-32">
        <div className="stage-beams" aria-hidden />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <Image
            src="/images/parva-logo.jpeg"
            alt="Parva Networks Sports and Entertainment"
            width={120}
            height={120}
            className="logo-pulse reveal rounded-full"
            priority
          />
          <p className="reveal reveal-delay-1 mt-9 font-display text-[11px] font-semibold uppercase tracking-[0.42em] text-gold sm:text-xs">
            Parva Networks
          </p>
          <h1 className="hero-display tracking-tightest reveal reveal-delay-2 mt-5 text-5xl text-gold-gradient sm:text-7xl lg:text-[5.75rem]">
            Connecting Passion.
            <br />
            Creating Legacies.
          </h1>
          <p className="reveal reveal-delay-3 mx-auto mt-8 max-w-xl text-sm leading-relaxed text-silver sm:text-base">
            Building world-class intellectual properties across dance, music, sports and
            digital entertainment — led by the India Dance Premier League.
          </p>
          <div className="reveal reveal-delay-4 mt-11 flex flex-wrap items-center justify-center gap-4">
            <Link href="/idpl" className="btn-gold rounded-full px-9 py-3.5 text-xs sm:text-sm">
              Explore IDPL
            </Link>
            <Link
              href="/partner"
              className="btn-outline-gold rounded-full px-9 py-3.5 text-xs sm:text-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent"
          aria-hidden
        />
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      <section className="relative overflow-hidden border-b border-line px-5 py-16 sm:px-8 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 80% at 50% 50%, rgba(212,175,55,0.07), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-y-12 gap-x-8 sm:grid-cols-4">
          <Stat value="6" label="Launch Cities — Season 1" />
          <Stat value="4K–7K" label="Season 1 Registrations" />
          <Stat value="6" label="Competition Categories" />
          <Stat value="25+" label="Cities by Year 5" />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            kicker="One Company. Multiple IPs."
            title="Flagship & Future Properties"
            center
          />
          <div className="mt-14 border-t border-line">
            {PROPERTIES.map((p) => (
              <Link key={p.name} href={p.href} className="property-row group block py-7 sm:py-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                  <p className="property-index hero-display w-12 shrink-0 text-2xl text-silver/35 transition-colors duration-300">
                    {p.index}
                  </p>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-[11px] tracking-[0.28em] text-gold">{p.tag}</p>
                    <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-paper sm:text-2xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-silver">{p.desc}</p>
                  </div>
                  <span
                    className="property-arrow hidden text-2xl text-silver/40 transition-all duration-300 sm:block"
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

      <section className="relative overflow-hidden border-y border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="stage-beams opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="gold-rule mx-auto mb-10 w-24" />
          <p className="hero-display tracking-tightest text-2xl leading-[1.2] text-paper sm:text-4xl">
            &ldquo;Together, we are not just building events&mdash;we are building
            India&rsquo;s future in sports, entertainment, and live experiences.&rdquo;
          </p>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            K. P. Prabhudev
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-silver">
            Managing Director, Parva Networks
          </p>
        </div>
      </section>

      <CTABand
        title="One Vision. One Brand. Unlimited Possibilities."
        description="Whether you're an investor, sponsor, brand, dancer or performer — join us in shaping the future of Indian sports and entertainment."
        primary={{ href: "/partner", label: "Become a Partner" }}
        secondary={{ href: "/contact", label: "Get In Touch" }}
      />
    </>
  );
}
