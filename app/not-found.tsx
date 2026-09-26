import Link from "next/link";
import { ArrowLeft, Compass, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#111111] flex flex-col justify-between selection:bg-[#111111] selection:text-white">
      {/* Header bar */}
      <header className="px-6 py-5 border-b border-[#E5E5E2] flex items-center justify-between max-w-5xl mx-auto w-full">
        <Link href="/" className="font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity">
          Vesper
        </Link>
        <span className="text-xs font-mono uppercase tracking-widest text-[#737373] bg-[#EFEFEA] px-2.5 py-1 rounded-full border border-[#E5E5E2]">
          Error 404
        </span>
      </header>

      {/* Main 404 Content */}
      <main className="max-w-xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-[#EFEFEA] border border-[#E5E5E2] flex items-center justify-center text-[#111111] mb-6 shadow-sm">
          <Compass className="w-8 h-8 text-[#555555] animate-pulse" />
        </div>
        <p className="text-xs uppercase tracking-widest font-mono text-[#737373] mb-2">
          Page Not Found
        </p>
        <h1 className="text-4xl sm:text-5xl font-serif font-normal tracking-tight text-[#111111] mb-4">
          Looking for the front desk?
        </h1>
        <p className="text-[#555555] text-base leading-relaxed mb-8 max-w-md">
          The page or link you requested doesn&apos;t exist or may have been moved. Even our 24/7 AI receptionist couldn&apos;t locate this route.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Homepage
          </Link>
          <a
            href="https://wa.me/9779800000000?text=Hi%20Vesper%2C%20I%20hit%20a%20404%20error"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#E5E5E2] bg-white text-[#111111] px-5 py-3 rounded-full text-sm font-medium hover:bg-[#F5F5F0] transition-all"
          >
            <PhoneCall className="w-4 h-4 text-[#737373]" /> WhatsApp Support
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-[#E5E5E2] text-center text-xs text-[#737373]">
        <p>© {new Date().getFullYear()} Vesper AI. Kathmandu, Nepal. All rights reserved.</p>
      </footer>
    </div>
  );
}
