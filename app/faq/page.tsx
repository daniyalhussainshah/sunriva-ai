import type { Metadata } from "next";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "FAQ — Sunriva AI",
  description: "Answers to common questions about Sunriva AI, products, privacy, and pricing.",
  openGraph: {
    title: "FAQ — Sunriva AI",
    description: "Answers to common questions about Sunriva AI.",
    url: "/faq",
  },
  alternates: {
    canonical: "/faq",
  },
};

const groups = [
  {
    title: "General",
    items: [
      { q: "What is Sunriva AI?", a: "Sunriva AI is a product company that builds AI-powered applications used by individuals and businesses worldwide." },
      { q: "Are you a consulting agency?", a: "No — we're a product company. We build and ship our own AI products." },
      { q: "Where are you based?", a: "We're a remote-first team with a small hub in Silver Spring, MD." },
    ],
  },
  {
    title: "Products",
    items: [
      { q: "Which products are available today?", a: "Report Guide is live today at medicalreportguide.com. Resume AI, Interview AI, AI Writer, Study Assistant, and Vision AI are in active development." },
      { q: "Do your products integrate with each other?", a: "Yes — over time our products are designed to work together as a coherent suite." },
      { q: "Is there a free tier?", a: "Most products offer a generous free tier for individual use." },
    ],
  },
  {
    title: "Privacy & security",
    items: [
      { q: "Do you train on my data?", a: "No. Your data is never used to train models." },
      { q: "How is my data stored?", a: "Data is encrypted in transit and at rest, with strict access controls." },
      { q: "Can I delete my data?", a: "Yes. You can delete your account and data at any time from account settings." },
    ],
  },
  {
    title: "Business",
    items: [
      { q: "Do you offer team plans?", a: "Yes — most products offer team and enterprise plans with shared workspaces." },
      { q: "Do you have an API?", a: "Not yet — a developer API is on the roadmap as more products launch." },
      { q: "How do I contact sales?", a: "Email hello@sunriva.ai or use the contact form and we'll route you to the right person." },
    ],
  },
];

export default function FAQPage() {
  return (
    <Section>
      <SectionHeading center eyebrow="FAQ" title="Frequently asked questions" description="Can't find what you need? Reach out anytime." />
      <div className="mt-14 space-y-12">
        {groups.map((g) => (
          <div key={g.title}>
            <Eyebrow>{g.title}</Eyebrow>
            <div className="mt-4 space-y-3">
              {g.items.map((it) => (
                <details key={it.q} className="group rounded-2xl border border-border bg-card p-6 open:bg-white/[0.04]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium">
                    <span>{it.q}</span>
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{it.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
