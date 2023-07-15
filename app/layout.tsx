import Provider from "./components/Provider";

import { Metadata } from "next";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
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
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          async
          src="https://api-stack.vercel.app/app"
          data-website-id="4c04bc0c-5aa4-4e22-a333-1976d594a9d0"
        ></script>
      </head>
      <body className={inter.className + " text-black/70"}>
        <Provider>
          <Header />

          <main className="pt-24 sm:pt-28 pb-20">{children}</main>

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
