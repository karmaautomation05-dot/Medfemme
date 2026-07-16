import Link from 'next/link'
import Image from 'next/image'
import { Globe, MessageCircle, Share2, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative w-48 h-12 mb-2 bg-white rounded-lg p-2">
              <Image 
                src="/images/Medfemme_logo_main.webp" 
                alt="Medfemme Logo" 
                fill
                sizes="192px"
                className="object-contain"
              />
            </div>
            <p className="text-slate-400 leading-relaxed">
              Premium women's healthcare by Dr. Priyanka Bhargava. Providing compassionate, evidence-based care in Kanpur. Dedicated to excellence in obstetrics and gynecology.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Website" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-all group">
                <Globe size={18} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-all group">
                <MessageCircle size={18} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" aria-label="Share" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-all group">
                <Share2 size={18} className="text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-600"></span>
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/about" className="hover:text-brand-400 transition-colors">About Dr. Priyanka</Link></li>
              <li><Link href="/services" className="hover:text-brand-400 transition-colors">Our Services</Link></li>
              <li><Link href="/blog" className="hover:text-brand-400 transition-colors">Health Blog</Link></li>
              <li><Link href="/appointment" className="hover:text-brand-400 transition-colors">Book Appointment</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-400 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-600"></span>
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/services" className="hover:text-brand-400 transition-colors">Maternity Care</Link></li>
              <li><Link href="/services" className="hover:text-brand-400 transition-colors">Gynecology</Link></li>
              <li><Link href="/services" className="hover:text-brand-400 transition-colors">Infertility Treatment</Link></li>
              <li><Link href="/services" className="hover:text-brand-400 transition-colors">Laparoscopic Surgery</Link></li>
              <li><Link href="/services" className="hover:text-brand-400 transition-colors">High-Risk Pregnancy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-8 relative inline-block">
              Contact Details
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-brand-600"></span>
            </h4>
            <ul className="space-y-5 text-slate-400">
              <li className="flex gap-4">
                <MapPin className="text-brand-500 shrink-0 mt-1" size={20} />
                <a 
                  href="https://maps.app.goo.gl/t3YHwC1XZb1Ewz5SA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-brand-400 transition-colors"
                >
                  7/198 - A, Anand Bazar, Khalasi Line, Swaroop Nagar, Kanpur, Uttar Pradesh 208002
                </a>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-500 shrink-0 mt-1" size={20} />
                <a href="tel:+917309038872" className="font-semibold text-slate-200 hover:text-brand-400 transition-colors">
                  +91 7309038872
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-500 shrink-0 mt-1" size={20} />
                <a href="mailto:drpriyankabhargava@medfemme.in" className="break-all hover:text-brand-400 transition-colors">drpriyankabhargava@medfemme.in</a>
              </li>
              <li className="text-sm mt-2 text-slate-500 italic leading-relaxed">
                Note : For any other timings please contact 7309038872 and get an appointment for morning hours
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Medfemme Women's Clinic. Designed for Excellence.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-slate-300 transition-colors">Sitemap</Link>
            <a href="https://karmait.in/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Managed by Karma automation</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
