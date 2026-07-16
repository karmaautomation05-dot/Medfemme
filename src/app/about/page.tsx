import AboutDr from '@/components/AboutDr'
import Statistics from '@/components/Statistics'
import AppointmentForm from '@/components/AppointmentForm'
import { GraduationCap, Building2, HeartHandshake } from 'lucide-react'

export const metadata = {
  title: 'About Dr. Priyanka Bhargava | Best Gynecologist in Kanpur | Medfemme',
  description: "Learn more about Dr. Priyanka Bhargava, her qualifications, 20+ years of experience, and her commitment to providing the best women's healthcare in Kanpur at Medfemme.",
  openGraph: {
    title: 'About Dr. Priyanka Bhargava | Best Gynecologist in Kanpur | Medfemme',
    description: "Learn more about Dr. Priyanka Bhargava, her qualifications, 20+ years of experience, and her commitment to providing the best women's healthcare in Kanpur at Medfemme.",
    url: 'https://medfemme.in/about',
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Dr. Priyanka Bhargava',
  'image': 'https://medfemme.in/images/Dr_Priyana_Bhargava_Profile_Photo.webp',
  'jobTitle': 'Gynecologist & Obstetrician',
  'worksFor': { '@type': 'MedicalClinic', 'name': 'Medfemme' },
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Kanpur',
    'addressRegion': 'Uttar Pradesh',
    'addressCountry': 'IN'
  }
}

export default function About() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Education',
      details: ['MBBS, MS (Obstetrics & Gynecology)', 'Advanced Minimally Invasive Surgical Training', 'ART (Assisted Reproductive Technique) Specialist']
    },
    {
      icon: Building2,
      title: 'Experience',
      details: ['20+ Years of Clinical Practice', 'Senior Consultant at BMTC Kanpur', 'Expertise in High-Risk Pregnancies']
    },
    {
      icon: HeartHandshake,
      title: 'Philosophy',
      details: ['Patient-Centered Care', 'Evidence-Based Medicine', 'Compassionate & Ethical Practice']
    }
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <section className="bg-brand-50 py-20">
        <div className="container text-center">
          <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Founder</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6">About Dr. Priyanka Bhargava</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A legacy of care, excellence, and dedication to women&apos;s health in Kanpur.
          </p>
        </div>
      </section>

      <AboutDr />

      <Statistics />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credentials.map((item, idx) => (
              <div key={idx} className="p-10 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 mb-6">
                   <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">{item.title}</h3>
                <ul className="space-y-4">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-slate-600">
                       <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0"></span>
                       <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-50/30">
        <div className="container">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12 italic">&quot;My mission is to empower women through personalized healthcare, combining medical expertise with true compassion.&quot;</h2>
              <div className="w-24 h-1 bg-brand-600 mx-auto mb-8"></div>
              <p className="text-xl font-bold text-brand-900 uppercase tracking-widest">&mdash; Dr. Priyanka Bhargava</p>
           </div>
        </div>
      </section>

      <AppointmentForm />
    </>
  )
}
