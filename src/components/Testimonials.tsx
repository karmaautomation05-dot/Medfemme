import React from 'react'
import { Star, Quote, ExternalLink } from 'lucide-react'

const items = [
  { 
    name: 'Nitin Guptaa', 
    role: 'Maternity Patient Family',
    text: "Best treatment at Bhargava hospital. Doctor and staff are so ploute and supportive. Priyanka ma'am did the c section of my wife to deliver twins. The hospital is so ploute and supportive. Staff such Nidhi, Jyoti, shobha aunty, mantasha etc are so supportive. Our time in hospital was smooth and we didn't face any issues.",
    rating: 5,
    verifyUrl: 'https://share.google/AQMlUbRbyzITnnqOt'
  },
  { 
    name: 'Priyanshi dixit', 
    role: 'Maternity Patient',
    text: "I am incredibly grateful to Dr.Priyanka Bhargava for the exceptional care and support she provided throughout my pregnancy. She would never recommend unnecessary tests and encourages normal delivery. During delivery as well , she is very supportive and encouraging. Her calm and confident approach, paired with her deep knowledge and compassion, gave me so much strength and peace of mind.",
    rating: 5,
    verifyUrl: 'https://share.google/tYFTBXeEKZzPXqyFH'
  },
  { 
    name: 'Ujjwal Singh', 
    role: 'Patient Relative',
    text: "Recently my relatives continuously visiting to Dr Priyanka bhargava regarding pregnancy frm last 8 months and whatever dr. Has suggested came up to a good help, she was up to her word . Staff was very cooperative.",
    rating: 5,
    verifyUrl: 'https://share.google/NvoItxBo6NvO024hQ'
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-200 to-transparent"></div>
      
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">What Our Patients Say</h2>
          <p className="text-lg text-slate-600">
            Real experiences from those who trusted us with their health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((t, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative group hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
              <div className="absolute -top-5 right-10 w-12 h-12 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Quote size={24} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 text-yellow-400 mb-6" aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="text-slate-700 leading-relaxed mb-6 italic flex-grow">
                "{t.text}"
              </blockquote>

              <div className="mb-8">
                <a 
                  href={t.verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 transition-colors uppercase tracking-wider"
                >
                  <ExternalLink size={12} />
                  Verify Review
                </a>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a 
             href="https://www.google.com/search?q=dr+priyanka+bhargava+reviews&rlz=1C1CHBF_enIN1201IN1201&oq=dr+priyanaka+bhargava+&gs_lcrp=EgZjaHJvbWUqCQgBEAAYDRiABDIGCAAQRRg5MgkIARAAGA0YgAQyDwgCEC4YDRivARjHARiABDIJCAMQABgNGIAEMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yBwgJEAAY7wXSAQkxODU5OGowajeoAgiwAgHxBd0YjblJAYKw&sourceid=chrome&ie=UTF-8#lrd=0x399c399adc10d245:0xc3eacc0b2257bec9,1,,,," 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-slate-500 font-medium hover:text-brand-600 transition-colors flex items-center justify-center gap-2 group"
           >
             <span>Read more Google Reviews</span>
             <Star size={16} className="fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  )
}
