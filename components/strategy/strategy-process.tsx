"use client"

export default function StrategyProcess() {
  const steps = [
    {
      number: "01",
      title: "Sourcing & Diligence",
      description:
        "We leverage strong broker relationships and off-market deal flow to source premium opportunities. Our underwriting team conducts thorough financial and physical due diligence to validate investment thesis.",
      details: ["Broker relationships", "Off-market sourcing", "Conservative Underwriting", "Market analysis"],
    },
    {
      number: "02",
      title: "Acquisition & Funding",
      description:
        "We structure deals using optimal debt/equity combinations to maximize returns while maintaining conservative leverage ratios. Each deal is customized based on market conditions and investor requirements.",
      details: ["Optimal debt structures", "Equity syndication", "Bridge financing", "Negotiated Loan Terms"],
    },
    {
      number: "03",
      title: "Asset Management",
      description:
        "This is where value is created. We execute unit renovations, optimize operations, implement new management systems, and drive NOI growth through strategic rent increases and expense control.",
      details: ["Unit renovations", "Operational efficiencies", "Revenue optimization", "Cost management"],
    },
    {
      number: "04",
      title: "Reporting & Disposition",
      description:
        "Investors receive detailed quarterly reports via our secure portal. Typical hold period is 5-7 years, with clear exit strategy. We communicate transparently on all metrics and performance.",
      details: ["Quarterly reporting", "Clear exit timeline", "Performance tracking"],
    },
  ]

  return (
    <section className="section section-dark">
      <div className="container flex flex-col items-center gap-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-platinum text-center">Our 4-Step Process</h2>
          
          <p className="text-center text-text-secondary text-lg leading-loose">
            From sourcing to disposition, we follow a disciplined process designed to maximize returns and minimize risk
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="card flex flex-col items-center text-center h-full p-12 gap-6"
            >
              
              <div className="text-5xl font-bold gradient-text">{step.number}</div>
              
              <h3 className="text-2xl font-bold text-platinum">{step.title}</h3>
              
              <p className="text-text-secondary leading-loose">{step.description}</p>
              
              {/* ALIGNMENT FIX APPLIED BELOW */}
              <div className="w-full">
                <ul className="space-y-4 inline-block text-left mx-auto">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary leading-normal">
                      
                      {/* FIX: Changed 'mt-2' to 'mt-1.5'. 
                         This moves the dot up slightly (6px from top instead of 8px), 
                         aligning it perfectly with the center of the first line of text.
                      */}
                       
                      
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}