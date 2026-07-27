import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from 'next-auth/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sterling's Full-Stack Portfolio",
    template: "%s | Sterling's Full-Stack Portfolio",
  },
  description: "A professional developer portfolio showcasing Next.js, React, and TypeScript applications.",
  metadataBase: new URL("https://wdd430-portfolio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-200">
        <SessionProvider>
          <Header />
          
          <main className="flex-1 flex flex-col justify-start">
            {children}
          </main>
          
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
