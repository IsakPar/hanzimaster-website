import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://www.polymasterlabs.com";
const siteName = "PolymasterLabs";
const siteDescription =
  "We are building the cognitive engine that powers language acquisition. One system. Every language. True mastery. Starting with Chinese (HSK 3.0).";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0A", // Dark color to prevent red overscroll on mobile
};

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "PolymasterLabs | The Architecture of Thought",
    template: "%s | PolymasterLabs",
  },
  description: siteDescription,
  keywords: [
    "language learning",
    "Chinese learning",
    "HSK 3.0",
    "Mandarin",
    "language acquisition",
    "cognitive science",
    "spaced repetition",
    "HanziMaster",
    "learn Chinese",
    "language app",
    "AI tutor",
    "vocabulary learning",
    "grammar learning",
  ],
  authors: [{ name: "PolymasterLabs" }],
  creator: "PolymasterLabs",
  publisher: "PolymasterLabs Inc.",

  // Canonical & Base
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "PolymasterLabs | The Architecture of Thought",
    description:
      "Language is not a game. It is the architecture of thought. We are building the cognitive engine that powers true language mastery.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PolymasterLabs - The Architecture of Thought",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "PolymasterLabs | The Architecture of Thought",
    description:
      "Language is not a game. It is the architecture of thought. Building the cognitive engine for true language mastery.",
    images: ["/twitter-image.png"],
    creator: "@polymasterlabs",
    site: "@polymasterlabs",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your actual verification codes when ready)
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Icons - using dynamic generation via icon.tsx and apple-icon.tsx
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon",
    shortcut: "/favicon.svg",
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",

  // Category
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PolymasterLabs",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://twitter.com/polymasterlabs",
        "https://linkedin.com/company/polymasterlabs",
        "https://github.com/polymasterlabs",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@polymasterlabs.com",
        contactType: "customer support",
      },
    },
    // WebSite
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    // WebPage
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "PolymasterLabs | The Architecture of Thought",
      description: siteDescription,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    // SoftwareApplication (HanziMaster product)
    {
      "@type": "SoftwareApplication",
      name: "HanziMaster",
      applicationCategory: "EducationalApplication",
      operatingSystem: "iOS, Android, Web",
      description:
        "The complete Chinese learning system. From your first character to full fluency. Built on the modern HSK 3.0 curriculum.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "1",
        bestRating: "5",
        worstRating: "1",
      },
    },
    // FAQPage for common questions
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is PolymasterLabs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PolymasterLabs is building the cognitive engine that powers language acquisition. We use cognitive science principles—dual track learning, smart tracking, and AI tutoring—to help you achieve true language mastery.",
          },
        },
        {
          "@type": "Question",
          name: "What is HanziMaster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HanziMaster is our flagship Chinese learning app. It covers HSK 1-9 (over 11,000 words) using the modern HSK 3.0 curriculum, taking you from zero to fluency with dedicated vocabulary and grammar tracks.",
          },
        },
        {
          "@type": "Question",
          name: "How is PolymasterLabs different from other language apps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike gamified apps that optimize for engagement and streaks, we optimize for actual acquisition. We use dedicated vocabulary and grammar tracks (not incidental learning), local-first smart tracking of your knowledge graph, and AI tutoring that explains errors and creates targeted practice.",
          },
        },
        {
          "@type": "Question",
          name: "When will HanziMaster launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "HanziMaster is currently in Alpha and is planned for global release in Q1 2026. Join our waitlist to get early access.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-ink">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${geistMono.variable}`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
