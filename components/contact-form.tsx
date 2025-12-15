"use client"

import { useState } from "react"

// 🔴 VERIFY THIS IS YOUR DEPLOYMENT URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzSyxxaRqcDXT38HCmTSmjRW7wG77NrGcDMFS_wlTFkFNVAYrLaFlLu-HVLXkck10Ua1A/exec"

interface ContactFormProps {
  initialSubject?: string
  initialMessage?: string
}

export default function ContactForm({ initialSubject = "", initialMessage = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    investmentAmount: "",
    accreditation: "",
    timeline: "",
    sourceOfFunds: "",
    experience: "",
    message: initialMessage,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const params = new URLSearchParams()
      Object.entries(formData).forEach(([key, value]) => {
        params.append(key, value)
      })
      params.append("date", new Date().toISOString().split('T')[0])

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      })

      alert("Success! Your inquiry has been sent to our team.")
      
      setFormData({
        firstName: "", lastName: "", email: "", phone: "", location: "",
        investmentAmount: "", accreditation: "", timeline: "", sourceOfFunds: "",
        experience: "", message: "",
      })

    } catch (error) {
      console.error("Error submitting form", error)
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // --- UPDATED STYLING ---
  const inputStyles = "w-full bg-[#1a1a1a] border border-white/10 rounded px-6 py-5 text-platinum placeholder:text-gray-500 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all duration-300 leading-relaxed text-lg"
  const labelStyles = "block text-xs font-bold text-[#d4af37] mb-4 uppercase tracking-widest"
  
  // FIX: Added 'mt-24' to force huge spacing ABOVE the headers
  const sectionHeaderStyles = "text-2xl font-playfair font-bold text-white mb-14 pb-6 border-b border-white/10 flex items-center gap-4 mt-24 first:mt-0"

  return (
    <form onSubmit={handleSubmit} className="bg-[#0f0f0f] p-10 md:p-16 rounded-xl border border-white/5 shadow-2xl relative">
      
      {isSubmitting && (
        <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center rounded-xl backdrop-blur-sm">
           <div className="text-[#d4af37] font-playfair text-2xl animate-pulse font-bold tracking-widest">
             PROCESSING...
           </div>
        </div>
      )}

      {/* SECTION 1: PERSONAL INFORMATION */}
      <div> 
        <h3 className={sectionHeaderStyles}>
          <span className="w-8 h-[1px] bg-[#d4af37]"></span> Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          <div><label className={labelStyles}>First Name *</label><input required name="firstName" value={formData.firstName} onChange={handleChange} className={inputStyles} placeholder="Enter your first name" /></div>
          <div><label className={labelStyles}>Last Name *</label><input required name="lastName" value={formData.lastName} onChange={handleChange} className={inputStyles} placeholder="Enter your last name" /></div>
          <div><label className={labelStyles}>Email Address *</label><input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputStyles} placeholder="name@company.com" /></div>
          <div><label className={labelStyles}>Phone Number *</label><input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputStyles} placeholder="+1 (555) 000-0000" /></div>
          <div className="md:col-span-2"><label className={labelStyles}>Location</label><input type="text" name="location" value={formData.location} onChange={handleChange} className={inputStyles} placeholder="City, State, Country" /></div>
        </div>
      </div>

      {/* SECTION 2: INVESTMENT GOALS */}
      <div>
        <h3 className={sectionHeaderStyles}>
            <span className="w-8 h-[1px] bg-[#d4af37]"></span> Investment Criteria
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          <div>
            <label className={labelStyles}>Target Investment Amount</label>
            <select name="investmentAmount" value={formData.investmentAmount} onChange={handleChange} className={inputStyles}>
              <option value="" disabled>Select Range</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="100k-500k">$100,000 - $500,000</option>
              <option value="500k+">$500,000+</option>
            </select>
          </div>
          <div>
            <label className={labelStyles}>Accreditation Status</label>
            <select name="accreditation" value={formData.accreditation} onChange={handleChange} className={inputStyles}>
              <option value="" disabled>Select Status</option>
              <option value="yes">Accredited Investor</option>
              <option value="no">Non-Accredited Investor</option>
              <option value="unsure">Unsure / Need Info</option>
            </select>
          </div>
          <div>
            <label className={labelStyles}>Timeline</label>
            <select name="timeline" value={formData.timeline} onChange={handleChange} className={inputStyles}>
              <option value="" disabled>Select Timeline</option>
              <option value="now">Immediate</option>
              <option value="1-3months">1 - 3 Months</option>
              <option value="3-6months">3 - 6 Months</option>
              <option value="learning">Just Researching</option>
            </select>
          </div>
          <div>
            <label className={labelStyles}>Source of Capital</label>
            <select name="sourceOfFunds" value={formData.sourceOfFunds} onChange={handleChange} className={inputStyles}>
              <option value="" disabled>Select Source</option>
              <option value="cash">Cash / Liquid Savings</option>
              <option value="ira">Self-Directed IRA / 401k</option>
              <option value="1031">1031 Exchange</option>
              <option value="heloc">Line of Credit / HELOC</option>
            </select>
          </div>
        </div>
      </div>

      {/* SECTION 3: EXPERIENCE */}
      <div>
        <h3 className={sectionHeaderStyles}>
            <span className="w-8 h-[1px] bg-[#d4af37]"></span> Experience & Message
        </h3>
        <div className="space-y-12">
          <div>
            <label className={labelStyles}>Investor Experience Level</label>
            <textarea name="experience" value={formData.experience} onChange={handleChange} className={`${inputStyles} h-40 resize-none leading-loose`} placeholder="Briefly describe your real estate investing experience..."></textarea>
          </div>
          <div>
            <label className={labelStyles}>Additional Questions or Notes</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className={`${inputStyles} h-48 resize-none leading-loose`} placeholder="How can we help you achieve your goals?"></textarea>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full btn-gold py-6 text-xl font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(212,175,55,0.2)] transition-all duration-300 mt-16 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-[0_4px_30px_rgba(212,175,55,0.4)] hover:scale-[1.01]"
        }`}
      >
        {isSubmitting ? "Processing..." : "Submit Investor Inquiry"}
      </button>
    </form>
  )
}