import React from 'react'
import SEO from '../components/SEO'

export default function TermsOfService() {
  const lastUpdated = 'June 13, 2026'

  return (
    <>
      <SEO 
        title="Terms of Service | Medfemme Women's Clinic Kanpur" 
        description="Terms of Service for Medfemme. Please read these terms carefully before using our website and medical services." 
        url="/terms"
      />
      
      <section className="bg-brand-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the Medfemme website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you should not use this website.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">2. Medical Disclaimer</h2>
            <p className="font-bold text-slate-900 italic">Important: This website is for informational purposes only. The content provided is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
            <p>Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">3. Appointments and Consultations</h2>
            <p>Submitting an appointment request through our website does not guarantee an immediate booking. Our staff will contact you to confirm the time and date based on availability. We reserve the right to reschedule appointments if necessary.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">4. User Conduct</h2>
            <p>You agree to use our website only for lawful purposes. You are prohibited from using the site to transmit any unlawful, threatening, or obscene material, or any material that could constitute or encourage conduct that would be considered a criminal offense.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">5. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is the property of Medfemme or its content suppliers and is protected by copyright laws. You may not reproduce, modify, or distribute any content without our prior written consent.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">6. Limitation of Liability</h2>
            <p>Medfemme and Dr. Priyanka Bhargava shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website or the information contained herein.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">7. Changes to Terms</h2>
            <p>We reserve the right to update or modify these Terms of Service at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the new terms.</p>

            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">8. Governing Law</h2>
            <p>These terms are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Kanpur, Uttar Pradesh.</p>
          </div>
        </div>
      </section>
    </>
  )
}
