import SEO from '../components/SEO'
import Hero from '../components/Hero'
import AboutDr from '../components/AboutDr'
import ServicesOverview from '../components/ServicesOverview'
import WhyChooseUs from '../components/WhyChooseUs'
import Statistics from '../components/Statistics'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import AppointmentForm from '../components/AppointmentForm'
import GoogleMaps from '../components/GoogleMaps'

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
      'telephone': '+91 7309038872',
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
      'logo': 'https://medfemme.in/images/Medfemme_logo_main.webp',
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        'opens': '10:00',
        'closes': '19:00'
      }
    }
  ]
}

export default function Home() {
  return (
    <>
      <SEO 
        title="Best Gynecologist in Kanpur" 
        description="Medfemme by Dr. Priyanka Bhargava offers premium maternity care, gynecology, and infertility treatments in Kanpur. 20+ years experience. Book your appointment today." 
        url=""
        schema={schema} 
      />
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
