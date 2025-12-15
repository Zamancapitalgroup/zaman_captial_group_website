"use client"
import Link from "next/link"

export default function TeamCta() {
  return (
    <section className="section section-dark section-with-border">
      {/* FIX: Added 'gap-8' for consistent 32px spacing between elements */}
      <div className="container flex flex-col items-center text-center gap-8">
        
        {/* REMOVED 'mb-6': Spacing is now handled by parent 'gap-8' */}
        <h2 className="text-platinum">
          Connect with Our Team
        </h2>
        
        {/* REMOVED 'mb-8': Spacing is now handled by parent 'gap-8' */}
        <p className="text-text-secondary max-w-2xl mx-auto">
          Have questions about our team or investment opportunities? Schedule a consultation with our experts.
        </p>
        
        <Link href="/contact" className="btn-gold">
          Schedule a Call
        </Link>
        
      </div>
    </section>
  )
}