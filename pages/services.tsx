import SEO from '../components/SEO'
import Image from 'next/image'
import ServicesOverview from '../components/ServicesOverview'
import AppointmentForm from '../components/AppointmentForm'
import { CheckCircle2 } from 'lucide-react'

const detailedServices = [
  {
    title: 'Obstetrics & Maternity',
    description: 'We offer comprehensive care throughout your pregnancy, ensuring the health and well-being of both mother and baby.',
    features: ['Pre-conception Counseling', 'Antenatal Care', 'High-Risk Pregnancy Management', 'Normal & Cesarean Delivery', 'Postnatal Care'],
    image: '/images/Dr_Priyanka_Bhargava_1.webp'
  },
  {
    title: 'General Gynecology',
    description: 'Our gynecological services cover everything from routine wellness exams to the treatment of complex conditions.',
    features: ['PMOS(PCOS) & Hormonal Issues', 'Menstrual Disorders', 'Fibroid Treatment', 'Menopause Management', 'Infection Treatment'],
    image: '/images/Dr_Priyanka_Bhargava_1.webp'
    },
    {
    title: 'Advanced Procedures',
    description: 'Dr. Priyanka Bhargava specializes in modern, minimally invasive techniques for various surgical needs.',
    features: ['Laparoscopic Surgery', 'Hysteroscopy', 'Colposcopy', 'Minor Surgical Procedures', 'Cyst Removal'],
    image: '/images/Dr_Priyanka_bhargava_3.webp'
    }
    ]

    export default function Services() {
    return (
    <>
      <SEO 
        title="Comprehensive Women's Healthcare Services in Kanpur" 
        description="Explore the range of services at Medfemme, including maternity care, high-risk pregnancy management, laparoscopic surgery, and general gynecology by Dr. Priyanka Bhargava." 
        url="/services"
      />
      
      {/* Hero Header */}
      <section className="bg-brand-50 py-20">
        <div className="container text-center">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Medical Excellence</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing specialized, compassionate care tailored to every stage of a woman's life journey.
          </p>
        </div>
      </section>

      <ServicesOverview />

      {/* Detailed Services Breakdown */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="space-y-24">
            {detailedServices.map((section, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="inline-block p-3 bg-brand-100 rounded-2xl text-brand-600 mb-6">
                    <span className="font-serif font-bold text-xl">0{idx + 1}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">{section.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-4">
                    {section.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 className="text-brand-600" size={20} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full aspect-video relative rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
                   <Image 
                     src={section.image} 
                     alt={section.title} 
                     fill 
                     className="object-cover"
                     sizes="(max-width: 768px) 100vw, 50vw"
                     loading="lazy"
                   />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
    </>
  )
}
