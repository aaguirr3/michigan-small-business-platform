import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/contexts/auth-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MittenLaunch | Helping small businesses grow across the Mitten",
  description:
    "MittenLaunch connects Michigan small businesses with grants, funding, compliance help, and local talent.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/mitten-launch-logo.png",
        sizes: "any",
      },
      {
        url: "/logo-mitten.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/mitten-launch-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
