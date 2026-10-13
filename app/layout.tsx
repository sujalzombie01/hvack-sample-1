import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex HVAC & Home Services | Precision Heating, Cooling & 24/7 Dispatch",
  description:
    "24/7 Same-Day AC & Heating Repair. Stocked trucks for 1-trip fixes, transparent upfront pricing, instant SMS dispatch, and 100% Satisfaction Guarantee.",
  keywords: [
    "AC Repair",
    "HVAC Service",
    "Air Conditioning Repair",
    "Emergency AC Repair",
    "Heating & Cooling",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
