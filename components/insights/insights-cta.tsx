"use client"

import Link from "next/link"

export default function InsightsCta() {
  return (
    <section className="section">
      {/* FIX: Added 'gap-8' for consistent 32px spacing between elements */}
      <div className="container flex flex-col items-center text-center gap-8">
        
        {/* REMOVED 'mb-6': Spacing is now handled by parent 'gap-8' */}
        <h2 className="text-4xl font-bold text-platinum">
          Ready to Start Investing?
        </h2>
        
        {/* REMOVED 'mb-8': Spacing is now handled by parent 'gap-8' */}
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Contact our team to discuss your investment goals and explore available opportunities
        </p>
        
        <Link href="/contact" className="btn-gold inline-block">
          Get in Touch
        </Link>
        
      </div>
    </section>
  )
}