import type { Metadata, Viewport } from "next";
import { EB_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yoda Coffee",
  description: "Yoda Coffee — premium coffee menu",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${workSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-background text-on-surface antialiased relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
