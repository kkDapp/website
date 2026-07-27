import type { Metadata } from "next";
import { Card, CTABand, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Divisions | Parva Networks",
  description:
    "Entertainment, Sports, Digital and Brand Solutions — the divisions that power Parva Networks' portfolio of intellectual properties.",
};

const DIVISIONS = [
  {
    id: "entertainment",
    tag: "Entertainment Division",
    title: "Live Music, Celebrity Concerts & Cultural Events",
    desc: "Home to the Parva Music Festival and Parva Beats Festival, plus celebrity concerts and large-scale cultural and comedy shows.",
    items: [
      "Parva Music Festival — premium annual music festivals with top artists",
      "Parva Beats Festival — EDM, youth & fusion music experiences",
      "Celebrity concerts & large-scale live entertainment",
    ],
  },
  {
    id: "sports",
    tag: "Sports Division",
    title: "Building the Future of Indian Sports",
    desc: "Professionally managed sporting events, leagues and talent-development platforms across amateur and corporate sport.",
    items: [
      "Future amateur & professional sports leagues",
      "Corporate sports events promoting wellness and teamwork",
      "School & college championships, community sports festivals",
    ],
  },
  {
    id: "digital",
    tag: "Digital Division — Parva Digital",
    title: "Powering Every Property Through Technology",
    desc: "A connected digital ecosystem that extends every Parva event beyond the venue — live streaming, content, and fan engagement.",
    items: [
      "Live event streaming & original content production",
      "Artist and athlete stories, behind-the-scenes content",
      "Mobile application, fan engagement & OTT partnerships",
    ],
  },
  {
    id: "brand-solutions",
    tag: "Brand Solutions",
    title: "Sponsorship Strategy & Brand Partnerships",
    desc: "Integrated sponsorship, activation and content-collaboration programs that connect brands with Parva's audiences.",
    items: [
      "Sponsorship strategy & brand partnerships",
      "On-ground activations & experiential events",
      "Integrated campaigns & content collaborations",
    ],
  },
];

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Architecture"
        title="One Company. Multiple Business Divisions."
        description="Parva Networks serves as the parent company, creating, managing, and expanding a diversified portfolio of intellectual properties across sports, entertainment, music, digital media, and community initiatives."
      />

      {DIVISIONS.map((d, i) => (
        <section
          key={d.id}
          id={d.id}
          className={`px-5 py-16 sm:px-8 ${i % 2 === 1 ? "border-y border-line bg-ink-2" : ""}`}
        >
          <div className="mx-auto max-w-5xl">
            <SectionHeading kicker={d.tag} title={d.title} />
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-silver sm:text-base">
              {d.desc}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {d.items.map((item) => (
                <Card key={item}>
                  <p className="text-sm leading-relaxed text-paper">{item}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABand
        title="One Vision. Unlimited Possibilities."
        description="Every division is designed to strengthen the Parva ecosystem — diversifying revenue streams and expanding one of India's most comprehensive sports and entertainment portfolios."
        primary={{ href: "/foundation", label: "See Parva Foundation" }}
        secondary={{ href: "/partner", label: "Partner With Us" }}
      />
    </>
  );
}
