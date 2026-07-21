import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://sunrivaai.online";

export const metadata: Metadata = {
  title: "Sunriva AI — Building Practical AI for Everyday Life",
  description:
    "Sunriva AI creates intelligent AI-powered applications that help individuals and businesses become more productive, creative, and efficient.",
  metadataBase: new URL(siteUrl),
  applicationName: "Sunriva AI",
  authors: [{ name: "Sunriva AI" }],
  openGraph: {
    title: "Sunriva AI — Building Practical AI for Everyday Life",
    description:
      "Sunriva AI creates intelligent AI-powered applications that help individuals and businesses become more productive, creative, and efficient.",
    url: siteUrl,
    siteName: "Sunriva AI",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Sunriva AI Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunriva AI — Building Practical AI for Everyday Life",
    description:
      "Sunriva AI creates intelligent AI-powered applications that help individuals and businesses become more productive, creative, and efficient.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sunriva AI",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sunriva AI",
  url: siteUrl,
  publisher: {
    "@type": "Organization",
    name: "Sunriva AI",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <QueryProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
