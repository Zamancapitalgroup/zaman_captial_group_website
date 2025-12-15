"use client"

export default function StrategyHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-dark-blue to-black flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-[#0f1c3f] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* FIX APPLIED: 
          1. Added 'gap-10' (40px) to separate the Title from the Paragraph.
          2. Kept 'flex-col items-center' for perfect centering.
      */}
      <div className="container relative z-10 flex flex-col items-center text-center gap-10">
        
        {/* REMOVED 'mb-6': Spacing is now controlled by the parent 'gap-10' */}
        <h1 className="text-5xl md:text-6xl font-bold text-platinum" style={{ animation: "fadeInDown 0.8s ease" }}>
          Our Investment Strategy
        </h1>
        
        {/* ADDED 'leading-loose': 
            This increases the space between the lines of text inside the paragraph itself.
        */}
        <p
          className="text-xl text-text-secondary max-w-2xl leading-loose" 
          style={{ animation: "fadeInUp 0.8s ease 0.2s both" }}
        >
          A disciplined, data-driven approach to sourcing, acquiring, and managing premium multifamily assets
        </p>
        
      </div>
    </section>
  )
}