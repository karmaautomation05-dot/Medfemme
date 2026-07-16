import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions | Medfemme — Dr. Priyanka Bhargava',
  description: "Read the terms and conditions of Medfemme Women's Clinic. Understand the guidelines for using our website and services.",
  openGraph: {
    title: 'Terms & Conditions | Medfemme — Dr. Priyanka Bhargava',
    description: "Read the terms and conditions of Medfemme Women's Clinic.",
    url: 'https://medfemme.in/terms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Medfemme — Dr. Priyanka Bhargava',
    description: "Read the terms and conditions of Medfemme Women's Clinic.",
  },
}

export default function Terms() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/50 to-white overflow-hidden pt-24">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Terms & Conditions</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              Terms & <span className="text-brand-600">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Medfemme Women&apos;s Clinic website (medfemme.in) and our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">2. Medical Disclaimer</h2>
              <p>
                The content on this website is provided for general informational purposes only and is not intended as medical advice. It should not be used for self-diagnosis or as a substitute for professional medical consultation, diagnosis, or treatment.
              </p>
              <p>
                Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it based on information from this website.
              </p>
              <p>
                If you are experiencing a medical emergency, please call emergency services immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">3. Appointment and Consultation</h2>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Appointment requests submitted through our website are subject to availability and confirmation.</li>
                <li>We reserve the right to reschedule or cancel appointments due to unforeseen circumstances.</li>
                <li>Patients are requested to arrive on time for their appointments. Late arrivals may result in shortened consultation time or rescheduling.</li>
                <li>Please provide accurate and complete information during the appointment booking process.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, graphics, logos, videos, and design elements, is the property of Medfemme Women&apos;s Clinic unless otherwise stated. You may not reproduce, distribute, modify, or republish any content without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">5. User Conduct</h2>
              <p>When using our website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Submit false or misleading information.</li>
                <li>Use the website for any unlawful purpose.</li>
                <li>Attempt to interfere with the proper functioning of the website.</li>
                <li>Upload or transmit viruses, malware, or any harmful code.</li>
                <li>Engage in any activity that could damage, disable, or impair our servers or networks.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">6. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services (including WhatsApp, Google Maps, and social media platforms). We do not endorse and are not responsible for the content, accuracy, or practices of these third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
              <p>
                Medfemme Women&apos;s Clinic, its doctors, staff, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use our website or services.
              </p>
              <p>
                We make no warranties or representations about the accuracy, reliability, completeness, or timeliness of the content on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify or update these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting. Your continued use of the website after any changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">9. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Kanpur, Uttar Pradesh.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">10. Contact Information</h2>
              <p>
                If you have any questions or concerns regarding these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 p-6 bg-brand-50 rounded-2xl border border-brand-100">
                <p className="font-bold text-slate-900">Medfemme Women&apos;s Clinic</p>
                <p>7/198 - A, Anand Bazar, Khalasi Line, Swaroop Nagar, Kanpur, Uttar Pradesh 208002</p>
                <p>Phone: <a href="tel:+917309038872" className="text-brand-600 font-semibold">+91 7309038872</a></p>
                <p>Email: <a href="mailto:info@medfemme.in" className="text-brand-600 font-semibold">info@medfemme.in</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
