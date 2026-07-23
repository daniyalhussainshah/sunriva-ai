import type { Metadata } from "next";
import { Compass, Heart, Lightbulb, Shield } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "About — Sunriva AI",
  description: "The story, mission, and values behind Sunriva AI.",
  openGraph: {
    title: "About — Sunriva AI",
    description: "The story, mission, and values behind Sunriva AI.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

const values = [
  { icon: Heart, title: "Human-first", body: "AI is a tool. People come first — always." },
  { icon: Lightbulb, title: "Craft", body: "Details matter. We polish until it feels obvious." },
  { icon: Shield, title: "Trust", body: "Privacy, security, and honesty are non-negotiable." },
  { icon: Compass, title: "Focus", body: "We say no often, so we can go deep on what matters." },
];

const timeline = [
  { year: "2024", event: "Sunriva AI founded with a small team of designers and researchers." },
  { year: "2025", event: "Report Guide — our first product — launches at medicalreportguide.com." },
  { year: "2026", event: "Resume AI, Interview AI, AI Writer, Study Assistant, and Vision AI enter development." },
  { year: "Beyond", event: "A growing suite of focused AI products designed to work together." },
];

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <Section className="relative">
          <div className="max-w-3xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              A product company building the <span className="text-gradient">quiet future</span> of AI.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Sunriva AI is a small, focused team designing AI-powered products that fit into real life.
              We're not a consultancy and we're not chasing hype — we're building tools we'd want to use.
            </p>
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-10">
            <Eyebrow>Mission</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold md:text-3xl">Practical AI for everyday life.</h2>
            <p className="mt-4 text-muted-foreground">
              To create intelligent AI products that help people learn, create, automate, and work smarter.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-10">
            <Eyebrow>Vision</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold md:text-3xl">AI you actually enjoy using.</h2>
            <p className="mt-4 text-muted-foreground">
              To make powerful AI accessible through beautifully designed products that solve real-world problems.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Core Values" title="What guides us" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, body }) => (
            <div key={title} className="card-hover rounded-2xl border border-border bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-6 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline section hidden — not deleted, see `timeline` array above.
      <Section>
        <SectionHeading eyebrow="Timeline" title="How we got here" />
        <div className="mt-12 space-y-4">
          {timeline.map((t, i) => (
            <div key={i} className="grid grid-cols-[80px_1fr] gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-[120px_1fr]">
              <div className="text-sm font-semibold text-primary">{t.year}</div>
              <div className="text-sm text-muted-foreground">{t.event}</div>
            </div>
          ))}
        </div>
      </Section>
      */}
    </>
  );
}
