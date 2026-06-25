import SEO from '../components/SEO'
import GoogleMaps from '../components/GoogleMaps'
import AppointmentForm from '../components/AppointmentForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 7309038872',
      description: 'Available for both locations',
      link: 'tel:+917309038872'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 7309038872',
      description: 'Instant response for booking',
      link: 'https://wa.me/917309038872'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'drpriyankabhargava@medfemme.in',
      description: 'For detailed inquiries',
      link: 'mailto:drpriyankabhargava@medfemme.in'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Two Locations',
      description: '11:00 AM - 6:30 PM (Sessions vary)',
      link: null
    }
  ]

  return (
    <>
      <SEO 
        title="Contact Us | Medfemme Women's Clinic Kanpur" 
        description="Get in touch with Medfemme. Find our address at 7/198 - A, Anand Bazar, Khalasi Line, Swaroop Nagar, Kanpur, call us for appointments, or chat with us on WhatsApp for expert gynecological care." 
        url="/contact"
      />
      
      {/* Hero Header */}
      <section className="bg-brand-50 py-20">
        <div className="container text-center">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6">Contact Medfemme</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are here to answer your questions and provide the care you deserve. Reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
                   <method.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                {method.link ? (
                  <a href={method.link} className="text-brand-700 font-bold mb-1 hover:text-brand-900 break-all">{method.value}</a>
                ) : (
                  <p className="text-brand-700 font-bold mb-1">{method.value}</p>
                )}
                <p className="text-sm text-slate-500">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
      
      <GoogleMaps />
    </>
  )
}
