"use client"

export default function TeamHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-dark-blue to-black flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30">
        <source src="/team-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* FIX APPLIED:
          1. Added 'gap-10': Creates a clean 40px space between every text element.
          2. Kept 'flex-col items-center' for perfect centering.
      */}
      <div className="container relative z-20 flex flex-col items-center text-center gap-10">
        
        {/* Removed 'mb-6' (Spacing handled by gap-10) */}
        <h1 className="text-5xl md:text-6xl font-bold text-platinum" style={{ animation: "fadeInDown 0.8s ease" }}>
          Meet the Team
        </h1>
        
        {/* Removed 'mb-8' (Spacing handled by gap-10) */}
        <p className="text-[#d4af37] text-xl md:text-2xl tracking-wide" style={{ animation: "fadeInUp 0.8s ease 0.2s both" }}>
          Guided by integrity, driven by innovation
        </p>
        
        {/* Added 'leading-loose' for better readability */}
        <p
          className="text-text-secondary max-w-2xl text-lg leading-loose"
          style={{ animation: "fadeInUp 0.8s ease 0.4s both" }}
        >
          Our team combines institutional-grade expertise with a strategic focus on multifamily acquisitions to help you build lasting wealth.
        </p>
        
      </div>
    </section>
  )
}