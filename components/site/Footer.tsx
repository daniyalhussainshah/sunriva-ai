import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/mission", label: "Mission" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { to: "/products", label: "All Products" },
      { to: "/products/report-guide", label: "Report Guide" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-white/5 bg-[#04061199]">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80" style={{ background: "var(--gradient-hero)", opacity: 0.6 }} />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
              <img src="/logo.png" alt="Sunriva AI" className="h-9 w-9 rounded-xl object-contain" />
              <span className="text-base">Sunriva AI</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              An AI product company designing intelligent, human-centered tools for
              students, professionals, and teams.
            </p>

            <div className="mt-8 flex gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 md:col-span-8 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs uppercase tracking-widest text-muted-foreground">{c.title}</h4>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link href={l.to} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Sunriva AI, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <span>Made with care in Silver Spring, MD.</span>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none select-none px-6">
        <div className="mx-auto -mb-10 max-w-7xl text-center text-[12vw] font-semibold leading-none tracking-[-0.05em] text-transparent" style={{ backgroundImage: "linear-gradient(180deg, rgba(139,92,246,0.18), rgba(59,130,246,0.02))", WebkitBackgroundClip: "text", backgroundClip: "text" }}>
          Sunriva AI
        </div>
      </div>
    </footer>
  );
}
