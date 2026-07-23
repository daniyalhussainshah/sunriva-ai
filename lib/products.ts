import {
  Stethoscope,
  FileText,
  Mic,
  PenLine,
  GraduationCap,
  Eye,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "Available" | "Beta" | "Coming Soon";
  icon: LucideIcon;
  /** External URL for products that live on their own domain (e.g. Report Guide). */
  externalUrl?: string;
  /** Real product logo, shown instead of the icon badge when present. */
  logoImage?: string;
  /** Real product screenshot, shown instead of the placeholder preview when present. */
  screenshotImage?: string;
  features: { title: string; description: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "report-guide",
    name: "Report Guide",
    tagline: "Understand your medical reports in plain English.",
    description:
      "Upload any lab result, imaging report, or specialist note and get a clear, plain-English translation within minutes — plus the follow-up questions worth asking your doctor.",
    status: "Available",
    icon: Stethoscope,
    externalUrl: "https://medicalreportguide.com/",
    logoImage: "/products/report-guide-logo.png",
    screenshotImage: "/products/report-guide-screenshot.png",
    features: [
      { title: "Plain-language translation", description: "Complex medical reports, filled with jargon, translated into plain language anyone can understand with confidence." },
      { title: "Doctor-ready follow-up questions", description: "Every report suggests the follow-up questions worth raising with your doctor at your next visit." },
      { title: "Chat with your report", description: "Ask your AI report assistant anything — \"What does my fasting glucose mean?\" — and get an answer tied to your actual results." },
    ],
    benefits: ["Download a secure, HIPAA-compliant report in plain English", "Walk into appointments with the follow-up questions already prepared", "Available any time — no waiting on a callback"],
    faq: [
      { q: "Is this a substitute for medical advice?", a: "No — Report Guide is not a substitute for your doctor. It provides educational insight only, to help you understand your medical reports with more confidence." },
      { q: "What report types are supported?", a: "Blood panels, urinalysis, imaging summaries, pathology notes, and most standard lab PDFs." },
      { q: "Is my health data private?", a: "Yes — Report Guide is HIPAA compliant, and your reports are encrypted and never used to train models." },
      { q: "Do I need an account to use it?", a: "No — you can upload and process a report with or without creating an account." },
    ],
  },
  {
    slug: "resume-ai",
    name: "Resume AI",
    tagline: "AI-crafted resumes that get past the filters and the recruiter.",
    description:
      "Turn a messy work history into a polished, role-specific resume and cover letter — rewritten to match the exact language of the job you want, and built to clear ATS filters cleanly.",
    status: "Coming Soon",
    icon: FileText,
    features: [
      { title: "ATS-safe formatting", description: "Clean, parseable layouts that survive every major applicant tracking system — no hidden formatting traps." },
      { title: "Role-matched rewrites", description: "Bullets rewritten to mirror the language and priorities of the specific job description you're targeting." },
      { title: "Cover letters in seconds", description: "Generate a matching cover letter with a consistent voice and a real narrative, not a template." },
    ],
    benefits: ["Cut hours off every application", "Higher callback rates from tailored language", "One consistent, professional brand across every document"],
    faq: [
      { q: "Will it work for technical roles?", a: "Yes — Resume AI is built to support engineering, product, design, and data roles with domain-specific phrasing." },
      { q: "Can I export as PDF?", a: "Yes, export as PDF or DOCX with a single click." },
    ],
  },
  {
    slug: "interview-ai",
    name: "Interview AI",
    tagline: "Practice with a coach that gives you the feedback recruiters won't.",
    description:
      "Realistic, role-specific mock interviews with structured, actionable feedback on your answers, delivery, and pacing — so the real interview feels like your fifth one, not your first.",
    status: "Coming Soon",
    icon: Mic,
    features: [
      { title: "Role-calibrated questions", description: "Behavioral, technical, and case questions tuned to your target role and seniority level." },
      { title: "Structured feedback", description: "Specific coaching on clarity, structure, and STAR-style delivery — not just a score." },
      { title: "Voice practice mode", description: "Answer out loud and get feedback on pacing, filler words, and confidence." },
    ],
    benefits: ["Walk in having already answered the hard questions", "Sharper, more structured storytelling", "Visible improvement tracked across sessions"],
    faq: [
      { q: "Which roles will be supported?", a: "Software, product, design, sales, marketing, and finance at launch, with more tracks added over time." },
      { q: "Will my voice data be stored?", a: "Audio will be processed in-session and deleted after your review." },
    ],
  },
  {
    slug: "ai-writer",
    name: "AI Writer",
    tagline: "A writing partner that keeps your voice, not replaces it.",
    description:
      "A focused writing companion for essays, documentation, and long-form thinking — built to sharpen your ideas without flattening your voice into generic AI prose.",
    status: "Coming Soon",
    icon: PenLine,
    features: [
      { title: "Tone control", description: "Dial between concise, technical, warm, or persuasive without losing your voice." },
      { title: "Outline to draft", description: "Turn a rough idea into a structured first draft you can actually build on." },
      { title: "Voice-preserving suggestions", description: "Inline rewrites that tighten your writing without making it sound like everyone else's." },
    ],
    benefits: ["Move from blank page to draft faster", "Fewer editing loops before something's ready", "Writing that still sounds like you"],
    faq: [
      { q: "Will teams be able to share styles?", a: "Yes — shared voice guides at the workspace level are planned for launch." },
      { q: "Does it try to evade AI detectors?", a: "No — AI Writer is focused on helping humans write better, not on evading detection." },
    ],
  },
  {
    slug: "study-assistant",
    name: "Study Assistant",
    tagline: "Turns your notes into a study plan that actually works.",
    description:
      "Feed it your notes, textbooks, or lecture slides and get spaced-repetition flashcards, concept maps, and explanations calibrated to exactly where you're stuck.",
    status: "Coming Soon",
    icon: GraduationCap,
    features: [
      { title: "Auto-generated flashcards", description: "Spaced-repetition decks built directly from your own material, not generic question banks." },
      { title: "Concept maps", description: "See how ideas connect across chapters instead of memorizing them in isolation." },
      { title: "Adjustable depth", description: "Explanations that scale from first-pass simple to graduate-level detail." },
    ],
    benefits: ["Retain more with less last-minute cramming", "Test yourself instead of just rereading notes", "Study any subject at a pace that fits you"],
    faq: [
      { q: "When will it launch?", a: "Study Assistant is in active development. Join the waitlist to get early access." },
      { q: "Will it be free for students?", a: "There will be a generous free tier for individual learners." },
    ],
  },
  {
    slug: "vision-ai",
    name: "Vision AI",
    tagline: "Real understanding of images, not just labels.",
    description:
      "A vision model tuned for real-world documents and scenes — turning receipts, forms, screenshots, and photos into structured, usable information.",
    status: "Coming Soon",
    icon: Eye,
    features: [
      { title: "Document extraction", description: "Pull structured data out of receipts, forms, and IDs without manual entry." },
      { title: "Scene understanding", description: "Get nuanced, context-aware descriptions of complex images, not just object labels." },
      { title: "Developer API", description: "Drop Vision AI into your own product with a straightforward REST API." },
    ],
    benefits: ["Cut manual data entry to near zero", "Build accessible experiences from visual content", "Unlock insights buried in images and screenshots"],
    faq: [
      { q: "Will there be an API?", a: "Yes — a REST API is planned for developers at launch." },
      { q: "How accurate will it be?", a: "Vision AI is being built to compete with leading multimodal models on standard benchmarks." },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
