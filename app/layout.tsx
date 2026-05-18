import type { Metadata } from "next"
import { Fraunces, Manrope } from "next/font/google"

import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
})

export const metadata: Metadata = {
  title: "Yohaku | Muebles a precio mayorista",
  description:
    "Yohaku ofrece muebles a precio mayorista y minorista, catálogos actualizados, atención por WhatsApp, despacho rápido y garantía de 30 días."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  )
}
