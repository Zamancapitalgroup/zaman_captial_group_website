"use client"

export default function InvestRequirements() {
  return (
    <section className="section section-dark">
      {/* 1. SPACING FIX: Added 'gap-16'. 
           This creates a large 64px gap between the Heading and the Requirements Box.
      */}
      <div className="container flex flex-col items-center gap-16">
        
        {/* Removed 'mb-12' because the parent 'gap-16' handles the spacing now */}
        <h2 className="text-4xl font-bold text-platinum text-center font-playfair">
          Investor Requirements
        </h2>

        <div className="max-w-3xl w-full">
          {/* 2. BOX SPACING FIX: Increased padding from 'p-10' to 'p-12'.
               Gives more breathing room inside the box.
          */}
          <div className="card p-12 bg-[#0f0f0f] border border-[#d4af37]/20 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            
            {/* 3. LIST SPACING FIX: Increased 'space-y-8' to 'space-y-12'.
                 This puts 48px of space between each requirement block.
            */}
            <ul className="space-y-12">
              
              <li className="flex gap-6 items-start">
                <span className="text-[#d4af37] text-2xl mt-[-2px]">•</span>
                <div>
                  <h4 className="text-xl text-platinum font-playfair font-bold mb-3">Net Worth Requirement</h4>
                  {/* Added 'leading-loose' for readability */}
                  <p className="text-text-secondary leading-loose">
                    Minimum $500K liquid net worth for equity investments to ensure financial suitability.
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="text-[#d4af37] text-2xl mt-[-2px]">•</span>
                <div>
                  <h4 className="text-xl text-platinum font-playfair font-bold mb-3">Accredited Status</h4>
                  <p className="text-text-secondary leading-loose">
                    Must be an accredited investor as defined by the SEC (Regulation D, Rule 506(c)).
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="text-[#d4af37] text-2xl mt-[-2px]">•</span>
                <div>
                  <h4 className="text-xl text-platinum font-playfair font-bold mb-3">Long-Term Commitment</h4>
                  <p className="text-text-secondary leading-loose">
                    Typically a 5-7 year investment horizon to allow for value-add execution and appreciation.
                  </p>
                </div>
              </li>

              <li className="flex gap-6 items-start">
                <span className="text-[#d4af37] text-2xl mt-[-2px]">•</span>
                <div>
                  <h4 className="text-xl text-platinum font-playfair font-bold mb-3">Due Diligence</h4>
                  <p className="text-text-secondary leading-loose">
                    Agreement to complete standard KYC/AML verification and review offering memorandums.
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </div>
        
      </div>
    </section>
  )
}