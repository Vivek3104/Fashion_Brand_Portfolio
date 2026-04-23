import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Threads Digital — Fashion Brand Marketing Agency",
  description: "We help fashion & clothing brands build their identity, attract the right audience and achieve measurable growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cream text-dark font-grotesk antialiased">
        {children}
      </body>
    </html>
  );
}
