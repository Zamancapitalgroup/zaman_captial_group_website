"use client"

import ScrollFadeIn from "../scroll-fade-in"

export default function InvestTypes() {
  const types = [
    {
      title: "Equity Partnership",
      min: "$75,000",
      returns: "8-15%+", // Updated back to original requests or keep as is
      features: [
        "Quarterly Distributions: Consistent cash flow derived from property operations.",
        "Upside Potential: Full participation in property appreciation.",
        "Tax Efficiency: Depreciation, deductions, and tax losses passed through directly to you (K-1).",
        "Capital Events: Share in the profits from a future refinance or property sale.",
      ],
    },
  ]

  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="text-platinum text-center mb-20">Investment Options</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {types.map((type, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 100} className="w-full flex justify-center">
              <div className="card w-full max-w-lg h-full flex flex-col">
                
                {/* 1. Header Section */}
                <h3 className="text-platinum mb-6 text-center">{type.title}</h3>
                
                <div className="text-center">
                  <p className="text-text-secondary text-sm uppercase tracking-widest mb-2">
                    Minimum Investment
                  </p>
                  <p className="text-3xl font-bold gradient-text mb-4">{type.min}</p>
                  
                  <p className="text-text-secondary text-sm uppercase tracking-widest mb-2">
                    Expected Returns (IRR)
                  </p>
                  <p className="text-3xl font-bold gradient-text">{type.returns}</p>
                </div>

                {/* 2. THE GOLDEN SEPARATOR LINE (Explicit Element)
                    - 'my-10': Adds 40px of space ABOVE and BELOW the line.
                    - 'h-px': Height of 1 pixel.
                    - 'bg-[#d4af37]/20': The gold color with transparency.
                */}
                <div className="w-full h-px bg-[#d4af37]/20 my-10"></div>

                {/* 3. Features List */}
                <ul className="space-y-5"> 
                  {type.features.map((feature, i) => (
                    <li key={i} className="text-text-secondary flex items-start gap-4">
                      {/* Checkmark Alignment: 'mt-1' ensures it sits perfectly with the first line of text */}
                      <span className="text-[#d4af37] font-bold text-lg leading-none mt-1 shrink-0">✓</span>
                      <span className="leading-relaxed text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}