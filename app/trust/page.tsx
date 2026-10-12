import type { Metadata } from "next"
import { TrustPage } from "@/components/trust-page"

export const metadata: Metadata = {
  title: "Trust & Safety",
  description:
    "How Vesper keeps bookings correct and customer data private: database-checked bookings, official Meta APIs, and no training on your chats.",
  alternates: { canonical: "/trust" },
}

export default function Page() {
  return <TrustPage />
}
