import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Academy.binario - Aprende FTTH, WISP y Seguridad IP",
  description:
    "Plataforma educativa especializada en redes ópticas, WISP y seguridad IP con proyectos reales. Certificaciones verificables hechas para Colombia.",
  keywords: "FTTH, WISP, Seguridad IP, Redes Ópticas, Certificación, Colombia",
  openGraph: {
    title: "Academy.binario - Aprende FTTH, WISP y Seguridad IP",
    description: "Plataforma educativa especializada en redes ópticas, WISP y seguridad IP",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
