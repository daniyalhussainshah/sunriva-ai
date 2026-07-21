import {
  FileText,
  Mic,
  PenLine,
  MessageSquare,
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
  features: { title: string; description: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "resume-ai",
    name: "Resume AI",
    tagline: "Land interviews faster with AI-crafted resumes.",
    description:
      "Generate polished, role-specific resumes and cover letters that pass ATS filters and impress hiring managers.",
    status: "Available",
    icon: FileText,
    features: [
      { title: "ATS-optimized templates", description: "Modern layouts that parse cleanly through any applicant tracking system." },
      { title: "Role tailoring", description: "Rewrite bullets to match the exact language of a job description in seconds." },
      { title: "Instant cover letters", description: "Generate matched cover letters with a consistent tone and story." },
    ],
    benefits: ["Save 5+ hours per application", "Higher interview call-back rate", "Consistent personal branding"],
    faq: [
      { q: "Does it work for technical roles?", a: "Yes — Resume AI supports engineering, product, design, and data roles with domain-specific phrasing." },
      { q: "Can I export as PDF?", a: "Yes, export as PDF or DOCX with a single click." },
    ],
  },
  {
    slug: "interview-ai",
    name: "Interview AI",
    tagline: "Practice interviews with a coach that never sleeps.",
    description:
      "Realistic mock interviews with instant feedback on your answers, tone, and structure — for any role and any level.",
    status: "Beta",
    icon: Mic,
    features: [
      { title: "Adaptive question banks", description: "Behavioral, technical, and case questions calibrated to your target role." },
      { title: "Live feedback", description: "Actionable coaching on clarity, structure, and STAR-style delivery." },
      { title: "Voice mode", description: "Speak your answers aloud and get scored on pacing and filler words." },
    ],
    benefits: ["Reduce interview anxiety", "Sharpen storytelling", "Track improvement over sessions"],
    faq: [
      { q: "Which roles are supported?", a: "Software, product, design, sales, marketing, and finance — with new tracks added monthly." },
      { q: "Is my voice data stored?", a: "Audio is processed in-session and deleted after your review." },
    ],
  },
  {
    slug: "ai-writer",
    name: "AI Writer",
    tagline: "Write clearly. Ship faster.",
    description:
      "A distraction-free writing companion for essays, documentation, marketing copy, and long-form thinking.",
    status: "Available",
    icon: PenLine,
    features: [
      { title: "Tone control", description: "Switch between concise, technical, warm, or persuasive with a single toggle." },
      { title: "Outline mode", description: "Turn a rough idea into a structured draft you can polish quickly." },
      { title: "Inline suggestions", description: "Non-intrusive rewrites that respect your voice." },
    ],
    benefits: ["Write 3× faster", "Reduce editing loops", "Keep your voice consistent"],
    faq: [
      { q: "Can teams share styles?", a: "Yes, define shared voice guides at the workspace level." },
      { q: "Does it detect AI content?", a: "AI Writer focuses on helping humans write better, not on evasion of detectors." },
    ],
  },
  {
    slug: "pdf-chat",
    name: "PDF Chat",
    tagline: "Talk to any document.",
    description:
      "Upload PDFs, contracts, research papers, or manuals and get precise answers with citations to the exact page.",
    status: "Available",
    icon: MessageSquare,
    features: [
      { title: "Cited answers", description: "Every response links back to the exact passage in the source." },
      { title: "Multi-document sessions", description: "Compare and synthesize across dozens of files at once." },
      { title: "Private by default", description: "Your documents are never used to train models." },
    ],
    benefits: ["Skim less, decide faster", "Handle long contracts confidently", "Onboard from thick manuals in minutes"],
    faq: [
      { q: "What file types are supported?", a: "PDF, DOCX, TXT, and Markdown — with more formats on the way." },
      { q: "Is there a file size limit?", a: "Individual documents up to 200MB, with workspace-wide libraries far beyond that." },
    ],
  },
  {
    slug: "study-assistant",
    name: "Study Assistant",
    tagline: "Your patient study partner.",
    description:
      "Generate flashcards, quizzes, and step-by-step explanations from your notes, textbooks, and lectures.",
    status: "Coming Soon",
    icon: GraduationCap,
    features: [
      { title: "Smart flashcards", description: "Spaced-repetition decks built automatically from your materials." },
      { title: "Concept maps", description: "Visualize how ideas connect across chapters and courses." },
      { title: "Explain like I'm learning", description: "Adjustable depth from beginner to graduate level." },
    ],
    benefits: ["Retain more, cram less", "Prep for exams with confidence", "Learn any subject at your pace"],
    faq: [
      { q: "When will it launch?", a: "Study Assistant is entering closed beta soon. Join the waitlist to get early access." },
      { q: "Will it be free for students?", a: "There will be a generous free tier for individual learners." },
    ],
  },
  {
    slug: "vision-ai",
    name: "Vision AI",
    tagline: "See more than pixels.",
    description:
      "Analyze images, diagrams, and screenshots with a vision model tuned for real-world understanding.",
    status: "Beta",
    icon: Eye,
    features: [
      { title: "Document extraction", description: "Turn receipts, forms, and IDs into structured data." },
      { title: "Scene understanding", description: "Describe complex images with nuance and context." },
      { title: "Developer API", description: "Drop Vision AI into your product with a few lines of code." },
    ],
    benefits: ["Automate manual data entry", "Build accessible experiences", "Unlock insights from visual data"],
    faq: [
      { q: "Is there an API?", a: "Yes — a REST API is available for beta developers." },
      { q: "How accurate is it?", a: "Vision AI is competitive with leading multimodal models on standard benchmarks." },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
