import type { Metadata } from "next";
import { Card, CTABand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Partner With Us | Parva Networks",
  description:
    "Sponsorship and investment opportunities with Parva Networks and the India Dance Premier League (IDPL). Your Brand. Our Stage. India's Talent.",
};

const TIERS = [
  {
    name: "Title Partner",
    tag: "Exclusive",
    investment: "₹75 Lakh – ₹1.50 Crore",
    benefits: [
      "Exclusive naming rights",
      "Highest logo visibility across all branding",
      "Main stage & LED screen integration",
      "Opening & closing ceremony branding",
      "National PR visibility",
      "Speaking opportunity at Grand Finale",
    ],
  },
  {
    name: "Powered By Partner",
    investment: "₹25 – ₹50 Lakh",
    benefits: [
      "Secondary branding rights",
      "Event backdrop branding",
      "Digital promotions & social collaborations",
      "On-ground activations",
      "VIP passes",
    ],
  },
  {
    name: "Associate Partners",
    investment: "₹10 – ₹20 Lakh",
    benefits: [
      "Logo placement across event assets",
      "Social media promotions",
      "Website visibility & LED branding",
      "Exhibition booth",
    ],
  },
  {
    name: "Category Partners",
    investment: "₹5 – ₹10 Lakh",
    benefits: [
      "Exclusive category rights (Apparel, Footwear, Hydration, F&B, Tech, and more)",
      "Product sampling & interactive games",
      "Content collaborations",
    ],
  },
];

const WHY_PARTNER = [
  "Reach highly engaged youth audiences",
  "Build emotional connections through entertainment",
  "Drive on-ground and digital engagement",
  "Generate high-impact branded content",
  "Strengthen brand recall",
  "Support emerging talent across India",
  "Associate with a premium national entertainment property",
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship & Investment"
        title="Your Brand. Our Stage. India's Talent."
        description="Parva Networks invites investors, sponsors, strategic partners, government organizations, educational institutions, artists, athletes, and media partners who share our vision of building world-class intellectual properties."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading kicker="IDPL Sponsorship Hierarchy" title="Partnership Tiers" center />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-silver">
            Indicative investment ranges from the Season 1 sponsorship model — final packages are
            tailored per partner and category.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((t) => (
              <Card key={t.name} className="flex flex-col">
                {t.tag && (
                  <span className="mb-2 w-fit rounded-full border border-gold/50 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-gold">
                    {t.tag}
                  </span>
                )}
                <h3 className="font-display text-base tracking-wide text-paper">{t.name}</h3>
                <p className="mt-1 text-sm font-semibold text-gold-gradient">{t.investment}</p>
                <ul className="mt-4 space-y-2 text-xs leading-relaxed text-silver">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading kicker="Why Partner With IDPL" title="Built for Measurable Brand Value" center />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {WHY_PARTNER.map((w) => (
              <div key={w} className="flex items-center gap-3 rounded-lg border border-line px-4 py-3">
                <span className="text-gold">✓</span>
                <span className="text-sm text-paper">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="hero-display text-2xl leading-[1.2] text-paper sm:text-4xl">
            &ldquo;We don&rsquo;t seek sponsors&mdash;we build strategic partnerships that
            create value for brands while empowering India&rsquo;s next generation of
            performers.&rdquo;
          </p>
        </div>
      </section>

      <CTABand
        title="Join Us In Building the Future"
        description="Whether you're looking to invest, sponsor, collaborate as a strategic partner, or support talent development — we'd be delighted to connect."
        primary={{ href: "/contact", label: "Start the Conversation" }}
        secondary={{ href: "/idpl", label: "Learn About IDPL" }}
      />
    </>
  );
}
