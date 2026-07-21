"use client";

import { ArrowRight, Mail } from "lucide-react";

export function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-sm">
      <label className="text-xs uppercase tracking-widest text-muted-foreground">Newsletter</label>
      <div className="mt-2 flex overflow-hidden rounded-full border border-white/10 bg-white/[0.03] focus-within:border-primary/40">
        <div className="grid place-items-center pl-4 text-muted-foreground">
          <Mail className="h-4 w-4" />
        </div>
        <input
          type="email"
          placeholder="you@company.com"
          className="flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground"
        />
        <button type="submit" className="m-1 inline-flex items-center gap-1 rounded-full px-4 text-sm font-medium text-white" style={{ background: "var(--gradient-primary)" }}>
          Join <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </form>
  );
}
