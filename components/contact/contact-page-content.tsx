"use client"

import { useState } from "react"

interface ContactFormProps {
  initialSubject?: string
  initialMessage?: string
}

export default function ContactForm({ initialSubject = "", initialMessage = "" }: ContactFormProps) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you! We will be in touch shortly.")
  }

  // --- UPDATED STYLES FOR DEEP SPACING ---

  // 1. INPUTS: Changed 'py-3.5' to 'py-5'. 
  //    Added 'text-lg' and 'leading-relaxed' so text sits comfortably inside the taller box.
  const inputStyles = "w-full bg-[#1a1a1a] border border-white/10 rounded px-6 py-5 text-platinum placeholder:text-gray-500 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] outline-none transition-all duration-300 text-lg leading-relaxed"
  
  // 2. LABELS: Changed 'mb-2' to 'mb-4'. 
  //    This separates the gold label from the white box clearly.
  const labelStyles = "block text-xs font-bold text-[#d4af37] mb-4 uppercase tracking-widest"
  
  // 3. HEADERS: Changed 'mb-8' to 'mb-14'. 
  //    This pushes the first input field far below the divider line.
  const sectionHeaderStyles = "text-2xl font-playfair font-bold text-white mb-14 pb-6 border-b border-white/10 flex items-center gap-4"

  return (
    // Increased container padding to p-10 md:p-16
    <form onSubmit={handleSubmit} className="bg-[#0f0f0f] p-10 md:p-16 rounded-xl border border-white/5 shadow-2xl">
      
      {/* --- Personal Info --- */}
      {/* Changed mb-12 to mb-20 for huge separation between sections */}
      <div className="mb-20">
        <h3 className={sectionHeaderStyles}>
          <span className="w-8 h-[1px] bg-[#d4af37]"></span> Personal Information
        </h3>
        
        {/* CRITICAL CHANGE: added 'gap-y-12'. 
            This adds 48px of vertical space between the rows (e.g. between Name and Email). 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          <div><label className={labelStyles}>First Name *</label><input required name="firstName" onChange={handleChange} className={inputStyles} /></div>
          <div><label className={labelStyles}>Last Name *</label><input required name="lastName" onChange={handleChange} className={inputStyles} /></div>
          <div><label className={labelStyles}>Email *</label><input required type="email" name="email" onChange={handleChange} className={inputStyles} /></div>
          <div><label className={labelStyles}>Phone *</label><input required type="tel" name="phone" onChange={handleChange} className={inputStyles} /></div>
        </div>
      </div>

      {/* --- Investment Goals --- */}
      <div className="mb-16">
        <h3 className={sectionHeaderStyles}>
          <span className="w-8 h-[1px] bg-[#d4af37]"></span> Investment Criteria
        </h3>
        
        {/* Applied 'gap-x-12 gap-y-12' here as well */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          <div>
            <label className={labelStyles}>Investment Amount</label>
            <select name="investmentAmount" onChange={handleChange} className={inputStyles} defaultValue="">
              <option value="" disabled>Select Range</option>
              <option value="50k-100k">$50k - $100k</option>
              <option value="100k+">$100k+</option>
            </select>
          </div>
          <div>
            <label className={labelStyles}>Accreditation</label>
            <select name="accreditation" onChange={handleChange} className={inputStyles} defaultValue="">
               <option value="" disabled>Select Status</option>
               <option value="yes">Accredited</option>
               <option value="no">Non-Accredited</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button - Added mt-8 to separate from last inputs */}
      <button type="submit" className="w-full btn-gold py-5 mt-8 text-xl font-bold uppercase tracking-wider hover:scale-[1.01] transition-transform">
        Submit Inquiry
      </button>
    </form>
  )
}