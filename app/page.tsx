import type { Metadata } from "next";
import {
  Hero,
  // TrustStrip, // "Trusted by curious teams at" section hidden — see components/home/sections.tsx
  CompanyIntro,
  FeaturedProducts,
  WhySunriva,
  HowWeBuild,
  Technologies,
  Vision,
  OurPromise,
  // Roadmap, // roadmap section hidden — see components/home/sections.tsx
  Testimonial,
  // LatestArticles, // blog section hidden — see components/home/sections.tsx
  FAQPreview,
} from "@/components/home/sections";
import { ContactCTA } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Sunriva AI — Building Practical AI for Everyday Life",
  description:
    "Sunriva AI creates intelligent AI-powered applications that help individuals and businesses become more productive, creative, and efficient.",
  openGraph: {
    title: "Sunriva AI — Building Practical AI for Everyday Life",
    description: "Intelligent AI products for people and teams — designed for real work.",
    type: "website",
    siteName: "Sunriva AI",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sunrivaai",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustStrip /> — hidden for now, not deleted */}
      <CompanyIntro />
      <FeaturedProducts />
      <WhySunriva />
      <HowWeBuild />
      <Technologies />
      <Vision />
      <OurPromise />
      {/* <Roadmap /> — hidden for now, not deleted */}
      <Testimonial />
      {/* <LatestArticles /> — blog section hidden, not deleted */}
      <FAQPreview />
      <ContactCTA />
    </>
  );
}
