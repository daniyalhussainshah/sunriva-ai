"use client";

import Link from "next/link";
import { Section, Eyebrow } from "@/components/site/Section";

export function ContactCTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-10 text-center md:p-20">
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-2xl">
          <Eyebrow>Let's build something</Eyebrow>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            Ready to try <span className="text-gradient">Sunriva AI</span>?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Explore our products or reach out to talk about what you're building.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/products" className="rounded-full px-6 py-3.5 text-sm font-medium text-white" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}>
              Explore products
            </Link>
            <Link href="/contact" className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
