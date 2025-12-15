"use client"

export default function StrategyCriteria() {
  const criteria = [
    { label: "Markets", value: "High-growth MSAs with strong economic fundamentals" },
    { label: "Asset Class", value: "Class B/C multifamily properties" },
    { label: "Size", value: "40-200+ units" },
    { label: "Strategy", value: "Light to moderate value-add with forced appreciation" },
  ]

  return (
    <section className="section">
      {/* 1. SECTION SPACING: Added 'gap-16' (64px). 
           This puts a large, consistent gap between the Heading and the Grid of boxes.
      */}
      <div className="container flex flex-col items-center gap-16">
        
        {/* Removed 'mb-16' since parent 'gap-16' handles it now */}
        <h2 className="text-4xl font-bold text-platinum text-center">
          Acquisition Criteria
        </h2>

        {/* 2. GRID SPACING: Increased 'gap-8' to 'gap-10' (40px) for better separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl w-full">
          {criteria.map((item, idx) => (
            
            /* 3. CARD SPACING:
               - Increased padding to 'p-10' (40px).
               - Added 'gap-4' to separate the Label (Gold) from the Value (White).
            */
            <div key={idx} className="card flex flex-col items-center text-center h-full justify-center p-10 gap-4">
              
              {/* Removed 'mb-3' since parent 'gap-4' handles it now */}
              <p className="text-[#d4af37] font-bold text-sm uppercase tracking-widest">
                {item.label}
              </p>
              
              <p className="text-platinum text-lg font-semibold leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}