import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Section, Eyebrow } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Privacy Policy — Sunriva AI",
  description: "How Sunriva AI collects, uses, and protects your data.",
  openGraph: {
    title: "Privacy Policy — Sunriva AI",
    description: "How Sunriva AI collects, uses, and protects your data.",
    url: "/privacy",
  },
  alternates: {
    canonical: "/privacy",
  },
};

function Sec({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <p className="mt-3 leading-relaxed">{children}</p>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: March 1, 2026</p>

        <div className="prose prose-invert mt-10 space-y-8 text-muted-foreground">
          <Sec title="1. Overview">
            This page describes how Sunriva AI handles data across our products and website. This
            document is maintained by Sunriva AI as customer-facing information; it is not a legal
            certification.
          </Sec>
          <Sec title="2. Information we collect">
            We collect information you provide directly (account details, uploaded content) and
            limited operational data (device, log, and usage metadata) needed to run the service.
          </Sec>
          <Sec title="3. How we use information">
            We use information to operate and improve the service, communicate with you, and keep
            our products secure. We do not sell your personal data.
          </Sec>
          <Sec title="4. Model training">
            Your content is not used to train foundation models. Any model improvements based on
            product usage rely on aggregated, de-identified signals only.
          </Sec>
          <Sec title="5. Data retention">
            You can delete your account and associated data at any time from account settings.
            Backups are rotated on a rolling schedule.
          </Sec>
          <Sec title="6. Security">
            We encrypt data in transit and at rest, apply least-privilege access controls, and
            operate a documented incident response program.
          </Sec>
          <Sec title="7. Your rights">
            Depending on where you live, you may have rights to access, correct, port, or delete
            personal data. Contact privacy@sunriva.ai to exercise these rights.
          </Sec>
          <Sec title="8. Contact">
            Questions? Email privacy@sunriva.ai.
          </Sec>
        </div>
      </div>
    </Section>
  );
}
