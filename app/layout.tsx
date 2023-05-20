import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Frans Allen - Founder, Software Engineer, Speaker",
  description:
    "Frans Allen is a founder, software engineer, and speaker based in Yogyakarta, Indonesia. He is the creator of Statically and PureDNS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://api-scout.vercel.app/app"
          data-website-id="4c04bc0c-5aa4-4e22-a333-1976d594a9d0"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
