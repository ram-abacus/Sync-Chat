import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Sync Chat — Secure, Self‑Hosted Enterprise Messaging",
  description:
    "Sync Chat is an enterprise-grade, self‑hosted chat platform with DMs, channels, voice/video, file sharing, admin controls, and deep integrations. Request a demo.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense>{children}</Suspense>
        <GoogleTagManager gtmId="GTM-P2MSMQW5" />
        <GoogleAnalytics gaId="G-X0H2Z9W3PX" />
      </body>
    </html>
  )
}
