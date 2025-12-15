"use client"

export default function StrategyPhilosophy() {
  return (
    <section className="section section-dark">
      <div className="container flex flex-col items-center">
        
        {/* FIX 1: Added 'flex flex-col gap-12'. 
            This forces a 48px gap between the Header and the Card below it. 
        */}
        <div className="max-w-3xl w-full flex flex-col gap-12">
          
          <h2 className="text-4xl font-bold text-platinum text-center">
            Our Philosophy
          </h2>
          
          {/* FIX 2: Added 'p-12' to give the text generous breathing room inside the box. */}
          <div className="card text-center p-12">
            
            {/* FIX 3: Added 'space-y-8' to cleanly separate the two paragraphs. */}
            <div className="space-y-8">
              <p className="text-lg text-text-secondary leading-loose">
                We target under-performing multifamily assets in high-growth, landlord-friendly markets. Our
                thesis is simple: identify quality properties with strong fundamentals, execute disciplined value-add
                strategies, and deliver institutional-grade returns to our investor partners.
              </p>
              
              <p className="text-lg text-text-secondary leading-loose">
                Every investment we make must meet rigorous underwriting standards and align with our commitment to
                transparency, accountability, and investor success. We believe long-term relationships are built on
                consistent execution and honest communication.
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}