import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MathBackground } from "@/components/math-background";
import { BodyWrapper } from "@/components/body-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Random Bucket",
  description: "Personal blog about mathematics, technology and life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.27/dist/katex.min.css"
          integrity="sha384-9fOlAN8qBTlXN1HYStq9MBHvqvKK0A4vAI9bYiRxAP4lDMaJ+qZ2YcBVsf/t5WQq"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-gray-100`}
      >
        <BodyWrapper>
          <MathBackground />
          <div className="relative z-10">
            {children}
          </div>
        </BodyWrapper>
      </body>
    </html>
  );
}
