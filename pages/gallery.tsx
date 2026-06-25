import React from 'react'
import Image from 'next/image'
import SEO from '../components/SEO'

export default function Gallery() {
  const videos = [
    { 
      src: '/images/Patients_Images/Dr-Priyanka-Bhargava-doing-operation-video(1).mp4', 
      title: 'Operation Theatre Insights',
      description: 'Advanced laparoscopic and minimally invasive procedures'
    },
    { 
      src: '/images/Patients_Images/Dr-Priyanka-Bhargava-doing-operation-video(2).mp4', 
      title: 'Surgical Expertise',
      description: 'Precision, safety, and care in every procedure'
    },
    { 
      src: '/images/News_Images/Dr-Priyanka-Bhargava-at-medfemme-video.mp4', 
      title: 'Medfemme Overview',
      description: 'A glimpse inside our state-of-the-art premium facilities'
    }
  ]

  const patientsImages = Array.from({ length: 9 }, (_, i) => `/images/Patients_Images/Dr-Priyanka-Bhargava-with-patient(${i + 1}).webp`);
  
  const newsImages = [
    '/images/News_Images/Dr-Priyanka-Bhargava-in-news(1).webp',
    '/images/News_Images/Dr-Priyanka-Bhargava-in-news(2).webp',
    ...Array.from({ length: 5 }, (_, i) => `/images/News_Images/Dr-Priyanka-Bhargava-getting-award(${i + 1}).webp`),
    ...Array.from({ length: 4 }, (_, i) => `/images/News_Images/Dr-Priyanka-Bhargava-at-Maharana-Pratap(${i + 1}).webp`),
    '/images/News_Images/Dr-Priyanka-Bhargava-at-inauguration.webp',
    '/images/News_Images/Dr-Priyanka-Bhargava-Happy-Patient.webp'
  ]

  const clinicImages = [
    ...Array.from({ length: 15 }, (_, i) => `/images/Clinic_Images/Dr-Priyanka-Bhargava-in-operation-theatre(${i + 1}).webp`),
    ...Array.from({ length: 4 }, (_, i) => `/images/Clinic_Images/Dr-Priyanka-Bhargava-with-newborn(${i + 1}).webp`),
    '/images/Clinic_Images/Dr-Priyanka-Bhargava-with-staff(1).webp',
    '/images/Clinic_Images/Dr-Priyanka-Bhargava-with-staff(2).webp'
  ]

  return (
    <>
      <SEO 
        title="Gallery | Medfemme Women's Clinic Kanpur" 
        description="Explore the gallery of Medfemme Women's Clinic. See life at our clinic, latest news, and our advanced facilities." 
        url="/gallery"
      />
      
      <section className="bg-brand-50 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Our Gallery</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take a look at the life inside Medfemme Clinic, our happy patients, achievements, and advanced clinical setup.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 relative aspect-video group">
                <video 
                  src={video.src} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                  title={video.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                  <h3 className="text-white font-serif font-bold text-xl mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{video.title}</h3>
                  <p className="text-slate-200 text-sm translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Clinic (Patients Images) */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">Life at Clinic</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {patientsImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 cursor-pointer">
                <Image 
                  src={src} 
                  alt={`Dr. Priyanka Bhargava with patient ${idx + 1}`} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">News & Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newsImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 cursor-pointer">
                <Image 
                  src={src} 
                  alt={`Dr. Priyanka Bhargava in news and awards ${idx + 1}`} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Images */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">Clinic Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clinicImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 cursor-pointer">
                <Image 
                  src={src} 
                  alt={`Medfemme Clinic facility ${idx + 1}`} 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
