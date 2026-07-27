import type { Metadata } from "next";
import { Card, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact | Parva Networks",
  description: "Get in touch with Parva Networks Sports and Entertainment Pvt. Ltd.",
};

const REASONS = [
  "Invest in a high-growth entertainment venture",
  "Partner as a sponsor or brand",
  "Collaborate as a strategic partner",
  "Support talent development initiatives",
  "Create unforgettable live experiences",
];

const SOCIALS = ["Instagram", "LinkedIn", "YouTube", "Facebook"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Build the Future Together"
        title="We Would Be Delighted to Connect With You"
        description="We sincerely appreciate your interest in Parva Networks Sports and Entertainment Pvt. Ltd. Together, we have the opportunity to create platforms that inspire talent, unite communities, and redefine the future of sports and entertainment in India."
      />

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact Details
            </p>
            <p className="mt-4 text-xs uppercase tracking-wide text-silver">Email</p>
            <a
              href="mailto:parvanetworksentertainment@gmail.com"
              className="text-sm text-gold-light hover:underline"
            >
              parvanetworksentertainment@gmail.com
            </a>
            <p className="mt-4 text-xs uppercase tracking-wide text-silver">Website</p>
            <p className="text-sm text-paper">www.parvanetworks.com</p>
            <p className="mt-4 text-xs uppercase tracking-wide text-silver">Phone</p>
            <p className="text-sm text-silver/60">
              To be published — contact us via email in the meantime.
            </p>
            <p className="mt-4 text-xs uppercase tracking-wide text-silver">Flagship IP</p>
            <p className="text-sm text-paper">India Dance Premier League (IDPL)</p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Social Media
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-wide text-silver"
                  title="Handle to be added"
                >
                  {s}
                </span>
              ))}
            </div>
          </Card>

          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              How Can We Help?
            </p>
            <ul className="mt-4 space-y-3">
              {REASONS.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-silver">
                  <span className="mt-0.5 text-gold">★</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-silver">
              Email us with a short note on what you&rsquo;re looking to explore — investment,
              sponsorship, city partnership, talent registration, or media — and our team will
              get back to you.
            </p>
          </Card>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2 px-5 py-16 text-center sm:px-8">
        <SectionHeading title="One Vision. One Company. Unlimited Possibilities." center />
        <p className="mx-auto mt-4 max-w-xl text-sm text-silver">
          Creating Experiences. Inspiring Talent. Building Legacies.
        </p>
      </section>
    </>
  );
}
