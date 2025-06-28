import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tahsin Islam - Software Engineer & Full-Stack Developer",
  description:
    "Portfolio of Tahsin Islam, a Software Engineering student at IUT with expertise in MERN stack, Next.js, and blockchain technology. Award-winning developer with international recognition.",
  keywords:
    "Tahsin Islam, Software Engineer, Full-Stack Developer, MERN Stack, Next.js, React, MongoDB, Blockchain, IUT, Portfolio",
  authors: [{ name: "Tahsin Islam" }],
  creator: "Tahsin Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tahsinrayshad.com",
    title: "Tahsin Islam - Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Tahsin Islam, a Software Engineering student at IUT with expertise in MERN stack, Next.js, and blockchain technology.",
    siteName: "Tahsin Islam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahsin Islam - Software Engineer & Full-Stack Developer",
    description:
      "Portfolio of Tahsin Islam, a Software Engineering student at IUT with expertise in MERN stack, Next.js, and blockchain technology.",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} scroll-smooth`}>
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
