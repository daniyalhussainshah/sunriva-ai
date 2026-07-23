import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  CheckCircle2,
  Sparkles,
  Brain,
  Compass,
  Rocket,
  HeartHandshake,
  Accessibility,
  ShieldCheck,
  Cpu,
  FlaskConical,
  Palette,
  Code2,
  RefreshCcw,
  Star,
  Play,
  MessageSquareQuote,
} from "lucide-react";
import { products } from "@/lib/products";
import { Section, SectionHeading, Eyebrow } from "@/components/site/Section";

/* ---------------- Hero ---------------- */
export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <span className="orb animate-float" style={{ background: "#3B82F6", top: "-6rem", left: "-6rem", width: "22rem", height: "22rem" }} />
      <span className="orb animate-float-alt" style={{ background: "#8B5CF6", top: "6rem", right: "-8rem", width: "26rem", height: "26rem" }} />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-24 md:pt-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Vision AI is now in public beta
            <ArrowRight className="h-3 w-3" />
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
            AI products, built
            <br />
            for the way you <span className="text-gradient">actually work</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Sunriva AI is a product company designing intelligent tools for students, professionals,
            creators, and teams. No jargon. No hype. Just AI that quietly makes your day better.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elegant)" }}
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.07]"
            >
              <Play className="h-3.5 w-3.5" /> Watch our story
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            {["Private by default", "SOC 2 ready", "Runs on modern LLMs", "Built for teams & individuals"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {t}
              </div>
            ))}
          </div>
        </div>

        <HeroPreview />
      </div>
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="relative mx-auto mt-20 max-w-5xl animate-rise">
      <div className="absolute -inset-4 rounded-[2rem]" style={{ background: "var(--gradient-primary)", filter: "blur(60px)", opacity: 0.35 }} />
      <div className="glass relative overflow-hidden rounded-[1.75rem] p-2 shadow-2xl">
        <div className="rounded-[1.4rem] border border-white/10 bg-[#080B1A]">
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            <span className="text-xs text-muted-foreground">sunriva.ai · assistant</span>
            <span className="text-xs text-muted-foreground">v2.6</span>
          </div>
          <div className="grid gap-6 p-6 md:grid-cols-[220px_1fr]">
            <aside className="hidden flex-col gap-1 md:flex">
              {["Resume AI", "Interview AI", "AI Writer", "Report Guide", "Vision AI", "Study Assistant"].map((n, i) => (
                <div key={n} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${i === 3 ? "bg-white/5 text-foreground" : "text-muted-foreground hover:bg-white/[0.03]"}`}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gradient-primary)" }} />
                  {n}
                </div>
              ))}
            </aside>
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="max-w-md rounded-2xl rounded-tr-md px-4 py-3 text-sm text-white" style={{ background: "var(--gradient-primary)" }}>
                  What is my blood sugar level?
                </div>
              </div>
              <div className="flex gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full" style={{ background: "var(--gradient-primary)" }}>
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
                  Your fasting glucose is <span className="font-semibold text-foreground">90 mg/dL</span>. Here&apos;s what it means according to your report.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-md rounded-2xl rounded-tr-md px-4 py-3 text-sm text-white" style={{ background: "var(--gradient-primary)" }}>
                  How about my urinalysis?
                </div>
              </div>
              <div className="flex gap-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full" style={{ background: "var(--gradient-primary)" }}>
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
                  Your urine pH is <span className="font-semibold text-foreground">6.23</span>. Here&apos;s what it means in plain language according to your report.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Trust strip / logos ---------------- */
export function TrustStrip() {
  const logos = ["FORGE", "OAKLINE", "NORTHWIND", "HELIOS", "ATLAS", "PRISM", "MERIDIAN", "LUMEN"];
  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by curious teams at</p>
        <div className="relative mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="text-lg font-semibold tracking-[0.3em] text-muted-foreground/50">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Company Intro ---------------- */
export function CompanyIntro() {
  return (
    <Section>
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow>The Sunriva Company</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            An AI product studio — not an agency.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We don't take contracts. We ship products. Every Sunriva app starts with a real
            human problem — a resume that never lands interviews, a contract nobody wants to read,
            an interview panel at 9am tomorrow — and ends with a tool you'd actually recommend
            to a friend.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { k: "Founded", v: "2024, Silver Spring, MD" },
              { k: "Team", v: "Designers, ML engineers, researchers" },
              { k: "Products live", v: "1 shipped · 5 in development" },
              { k: "Backed by", v: "Independent operators" },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-white/10 bg-card p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{x.k}</div>
                <div className="mt-1 text-sm font-medium">{x.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Link href="/about" className="inline-flex items-center gap-1 text-sm text-primary">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="relative">
          <span className="orb" style={{ background: "#8B5CF6", inset: 0, opacity: 0.25 }} />
          <div className="relative grid gap-3">
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                  <HeartHandshake className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Human-first</div>
                  <div className="text-xs text-muted-foreground">Every product starts with a real user, not a model.</div>
                </div>
              </div>
            </div>
            <div className="glass ml-8 rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                  <FlaskConical className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Research-backed</div>
                  <div className="text-xs text-muted-foreground">We translate frontier research into everyday tools.</div>
                </div>
              </div>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Private by default</div>
                  <div className="text-xs text-muted-foreground">Your data is never used to train foundation models.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Featured Products ---------------- */
export function FeaturedProducts() {
  return (
    <Section id="products">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Featured Products"
          title="A focused suite of AI tools"
          description="Each product is small, sharp, and solves one problem beautifully — designed to work together over time."
        />
        <Link href="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          View all products <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => {
          const Icon = p.icon;
          const available = p.status !== "Coming Soon";

          const card = (
            <>
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" style={{ background: "var(--gradient-primary)" }} />
              <div className="relative flex items-center justify-between">
                <div
                  className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                  style={p.logoImage ? { background: "#fff" } : undefined}
                >
                  {p.logoImage ? (
                    <img src={p.logoImage} alt={`${p.name} logo`} className="h-full w-full object-contain p-1.5" />
                  ) : (
                    <Icon className="h-5 w-5 text-primary" />
                  )}
                </div>
                <span className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-wider ${
                  p.status === "Available"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : p.status === "Beta"
                    ? "border-blue-400/30 bg-blue-400/10 text-blue-300"
                    : "border-white/10 bg-white/5 text-muted-foreground"
                }`}>
                  {p.status}
                </span>
              </div>
              <h3 className="relative mt-8 text-xl font-semibold">{p.name}</h3>
              <p className="relative mt-1 text-sm text-primary/80">{p.tagline}</p>
              <p className="relative mt-3 flex-1 text-sm text-muted-foreground">{p.description}</p>
              {available ? (
                <div className="relative mt-6 inline-flex items-center gap-1 text-sm text-primary">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              ) : (
                <div className="relative mt-6 text-sm text-muted-foreground">Not available yet</div>
              )}
            </>
          );

          if (!available) {
            return (
              <div
                key={p.slug}
                aria-disabled="true"
                className="relative flex cursor-not-allowed flex-col overflow-hidden rounded-3xl border border-white/10 bg-card p-7 opacity-60"
              >
                {card}
              </div>
            );
          }

          return (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="card-hover group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card p-7"
            >
              {card}
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------------- Why Sunriva ---------------- */
const whyItems = [
  { icon: Sparkles, title: "Innovation", body: "We build on the frontier — always exploring what the newest models make possible for real users." },
  { icon: Shield, title: "Privacy", body: "Encryption in transit and at rest. Your data never trains anyone's foundation model." },
  { icon: Zap, title: "Performance", body: "Streaming responses, edge inference, and interfaces tuned for sub-100ms feel." },
  { icon: Accessibility, title: "Accessibility", body: "Keyboard-first, screen-reader friendly, and localized for a global audience from day one." },
  { icon: CheckCircle2, title: "Reliability", body: "Boring, predictable uptime and a public status page. AI that shows up when you do." },
  { icon: HeartHandshake, title: "Human-Centered", body: "Every product is co-designed with the people who will actually use it." },
];

export function WhySunriva() {
  return (
    <Section>
      <SectionHeading
        center
        eyebrow="Why Sunriva AI"
        title="Serious craft. Quiet defaults."
        description="Six commitments we make to every user who opens a Sunriva product."
      />
      <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {whyItems.map(({ icon: Icon, title, body }) => (
          <div key={title} className="card-hover group relative overflow-hidden rounded-3xl border border-white/10 bg-card p-7">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "var(--gradient-soft)" }} />
            <div className="relative grid h-12 w-12 place-items-center rounded-2xl" style={{ background: "var(--gradient-primary)" }}>
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="relative mt-7 text-lg font-semibold">{title}</h3>
            <p className="relative mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- How We Build ---------------- */
const steps = [
  { n: "01", icon: Brain, title: "Research", body: "We talk to real users, map workflows, and study where AI can genuinely change the shape of the work." },
  { n: "02", icon: Palette, title: "Design", body: "Interfaces that feel obvious. Motion that guides. Guardrails baked in before a single model call." },
  { n: "03", icon: Code2, title: "Develop", body: "Small teams. Streaming-first architecture. Evals for every prompt path in the product." },
  { n: "04", icon: Rocket, title: "Launch", body: "Ship early to a beta cohort, listen closely, and polish until it feels obvious to everyone else." },
  { n: "05", icon: RefreshCcw, title: "Improve", body: "Weekly releases forever. Every product gets better long after launch — because AI keeps getting better too." },
];

export function HowWeBuild() {
  return (
    <Section>
      <SectionHeading eyebrow="How We Build AI" title="A disciplined, five-step process" description="Repeatable craft — from a napkin sketch to a product people trust." />
      <div className="relative mt-16">
        <div className="pointer-events-none absolute left-4 top-0 hidden h-full w-px md:block" style={{ background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.35), transparent)" }} />
        <div className="grid gap-5 md:grid-cols-5">
          {steps.map(({ n, icon: Icon, title, body }) => (
            <div key={n} className="relative overflow-hidden rounded-3xl border border-white/10 bg-card p-6">
              <span className="text-xs font-semibold tracking-widest text-primary">{n}</span>
              <div className="mt-4 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-6 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Technologies ---------------- */
const tech = [
  "Python", "TypeScript", "React", "Next.js", "Node.js",
  "Rust", "Postgres", "Redis", "Kubernetes", "Docker",
  "AWS", "Azure", "GCP", "OpenAI", "Anthropic",
  "Llama", "Whisper", "LangChain", "Pinecone", "PyTorch",
];

export function Technologies() {
  return (
    <Section>
      <SectionHeading
        center
        eyebrow="Our Stack"
        title="Frontier tools, chosen carefully"
        description="We pick technology the same way we design products — for the long term."
      />
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {tech.map((t) => (
          <div key={t} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-card p-4 transition-colors hover:border-primary/40">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg" style={{ background: "var(--gradient-soft)" }}>
              <Cpu className="h-4 w-4 text-primary" />
            </div>
            <span className="truncate text-sm font-medium">{t}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Vision ---------------- */
export function Vision() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-10 md:p-20">
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <span className="orb animate-float" style={{ background: "#8B5CF6", top: "-6rem", left: "-6rem", width: "22rem", height: "22rem" }} />
        <span className="orb animate-float-alt" style={{ background: "#EC4899", bottom: "-6rem", right: "-6rem", width: "22rem", height: "22rem" }} />

        <div className="relative mx-auto max-w-4xl text-center">
          <Eyebrow>Our Vision</Eyebrow>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
            A world where <span className="text-gradient">AI feels quiet</span>,
            personal, and profoundly useful.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
            In ten years, AI will fade into the background of everyday life — the way electricity did.
            Sunriva exists to make sure that future arrives with taste, care, and craft.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/mission" className="rounded-full px-6 py-3.5 text-sm font-medium text-white" style={{ background: "var(--gradient-primary)" }}>
              Read our mission
            </Link>
            <Link href="/about" className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm">
              Meet the team
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Our Promise ---------------- */
export function OurPromise() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Our Promise</Eyebrow>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
          Plain language over jargon. Your data stays yours. A real team behind every product.
        </h2>
        <p className="mt-6 text-muted-foreground">
          That&apos;s the standard for everything we build — starting with Report Guide, and every
          Sunriva product after it.
        </p>
      </div>
    </Section>
  );
}

/* ---------------- Roadmap ---------------- */
const roadmap = [
  { q: "Q1 2026", title: "Vision AI — public beta", body: "Multimodal understanding, document extraction, and a developer API for image workflows.", tag: "In progress" },
  { q: "Q2 2026", title: "Study Assistant", body: "Spaced-repetition flashcards, concept maps, and adaptive quizzes from any source material.", tag: "Beta soon" },
  { q: "Q3 2026", title: "Sunriva Workspaces", body: "Shared spaces so teams can use every Sunriva product with the same voice, style, and data.", tag: "Planned" },
  { q: "Q4 2026", title: "Voice mode across products", body: "Real-time voice UX for Interview AI, Report Guide, and Study Assistant — hands-free wherever you are.", tag: "Planned" },
  { q: "2027", title: "On-device Sunriva", body: "A private, on-device layer so your most sensitive work never leaves your machine.", tag: "Research" },
];

export function Roadmap() {
  return (
    <Section>
      <SectionHeading eyebrow="Product Roadmap" title="What we're building next" description="A public look at where Sunriva is headed over the next 18 months." />
      <div className="mt-14 grid gap-4">
        {roadmap.map((r, i) => (
          <div key={r.title} className="group relative grid gap-6 rounded-3xl border border-white/10 bg-card p-6 md:grid-cols-[160px_1fr_140px] md:items-center md:p-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.q}</div>
              <div className="mt-1 text-2xl font-semibold text-gradient">0{i + 1}</div>
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.body}</p>
            </div>
            <div className="flex md:justify-end">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">{r.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Testimonial ---------------- */
export function Testimonial() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-10 md:p-16">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full" style={{ background: "var(--gradient-primary)", filter: "blur(90px)", opacity: 0.35 }} />
        <MessageSquareQuote className="relative h-8 w-8 text-primary" />
        <blockquote className="relative mt-6 max-w-3xl text-2xl font-medium leading-snug tracking-tight md:text-4xl">
          "Sunriva AI is the first tool in years that feels genuinely thoughtful.
          It's fast, it's private, and it disappears into my workflow — which is exactly
          what great software should do."
        </blockquote>
        <div className="relative mt-8 flex items-center gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-full text-sm font-semibold text-white" style={{ background: "var(--gradient-primary)" }}>MK</div>
          <div>
            <div className="text-sm font-semibold">Mia Kobayashi</div>
            <div className="text-xs text-muted-foreground">Head of Product, Meridian Labs</div>
          </div>
          <div className="ml-auto flex gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Articles ---------------- */
const articles = [
  { slug: "designing-for-ai", title: "Designing calm interfaces for AI products", tag: "Design", date: "Mar 12, 2026", read: "6 min" },
  { slug: "practical-prompting", title: "Practical prompting for real-world workflows", tag: "Engineering", date: "Feb 28, 2026", read: "8 min" },
  { slug: "sunriva-approach", title: "The Sunriva approach to product craft", tag: "Company", date: "Feb 04, 2026", read: "5 min" },
];

export function LatestArticles() {
  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading eyebrow="From the Blog" title="Latest thinking" description="Essays and engineering notes from the Sunriva team." />
        <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          All articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {articles.map((a) => (
          <article key={a.slug} className="card-hover flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card">
            <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(to top, rgba(5,8,22,0.7), transparent)" }} />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5">{a.tag}</span>
                <span>{a.date}</span>
                <span>· {a.read}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{a.title}</h3>
              <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary">
                Read article <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FAQ preview ---------------- */
const faq = [
  { q: "What kind of company is Sunriva AI?", a: "Sunriva is an AI product company. We design and ship consumer and team-grade AI tools — we don't take agency work or client contracts." },
  { q: "How is my data used?", a: "Your content is yours. We never use customer data to train foundation models, and every product ships with sensible privacy defaults." },
  { q: "Do you work with enterprises?", a: "Yes — our products support workspace-level controls, SSO, and audit logs. Reach out via the contact page for details." },
  { q: "Are there free tiers?", a: "Most products offer a generous free tier for individuals. Teams and power users can upgrade at any time." },
];

export function FAQPreview() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Answers to the questions we hear most.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Not what you're looking for? Our full FAQ has more, and our team replies personally.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/faq" className="rounded-full px-5 py-3 text-sm font-medium text-white" style={{ background: "var(--gradient-primary)" }}>
              Browse full FAQ
            </Link>
            <Link href="/contact" className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm">
              Contact us
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          {faq.map((f, i) => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-card p-6 open:bg-white/[0.04]" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                {f.q}
                <span className="grid h-6 w-6 place-items-center rounded-full border border-white/10 text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
