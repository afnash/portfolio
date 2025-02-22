import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Afnash Ali P - Computer Science Student & Developer",
  description: "Portfolio of Afnash Ali P - A passionate Computer Science student at SOE, CUSAT, with expertise in Python, Django, and web development. Seeking internship opportunities in software development.",
  keywords: [
    "Afnash Ali P",
    "Computer Science",
    "Software Developer",
    "Python Developer",
    "Django Developer",
    "Web Development",
    "CUSAT",
    "Kerala",
    "Student Developer",
    "Portfolio",
  ],
  authors: [{ name: "Afnash Ali P" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: "Afnash Ali P - Computer Science Student & Developer",
    description: "Portfolio of Afnash Ali P - A passionate Computer Science student at SOE, CUSAT",
    url: "https://afnash.dev",
    siteName: "Afnash Ali P Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Afnash Ali P - Computer Science Student & Developer",
    card: "summary_large_image",
  },
  verification: {
    google: "google-site-verification-code", // You'll need to add this later
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-gray-900 text-white">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
