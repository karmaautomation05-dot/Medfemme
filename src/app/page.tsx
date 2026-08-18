import Hero from '@/components/Hero'
import AboutDr from '@/components/AboutDr'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import Statistics from '@/components/Statistics'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import AppointmentForm from '@/components/AppointmentForm'
import GoogleMaps from '@/components/GoogleMaps'
import { homeFaqs } from '@/data/homeFaqs'

export const metadata = {
  title: 'Best Gynecologist in Kanpur | Medfemme — Dr. Priyanka Bhargava',
  description: "Medfemme by Dr. Priyanka Bhargava offers premium maternity care, gynecology, and infertility treatments in Kanpur. 20+ years experience. Book your appointment today.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Best Gynecologist in Kanpur | Medfemme — Dr. Priyanka Bhargava',
    description: "Medfemme by Dr. Priyanka Bhargava offers premium maternity care, gynecology, and infertility treatments in Kanpur.",
    url: 'https://medfemme.in',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      'name': 'Dr. Priyanka Bhargava',
      'image': 'https://medfemme.in/images/Dr_Priyana_Bhargava_Profile_Photo.webp',
      'medicalSpecialty': 'Obstetrics & Gynecology',
      'description': 'Dr. Priyanka Bhargava is a leading Obstetrician and Gynecologist in Kanpur with over 20+ years of experience.',
      'url': 'https://medfemme.in',
      'sameAs': [
        'https://share.google/mP87e4A9GDGgzvn1t',
        'https://www.practo.com/kanpur/doctor/priyanka-bhargava-1',
        'https://www.justdial.com/Kanpur/Dr-Priyanka-Bhargava-Near-Ved-Pathology-Swaroop-Nagar/0512PX512-X512-260617164916-U6R5_BZDET'
      ],
      'telephone': '+91 7309038872',
      'priceRange': '₹ 400 - ₹ 1000',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '7/198 - A, Anand Bazar, Khalasi Line, Swaroop Nagar',
        'addressLocality': 'Kanpur',
        'addressRegion': 'Uttar Pradesh',
        'postalCode': '208002',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '26.4499',
        'longitude': '80.3319'
      }
    },
    {
      '@type': 'MedicalClinic',
      'name': 'Medfemme',
      'url': 'https://medfemme.in',
      'image': 'https://medfemme.in/images/Medfemme_logo_main.webp',
      'logo': 'https://medfemme.in/images/Medfemme_logo_main.webp',
      'telephone': '+91 7309038872',
      'priceRange': '₹ 400 - ₹ 1000',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '7/198 - A, Anand Bazar, Khalasi Line, Swaroop Nagar',
        'addressLocality': 'Kanpur',
        'addressRegion': 'Uttar Pradesh',
        'postalCode': '208002',
        'addressCountry': 'IN'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '10:00',
        'closes': '19:00'
      }
    },
    {
      '@type': 'FAQPage',
      'mainEntity': homeFaqs.map((f) => ({
        '@type': 'Question',
        'name': f.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.a
        }
      }))
    }
  ]
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Hero />
      <AboutDr />
      <ServicesOverview />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <FAQ />
      <AppointmentForm />
      <GoogleMaps />
    </>
  )
}
