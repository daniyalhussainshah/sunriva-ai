import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";
import { Coffee, Globe, Heart, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Sunriva AI",
  description: "Join Sunriva AI. Build practical AI products with a small, focused team.",
  openGraph: {
    title: "Careers — Sunriva AI",
    description: "Join Sunriva AI. Build practical AI products with a small, focused team.",
    url: "/careers",
  },
  alternates: {
    canonical: "/careers",
  },
};

const benefits = [
  { icon: Globe, title: "Remote-first", body: "Work from anywhere. Async by default, synchronous when it matters." },
  { icon: Heart, title: "Healthcare & wellness", body: "Comprehensive medical, dental, vision, plus a wellness stipend." },
  { icon: Rocket, title: "Meaningful equity", body: "Every teammate is an owner of what we build." },
  { icon: Coffee, title: "Time to think", body: "Unlimited PTO with a 4-week minimum. Rest is part of the job." },
];

const roles = [
  { title: "Senior Product Designer", team: "Design", location: "Remote (Global)", type: "Full-time" },
  { title: "Applied AI Engineer", team: "Engineering", location: "Remote (US / EU)", type: "Full-time" },
  { title: "Full-Stack Engineer", team: "Engineering", location: "Remote (Global)", type: "Full-time" },
  { title: "Product Manager, Vision AI", team: "Product", location: "Remote (Global)", type: "Full-time" },
  { title: "Developer Advocate", team: "Growth", location: "Remote (US)", type: "Full-time" },
  { title: "Design Engineer", team: "Design", location: "Remote (Global)", type: "Contract" },
  { title: "Social Media Marketing", team: "Growth", location: "Remote (Global)", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <Section className="relative">
          <div className="max-w-3xl">
            <Eyebrow>Careers</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Build the future of <span className="text-gradient">practical AI</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We're a small, senior team that ships often, cares deeply about craft, and treats
              teammates like adults. If you want to do the best work of your career, we'd love to talk.
            </p>
          </div>
        </Section>
      </div>

      <Section>
        <SectionHeading eyebrow="Culture" title="How we work" description="Quiet focus, high trust, high output." />
      </Section>

      <Section>
        <SectionHeading eyebrow="Benefits" title="Taking care of our team" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, body }) => (
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

      <Section>
        <SectionHeading eyebrow="Open Positions" title="Come build with us" />
        <div className="mt-12 space-y-3">
          {roles.map((r) => (
            <div
              key={r.title}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:flex sm:justify-between"
            >
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold">{r.title}</h3>
                <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>{r.team}</span>
                  <span>· {r.location}</span>
                  <span>· {r.type}</span>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
                <button
                  disabled
                  aria-disabled="true"
                  className="cursor-not-allowed rounded-full border border-border px-4 py-2 text-sm text-muted-foreground opacity-50"
                >
                  Not Hiring
                </button>
                <button
                  disabled
                  aria-disabled="true"
                  className="cursor-not-allowed rounded-full border border-border px-4 py-2 text-sm text-muted-foreground opacity-50"
                >
                  Job Requirements
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card p-10 text-center">
          <h3 className="text-2xl font-semibold">Don't see your role?</h3>
          <p className="mt-3 text-muted-foreground">We're always excited to meet exceptional people. Send us a note.</p>
          <button className="mt-6 rounded-full px-5 py-3 text-sm font-medium text-white" style={{ background: "var(--gradient-primary)" }}>
            Introduce yourself
          </button>
        </div>
      </Section>
    </>
  );
}
