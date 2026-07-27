"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <div className={`flex h-14 items-center justify-between rounded-full px-3 pl-5 pr-2 transition-all duration-300 ${scrolled ? "glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]" : "bg-white/[0.02] border border-white/5"}`}>
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <img src="/logo.png" alt="Sunriva AI" className="h-8 w-8 rounded-lg object-contain" />
            <span className="text-base">Sunriva<span className="text-muted-foreground font-normal"> AI</span></span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                className={`rounded-full px-3.5 py-1.5 text-sm transition-colors hover:bg-white/5 hover:text-foreground ${
                  pathname === l.to ? "text-foreground bg-white/5" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Explore Services
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            className="md:hidden rounded-full p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass mx-4 mt-2 rounded-2xl border border-white/10 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white"
              style={{ background: "var(--gradient-primary)" }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
