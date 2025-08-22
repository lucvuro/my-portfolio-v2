import "@/styles/globals.css";
import type { Metadata } from "next";

import { Archivo_Black, Space_Grotesk } from "next/font/google";

const DISABLE_SEO = true;

export const metadata: Metadata = {
  robots: DISABLE_SEO
    ? {
        index: false,
        follow: false,
        nocache: true,
        noarchive: true,
        nosnippet: true,
      }
    : undefined,
  // (optional) avoid canonical in noindex mode
  alternates: DISABLE_SEO ? undefined : { canonical: "/" },
};

const secondaryFont = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const primaryFont = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${primaryFont.variable} ${secondaryFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
