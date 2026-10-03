import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter, Noto_Sans_Ethiopic } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AppProviders } from "@/components/AppProviders";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/utils";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "500", "600"],
  variable: "--font-ethiopic",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Boutique Hotel & Spa in Addis Ababa`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — A Quiet Retreat in Jemo`,
    description: site.description,
    images: [{ url: "/images/yihen-shado/hero/main.webp", alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — A Quiet Retreat in Jemo`,
    description: site.description,
    images: ["/images/yihen-shado/hero/main.webp"],
  },
  icons: {
    icon: "/icon.png",
  },
};

const prefsScript = `try{var t=localStorage.getItem("yehin-theme");if(t==="light"||t==="dark"||t==="default"){document.documentElement.setAttribute("data-theme",t);document.documentElement.classList.toggle("dark",t==="dark")}var l=localStorage.getItem("yehin-lang");document.documentElement.lang=l==="am"?"am":"en";document.documentElement.classList.toggle("locale-am",l==="am")}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="default"
      className={`${cormorant.variable} ${inter.variable} ${notoEthiopic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: prefsScript }} />
      </head>
      <body className="min-h-screen bg-canvas font-sans text-ink">
        <AppProviders>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </AppProviders>
      </body>
    </html>
  );
}
