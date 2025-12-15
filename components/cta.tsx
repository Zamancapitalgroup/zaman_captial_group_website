"use client"
import Link from "next/link"

export default function Cta() {
  return (
    <section className="section section-dark section-with-border">
      {/* FIX APPLIED: Added 'gap-10' (40px spacing).
         Since this div is 'flex-col', 'gap-10' automatically puts space 
         between the Heading, the Text, and the Button.
      */}
      <div className="container flex flex-col items-center text-center gap-10">
        
        {/* REMOVED 'mb-15': It was an invalid class and is no longer needed because of 'gap-10' */}
        <h2 className="text-platinum text-center">
          Ready to Build Wealth?
        </h2>
        
        {/* REMOVED 'mb-16': No longer needed because of 'gap-10' */}
        <p className="text-text-secondary text-lg max-w-2xl mx-auto text-center">
          Join institutional investors and high-net-worth individuals in achieving strong, risk-adjusted returns with Zaman Capital Group.
        </p>
        
        <div className="flex justify-center w-full">
          <Link href="/contact" className="btn-gold">
            Schedule Your Consultation
          </Link>
        </div>

      </div>
    </section>
  )
}