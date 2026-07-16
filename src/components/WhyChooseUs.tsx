import React from 'react'
import { Sparkles, Clock, UserCheck, Microscope } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Personalized Care',
      description: 'We understand that every woman is unique. Our treatments are tailored to your specific health needs and life stage.'
    },
    {
      icon: UserCheck,
      title: 'Expert Physician',
      description: 'Led by Dr. Priyanka Bhargava, our clinic offers world-class expertise right here in Kanpur.'
    },
    {
      icon: Clock,
      title: 'Minimal Wait Times',
      description: 'We value your time. Our efficient scheduling system ensures you see the doctor with minimal delays.'
    },
    {
      icon: Microscope,
      title: 'Modern Diagnostics',
      description: 'Equipped with the latest medical technology for accurate diagnosis and effective treatments.'
    }
  ]

  return (
    <section className="section-padding bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">The Medfemme Advantage</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Why Choose Our Clinic?</h2>
          <p className="text-lg text-slate-600">
            At Medfemme, we combine medical excellence with a compassionate touch to provide a healthcare experience that truly puts women first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mb-8 text-brand-600">
                <reason.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
