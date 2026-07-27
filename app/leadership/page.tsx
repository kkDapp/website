import type { Metadata } from "next";
import { Card, CTABand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leadership | Parva Networks",
  description:
    "Meet the Managing Director and leadership structure of Parva Networks Sports and Entertainment Pvt. Ltd.",
};

const EXECUTIVES = [
  {
    role: "Chief Operating Officer (COO)",
    desc: "Leads operational planning, event execution, logistics, administration, and quality control across all business divisions.",
  },
  {
    role: "Chief Marketing Officer (CMO)",
    desc: "Drives brand strategy, integrated marketing campaigns, public relations, communications, and audience growth.",
  },
  {
    role: "Chief Business & Sponsorship Officer (CBSO)",
    desc: "Leads sponsorship sales, strategic partnerships, commercial development, client servicing, and revenue generation.",
  },
  {
    role: "Chief Financial Officer (CFO)",
    desc: "Manages finance, budgeting, accounting, taxation, compliance, auditing, and financial planning.",
  },
  {
    role: "Creative Director",
    desc: "Leads creative strategy, branding, design, stage concepts, content production, and visual communication.",
  },
  {
    role: "Head of Digital & Technology",
    desc: "Develops digital platforms, live streaming, technology solutions, data analytics, and digital innovation.",
  },
];

const OPERATIONAL_TEAMS = [
  "Event Operations", "Production & Technical", "Marketing & Social Media", "Sales & Sponsorship",
  "Finance & Accounts", "Human Resources", "Legal & Compliance", "Creative & Design",
  "Digital Content", "Public Relations", "Volunteer Management", "City Coordinators",
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Driven by Vision. United by Excellence."
        title="Leadership Team"
        description="The strength of Parva Networks lies in a leadership team that combines strategic thinking, operational excellence, creative innovation, and a shared commitment to building world-class sports and entertainment intellectual properties."
      />

      <section className="border-b border-line px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-[auto_1fr]">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-gold/50 bg-ink-2 sm:mx-0">
            <span className="font-display text-3xl text-gold-gradient">KP</span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Founder & Managing Director
            </p>
            <h2 className="mt-1 text-xl font-semibold text-paper">K. P. Prabhudev</h2>
            <p className="mt-4 text-sm leading-relaxed text-silver">
              Provides the strategic vision and long-term direction for the organization,
              leading business growth, partnerships, innovation, and the development of
              Parva&rsquo;s portfolio of intellectual properties.
            </p>
            <blockquote className="hero-display mt-6 border-l-2 border-gold pl-4 text-xl leading-[1.2] text-paper sm:text-2xl">
              &ldquo;At Parva Networks, we believe that talent deserves more than a
              stage&mdash;it deserves a platform that transforms dreams into opportunities and
              passion into profession.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Executive Leadership" title="Core Leadership Roles" center />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXECUTIVES.map((e) => (
              <Card key={e.role}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-light">
                  {e.role}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-silver">{e.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading kicker="Building a Scalable Organization" title="Operational Teams" center />
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {OPERATIONAL_TEAMS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-wide text-silver"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="One Vision. One Organization. Unlimited Growth."
        description="As Parva Networks grows, we are building an advisory board of experienced professionals across sports, media, finance, legal and technology."
        primary={{ href: "/contact", label: "Connect With Us" }}
        secondary={{ href: "/partner", label: "Investment Opportunities" }}
      />
    </>
  );
}
