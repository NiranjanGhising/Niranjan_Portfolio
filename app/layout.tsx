import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/globals.css" // added direct import to guarantee tailwind utilities
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Niranjan Ghising — Data Analyst Student",
  description:
    "Data Analyst Student from Kathmandu, Nepal turning messy data into clear decisions. Skilled in Python, SQL, and data visualization. Open to internships and part-time roles.",
  generator: "v0.dev",
  keywords: [
    "data analyst",
    "data science",
    "python",
    "sql",
    "numpy",
    "pandas",
    "matplotlib",
    "excel",
    "niranjan ghising",
  ],
  authors: [{ name: "Niranjan Ghising" }],
  openGraph: {
    title: "Niranjan Ghising — Data Analyst Student",
    description: "Data Analyst Student from Kathmandu, Nepal turning messy data into clear decisions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
