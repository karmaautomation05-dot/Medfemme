import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { blogPosts } from '@/data/blogPosts'
import type { BlogPost } from '@/data/blogPosts'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://medfemme.in/blog/${post.slug}`,
      images: [{ url: post.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
    },
  }
}

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

interface Props {
  params: { slug: string }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return null

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== params.slug && (p.category === post.category || post.relatedSlugs?.includes(p.slug)))
    .slice(0, 3)

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://medfemme.in${post.image}`,
    "author": {
      "@type": "Person",
      "name": "Dr. Priyanka Bhargava",
      "url": "https://medfemme.in/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Medfemme",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medfemme.in/images/Medfemme_logo_main.webp"
      }
    },
    "datePublished": "2024-05-15",
    "description": post.metaDescription
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="bg-white">
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          <Image 
            src={post.image} 
            alt={post.alt}
            title={post.title}
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          
          <div className="absolute inset-0 flex items-end">
            <div className="container pb-12 md:pb-20">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-4 py-1 bg-brand-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                    {post.category}
                  </span>
                  {post.readingTime && (
                    <span className="text-white/60 text-sm font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                      {post.readingTime}
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                      <Image src="/images/Dr_Priyana_Bhargava_Profile_Photo.webp" alt="Dr. Priyanka Bhargava" fill className="object-cover" sizes="32px" />
                    </div>
                    <span className="font-semibold">Dr. Priyanka Bhargava</span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <span>Expert Obstetrics & Gynecology Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              {post.keyTakeaways && (
                <div className="bg-brand-50 rounded-3xl p-8 mb-12 border border-brand-100">
                  <h2 className="text-xl font-bold text-brand-900 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 bg-brand-600 text-white rounded-lg flex items-center justify-center text-sm italic">i</span>
                    Key Takeaways
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {post.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-brand-800 text-sm leading-relaxed">
                        <span className="text-brand-600 mt-1">✓</span>
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-slate-600 prose-p:leading-relaxed
                prose-li:text-slate-600
                prose-strong:text-slate-900
                prose-img:rounded-[2rem] prose-img:shadow-2xl">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>

              {post.warningBox && (
                <div className="mt-16 bg-red-50 rounded-3xl p-8 border border-red-100 flex items-start gap-6">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 text-red-600 font-bold text-2xl">!</div>
                  <div>
                    <h3 className="text-red-900 font-bold text-xl mb-2">{post.warningBox.title}</h3>
                    <p className="text-red-800 leading-relaxed">{post.warningBox.text}</p>
                  </div>
                </div>
              )}

              <div className="mt-20 pt-20 border-t border-slate-100">
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-2xl p-6 md:p-8">
                      <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": post.faqs.map((faq) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                      }
                    }))
                  })
                }}
              />
            </div>

            <aside className="lg:col-span-4 space-y-10">
              <div className="sticky top-28 space-y-10">
                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-100/50 text-center group">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image 
                      src="/images/Dr_Priyana_Bhargava_Profile_Photo.webp" 
                      alt="Dr. Priyanka Bhargava"
                      fill
                      className="object-cover rounded-full border-4 border-brand-50 p-1 group-hover:border-brand-100 transition-colors"
                      sizes="128px"
                    />
                    <div className="absolute -bottom-2 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">Dr. Priyanka Bhargava</h3>
                  <p className="text-brand-600 font-bold text-sm uppercase tracking-widest mb-4">Lead Gynecologist</p>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    With over 20+ years of experience, Dr. Priyanka specializes in High-Risk Pregnancy and advanced minimally invasive surgical and ART technique at Medfemme Kanpur.
                  </p>
                  <Link href="/appointment" className="block w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-brand-200 hover:translate-y-[-2px]">
                    Schedule Consultation
                  </Link>
                </div>

                <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-bold mb-4">Visit Our Clinic</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">Located in the heart of Kanpur, providing premium healthcare for women of all ages.</p>
                  <div className="space-y-5 text-sm">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white/10 rounded-lg"><Phone className="w-4 h-4 text-brand-400" /></div>
                      <div>
                        <p className="text-slate-400 mb-0.5">Emergency Contact</p>
                        <p className="font-bold text-white">+91 7309038872</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 text-white">
                       <div className="p-2 bg-white/10 rounded-lg"><MapPin className="w-4 h-4 text-brand-400" /></div>
                       <p className="m-0 leading-tight font-medium">Swaroop Nagar, Kanpur, UP</p>
                    </div>
                  </div>
                </div>

                {relatedPosts.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-8 h-px bg-brand-600"></span>
                      Related Reading
                    </h4>
                    <div className="space-y-4">
                      {relatedPosts.map((rPost) => (
                        <Link key={rPost.slug} href={`/blog/${rPost.slug}`} className="flex items-center gap-4 group">
                          <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                            <Image src={rPost.image} alt={rPost.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="80px" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-brand-600 transition-colors">{rPost.title}</h5>
                            <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-tighter">{rPost.category}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
