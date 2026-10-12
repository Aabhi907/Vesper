import type { Metadata } from "next"
import { ProductPage } from "@/components/product-page"

export const metadata: Metadata = {
  title: "How Vesper Works",
  description:
    "From the first WhatsApp, Instagram or Messenger message to a confirmed calendar booking: how Vesper understands the request, checks real availability and books it.",
  alternates: { canonical: "/product" },
}

export default function Page() {
  return <ProductPage />
}
