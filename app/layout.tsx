import type React from "react";
import type { Metadata } from "next";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL!),
  title: "Frans Allen - Founder, Software Engineer, Speaker",
  description:
    "Frans Allen is a founder, software engineer, and speaker based in Yogyakarta, Indonesia. He is the creator of Statically and PureDNS.",
  openGraph: {
    images: [
      {
        url: `/api/og?title=A founder, software engineer, and speaker based in Indonesia`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          async
          src="https://api-scout.reflexapi.net/app"
          data-website-id="4c04bc0c-5aa4-4e22-a333-1976d594a9d0"
        ></script>
      </head>
      <body className="min-h-screen font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-20 pb-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
