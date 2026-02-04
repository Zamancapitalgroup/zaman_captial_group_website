"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-dark-blue to-black flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-[#0f1c3f] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* FIX APPLIED: 
         1. Added 'flex flex-col items-center'. This strictly forces vertical stacking and horizontal centering.
         2. Added 'gap-10'. This creates even space between the Header, Description, and Buttons.
      */}
      <div className="container relative z-10 flex flex-col items-center text-center gap-12 max-w-5xl px-4">
        
        {/* Header Section */}
        <div style={{ animation: "fadeInDown 0.8s ease" }} className="flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-platinum leading-tight">
            Building Generational Wealth Through Multifamily Real Estate
          </h1>
          <p className="text-[#d4af37] text-xl md:text-2xl font-light tracking-widest">
            CAPITAL. GROWTH. LEGACY.
          </p>
        </div>

        {/* Description Text */}
        <p
          className="text-lg md:text-xl text-text-secondary leading-loose max-w-3xl"
          style={{ animation: "fadeInUp 0.8s ease 0.2s both" }}
        >
          Backed by deep industry expertise and an unyielding commitment to excellence, we specialize in multifamily
          acquisitions, value-add opportunities, and institutional-grade investments that deliver strong, risk-adjusted
          returns.
        </p>

        {/* Buttons Section */}
        <div
          className="flex flex-col md:flex-row gap-8 items-center"
          style={{ animation: "fadeInUp 0.8s ease 0.4s both" }}
        >
          <Link href="/our-deals" className="btn-gold inline-block px-8 py-4 text-lg font-semibold">
            View Our Investments
          </Link>
          
          <Link href="/investor-insights" className="btn-outline px-8 py-4 text-lg font-semibold">
            Learn More
          </Link>
        </div>
        
      </div>
    </section>
  )
}