import React from 'react'
import SEO from '../components/SEO'

export default function PrivacyPolicy() {
  const lastUpdated = 'June 13, 2026'

  return (
    <>
      <SEO 
        title="Privacy Policy | Medfemme Women's Clinic Kanpur" 
        description="Privacy Policy for Medfemme. Learn how we handle and protect your personal data and health information." 
        url="/privacy"
      />
      
      <section className="bg-brand-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <p>At Medfemme, accessible from medfemme.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Medfemme and how we use it.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you book an appointment, fill out a contact form, or communicate with us via WhatsApp. This may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (phone number, email).</li>
              <li>Preferred appointment dates and type of service requested.</li>
              <li>Brief descriptions of your medical concerns (if provided in forms).</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website and services.</li>
              <li>Schedule and manage medical appointments.</li>
              <li>Communicate with you regarding your health concerns or bookings.</li>
              <li>Improve our website's user experience.</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">3. Medical Confidentiality</h2>
            <p>Your health information is handled with the highest degree of confidentiality in accordance with medical ethics and relevant regulations in India. We do not sell or share your personal health data with third parties for marketing purposes.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">4. Log Files</h2>
            <p>Medfemme follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">5. Cookies and Web Beacons</h2>
            <p>Like any other website, Medfemme uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">6. Contact Us</h2>
            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>drpriyankabhargava@medfemme.in</strong>.</p>
          </div>
        </div>
      </section>
    </>
  )
}
