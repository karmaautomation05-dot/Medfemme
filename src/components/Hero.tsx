'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MessageCircle, ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  const sliderImages = [
    '/images/Main_Images/Dr-Priyanka-Bhargava-Best-Gynecologist(1).webp',
    '/images/Main_Images/Dr-Priyanka-Bhargava-Best-Gynecologist(2).webp',
    '/images/Main_Images/Dr-Priyanka-Bhargava-at-her-clinic(1).webp',
    '/images/Main_Images/Dr-Priyanka-Bhargava-at-her-clinic(2).webp',
    '/images/Main_Images/Dr-Priyanka-Bhargava-at-her-clinic(3).webp',
    '/images/Clinic_Images/Dr-Priyanka-Bhargava-with-newborn(1).webp',
    '/images/Clinic_Images/Dr-Priyanka-Bhargava-with-newborn(2).webp',
    '/images/Clinic_Images/Dr-Priyanka-Bhargava-with-newborn(3).webp',
    '/images/Clinic_Images/Dr-Priyanka-Bhargava-with-newborn(4).webp'
  ];

  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="relative overflow-hidden bg-brand-50/50">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-brand-100/50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-accent-100/50 rounded-full blur-3xl opacity-50"></div>

      <div className="container relative section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-bold mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              Premium Women's Healthcare in Kanpur
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-8">
              Expert Care for <span className="text-brand-600 italic">Every Stage</span> of Womanhood
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Dr. Priyanka Bhargava provides compassionate, evidence-based obstetrics and gynecology care. From maternity to wellness, we are dedicated to your health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/appointment" className="btn-primary flex items-center justify-center gap-2 group whitespace-nowrap">
                <Calendar size={20} />
                <span>Book Appointment</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="https://wa.me/917309038872" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2 whitespace-nowrap">
                <MessageCircle size={20} className="text-green-600 fill-green-600/10" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center gap-6 py-6 border-t border-brand-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-brand-200 overflow-hidden flex items-center justify-center text-brand-700 font-bold text-xs">
                    {i}+
                  </div>
                ))}
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 leading-none mb-1">10,000+</div>
                <div className="text-sm text-slate-500 font-medium">Happy Patients Treated</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border-[12px] border-white bg-slate-100">
               {sliderImages.map((src, idx) => (
                 <Image 
                   key={idx}
                   src={src} 
                   alt={`Dr. Priyanka Bhargava - Image ${idx + 1}`} 
                   fill 
                   className={`object-cover transition-opacity duration-1000 ${idx === currentImageIdx ? 'opacity-100' : 'opacity-0'}`}
                   priority={idx === 0}
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
               ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
