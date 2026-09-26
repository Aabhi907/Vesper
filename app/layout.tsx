import type { Metadata } from "next"
import { Navbar, Footer } from "@/components/layout"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Vesper - 24/7 AI Front Desk for Service & Booking Businesses",
  description: "Answer customer inquiries, check real-time availability, and book appointments across WhatsApp, Instagram, Messenger and web - 24/7.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased flex min-h-screen flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
