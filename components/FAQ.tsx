import React, { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  { 
    q: 'Do you accept walk-ins for consultations?', 
    a: 'While we recommend booking an appointment to ensure minimal wait time, we do accept walk-ins depending on Dr. Priyanka\'s availability and clinical emergencies.' 
  },
  { 
    q: 'What should I bring for my first prenatal visit?', 
    a: 'Please bring any previous medical records, current medications, and a government ID. If you have any previous ultrasound reports or blood test results, they are very helpful.' 
  },
  { 
    q: 'Do you offer emergency gynecological services?', 
    a: 'Yes, we provide emergency care for acute issues. For life-threatening emergencies, please proceed to the nearest hospital and contact our clinic immediately.' 
  },
  { 
    q: 'Is laparoscopy (keyhole surgery) available at Medfemme?', 
    a: 'Yes, Dr. Priyanka Bhargava specializes in minimally invasive laparoscopic surgeries for various gynecological conditions, ensuring faster recovery.' 
  },
  { 
    q: 'How can I book a follow-up appointment?', 
    a: 'You can book a follow-up through our website\'s appointment form, via WhatsApp, or by calling our clinic directly during business hours.' 
  }
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
             <div className="sticky top-32">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-sm">
                  <HelpCircle size={32} />
                </div>
                <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Help Center</span>
                <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Find answers to common questions about our clinic, services, and patient care. Can't find what you're looking for? Contact us!
                </p>
                <a href="/contact" className="text-brand-600 font-bold border-b-2 border-brand-200 hover:border-brand-600 transition-all">
                   Contact Support
                </a>
             </div>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((f, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-[1.5rem] transition-all duration-300 overflow-hidden ${openIdx === idx ? 'border-brand-200 bg-brand-50/30' : 'border-slate-100 bg-white hover:border-brand-100'}`}
                >
                  <button 
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    aria-expanded={openIdx === idx}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                  >
                    <span className={`text-lg font-bold transition-colors ${openIdx === idx ? 'text-brand-700' : 'text-slate-900'}`}>
                      {f.q}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIdx === idx ? 'bg-brand-600 text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                      {openIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <div 
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className={`transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-brand-100/20">
                      {f.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
