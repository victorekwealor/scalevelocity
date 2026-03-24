import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { constructMetadata } from "@/lib/seo";
import { organizationSchema, programSchema } from "@/lib/structured-data";

const ppHatton = localFont({
  src: [
    {
      path: "../fonts/PPHatton-Ultralight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/PPHatton-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/PPHatton-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

// Helvetica Neue is a proprietary system font — available natively on macOS/iOS.
// Declared as --font-sans in globals.css via a system font stack.

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: import("react").ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppHatton.variable} h-full`}>
      <head>
        <JsonLd data={[organizationSchema(), programSchema()]} />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
