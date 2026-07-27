import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";
import { Section, SectionHeading } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Services — Sunriva AI",
  description: "Web, Android, iOS, DevOps, and WordPress development services from Sunriva AI.",
  openGraph: {
    title: "Services — Sunriva AI",
    description: "Development services built for quality and speed.",
    url: "/services",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Services"
        title="What we offer"
        description="Hands-on development services for teams and businesses who need it built right."
      />
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.slug} className="card-hover flex flex-col rounded-2xl border border-border bg-card p-6">
              <div
                className="grid h-12 w-12 place-items-center rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-primary/80">{s.tagline}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.description}</p>
              <ul className="mt-6 space-y-2">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
