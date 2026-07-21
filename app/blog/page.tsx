import type { Metadata } from "next";
import { Search } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Blog — Sunriva AI",
  description: "Essays, product updates, and engineering notes from Sunriva AI.",
  openGraph: {
    title: "Blog — Sunriva AI",
    description: "Essays, product updates, and engineering notes from Sunriva AI.",
    url: "/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

const categories = ["All", "Design", "Engineering", "Company", "Research"];

const featured = {
  title: "The Sunriva approach to product craft",
  excerpt:
    "How a small team ships AI products that feel calm, considered, and quietly delightful — and what we've learned along the way.",
  tag: "Company",
  date: "Mar 18, 2026",
  readTime: "8 min read",
};

const posts = [
  { title: "Designing calm interfaces for AI products", tag: "Design", date: "Mar 12, 2026", excerpt: "AI interfaces should feel obvious. Here's how we design for calm." },
  { title: "Practical prompting for real-world workflows", tag: "Engineering", date: "Feb 28, 2026", excerpt: "Beyond parlor tricks — prompting patterns that hold up in production." },
  { title: "What we mean by 'private by default'", tag: "Company", date: "Feb 20, 2026", excerpt: "Our stance on data, retention, and building software you can trust." },
  { title: "Evaluating retrieval for long documents", tag: "Research", date: "Feb 08, 2026", excerpt: "A comparison of retrieval strategies for PDFs longer than 100 pages." },
  { title: "Latency is a feature", tag: "Engineering", date: "Jan 22, 2026", excerpt: "How we trimmed 40% off response times without sacrificing quality." },
  { title: "The hidden cost of infinite context", tag: "Research", date: "Jan 10, 2026", excerpt: "Longer context windows aren't free. Here's what to think about." },
];

export default function BlogPage() {
  return (
    <Section>
      <SectionHeading eyebrow="Blog" title="Notes from Sunriva" description="Essays, product updates, and engineering deep dives." />

      <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Search articles"
            className="w-full rounded-full border border-border bg-white/[0.03] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`rounded-full border px-4 py-1.5 text-xs ${i === 0 ? "border-primary/40 bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <article className="mt-12 grid gap-8 rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:p-10">
        <div className="aspect-[16/10] w-full rounded-2xl border border-border" style={{ background: "var(--gradient-primary)" }} />
        <div className="flex flex-col justify-center">
          <Eyebrow>Featured</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">{featured.title}</h2>
          <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full border border-border px-2 py-0.5">{featured.tag}</span>
            <span>{featured.date}</span>
            <span>· {featured.readTime}</span>
          </div>
        </div>
      </article>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="card-hover flex flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-6 aspect-[16/10] w-full rounded-xl border border-border" style={{ background: "var(--gradient-primary)", opacity: 0.85 }} />
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border px-2 py-0.5">{p.tag}</span>
              <span>{p.date}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
