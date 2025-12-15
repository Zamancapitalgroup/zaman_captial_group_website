"use client"

export default function InvestProcess() {
  const steps = [
    { num: "01", title: "Consultation", desc: "Initial meeting to understand your investment goals and risk profile" },
    { num: "02", title: "Due Diligence", desc: "Comprehensive analysis of properties and market conditions" },
    { num: "03", title: "Investment", desc: "Structure and execute your investment with transparency" },
    { num: "04", title: "Monitoring", desc: "Ongoing reporting and performance tracking" },
  ]

  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="text-platinum text-center mb-16">Our Investment Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="text-5xl font-bold gradient-text mb-4">{step.num}</div>
              <h3 className="text-platinum mb-3 text-xl">{step.title}</h3>
              <p className="text-text-secondary">{step.desc}</p>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
