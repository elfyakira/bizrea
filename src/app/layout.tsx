import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTracker from "@/components/ScrollTracker";
import PageViewTracker from "@/components/PageViewTracker";
import ClickTracker from "@/components/ClickTracker";
import { seo, company, contact, locations, images } from "@/lib/site";

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-B6Z4SWP7YJ";

// JSON-LD構造化データ（サイト運営者とサイト自体の情報）
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${seo.siteUrl}/#organization`,
      name: company.name,
      url: seo.siteUrl,
      logo: `${seo.siteUrl}${images.logo}`,
      description: company.business,
      slogan: company.catchphrase,
      telephone: contact.phone,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        addressRegion: locations.headquarters.address,
        addressCountry: "JP",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${seo.siteUrl}/#website`,
      name: company.name,
      url: seo.siteUrl,
      description: seo.defaultDescription,
      inLanguage: "ja",
      publisher: { "@id": `${seo.siteUrl}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: seo.siteUrl ? new URL(seo.siteUrl) : undefined,
  title: {
    default: seo.defaultTitle || company.name || "会社名",
    template: `%s${seo.titleSuffix || ""}`,
  },
  description: seo.defaultDescription,

  // robots
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

  // OGP
  openGraph: {
    title: seo.defaultTitle || company.name,
    description: seo.defaultDescription,
    locale: "ja_JP",
    type: "website",
    siteName: company.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle || company.name,
    description: seo.defaultDescription,
    images: ["/opengraph-image"],
  },

  // サイト所有権の確認(Google Search Console)
  verification: {
    google: "YIFJ3qWLbTuosl5ag16XSex_vIIPv0K6PhQuk3lvyvY",
  },
};

// Viewport
export const viewport: Viewport = {
  themeColor: "#1B2D4F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* CSS 内の @import だとサイトの CSS を読み終えるまでフォントの取得が始まらないため、head から直接読み込む */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <ClickTracker />
        <Header />
        {children}
        <Footer />
        <ScrollTracker />
      </body>
    </html>
  );
}
