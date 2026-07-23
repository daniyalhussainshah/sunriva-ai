"use client";

import { useState } from "react";
import { PhoneField } from "./PhoneField";

function Field({ label, type = "text", full = false }: { label: string; type?: string; full?: boolean }) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        type={type}
        className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-primary/50"
      />
    </div>
  );
}

export function ContactForm() {
  const [phone, setPhone] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-border bg-card p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="First name" />
        <Field label="Last name" />
        <Field label="Email" type="email" full />
        <PhoneField value={phone} onChange={setPhone} />
      </div>
      <div className="mt-4">
        <label className="text-xs font-medium text-muted-foreground">Message</label>
        <textarea
          rows={5}
          placeholder="How can we help?"
          className="mt-2 w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
        />
      </div>
      <button className="mt-6 w-full rounded-full px-5 py-3 text-sm font-medium text-white" style={{ background: "var(--gradient-primary)" }}>
        Send message
      </button>
    </form>
  );
}
