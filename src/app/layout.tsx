import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://medfemme.in'),
  title: 'Best Gynecologist in Kanpur | Medfemme — Dr. Priyanka Bhargava',
  description: "Medfemme by Dr. Priyanka Bhargava offers premium maternity care, gynecology, and infertility treatments in Kanpur. 20+ years experience. Book your appointment today.",
  keywords: ['gynecologist Kanpur', 'obstetrician Kanpur', 'Dr. Priyanka Bhargava', 'women health', 'maternity care', 'PCOS treatment', 'laparoscopy Kanpur'],
  openGraph: {
    type: 'website',
    siteName: 'Medfemme — Dr. Priyanka Bhargava',
    title: 'Best Gynecologist in Kanpur | Medfemme — Dr. Priyanka Bhargava',
    description: "Medfemme by Dr. Priyanka Bhargava offers premium maternity care, gynecology, and infertility treatments in Kanpur.",
    url: 'https://medfemme.in',
    images: [{ url: '/images/dr_priyanka_bhargava_main_website.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Gynecologist in Kanpur | Medfemme — Dr. Priyanka Bhargava',
    description: "Medfemme by Dr. Priyanka Bhargava offers premium maternity care, gynecology, and infertility treatments in Kanpur.",
    images: ['/images/dr_priyanka_bhargava_main_website.webp'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'theme-color': '#db2777',
    'application-name': 'Medfemme',
    'apple-mobile-web-app-title': 'Medfemme',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.medfemme.in" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W757NBVF');
            `,
          }}
        />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W757NBVF" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
