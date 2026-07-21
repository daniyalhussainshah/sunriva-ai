import type { Metadata } from "next";
import { Section, Eyebrow } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Mission — Sunriva AI",
  description: "Why Sunriva AI exists and what we're building toward.",
  openGraph: {
    title: "Mission — Sunriva AI",
    description: "Why Sunriva AI exists and what we're building toward.",
    url: "/mission",
  },
  alternates: {
    canonical: "/mission",
  },
};

export default function MissionPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <Section className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Our Mission</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Make AI feel <span className="text-gradient">useful, calm, and human</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We translate frontier AI research into everyday tools — thoughtfully designed,
              privately built, and shipped for the long term.
            </p>
          </div>
        </Section>
      </div>

      <Section>
        <div className="mx-auto max-w-3xl space-y-10 text-lg text-muted-foreground">
          <p>
            The most important technologies quietly change what's possible. The web,
            smartphones, and cloud computing all started messy and ended obvious. AI is at
            the messy stage. Sunriva AI exists to help move it toward the obvious.
          </p>
          <p>
            We believe great AI products aren't about capability alone — they're about
            restraint. Knowing what to leave out. Choosing the right defaults. Respecting
            the user's time, attention, and data.
          </p>
          <p>
            Our roadmap isn't a race. It's a set of focused products, each one crafted
            to solve a real problem and get better every month. We're building for a
            decade, not a demo.
          </p>
          <blockquote className="rounded-2xl border-l-4 border-primary bg-card p-8 text-xl text-foreground">
            "The best AI product is the one you forget is AI."
          </blockquote>
          <p>
            If that resonates, we'd love to build with you — as a user, a customer, or a
            teammate.
          </p>
        </div>
      </Section>
    </>
  );
}
