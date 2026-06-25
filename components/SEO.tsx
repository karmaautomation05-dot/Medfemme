import Head from 'next/head'
import React from 'react'

type Props = {
  title: string
  description: string
  keywords?: string
  url?: string
  image?: string
  canonical?: string
  schema?: object
}

export default function SEO({ title, description, keywords, url, image, canonical, schema }: Props) {
  const siteName = 'Medfemme — Dr. Priyanka Bhargava'
  const fullTitle = `${title} | ${siteName}`
  const siteUrl = 'https://medfemme.in'
  const defaultImage = `${siteUrl}/images/dr_priyanka_bhargava_main_website.webp`

  return (
    <Head>
      <title>{fullTitle}</title>
      <link rel="canonical" href={canonical || `${siteUrl}${url === '/' ? '' : url || ''}`} />
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${url || ''}`} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* Mobile Metadata */}
      <meta name="theme-color" content="#db2777" />
      <meta name="application-name" content="Medfemme" />
      <meta name="apple-mobile-web-app-title" content="Medfemme" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  )
}
