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
            Explore our products, join the newsletter for release notes, or reach out to
            talk about what you're building.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/products" className="rounded-full px-6 py-3.5 text-sm font-medium text-white" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}>
              Explore products
            </Link>
            <Link href="/contact" className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm">
              Get in touch
            </Link>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-10 flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
            />
            <button type="submit" className="rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm text-foreground hover:bg-white/[0.1]">
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">One thoughtful email a month. No spam. Ever.</p>
        </div>
      </div>
    </Section>
  );
}
