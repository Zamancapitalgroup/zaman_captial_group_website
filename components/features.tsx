"use client"

import ScrollFadeIn from "./scroll-fade-in"

export default function Features() {
  const features = [
    {
      // Icon: Minimal Building / Property Search
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-[#d4af37] mx-auto"
        >
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      ),
      title: "Strategic Acquisitions",
      description:
        "We identify and acquire premium multifamily properties with significant value-add potential in high-growth markets. Our disciplined sourcing process ensures we secure only the best opportunities.",
    },
    {
      // Icon: Minimal Gear / Settings (Operations)
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-[#d4af37] mx-auto"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Expert Management",
      description:
        "Our experienced team implements proven operational strategies to maximize returns and enhance property performance. We focus on sustainable value creation and operational excellence.",
    },
    {
      // Icon: Minimal Chart / Reporting
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-[#d4af37] mx-auto"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      ),
      title: "Transparent Reporting",
      description:
        "Detailed quarterly reports and direct communication keep you informed every step of your investment journey. Access real-time performance data via our secure investor portal.",
    },
  ]

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-platinum mb-4">Why Choose Zaman Capital Group?</h2>
          <p className="text-[#d4af37]">Industry-Leading Expertise & Transparent Approach</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 100}>
              <div className="card h-full text-center hover:shadow-lg transition-all p-8 flex flex-col items-center">
                {/* UPDATED CONTAINER: 
                  - Removed 'text-6xl' (that was for emojis)
                  - Added a nice subtle background circle for the icon to sit in
                */}
                <div className="mb-6 p-4 bg-[#d4af37]/10 rounded-full inline-block">
                  {feature.icon}
                </div>
                
                <h3 className="text-platinum mb-3 text-center text-xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}