import {
  Brain,
  Code2,
  Smartphone,
  Apple,
  Server,
  Globe,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "ai-development",
    name: "AI Development",
    tagline: "Custom AI features and products, built end to end.",
    description:
      "AI-powered features and products built around your data and workflows — from LLM-driven tools and chatbots to automation pipelines, taken from idea to production.",
    icon: Brain,
    highlights: ["Custom LLM & chatbot integrations", "Automation & AI-driven workflows", "Model selection, prompting & fine-tuning"],
  },
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Fast, modern websites and web apps.",
    description:
      "Custom websites and web applications built with modern frameworks — from marketing sites to full-stack products, designed to be fast, accessible, and easy to maintain.",
    icon: Code2,
    highlights: ["Custom front-end & back-end builds", "Responsive, accessible design", "SEO-friendly performance"],
  },
  {
    slug: "android-development",
    name: "Android Development",
    tagline: "Native and cross-platform Android apps.",
    description:
      "Android applications built for reliability and scale, from MVPs to full-featured products, published and maintained on the Google Play Store.",
    icon: Smartphone,
    highlights: ["Native Kotlin/Java or cross-platform builds", "Play Store publishing & maintenance", "Clean, performant UI"],
  },
  {
    slug: "ios-development",
    name: "iOS Development",
    tagline: "Polished iPhone and iPad apps.",
    description:
      "iOS applications designed to Apple's standards — built with Swift or cross-platform tooling, and taken from concept through App Store release.",
    icon: Apple,
    highlights: ["Native Swift or cross-platform builds", "App Store submission & support", "Human Interface Guidelines compliant"],
  },
  {
    slug: "devops",
    name: "DevOps",
    tagline: "Reliable infrastructure and CI/CD.",
    description:
      "Cloud infrastructure, automated deployments, and monitoring set up so your team can ship faster with fewer surprises in production.",
    icon: Server,
    highlights: ["CI/CD pipeline setup", "Cloud infrastructure & scaling", "Monitoring, logging & alerting"],
  },
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    tagline: "Custom themes, plugins, and sites.",
    description:
      "WordPress sites built or customized to your exact needs — custom themes, plugin development, and performance tuning for content-driven sites.",
    icon: Globe,
    highlights: ["Custom theme & plugin development", "Site migrations & performance tuning", "Ongoing maintenance & support"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    tagline: "Interfaces people actually enjoy using.",
    description:
      "Product and interface design that balances clarity, brand, and usability — from wireframes to polished, ready-to-build design systems.",
    icon: Palette,
    highlights: ["Wireframes & prototypes", "Design systems", "Usability-first interfaces"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
