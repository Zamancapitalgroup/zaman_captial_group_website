"use client"

import ContactForm from "@/components/contact-form"
import ScrollFadeIn from "@/components/scroll-fade-in"

export default function ContactPage() {
  return (
    // 'paddingTop: 180px' guarantees the Header text never gets cut off.
    <main className="min-h-screen bg-black" style={{ paddingTop: '180px' }}>
      
      <div className="container mx-auto px-4 md:px-8">
        
        {/* HEADER SECTION */}
        {/* FIX 1: 'marginBottom: 200px' forces a huge gap between the text and the form */}
        <div className="text-left max-w-4xl" style={{ marginBottom: '100px' }}>
          <ScrollFadeIn>
            {/* FIX 2: 'marginBottom: 50px' forces a clear gap between the Title and the Paragraph */}
            <h1 
              className="text-4xl md:text-6xl font-bold text-platinum font-playfair"
              style={{ marginBottom: '20px' }}
            >
              Start the Conversation
            </h1>
            <p className="text-xl text-text-secondary font-inter leading-relaxed max-w-2xl">
              Whether you are an accredited investor looking for your next opportunity or a property owner considering a sale, we are ready to listen.
            </p>
          </ScrollFadeIn>
        </div>

        {/* LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">
          
          {/* LEFT: FORM (Takes 8 columns) */}
          <div className="lg:col-span-8 w-full">
            <ScrollFadeIn delay={0.2}>
              <ContactForm />
            </ScrollFadeIn>
          </div>

          {/* RIGHT: INFO (Takes 4 columns) */}
          <div className="lg:col-span-4 space-y-16 lg:sticky lg:top-32">
            
            <ScrollFadeIn delay={0.5}>
              {/* CONTACT INFO */}
              <div className="border-l-2 border-white/20 pl-8">
                <h3 className="text-3xl font-playfair text-white mb-8">Connect</h3>
                
                <div className="space-y-10">
                  <div>
                    <span className="text-[#d4af37] font-bold uppercase text-xs tracking-[0.2em] block mb-3">
                      General Inquiries
                    </span>
                    <a 
                      href="mailto:partners@zamancapitalgroup.com" 
                      className="text-lg text-platinum hover:text-[#d4af37] transition-colors break-all"
                    >
                      partners@zamancapitalgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>

          </div>

        </div>
        
        {/* THE FOOTER SHIELD - Forces space at bottom */}
        <div className="w-full h-[250px]"></div>

      </div>
    </main>
  )
}