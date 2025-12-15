"use client"
import Link from "next/link"

export default function InvestCta() {
  return (
    <section className="section section-dark section-with-border">
      {/* FIX: Added 'gap-8' to enforce 32px spacing between all items */}
      <div className="container flex flex-col items-center text-center gap-8">
        
        {/* REMOVED 'mb-6': Spacing is now handled by the parent 'gap-8' */}
        <h2 className="text-platinum">
          Ready to Start Investing?
        </h2>
        
        {/* REMOVED 'mb-8': Spacing is now handled by the parent 'gap-8' */}
        <p className="text-text-secondary max-w-2xl mx-auto">
          Take the first step towards building institutional-grade wealth with ZAMAN Capital Group.
        </p>
        
        <Link href="/contact" className="btn-gold">
          Schedule Consultation
        </Link>
        
      </div>
    </section>
  )
}