"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import ScrollFadeIn from "../scroll-fade-in"

// --- 1. DEFINE THE INTERFACE ---
interface Deal {
  id: number
  title: string
  location: string
  image: string
  status: "CURRENT" | "FULLY_FUNDED" | "EXITED" | "STABILIZED"
  description: string
  story: string
  plan: string
  results: string
  details: {
    value: string
    units: string
    year: string
    type: string
    irr?: string
    hold?: string
  }
  highlights: string[]
}

// --- 2. DEFINE THE DATA ARRAY ---
const deals: Deal[] = [
  {
    id: 1,
    title: "Clarion, PA",
    location: "North-east Value-Add",
    image: "/images/deals/clarion image.avif",
    status: "CURRENT",
    description:
      "This asset acts as a real-life example of our main strategy: purchasing underperforming properties and executing a targeted plan to boost cash flow and create substantial equity.",
    story: "Acquired: Q2 2023 | 8-Unit Building",
    plan: "We identified a clear opportunity to capitalize on operational inefficiencies through a hands-on management approach, upgrading units, and professionalizing management.",
    results: "Projected 35% Return on Cost with double-digit annual cash-on-cash returns upon stabilization.",
    details: {
      value: "Undisclosed",
      units: "8",
      year: "2023",
      type: "Apartment Building",
      irr: "20% (Proj.)",
      hold: "5 Years",
    },
    highlights: [
      "Projected Gross Revenue Growth: +20%",
      "Occupancy Growth: From 85% to 95%+",
      "Strategy: Operational Turnaround",
    ],
  },
  {
    id: 2,
    title: "Catonsville, MD",
    location: "Suburban Repositioning",
    image: "/images/deals/catonsville image.avif",
    status: "STABILIZED",
    description:
      "Repositioning prime-location asset to a lucrative premium 2-unit duplex delivering strong appreciations and returns.",
    story: "Acquired: 2021 | Converted from 8 rooms",
    plan: "Maximize revenue potential by optimizing features of a high demand stabilized duplex, through targeted improvement plan, advanced management and tenant screening.",
    results: "35%+ in Equity since purchase",
    details: {
      value: "High Growth",
      units: "2",
      year: "2021",
      type: "Duplex Conversion",
      irr: "High Dbl-Digit",
      hold: "Hold",
    },
    highlights: [
      "Asset Type:  Premium Duplex",
      "Increase in Asset Value: +34%",
      "Return on Cost: +25%",
      "Strategy: Heavy Value-Add",
    ],
  },
  {
    id: 3,
    title: "Ocean City, MD",
    location: "Resort Market",
    image: "/images/deals/ocean city image.avif",
    status: "STABILIZED",
    description:
      "An opportunistic investment in a unique, high-demand market, capitalizing on both substantial market growth and robust rental income.",
    story: "Acquired: 2021 | Resort Condominium",
    plan: "Capture overall market value in consistent income with mixed use at STR and LTR rental agreements while actively managing the unit to maximize the rental income annually.",
    results: "35% cash on cash return.",
    details: {
      value: "High Demand",
      units: "1",
      year: "2021",
      type: "Resort Condo",
      irr: "N/A",
      hold: "Hold",
    },
    highlights: [
      "Increase in Asset Value: +40%",
      "Market Focus: Supply-Constrained Area",
      "Income: Consistent Demand",
      "Outcome: Outperformed Forecasts",
    ],
  },
  {
    id: 4,
    title: "New Iberia, LA",
    location: "Southern Value-Add",
    image: "/images/deals/New lberia.jpg", 
    status: "CURRENT",
    description:
      "A significant value-add acquisition targeting a 22-unit complex. The focus is on immediate cash flow enhancement through professional management implementation and strategic property improvements.",
    story: "Acquired: 2025 | 22-Unit Complex",
    plan: "Implement professional third-party management to streamline operations, address deferred maintenance, and execute cosmetic upgrades to increase market rents.",
    results: "Targeting 40% Cash-on-Cash return.",
    details: {
      value: "Value-Add",
      units: "22",
      year: "2025",
      type: "Multi-Family",
      irr: "20%+ (Proj.)",
      hold: "5-7 Years",
    },
    highlights: [
      "Cash on Cash: 40% Projected",
      "Strategy: Management Turnaround",
      "Upside: Rent Optimization",
      "Scale: 22 Units",
    ],
  },
]

