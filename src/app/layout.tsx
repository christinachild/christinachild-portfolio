import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display-face",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://christinachild.com"),
  title: "Christina Child | Marketing & GTM Leader",
  description:
    "Go-to-market and lifecycle marketing leader with 12 years building B2B SaaS demand. Currently running enterprise GTM at WordPress VIP.",
  alternates: { canonical: "/" },
  keywords: [
    "Christina Child",
    "go-to-market marketing",
    "demand generation",
    "lifecycle marketing",
    "account-based marketing",
    "ABM",
    "Demandbase",
    "B2B SaaS marketing",
    "enterprise marketing leader",
    "Austin marketing",
  ],
  authors: [{ name: "Christina Child", url: "https://christinachild.com" }],
  creator: "Christina Child",
  openGraph: {
    title: "Christina Child | Marketing & GTM Leader",
    description:
      "Go-to-market and lifecycle marketing leader with 12 years building B2B SaaS demand.",
    url: "https://christinachild.com",
    siteName: "Christina Child",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christina Child | Marketing & GTM Leader",
    description:
      "Go-to-market and lifecycle marketing leader with 12 years building B2B SaaS demand.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
