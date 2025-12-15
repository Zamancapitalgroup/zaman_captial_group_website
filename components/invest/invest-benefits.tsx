"use client"

export default function InvestBenefits() {
  const benefits = [
    { title: "Tax Efficiency", desc: "Leveraging 1031 exchanges and depreciation benefits" },
    { title: "Passive Income", desc: "Regular distribution payments from operations" },
    { title: "Asset Appreciation", desc: "Long-term value growth through strategic improvements" },
    { title: "Diversification", desc: "Geographic and asset-type portfolio diversification" },
  ]

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-platinum text-center mb-16">Investment Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="card">
              <h3 className="text-platinum mb-3">{benefit.title}</h3>
              <p className="text-text-secondary">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