// --- 3. THE COMPONENT ---
export default function DealsList() {
  const [selectedDeal, setSelectedDeal] = useState<Deal>(deals[0])

  const statusColors = {
    CURRENT: "bg-blue-500/20 text-blue-300 border-blue-500/50",
    FULLY_FUNDED: "bg-amber-500/20 text-amber-300 border-amber-500/50",
    EXITED: "bg-green-500/20 text-green-300 border-green-500/50",
    STABILIZED: "bg-purple-500/20 text-purple-300 border-purple-500/50",
  }

  return (
    <section className="section section-dark">
      <div className="container">
        
        {/* Deal Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-7xl mx-auto">
          {deals.map((deal) => (
            <button
              key={deal.id}
              onClick={() => setSelectedDeal(deal)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 text-center relative h-full flex flex-col justify-center items-center ${
                selectedDeal.id === deal.id
                  ? "border-[#d4af37] bg-[#d4af37]/10"
                  : "border-[#d4af37]/30 hover:border-[#d4af37]/60 bg-black/40"
              }`}
            >
              <div
                className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${
                  statusColors[deal.status] || "bg-gray-500/20 text-gray-300 border-gray-500/50"
                }`}
              >
                {deal.status.replace("_", " ")}
              </div>
              <div className="font-playfair text-xl font-bold text-platinum mb-2">
                {deal.title}
              </div>
              <div className="text-sm text-[#d4af37] font-inter">
                {deal.location}
              </div>
            </button>
          ))}
        </div>

        {/* Detailed View */}
        <ScrollFadeIn key={selectedDeal.id}> 
          {/* FIX 1: Ensures columns stretch properly */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left Column: Text Details */}
            <div className="flex flex-col h-full">
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-platinum font-playfair mb-2">
                    {selectedDeal.title}
                  </h2>
                  <p className="text-[#d4af37] font-inter text-lg mb-6 uppercase tracking-wide">
                    {selectedDeal.location}
                  </p>
                  <p className="text-text-secondary font-inter leading-relaxed text-lg border-l-2 border-[#d4af37]/50 pl-6">
                    {selectedDeal.description}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#d4af37]/20">
                  <div>
                    <p className="text-text-secondary font-inter text-xs mb-1 uppercase tracking-widest">Asset Type</p>
                    <p className="text-lg font-bold text-platinum font-playfair">{selectedDeal.details.type}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary font-inter text-xs mb-1 uppercase tracking-widest">Units</p>
                    <p className="text-2xl font-bold text-platinum font-playfair">{selectedDeal.details.units}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary font-inter text-xs mb-1 uppercase tracking-widest">Year Acquired</p>
                    <p className="text-xl font-bold text-platinum font-playfair">{selectedDeal.details.year}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary font-inter text-xs mb-1 uppercase tracking-widest">Performance</p>
                    <p className="text-xl font-bold text-platinum font-playfair">
                      {selectedDeal.details.irr || selectedDeal.details.value}
                    </p>
                  </div>
                </div>

                {/* Story/Plan/Results Box */}
                <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37] rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
                  
                  <div className="mb-6">
                     <h4 className="font-playfair font-bold text-platinum text-lg mb-2 flex items-center gap-2">
                       <span className="w-8 h-[1px] bg-[#d4af37]"></span> The Plan
                     </h4>
                     <p className="text-text-secondary text-sm leading-relaxed">{selectedDeal.plan}</p>
                  </div>

                  <div>
                     <h4 className="font-playfair font-bold text-[#d4af37] text-lg mb-2 flex items-center gap-2">
                       <span className="w-8 h-[1px] bg-[#d4af37]"></span> The Results
                     </h4>
                     <p className="text-platinum text-sm leading-relaxed font-medium">{selectedDeal.results}</p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-4">
                  <p className="text-platinum font-playfair font-bold text-lg">Snapshot</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {selectedDeal.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3 bg-black/30 p-3 rounded border border-white/5">
                        <span className="text-[#d4af37] font-bold mt-0.5">✓</span>
                        <span className="text-text-secondary font-inter text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FIX 2: SPACING ANCHOR
                  - 'mt-16' forces a hard 64px gap from the Snapshot list above.
                  - 'mt-auto' pushes it to the bottom if there is extra vertical space.
              */}
              <div className="mt-auto mt-16 pt-8 border-t border-[#d4af37]/20">
                <Link
                  href={`/contact?source=deals&deal=${selectedDeal.title}`}
                  className="btn-gold w-full md:w-auto font-inter font-semibold inline-block text-center shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-shadow"
                >
                  Request Full Case Study
                </Link>
              </div>

            </div>

            {/* Right Column: Image */}
            {/* FIX 3: FLEXIBLE HEIGHT
                - Changed 'h-[600px]' to 'min-h-[600px] h-full'. 
                - This allows the image to stretch taller if the text on the left is very long, 
                  preventing the left column from looking squished.
            */}
            <div className="relative min-h-[600px] h-full w-full rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
              <Image
                src={selectedDeal.image || "/placeholder.svg"}
                alt={selectedDeal.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-2">{selectedDeal.story}</p>
                  <h3 className="text-3xl font-bold text-white font-playfair">{selectedDeal.title}</h3>
              </div>
            </div>

          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}