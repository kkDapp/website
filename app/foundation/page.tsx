import type { Metadata } from "next";
import { Card, CTABand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Parva Foundation | Parva Networks",
  description:
    "Parva Foundation is the social impact and community development initiative of Parva Networks — empowering talent, enriching communities, creating lasting impact.",
};

const FOCUS_AREAS = [
  {
    title: "Talent Development",
    desc: "Creating pathways for aspiring dancers, musicians, athletes, and performers through competitions, workshops, mentorship programs, and professional exposure.",
  },
  {
    title: "Education & Scholarships",
    desc: "Providing scholarships, financial assistance, and educational support to deserving individuals who demonstrate exceptional talent and commitment.",
  },
  {
    title: "Arts & Cultural Preservation",
    desc: "Supporting traditional dance forms, folk arts, regional music, and cultural programs that celebrate India's diverse artistic heritage.",
  },
  {
    title: "Youth Empowerment",
    desc: "Helping young people build confidence, leadership skills, teamwork, creativity, and discipline through structured programs and community initiatives.",
  },
  {
    title: "Community Engagement",
    desc: "Free dance and music workshops, sports development camps, cultural festivals, school engagement programs, awareness campaigns, and volunteer initiatives.",
  },
];

const INITIATIVES = [
  "Talent Scholarship Program",
  "Future Stars Mentorship Initiative",
  "Rural & Tier-2 City Talent Outreach",
  "Inclusive Arts & Sports Programs",
  "Annual Community Festival",
  "Leadership & Life Skills Workshops",
];

const PARTNERS = [
  "Educational Institutions",
  "Dance Academies",
  "Sports Organizations",
  "Cultural Institutions",
  "Government Agencies",
  "NGOs",
  "Corporate CSR Partners",
  "Artists & Industry Experts",
];

export default function FoundationPage() {
  return (
    <>
      <PageHero
        eyebrow="Social Impact Initiative"
        title="Parva Foundation"
        description="Empowering Talent. Enriching Communities. Creating Lasting Impact. Built on the belief that talent should never be limited by opportunity, the Foundation identifies emerging talent, nurtures future leaders, preserves India's rich cultural heritage, and creates meaningful opportunities for young people to learn, perform, and succeed."
      />

      <section className="border-b border-line bg-ink-2 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Vision</p>
            <p className="mt-3 text-sm leading-relaxed text-silver">
              To build an inclusive society where every talented individual, regardless of
              background, has access to opportunities that inspire growth, creativity,
              confidence, and lifelong success.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Mission</p>
            <p className="mt-3 text-sm leading-relaxed text-silver">
              Discover and support talented youth across India, promote dance, music, sports
              and cultural heritage, and create sustainable initiatives that deliver long-term
              social impact.
            </p>
          </Card>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="Our Focus Areas" title="Where We Invest" center />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS_AREAS.map((f) => (
              <Card key={f.title}>
                <h3 className="text-base font-semibold text-gold-light">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-silver">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading kicker="Strategic Initiatives" title="Programs In Motion" center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INITIATIVES.map((i) => (
              <div
                key={i}
                className="rounded-lg border border-line px-5 py-4 text-center text-sm font-medium text-paper"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading kicker="Together We Empower Tomorrow" title="Our Partners" center />
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {PARTNERS.map((p) => (
              <span
                key={p}
                className="rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-wide text-silver"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="When We Empower Talent, We Build a Brighter Future for All."
        description="Partner with Parva Foundation as a CSR contributor, mentor, or institutional collaborator."
        primary={{ href: "/contact", label: "Get In Touch" }}
        secondary={{ href: "/about", label: "About Parva Networks" }}
      />
    </>
  );
}
