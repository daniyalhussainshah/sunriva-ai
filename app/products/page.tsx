import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { Section, SectionHeading } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Products — Sunriva AI",
  description: "Explore Sunriva AI's growing suite of practical AI products.",
  openGraph: {
    title: "Products — Sunriva AI",
    description: "A focused suite of AI tools built for everyday work.",
    url: "/products",
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Products"
        title="Everything Sunriva builds"
        description="A focused lineup of AI products crafted for individuals and teams who care about quality."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.filter((p) => p.slug === "report-guide").map((p) => {
          const Icon = p.icon;
          const available = p.status !== "Coming Soon";

          const card = (
            <>
              <div className="flex items-center justify-between">
                <div
                  className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl"
                  style={{ background: p.logoImage ? "#fff" : "var(--gradient-primary)" }}
                >
                  {p.logoImage ? (
                    <img src={p.logoImage} alt={`${p.name} logo`} className="h-full w-full object-contain p-1.5" />
                  ) : (
                    <Icon className="h-5 w-5 text-white" />
                  )}
                </div>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-wider ${
                    p.status === "Available"
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                      : p.status === "Beta"
                      ? "border-blue-400/30 bg-blue-400/10 text-blue-300"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-primary/80">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
              {available ? (
                <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              ) : (
                <div className="mt-6 text-sm text-muted-foreground">Not available yet</div>
              )}
            </>
          );

          if (!available) {
            return (
              <div
                key={p.slug}
                aria-disabled="true"
                className="flex cursor-not-allowed flex-col rounded-2xl border border-border bg-card p-6 opacity-60"
              >
                {card}
              </div>
            );
          }

          return (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="card-hover group flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              {card}
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
