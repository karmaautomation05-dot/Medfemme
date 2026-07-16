'use client'

import React from 'react'
import Image from 'next/image'
import { Award, BookOpen, Heart, ShieldCheck } from 'lucide-react'

export default function AboutDr() {
  const highlights = [
    { icon: Award, title: '20+ Years Experience', description: 'Extensive clinical expertise in high-risk obstetrics and gynecology with 20+ years of experience.' },
    { icon: BookOpen, title: 'Highly Qualified', description: 'MBBS, MS (Obstetrics & Gynecology) with advanced minimally invasive surgical and ART technique.' },
    { icon: Heart, title: 'Patient Centric', description: 'Compassionate approach focused on individual patient needs and comfort.' },
    { icon: ShieldCheck, title: 'Evidence Based', description: 'Committed to the highest standards of medical ethics and proven treatments.' },
  ]

  const gallery = [
    { src: '/images/Dr_Priyanka_Bhargava_1.webp', alt: 'Dr. Priyanka Bhargava - PMOS(PCOS) Specialist' },
    { src: '/images/Dr_Priyanka_Bhargava_2.webp', alt: 'Dr. Priyanka Bhargava - High Risk Pregnancy Care' },
    { src: '/images/Dr_Priyanka_bhargava_3.webp', alt: 'Dr. Priyanka Bhargava - Fertility Success' },
    { src: '/images/Dr_Priyanka_Bharga_4.webp', alt: 'Medfemme Clinic Interior' },
  ]

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[3/4]">
               <Image 
                 src="/images/Main_Images/Dr-Priyanka-Bhargava-at-her-clinic(1).webp" 
                 alt="Dr. Priyanka Bhargava - Best Gynecologist & Obstetrician in Kanpur" 
                 fill 
                 className="object-cover"
                 sizes="(max-width: 768px) 100vw, 50vw"
                 priority
               />
            </div>
            
            {/* Floating Experience Card */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-[180px] border border-brand-50 animate-bounce-slow">
              <div className="text-brand-600 font-serif font-bold text-3xl mb-1">20+</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight">Years of Clinical Excellence</div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-100 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent-100 rounded-full -z-10 animate-bounce-slow"></div>
          </div>

          <div>
            <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Meet Your Doctor</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              <span className="text-brand-700 bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent drop-shadow-sm">Dr. Priyanka Bhargava</span>
            </h2>
            <p className="text-lg text-brand-700 font-semibold mb-6">Obstetrician & Gynecologist in Kanpur</p>
            
            <div className="space-y-6 text-slate-600 leading-relaxed mb-10">
              <p>
                <span className="font-bold text-brand-600 underline decoration-brand-200 decoration-4 underline-offset-4 shadow-brand-100 drop-shadow-sm">Dr. Priyanka Bhargava</span> is an experienced Obstetrician and Gynecologist dedicated to providing comprehensive and compassionate healthcare for women at every stage of life. With over 20 years of clinical experience, she has earned the trust of countless patients through her patient-centered approach, clinical expertise, and commitment to excellence.
              </p>
              <p>
                At Medfemme Women&apos;s Clinic, <span className="font-bold text-brand-600 underline decoration-brand-100 decoration-2 underline-offset-2">Dr. Priyanka Bhargava</span> offers personalized care for pregnancy, high-risk pregnancies, PMOS(PCOS), infertility, menstrual disorders, family planning, menopause, endometriosis, fibroids, and overall women&apos;s wellness. She believes that every woman deserves individualized attention, clear communication, and evidence-based treatment tailored to her unique healthcare needs.
              </p>
              <p>
                Her approach combines modern medical advancements with compassionate care, ensuring that patients feel comfortable, informed, and confident throughout their healthcare journey. From adolescent gynecology and reproductive health to pregnancy care and menopause management, <span className="font-bold text-brand-600 underline decoration-brand-100 decoration-2 underline-offset-2">Dr. Priyanka Bhargava</span> is committed to supporting women through every phase of life.
              </p>
              <p>
                Through Medfemme Women&apos;s Clinic in Swaroop Nagar, Kanpur, her mission is to provide accessible, high-quality healthcare that empowers women to make informed decisions about their health and well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-brand-50/50 border border-brand-100/50">
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <item.icon className="text-brand-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-tight">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="pt-16 border-t border-slate-100">
           <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-slate-900">Life at the Clinic</h3>
              <p className="text-slate-500 mt-2">Dedicated to providing a comfortable and professional environment.</p>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 group">
                   <Image 
                     src={img.src} 
                     alt={img.alt} 
                     fill 
                     className="object-cover transition-all duration-700"
                     sizes="(max-width: 768px) 50vw, 25vw"
                     loading="lazy"
                   />
                </div>
              ))}
           </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}
