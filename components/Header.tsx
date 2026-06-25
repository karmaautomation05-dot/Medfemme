import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-100">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 shrink-0">
            <Image 
              src="/images/Medfemme_logo_main.webp" 
              alt="Medfemme Logo - Dr. Priyanka Bhargava" 
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-0.5">Dr. Priyanka Bhargava's</span>
            <span className="text-2xl sm:text-3xl font-serif font-bold text-brand-900 leading-none tracking-tight group-hover:text-brand-700 transition-colors">Medfemme</span>
            <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 uppercase tracking-widest mt-1">Complete Gynecology & Obstetrics Clinic</span>
          </div>
        </Link>
        
        <nav className="hidden xl:flex items-center gap-6">
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors whitespace-nowrap">Home</Link>
          <Link href="/about" className="flex flex-col text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors whitespace-nowrap group/about">            <span className="leading-tight">Dr. Priyanka Bhargava</span>
            <span className="text-[10px] font-medium text-slate-400 group-hover/about:text-brand-500 transition-colors">Best Gynecologist & Obstetrician</span>
          </Link>
          <Link href="/services" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors whitespace-nowrap">Services</Link>
          <Link href="/blog" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors whitespace-nowrap">Health Blog</Link>
          <Link href="/gallery" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors whitespace-nowrap">Gallery</Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors whitespace-nowrap">Contact</Link>
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <a href="tel:+917309038872" className="flex items-center gap-2 text-brand-700 font-bold hover:text-brand-800 transition-colors whitespace-nowrap">
            <Phone size={18} className="fill-brand-700/10" />
            <span>+91 7309038872</span>
          </a>
          <Link href="/appointment" className="btn-primary py-2.5 px-4 text-sm whitespace-nowrap shrink-0">Book Appointment</Link>
        </div>

        <button 
          className="xl:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors shrink-0" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-brand-100 py-6 px-4 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-lg font-medium text-slate-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="flex flex-col text-lg font-medium text-slate-600 px-2 py-1 group/about" onClick={() => setIsMenuOpen(false)}>            <span className="leading-tight">Dr. Priyanka Bhargava</span>
            <span className="text-[10px] font-medium text-slate-400 group-hover/about:text-brand-500 transition-colors">Best Gynecologist & Obstetrician</span>
          </Link>
            <Link href="/services" className="text-lg font-medium text-slate-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/blog" className="text-lg font-medium text-slate-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>Health Blog</Link>
            <Link href="/gallery" className="text-lg font-medium text-slate-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" className="text-lg font-medium text-slate-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <a href="tel:+917309038872" className="flex items-center justify-center gap-2 text-brand-700 font-bold p-3 bg-brand-50 rounded-xl">
              <Phone size={18} />
              <span>Call: +91 7309038872</span>
            </a>
            <Link href="/appointment" className="block btn-primary text-center" onClick={() => setIsMenuOpen(false)}>Book Appointment Now</Link>
          </div>
        </div>
      )}
    </header>
  )
}
