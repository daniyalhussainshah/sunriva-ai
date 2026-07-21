import type { Metadata } from "next";
import {
  Hero,
  TrustStrip,
  CompanyIntro,
  FeaturedProducts,
  WhySunriva,
  HowWeBuild,
  Technologies,
  Vision,
  Roadmap,
  Testimonial,
  LatestArticles,
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
      <TrustStrip />
      <CompanyIntro />
      <FeaturedProducts />
      <WhySunriva />
      <HowWeBuild />
      <Technologies />
      <Vision />
      <Roadmap />
      <Testimonial />
      <LatestArticles />
      <FAQPreview />
      <ContactCTA />
    </>
  );
}
