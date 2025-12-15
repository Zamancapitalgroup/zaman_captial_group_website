"use client"

export default function DealsHero() {
  return (
    <section className="min-h-screen pt-32 pb-20 section-dark flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37] rounded-full mix-blend-screen blur-3xl"></div>
      </div>

      {/* FIX APPLIED:
          1. Added 'gap-12' (48px) to creates consistent, wide spacing between elements.
          2. Kept 'flex-col items-center' for perfect centering.
      */}
      <div className="container relative z-10 flex flex-col items-center text-center gap-12">
        
        {/* Removed 'mb-6' (Spacing now handled by gap-12) */}
        <h1 className="text-4xl md:text-5xl font-bold text-platinum font-playfair">
          Our Investment Portfolio
        </h1>

        {/* GOLDEN LINE
            - Kept 'w-96' as requested.
            - Removed 'mb-10' (Spacing now handled by gap-12).
        */}
        <div className="w-96 h-1.5 bg-[#d4af37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)] animate-pulse"></div>

        {/* Removed 'mb-8' and added 'leading-loose' */}
        <p className="text-lg text-text-secondary font-inter max-w-2xl leading-loose">
          Zaman Capital Group portfolio is always expanding. Below are featured deals demonstrating different asset types
        </p>
        
      </div>
    </section>
  )
}