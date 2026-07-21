import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return { title: "Product not found — Sunriva AI", robots: { index: false } };
  }
  return {
    title: `${product.name} — Sunriva AI`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Sunriva AI`,
      description: product.description,
      url: `/products/${product.slug}`,
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const Icon = product.icon;
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-20 text-center md:pt-28">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div className="mt-6 flex justify-center">
            <Eyebrow>{product.status}</Eyebrow>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">{product.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">{product.tagline}</p>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{product.description}</p>
          <div className="mt-8 flex justify-center gap-3">
            <button className="rounded-full px-5 py-3 text-sm font-medium text-white" style={{ background: "var(--gradient-primary)" }}>
              Get early access
            </button>
            <Link href="/contact" className="rounded-full border border-border bg-white/[0.03] px-5 py-3 text-sm">
              Contact sales
            </Link>
          </div>
        </div>
      </div>

      <Section>
        <SectionHeading eyebrow="Features" title="What you get" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {product.features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading eyebrow="Benefits" title="Real outcomes, not demos" />
            <ul className="mt-8 space-y-4">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full" style={{ background: "var(--gradient-primary)" }}>
                    <Check className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-sm text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass aspect-video rounded-2xl border border-border p-6">
            <div className="h-full w-full rounded-xl border border-border" style={{ background: "var(--gradient-hero), var(--gradient-primary)", opacity: 0.9 }} />
            <p className="mt-4 text-center text-xs text-muted-foreground">Product screenshot</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title={`${product.name} — questions`} />
        <div className="mt-10 space-y-3">
          {product.faq.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-6 open:bg-white/[0.04]">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                {f.q}
                <span className="text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Ready to try {product.name}?</h2>
            <p className="mt-4 text-muted-foreground">Join thousands exploring the next generation of practical AI.</p>
            <div className="mt-8 flex justify-center gap-3">
              <button className="rounded-full px-5 py-3 text-sm font-medium text-white" style={{ background: "var(--gradient-primary)" }}>
                Get started
              </button>
              <Link href="/products" className="rounded-full border border-border px-5 py-3 text-sm">
                Explore more
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="More" title="Other Sunriva products" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {others.map((p) => {
            const OIcon = p.icon;
            return (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="card-hover flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-white/[0.03]">
                  <OIcon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 text-base font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
