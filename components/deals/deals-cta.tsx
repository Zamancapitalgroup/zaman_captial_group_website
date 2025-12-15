"use client"
import Link from "next/link"

export default function DealsCta() {
  return (
    <section className="section section-dark section-with-border">
      {/* FIX: Added 'gap-8' to enforce consistent 32px spacing between every element */}
      <div className="container flex flex-col items-center text-center gap-8">
        
        {/* REMOVED 'mb-3': Spacing handled by parent gap */}
        <h2 className="text-4xl font-bold text-platinum font-playfair">
          Ready to Invest?
        </h2>

        {/* REMOVED 'mb-10': Spacing handled by parent gap */}
        {/* The smooth yellow line */}
        <div className="w-32 h-1.5 bg-[#d4af37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] animate-pulse"></div>
        
        {/* REMOVED 'mb-10': Spacing handled by parent gap */}
        <p className="text-text-secondary max-w-2xl mx-auto font-inter text-lg">
          Join our network of sophisticated investors accessing premium multifamily opportunities with
          institutional-grade returns and transparency.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
          <Link href="/invest-with-us" className="btn-gold font-inter font-semibold">
            View Investment Options
          </Link>
          <Link href="/contact?source=deals" className="btn-outline font-inter font-semibold">
            Schedule Consultation
          </Link>
        </div>
        
      </div>
    </section>
  )
}