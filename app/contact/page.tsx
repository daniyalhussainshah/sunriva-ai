import type { Metadata } from "next";
import Link from "next/link";
import { Section, Eyebrow } from "@/components/site/Section";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Sunriva AI",
  description: "Get in touch with the Sunriva AI team.",
  openGraph: {
    title: "Contact — Sunriva AI",
    description: "Get in touch with the Sunriva AI team.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <Section className="relative">
          <div className="max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              We'd love to <span className="text-gradient">hear from you</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Questions about products, partnerships, or press — we usually reply within a day.
            </p>
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@sunriva.ai" },
              { icon: Phone, label: "Phone", value: "+1 (415) 555-0142" },
              { icon: MapPin, label: "Office", value: "10770 Columbia Pike, Suite 300, Silver Spring, MD 20901" },
              { icon: MessageCircle, label: "Support", value: "support@sunriva.ai" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="mt-1 truncate text-sm">{value}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Have a common question?</div>
              <Link href="/faq" className="mt-2 inline-flex items-center gap-1 text-sm text-primary">
                Read our FAQ →
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
