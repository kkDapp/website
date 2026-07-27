import type { Metadata } from "next";
import { Card, CTABand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us | Parva Networks",
  description:
    "Parva Networks Sports and Entertainment Pvt. Ltd. — company profile, vision, mission and core values.",
};

const CORE_VALUES = [
  "Innovation",
  "Excellence",
  "Integrity",
  "Creativity",
  "Inclusivity",
  "Collaboration",
  "Community Impact",
  "Long-Term Value Creation",
];

const VERTICALS = [
  "Live Entertainment & Events",
  "Professional Dance Leagues",
  "Music Festivals & Concerts",
  "Sports Leagues & Tournaments",
  "Digital Media & Content",
  "Sponsorship & Brand Activations",
  "Talent Development",
  "Community & Cultural Initiatives",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company Profile"
        title="Building India's Next Generation of Entertainment Brands"
        description="Parva Networks Sports and Entertainment Pvt. Ltd. is an emerging sports and entertainment company committed to creating world-class intellectual properties (IPs) that inspire talent, engage audiences, and deliver exceptional value to brands, partners, and communities across India."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-silver sm:text-base">
          <p>
            Founded with the vision of transforming the live entertainment landscape, the
            company develops and manages premium properties spanning dance, music, sports,
            cultural experiences, and digital entertainment. Rather than organizing one-time
            events, Parva focuses on building sustainable, recurring platforms that grow into
            nationally recognized brands.
          </p>
          <p>
            Our flagship property, the <strong className="text-paper">India Dance Premier
            League (IDPL)</strong>, is designed to become India&rsquo;s premier professional
            dance competition, providing aspiring dancers with a prestigious platform while
            connecting brands with one of the country&rsquo;s largest youth and family
            audiences.
          </p>
          <p>
            Beyond dance, Parva is building a diversified portfolio of entertainment and
            sports properties, including the Parva Music Festival, Parva Beats Festival,
            future sports leagues, digital media initiatives, and community programs through
            the Parva Foundation.
          </p>
          <p>
            As we expand city by city, our long-term objective is to establish Parva Networks
            as one of India&rsquo;s most respected sports and entertainment companies,
            recognized for creating iconic annual properties that celebrate talent, culture,
            and community while generating lasting commercial value.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Vision</p>
            <p className="mt-3 text-sm leading-relaxed text-silver">
              To become one of India&rsquo;s leading sports and entertainment companies by
              creating world-class intellectual properties that inspire talent, unite
              communities, and entertain millions.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Mission</p>
            <p className="mt-3 text-sm leading-relaxed text-silver">
              To build innovative and sustainable platforms across dance, music, sports, and
              live entertainment that empower performers, engage audiences, and create
              meaningful opportunities for brands and partners.
            </p>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Purpose</p>
            <p className="mt-3 text-sm leading-relaxed text-silver">
              To inspire dreams, celebrate talent, and create unforgettable experiences that
              connect people through the power of sports, entertainment, music, and culture.
            </p>
          </Card>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="What We Stand For" title="Core Values" center />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {CORE_VALUES.map((v) => (
              <span
                key={v}
                className="rounded-full border border-line px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-gold-light"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading kicker="Where We Operate" title="Business Verticals" center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VERTICALS.map((v) => (
              <Card key={v} className="text-center">
                <p className="text-sm font-medium text-paper">{v}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading kicker="Our Promise" title="One Company. Multiple Iconic IPs." center />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-silver sm:text-base">
            Every event we create reflects our commitment to quality, integrity, innovation,
            inclusivity, and excellence — ensuring every participant, audience member,
            partner, and sponsor experiences the very best of the Parva brand.
          </p>
        </div>
      </section>

      <CTABand
        title="Building Iconic Experiences Today. Creating Lasting Legacies for Tomorrow."
        description="Learn more about our flagship property or reach out to explore a partnership."
        primary={{ href: "/idpl", label: "See Our Flagship: IDPL" }}
        secondary={{ href: "/leadership", label: "Meet Our Leadership" }}
      />
    </>
  );
}
