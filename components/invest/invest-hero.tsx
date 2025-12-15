"use client"

export default function InvestHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-dark-blue to-black flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      {/* FIX APPLIED: 
         1. Added 'gap-10': This creates a consistent 40px space between every text element.
         2. Kept 'flex-col items-center' for centering.
      */}
      <div className="container relative z-10 flex flex-col items-center text-center gap-10">
        
        {/* REMOVED 'mb-6': Spacing is now handled by parent 'gap-10' */}
        <h1 className="text-platinum text-5xl md:text-6xl font-playfair font-bold" style={{ animation: "fadeInDown 0.8s ease" }}>
          Invest With Us
        </h1>
        
        {/* REMOVED 'mb-8': Spacing is now handled by parent 'gap-10' */}
        <p className="text-[#d4af37] text-xl md:text-2xl tracking-wide" style={{ animation: "fadeInUp 0.8s ease 0.2s both" }}>
          Transparent. Data-Driven. Institutional-Grade Returns.
        </p>
        
        {/* ADDED 'leading-loose': Increases line height for better readability */}
        <p
          className="text-text-secondary max-w-2xl text-lg leading-loose"
          style={{ animation: "fadeInUp 0.8s ease 0.4s both" }}
        >
          Discover how to grow your wealth with premium multifamily real estate investments backed by industry
          experts.
        </p>
        
      </div>
    </section>
  )
}