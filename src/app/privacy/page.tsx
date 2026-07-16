import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Medfemme — Dr. Priyanka Bhargava',
  description: "Read the privacy policy of Medfemme Women's Clinic. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: 'Privacy Policy | Medfemme — Dr. Priyanka Bhargava',
    description: "Read the privacy policy of Medfemme Women's Clinic.",
    url: 'https://medfemme.in/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Medfemme — Dr. Priyanka Bhargava',
    description: "Read the privacy policy of Medfemme Women's Clinic.",
  },
}

export default function Privacy() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/50 to-white overflow-hidden pt-24">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Privacy Policy</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              Privacy <span className="text-brand-600">Policy</span>
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
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                Medfemme Women&apos;s Clinic (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of our patients and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website medfemme.in or use our services.
              </p>
              <p>
                By using our website and services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Personal Identification Information:</strong> Name, phone number, email address, age, and medical history provided through appointment forms or during consultations.</li>
                <li><strong>Medical Information:</strong> Health records, treatment history, test results, and other medical data necessary for providing healthcare services.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
                <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device type for analytics and security purposes.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To schedule and manage appointments.</li>
                <li>To provide medical consultations, diagnosis, and treatment.</li>
                <li>To communicate with you regarding your health and appointments.</li>
                <li>To improve our website, services, and patient experience.</li>
                <li>To comply with legal and regulatory requirements.</li>
                <li>To send relevant health information and updates with your consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p>
                We respect the confidentiality of your personal and medical information. We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>With your explicit consent.</li>
                <li>With healthcare providers involved in your treatment.</li>
                <li>When required by law or to protect our legal rights.</li>
                <li>With service providers who assist us in operating our website and clinic operations (e.g., WhatsApp for appointment confirmations).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal and medical information against unauthorized access, alteration, disclosure, or destruction. These include secure servers, encrypted communications, and strict access controls.
              </p>
              <p>
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access your personal and medical information.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>Request deletion of your data, subject to legal retention requirements.</li>
                <li>Withdraw consent for communications at any time.</li>
                <li>File a complaint with relevant data protection authorities.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">7. Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Please note that disabling cookies may affect certain features of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites (such as Google Maps and WhatsApp). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
