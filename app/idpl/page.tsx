import type { Metadata } from "next";
import { Card, CTABand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "India Dance Premier League (IDPL) | Parva Networks",
  description:
    "IDPL is Parva Networks' flagship intellectual property — India's premier multi-city professional dance league. One Nation. One Stage. Endless Moves.",
};

const CATEGORIES = [
  { name: "Solo", who: "Independent dancers, academy students, professional & freelance performers" },
  { name: "Duo", who: "Dance partners, friends, professional duos, academy teams" },
  { name: "Group", who: "Dance academies, professional crews, independent teams, community groups" },
  { name: "Junior", who: "School students, young dancers, junior academy members" },
  { name: "College", who: "College dance teams, university clubs, student choreographers" },
  { name: "Corporate", who: "Corporate teams, startups, public sector organizations, private companies" },
];

const FORMAT = [
  { step: "01", title: "Registrations", detail: "The journey begins with online registrations through the official IDPL platform, verified before confirmation." },
  { step: "02", title: "City Auditions", detail: "Auditions across selected cities, judged on technique, creativity, synchronization, stage presence, musicality and overall performance." },
  { step: "03", title: "City Qualifiers", detail: "Professionally produced city-level competitions with celebrity appearances, guest performances and media coverage." },
  { step: "04", title: "City Finals", detail: "Best performers compete for the City Championship — trophy, prize money, certificates and national qualification." },
  { step: "05", title: "National Grand Finale", detail: "City champions compete on one stage for the IDPL Championship — celebrity judges, live audience, national media, digital streaming." },
];

const JOURNEY = [
  "Register",
  "Verification & Confirmation",
  "City Auditions",
  "City Qualifiers",
  "City Finals",
  "National Grand Finale",
];

const CITIES = ["Bengaluru", "Hyderabad", "Chennai", "Mumbai", "Delhi NCR", "Pune"];

const STYLES = [
  "Bollywood", "Hip-Hop", "Contemporary", "Classical", "Folk", "Freestyle",
  "Jazz", "Locking & Popping", "Breaking", "Fusion", "Experimental Choreography", "Regional Forms",
];

export default function IDPLPage() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Intellectual Property"
        title="India Dance Premier League"
        description="One Nation. One Stage. Endless Moves. IDPL is more than a dance competition — it is a national platform that celebrates talent, creativity, culture, and performance while providing aspiring dancers with opportunities for recognition, career advancement, and professional growth."
      />

      <section className="border-b border-line bg-ink-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Season 1 Rollout" title="Launching Across Six Major Cities" center />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {CITIES.map((c) => (
              <div
                key={c}
                className="rounded-lg border border-line py-5 text-center text-sm font-semibold uppercase tracking-wide text-gold-light"
              >
                {c}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-silver">
            Each city hosts auditions and qualifiers, leading to the National Grand Finale
            where India&rsquo;s finest dancers compete for the championship.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="One League. Six Categories." title="Competition Categories" center />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <Card key={c.name}>
                <h3 className="font-display text-lg tracking-wide text-gold-gradient">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver">{c.who}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading kicker="A Transparent, Multi-City League" title="Competition Format" center />
          <div className="mt-12 space-y-6">
            {FORMAT.map((f) => (
              <div key={f.step} className="flex gap-5">
                <span className="font-display shrink-0 text-2xl text-gold-gradient">{f.step}</span>
                <div>
                  <h3 className="text-base font-semibold text-paper">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-silver">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Every Dream Begins With One Step" title="The Participant Journey" center />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {JOURNEY.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-gold/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gold-light">
                  {step}
                </span>
                {i < JOURNEY.length - 1 && <span className="text-gold">&rarr;</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading kicker="Every Style Welcome" title="Dance Styles" center />
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {STYLES.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-wide text-silver"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="India's First Scalable, Multi-City Professional Dance League"
        description="Registrations, city partnerships and sponsorship conversations are opening soon. Get in touch to be part of Season 1."
        primary={{ href: "/contact", label: "Registrations Opening Soon" }}
        secondary={{ href: "/partner", label: "Become a Sponsor" }}
      />
    </>
  );
}
