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
        {products.map((p) => {
          const Icon = p.icon;
          return (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="card-hover group flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {p.status}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-primary/80">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
