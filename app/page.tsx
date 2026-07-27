import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import Link from "next/link";
import { CTABand, Card, Marquee, SectionHeading, Stat } from "@/components/ui";

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
      <section className="relative overflow-hidden border-b border-line px-5 py-24 sm:px-8 sm:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(55% 55% at 50% 10%, rgba(212,175,55,0.2), transparent 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <Image
            src={assetPath("/images/parva-logo.jpeg")}
            alt="Parva Networks Sports and Entertainment"
            width={104}
            height={104}
            className="rounded-full shadow-[0_0_60px_rgba(212,175,55,0.25)]"
            priority
          />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Sports and Entertainment Pvt. Ltd.
          </p>
          <h1 className="hero-display tracking-tightest mt-5 text-5xl text-gold-gradient sm:text-7xl lg:text-8xl">
            Connecting Passion.
            <br /> Creating Legacies.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-silver sm:text-base">
            Parva Networks is an emerging sports and entertainment company building
            world-class intellectual properties across dance, music, sports and digital
            entertainment — starting with India&rsquo;s premier professional dance league,
            the India Dance Premier League (IDPL).
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/idpl" className="btn-gold rounded-full px-8 py-3.5 text-xs sm:text-sm">
              Explore IDPL
            </Link>
            <Link
              href="/partner"
              className="btn-outline-gold rounded-full px-8 py-3.5 text-xs sm:text-sm"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      <section className="border-b border-line bg-ink-2 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 sm:grid-cols-4">
          <Stat value="6" label="Launch Cities — Season 1" />
          <Stat value="4K–7K" label="Season 1 Registrations" />
          <Stat value="6" label="Competition Categories" />
          <Stat value="25+" label="Cities by Year 5" />
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kicker="One Company. Multiple IPs."
            title="Our Flagship & Future Properties"
            center
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROPERTIES.map((p) => (
              <Link key={p.name} href={p.href} className="group block">
                <Card className="h-full">
                  <div className="flex items-start justify-between">
                    <p className="font-display text-xs tracking-[0.2em] text-gold">{p.tag}</p>
                    <p className="hero-display text-lg text-silver/40 transition-colors group-hover:text-gold">
                      {p.index}
                    </p>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-paper">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver">{p.desc}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="hero-display tracking-tightest text-2xl leading-[1.15] text-paper sm:text-4xl">
            &ldquo;Together, we are not just building events&mdash;we are building
            India&rsquo;s future in sports, entertainment, and live experiences.&rdquo;
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            K. P. Prabhudev
          </p>
          <p className="text-xs uppercase tracking-[0.14em] text-silver">
            Managing Director, Parva Networks
          </p>
        </div>
      </section>

      <CTABand
        title="One Vision. One Brand. Unlimited Possibilities."
        description="Whether you're an investor, sponsor, brand, dancer or performer — we invite you to join us in shaping the future of Indian sports and entertainment."
        primary={{ href: "/partner", label: "Become a Partner" }}
        secondary={{ href: "/contact", label: "Get In Touch" }}
      />
    </>
  );
}
