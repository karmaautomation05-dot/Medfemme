import React, { useState } from 'react'
import { Calendar, User, Phone, MessageSquare, Send, MessageCircle } from 'lucide-react'

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const whatsappLink = `https://wa.me/917309038872?text=${encodeURIComponent(
    `Hi Medfemme, I would like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nService: ${formData.service}\nMessage: ${formData.message}`
  )}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you might send this to an API or email
    window.open(whatsappLink, '_blank')
  }

  return (
    <section className="section-padding bg-brand-50/50" id="appointment">
      <div className="container">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
           <div className="p-8 md:p-12 lg:p-16 bg-brand-600 text-white relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">Book Now</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Schedule Your Consultation</h2>
                <p className="text-brand-100 text-lg leading-relaxed mb-12">
                  Take the first step towards better health. Fill out the form or reach out via WhatsApp for a faster response.
                </p>
                
                <div className="space-y-8">
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-brand-200 uppercase tracking-wider mb-1">Call Us Directly</div>
                        <div className="text-xl font-bold">+91 7309038872</div>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                        <MessageCircle size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-brand-200 uppercase tracking-wider mb-1">WhatsApp Support</div>
                        <div className="text-xl font-bold">Available 24/7 for Inquiries</div>
                      </div>
                   </div>
                </div>
              </div>
           </div>

           <div className="p-8 md:p-12 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <User size={16} className="text-brand-600" />
                      Full Name
                    </label>
                    <input 
                      required
                      id="full-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name" 
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone-number" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Phone size={16} className="text-brand-600" />
                      Phone Number
                    </label>
                    <input 
                      required
                      id="phone-number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter mobile number" 
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="preferred-date" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Calendar size={16} className="text-brand-600" />
                      Preferred Date
                    </label>
                    <input 
                      required
                      id="preferred-date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service-type" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <MessageSquare size={16} className="text-brand-600" />
                      Service Type
                    </label>
                    <select 
                      id="service-type"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="Pregnancy & Maternity Care">Pregnancy & Maternity Care</option>
                      <option value="Gynecology Services">Gynecology Services</option>
                      <option value="PMOS(PCOS) / PCOD Care">PMOS(PCOS) / PCOD Care</option>
                      <option value="Fertility & Infertility Services">Fertility & Infertility Services</option>
                      <option value="Endometriosis Care">Endometriosis Care</option>
                      <option value="Fibroid Management">Fibroid Management</option>
                      <option value="Menopause & Midlife Health">Menopause & Midlife Health</option>
                      <option value="Family Planning & Reproductive Health">Family Planning & Reproductive Health</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="additional-notes" className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MessageSquare size={16} className="text-brand-600" />
                    Additional Notes
                  </label>
                  <textarea 
                    id="additional-notes"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your concern" 
                    rows={4}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all resize-none" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full btn-primary py-4 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold shadow-xl shadow-brand-200"
                >
                  <Send size={20} />
                  Confirm via WhatsApp
                </button>
                
                <p className="text-center text-xs text-slate-400 mt-4">
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </form>
           </div>
        </div>
      </div>
    </section>
  )
}
