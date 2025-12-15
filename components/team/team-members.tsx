"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import ScrollFadeIn from "../scroll-fade-in"

interface TeamMember {
  name: string
  role: string
  image: string
  longBio: string[]
  expertise: string[]
  linkedin: string
}

export default function TeamMembers() {
  const team: TeamMember[] = [
    {
      name: "Joseph Fiocco, Esq.",
      role: "Legal & Financial Due Diligence",
      // This one works because it has no spaces
      image: "/images/deals/team1.avif", 
      longBio: [
        "Joe is a Corporate and M&A attorney who ensures that every acquisition at Zaman Capital Group is legally sound, financially optimized, and risk-mitigated. His sharp legal expertise and strategic deal structuring give investors bulletproof transactions.",
        "                                                 ",
        "With a background in high-stakes corporate law, Joe specializes in contracts, due diligence, and financial structuring—ensuring that every deal is built for long-term success. Selected as a 2025 Rising Star by Maryland Super Lawyers Magazine, Joe's meticulous attention to legal and financial details allows Zaman Capital Group to navigate complex transactions with confidence.",
        "Joe thrives at the intersection of legal risk management and wealth-building strategy, protecting investor interests while positioning deals for maximum profitability.",
      ],
      expertise: ["Legal", "Due Diligence", "Financials", "Risk Mitigation", "Investor Protections"],
      linkedin: "https://www.linkedin.com/in/joefiocco/",
    },
    {
      name: "Nashra Zaman",
      role: "Acquisitions, Growth and Strategy",
      // FIXED: Added %20 to handle the space in "team 2"
      image: "/images/deals/team 2.jpg",
      longBio: [
        "Nashra is a visionary real estate investor who has successfully scaled a diversified portfolio across multifamily, single-family, and short-term rentals since 2020. She leads deal sourcing, acquisitions, and strategic growth for Zaman Capital Group, ensuring strong returns and long-term value creation for investors.",
        "With a background in project management at industry giants, Nashra brings a data-driven, analytical approach to real estate investing. Her ability to identify undervalued assets, optimize operations, and execute high-yield strategies makes her a trusted partner for investors seeking sustainable growth.",
        "Known for her sharp negotiation skills and relentless execution, Nashra thrives in high-stakes dealmaking. She transforms properties into high-performing assets while maintaining a proactive investor-first approach.",
      ],
      expertise: ["Acquisitions", "Deal Sourcing", "Investor Strategy", "Portfolio Growth"],
      linkedin: "https://www.linkedin.com/in/nashrazaman/",
    },
    {
      name: "Areeb Uzzaman",
      role: "Acquisitions, Growth and Strategy",
      // FIXED: Added %20 to handle the space in "team 3"
      image: "/images/deals/team 3.jpg",
      longBio: [
        "As the Operations Lead at Zaman Capital Group, Areeb orchestrates the internal infrastructure that drives the firm's investment strategy and portfolio growth. He partners with the principals to identify and execute value-add multifamily opportunities providing the analytical foundation for every acquisition. Currently pursuing a Master of Public Affairs from Brown University, Areeb brings a sophisticated, research-based, and long-term perspective to the team.",
        "He supports the due diligence process with rigorous accuracy, ensuring smooth transactions from the initial offer to closing.",
      ],
      expertise: ["Operations", "Technology", "Due Diligence", "Investor Relations"],
      linkedin: "https://linkedin.com",
    },
  ]

  return (
    <section className="section section-dark">
      <div className="container">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-platinum mb-4 font-playfair">
            Meet Our Expert Team
          </h2>
          <p className="text-text-secondary text-lg">
            The experts behind your investments
          </p>
        </div>

        {/* Team Members List */}
        <div className="space-y-12">
          {team.map((member, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 100}>
              <div className="card p-8 bg-black/40 border border-[#d4af37]/20 rounded-xl hover:border-[#d4af37]/50 transition-colors duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                  
                  {/* Left Column: Image & Role */}
                  <div className="md:col-span-4 flex flex-col items-center text-center">
                    <div className="relative w-64 h-80 mb-6 overflow-hidden rounded-lg border-2 border-[#d4af37]/30 shadow-2xl">
                      <Image 
                        src={member.image || "/placeholder.svg"} 
                        alt={member.name} 
                        fill 
                        className="object-cover hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-platinum font-playfair mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#d4af37] text-sm font-bold uppercase tracking-widest mb-6">
                      {member.role}
                    </p>

                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0077b5] hover:bg-[#d4af37] text-white rounded-md transition-all duration-300 text-sm font-bold shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group"
                    >
                      <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      View Profile
                    </Link>
                  </div>

                  {/* Right Column: Bio & Expertise */}
                  <div className="md:col-span-8">
                    <div className="space-y-4 mb-8">
                      {member.longBio.map((para, i) => (
                        <p key={i} className="text-text-secondary leading-relaxed text-lg">
                          {para}
                        </p>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-[#d4af37]/20">
                      <p className="text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-4">
                        Areas of Expertise
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {member.expertise.map((exp, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded text-sm text-platinum font-medium"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}