import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Section, Eyebrow } from "@/components/site/Section";

export const metadata: Metadata = {
  title: "Terms & Conditions — Sunriva AI",
  description: "The terms governing your use of Sunriva AI products and services.",
  openGraph: {
    title: "Terms & Conditions — Sunriva AI",
    description: "The terms governing your use of Sunriva AI products and services.",
    url: "/terms",
  },
  alternates: {
    canonical: "/terms",
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

export default function TermsPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Terms & Conditions</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: March 1, 2026</p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <Sec title="1. Acceptance">
            By accessing Sunriva AI's website or products, you agree to these Terms. If you do not
            agree, please do not use the service.
          </Sec>
          <Sec title="2. Accounts">
            You are responsible for the security of your account and for all activity that occurs
            under it. Notify us promptly of any unauthorized use.
          </Sec>
          <Sec title="3. Acceptable use">
            You agree not to misuse the service — no illegal activity, no attempts to disrupt or
            reverse engineer the systems, and no attempts to harm other users.
          </Sec>
          <Sec title="4. Content ownership">
            You retain ownership of content you upload. You grant us a limited license to process
            it solely to provide the service to you.
          </Sec>
          <Sec title="5. Subscriptions & billing">
            Paid subscriptions renew automatically unless canceled. Fees are non-refundable except
            where required by law.
          </Sec>
          <Sec title="6. Warranty & liability">
            The service is provided "as is" without warranty of any kind. Our liability is limited
            to the amount paid to us in the past twelve months.
          </Sec>
          <Sec title="7. Termination">
            We may suspend or terminate accounts that violate these Terms. You may cancel at any
            time from account settings.
          </Sec>
          <Sec title="8. Changes">
            We may update these Terms occasionally. Material changes will be communicated in-product
            or by email.
          </Sec>
          <Sec title="9. Contact">
            Questions? Email legal@sunriva.ai.
          </Sec>
        </div>
      </div>
    </Section>
  );
}
