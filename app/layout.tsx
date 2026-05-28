import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Italianno, Inter } from "next/font/google";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "OQTA — 想いを届ける、静かなつながり",
  description:
    "OQTAは、離れて暮らす大切な人に「想っているよ」を、音と光でそっと届けるサービスです。",
  openGraph: {
    title: "OQTA",
    description: "想いを届ける、静かなつながり",
    siteName: "OQTA",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenKaku.variable} ${italianno.variable} ${inter.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
