"use client"

import { useState } from "react"

export default function InvestorFaq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqs = [
    {
      category: "General Questions",
      items: [
        {
          question: "What is multifamily syndication, and how does it work?",
          answer:
            "Multifamily syndication is a group investment strategy where multiple investors pool capital to acquire large apartment buildings or multifamily properties. We manage the entire process—from acquisition and management to eventual sale—while investors receive passive income and profits.",
        },
        {
          question: "How do I invest in a syndication with you?",
          answer:
            "Depending on the deal structure, we offer investment opportunities to accredited and non-accredited investors. To get started, you can join our investor network, review current opportunities, and participate in deals that align with your financial goals.",
        },
        {
          question: "What are the benefits of investing in multifamily real estate?",
          answer:
            "✓ Passive income through rental cash flow\n✓ Appreciation as property values increase\n✓ Tax advantages through depreciation and write-offs\n✓ Diversification with a stable asset class\n✓ Scalability compared to single-family rentals",
        },
        {
          question: "How does investing in multifamily compare to single-family rentals?",
          answer:
            "Multifamily properties offer more stability and higher scalability than single-family rentals. With multiple tenants, income is diversified, reducing the risk of vacancies affecting cash flow. Additionally, economies of scale make maintenance and management more cost-effective.",
        },
      ],
    },
    {
      category: "Financials and Returns",
      items: [
        {
          question: "What kind of returns can I expect on my investment?",
          answer:
            "Returns vary based on the property, market conditions, and strategy, but typical projections include:\n✓ 8-9% annual cash-on-cash returns\n✓ 10-20% internal rate of return (IRR) over 5-7 years\n✓ 2x+ equity multiple (doubling investor capital over the hold period)",
        },
        {
          question: "How are investor returns calculated?",
          answer:
            "We use multiple performance metrics, including:\n✓ Cash-on-Cash Return (CoC): Annual cash flow divided by the investor's initial investment\n✓ Internal Rate of Return (IRR): A time-weighted return that factors in future cash flow and sales profits\n✓ Equity Multiple: Total return on investment (e.g., 2x equity multiple means an investor doubles their money)",
        },
        {
          question: "How and when will I receive distributions?",
          answer:
            "Distributions are typically made quarterly or monthly, depending on the investment. Payouts come from rental income after expenses like mortgage, taxes, and management fees.",
        },
        {
          question: "What happens if the property doesn't perform as expected?",
          answer:
            "We take a conservative underwriting approach to minimize risk. If a property underperforms, investor distributions may be temporarily reduced while we adjust our strategy. However, we structure deals with ample reserves to weather market fluctuations.",
        },
        {
          question: "What is the typical hold period for a syndication deal?",
          answer:
            "Most deals have a 5-7-year hold period, which varies depending on market conditions. However, some deals may allow for an earlier refinance, returning some capital while maintaining ownership.",
        },
        {
          question: "What happens at the end of the investment term?",
          answer:
            "At the end of the hold period, we either:\n✓ Sell the property and distribute profits\n✓ Refinance the property to return investor capital while keeping the asset\n✓ Reposition the asset for continued cash flow with investor approval",
        },
      ],
    },
    {
      category: "Risk & Protection",
      items: [
        {
          question: "What are the most significant risks in multifamily syndications?",
          answer:
            "Like any investment, multifamily real estate carries risks, including:\n✓ Market downturns affecting property values\n✓ Tenant vacancies reducing cash flow\n✓ Interest rate fluctuations impacting financing\n✓ Operational challenges if management is ineffective",
        },
        {
          question: "How do you mitigate risk for investors?",
          answer:
            "✓ Conservative underwriting with realistic projections\n✓ Thorough due diligence on property financials, market trends, and operations\n✓ Experienced property management to maintain tenant satisfaction and minimize vacancies\n✓ Reserves set aside for unexpected expenses",
        },
        {
          question: "What happens if the market declines during our investment period?",
          answer:
            "We acquire properties with strong fundamentals, which means they generate positive cash flow regardless of short-term market conditions. If a downturn occurs, we hold assets until market conditions improve.",
        },
        {
          question: "Do investors get their initial capital back?",
          answer:
            "Yes, investors typically receive their original capital upon selling or refinancing the property. If the property appreciates, investors also receive a share of the profits.",
        },
        {
          question: "Is my investment liquid, or will it be tied up for a set period?",
          answer:
            "Syndication investments are not liquid like stocks. Investors commit their capital for the hold period (typically 5-7 years) but receive cash flow distributions throughout.",
        },
      ],
    },
    {
      category: "Deal Structure and Operations",
      items: [
        {
          question: "What's the process for securing a deal?",
          answer:
            "1. We identify & underwrite a substantial property\n2. We negotiate & structure the deal\n3. We secure investor commitments & close\n4. We manage the asset & distribute returns\n5. We execute an exit strategy for profit",
        },
        {
          question: "Who manages the properties?",
          answer:
            "We partner with experienced property management firms who handle day-to-day operations, maintenance, and leasing.",
        },
        {
          question: "Do investors have any ownership of the property?",
          answer:
            "Yes, investors hold equity ownership in the property, entitling them to their share of cash flow, tax benefits, and appreciation profits.",
        },
        {
          question: "What is the difference between preferred returns and profit splits?",
          answer:
            "✓ Preferred Return: Investors get paid a set return (e.g., 8%) before sponsors receive profits.\n✓ Profit Split: After preferred returns, profits are split based on the syndication structure (e.g., 70/30).",
        },
        {
          question: "How do taxes work on my investment?",
          answer:
            "Multifamily investors benefit from depreciation, cost segregation, and passive income taxation, often reducing their taxable income. However, they should always consult a CPA for specific tax implications.",
        },
      ],
    },
    {
      category: "Our Track Record and Strategy",
      items: [
        {
          question: "What types of properties do you invest in?",
          answer:
            "We focus on high-cash-flow multifamily properties with value-add potential in emerging and stable markets.",
        },
        {
          question: "How do you find and select investment properties?",
          answer:
            "✓ Off-market deals through broker relationships\n✓ Direct outreach to sellers\n✓ CRE platforms like Crexi & LoopNet\n✓ Partnering with local market experts",
        },
        {
          question: "What markets do you focus on?",
          answer:
            "We invest in cash-flowing, landlord-friendly markets where we can create long-term equity growth. Current holdings include:\n✓ Clarion, PA (High Cap-Rate Market)\n✓ Catonsville, MD (Value-Add & Stability)\n✓ Ocean City, MD (Seasonal & Luxury Rental Strategy)",
        },
        {
          question: "What is your value-add strategy?",
          answer:
            "✓ Renovating units to increase rental value\n✓ Improving tenant quality & reducing turnover\n✓ Optimizing operations to reduce expenses & increase NOI\n✓ Repositioning properties for a higher price on exit",
        },
        {
          question: "Can you share examples of past deals and their performance?",
          answer:
            "Yes! Visit our Portfolio Page for case studies on how we've repositioned and optimized our properties for high investor returns.",
        },
      ],
    },
  ]

  const flatFaqs = faqs.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.category,
    })),
  )

  return (
    // FIX 1: Increased vertical padding 'py-24' for the whole section
    <section className="section section-dark py-24">
      <div className="container flex flex-col items-center">
        
        <h2 className="text-4xl font-bold text-platinum mb-4 text-center">Frequently Asked Questions</h2>
        
        <p className="flex flex-col gap 8 text-center text-text-secondary text-lg mb-20 max-w-3xl mx-auto">
          Comprehensive guide to multifamily syndication, investment process, returns, risks, and our strategy
        </p>

        {/* FIX 2: Increased space between CATEGORIES to 'space-y-40' (160px) */}
        <div className="max-w-4xl flex flex-col gap-4 w-full space-y-40">
          {faqs.map((categoryGroup, categoryIdx) => (
            <div key={categoryIdx} className="flex flex-col items-center w-full">
              
              <h3 className="text-3xl font-normal text-[#d4af37] mb-16 text-center border-b border-[#d4af37]/30 pb-4 inline-block">
                {categoryGroup.category}
              </h3>
              
              {/* FIX 3: Used 'flex col gap-12' (48px) to force big gaps between questions */}
              <div className="flex flex-col gap-8 w-full">
                {categoryGroup.items.map((faq, idx) => {
                  const flatIdx = flatFaqs.findIndex((f) => f.question === faq.question)
                  const isExpanded = expandedIndex === flatIdx

                  return (
                    <div 
                      key={idx} 
                      className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                        isExpanded 
                          ? "border-[#d4af37] bg-black/60 shadow-[0_0_15px_rgba(212,175,55,0.1)]" 
                          : "border-[#d4af37]/20 bg-black/20 hover:border-[#d4af37]/50"
                      }`}
                    >
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : flatIdx)}
                        className="w-full p-6 flex items-center justify-between transition-colors text-left"
                      >
                        <h3 className={`text-lg font-normal ${isExpanded ? 'text-[#d4af37]' : 'text-platinum'}`}>
                            {faq.question}
                        </h3>
                        <span
                          className={`text-[#d4af37] text-xl transition-transform duration-300 flex-shrink-0 ml-4 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                      
                      <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6 pt-0 text-text-secondary leading-relaxed whitespace-pre-line pl-6 border-l-2 border-[#d4af37]/30 ml-6 mb-6">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}