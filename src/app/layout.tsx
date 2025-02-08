import "@/styles/globals.css";

import { Press_Start_2P } from "next/font/google";

const primaryFont = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});

export const metadata = {
  title: "lucvuro",
  description: "lucvuro's Portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </head>
      <body className={`font-sans ${primaryFont.variable}`}>{children}</body>
    </html>
  );
}
