import type { Metadata } from "next";
import { Anton, Hanken_Grotesk, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "HERO:ORIGINS | Web-Wizard Portfolio",
  description: "The Amazing Web-Wizard Portfolio",
};

import { LanguageProvider } from "@/components/LanguageContext";
import { getTranslations } from "@/lib/data";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialTranslations = await getTranslations();

  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1"
        />
      </head>
      <body
        className={`${anton.variable} ${hankenGrotesk.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <LanguageProvider initialTranslations={initialTranslations}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
