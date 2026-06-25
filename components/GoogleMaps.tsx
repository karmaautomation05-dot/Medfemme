import React, { useState, useEffect, useRef } from 'react'
import { MapPin, Navigation, Phone, Clock } from 'lucide-react'

export default function GoogleMaps() {
  const [isIntersecting, setIntersecting] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const locations = [
    {
      title: 'Bhargava Medical and Trauma Centre',
      address: '30E, O Block, Kidwai Nagar, Kanpur, Uttar Pradesh 208023',
      mapEmbed: "https://maps.google.com/maps?q=Bhargava%20Medical%20and%20Trauma%20Centre,%2030E,%20O%20Block,%20Kidwai%20Nagar,%20Kanpur,%20Uttar%20Pradesh%20208023&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Bhargava+Medical+and+Trauma+Centre+30E+O+Block+Kidwai+Nagar+Kanpur",
      hours: '11:00 AM – 2:00 PM',
      days: 'Everyday',
      phone: '+91 7309038872'
    },
    {
      title: 'Medfemme Clinic',
      address: '7/198-A, Anand Bazar, Khalasi Line, Swaroop Nagar, Kanpur, Uttar Pradesh 208002',
      mapEmbed: "https://maps.google.com/maps?q=Medfemme%20Women's%20Clinic,%207/198-A,%20Anand%20Bazar,%20Khalasi%20Line,%20Swaroop%20Nagar,%20Kanpur,%20Uttar%20Pradesh%20208002&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapLink: "https://maps.app.goo.gl/Vv87DN47pUj1SVAD9",
      hours: '4:30 PM – 6:30 PM',
      days: 'Everyday',
      phone: '+91 7309038872'
    }
  ]

  return (
    <section className="bg-white section-padding" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Locations</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Clinic Schedules & Directions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Medfemme services are available at two convenient locations in Kanpur. Please check the schedule for each clinic before your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((loc, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
              {/* Map at Top */}
              <div className="w-full h-[300px] bg-slate-100 relative group overflow-hidden">
                {isIntersecting ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={loc.mapEmbed}
                    title={`${loc.title} Location`}
                    className="absolute inset-0 grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-brand-50/30">
                    <MapPin size={48} className="mb-4 text-brand-300 animate-pulse" />
                    <p className="font-serif italic text-lg text-brand-700/60">Map is loading...</p>
                  </div>
                )}
              </div>

              {/* Information below Map */}
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">{loc.title}</h3>
                
                <div className="space-y-6 mb-8 flex-grow">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center shrink-0 text-brand-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Address</h4>
                      <p className="text-slate-600 leading-relaxed">{loc.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center shrink-0 text-brand-600">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Working Hours</h4>
                      <p className="text-slate-600">{loc.days}: <span className="font-semibold text-brand-700">{loc.hours}</span></p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                  <a 
                    href={`tel:${loc.phone.replace(/\s/g, '')}`}
                    className="btn-primary flex items-center justify-center gap-2 py-4"
                  >
                    <Phone size={18} />
                    <span>Call Clinic</span>
                  </a>
                  <a 
                    href={loc.mapLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center justify-center gap-2 py-4"
                  >
                    <Navigation size={18} />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
