import type { Metadata } from "next"
import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import Providers from "./providers"
import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "HealthPulse",
  description: "Your health monitoring application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
      <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
