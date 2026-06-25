import SEO from '../components/SEO'
import AppointmentForm from '../components/AppointmentForm'
import FAQ from '../components/FAQ'
import { Clock, Phone, MapPin } from 'lucide-react'

export default function Appointment() {
  return (
    <>
      <SEO 
        title="Book an Appointment | Dr. Priyanka Bhargava Kanpur" 
        description="Schedule your consultation with Dr. Priyanka Bhargava at Medfemme. Easy online booking, WhatsApp integration, and flexible timings for all your obstetric and gynecological needs." 
        url="/appointment"
      />
      
      {/* Hero Header */}
      <section className="bg-brand-50 py-20">
        <div className="container text-center">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Reservation</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6">Book Your Appointment</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take a step towards better health today. Choose a convenient time and our team will get in touch with you shortly.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                   <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Clinic Hours</h4>
                  <p className="text-sm text-slate-500">4:30 PM to 6:30 PM Everyday</p>
                </div>
             </div>
             <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                   <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Call Support</h4>
                  <p className="text-sm text-slate-500">+91 7309038872</p>
                </div>
             </div>
             <div className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
                   <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-sm text-slate-500">7/198 - A, Anand Bazar, Khalasi Line, Swaroop Nagar, Kanpur</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <AppointmentForm />

      <FAQ />
    </>
  )
}
