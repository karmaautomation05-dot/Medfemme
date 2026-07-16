import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blogPosts'

export const metadata = {
  title: "Women's Health Blog | Medfemme Women's Clinic Kanpur",
  description: "Stay informed with the latest articles on PCOS, pregnancy care, fertility, and women's health from Dr. Priyanka Bhargava at Medfemme Kanpur.",
  openGraph: {
    title: "Women's Health Blog | Medfemme Women's Clinic Kanpur",
    description: "Stay informed with the latest articles on PCOS, pregnancy care, fertility, and women's health from Dr. Priyanka Bhargava at Medfemme Kanpur.",
    url: 'https://medfemme.in/blog',
  },
}

export default function BlogIndex() {
  return (
    <>
      <div className="bg-gradient-to-b from-brand-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Women's Health <span className="text-brand-600">Insights</span>
            </h1>
            <p className="text-lg text-gray-600">
              Expert advice, patient guides, and health tips from Dr. Priyanka Bhargava at Medfemme Women's Clinic, Kanpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-brand-100 flex flex-col">
                <Link href={`/blog/${post.slug}`} className="block relative h-64 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.alt}
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-brand-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {post.metaDescription}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <Link href={`/blog/${post.slug}`} className="text-brand-600 font-semibold text-sm hover:underline flex items-center">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
