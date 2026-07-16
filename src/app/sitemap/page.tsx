import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'

export const metadata = {
  title: 'Sitemap | Medfemme — Dr. Priyanka Bhargava Kanpur',
  description: "Complete sitemap of Medfemme Women's Clinic website. Find all pages, blog posts, and services offered by Dr. Priyanka Bhargava in Kanpur.",
  openGraph: {
    title: 'Sitemap | Medfemme — Dr. Priyanka Bhargava Kanpur',
    description: "Complete sitemap of Medfemme Women's Clinic website.",
    url: 'https://medfemme.in/sitemap',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitemap | Medfemme — Dr. Priyanka Bhargava Kanpur',
    description: "Complete sitemap of Medfemme Women's Clinic website.",
  },
}

const mainPages = [
  { title: 'Home', href: '/' },
  { title: 'About Dr. Priyanka Bhargava', href: '/about' },
  { title: 'Our Services', href: '/services' },
  { title: 'Gallery', href: '/gallery' },
  { title: 'Blog', href: '/blog' },
  { title: 'Book Appointment', href: '/appointment' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms & Conditions', href: '/terms' },
]

const servicePages = [
  { title: 'Maternity Care', href: '/services#maternity' },
  { title: 'Gynecology', href: '/services#gynecology' },
  { title: 'Infertility Treatment', href: '/services#infertility' },
  { title: 'Laparoscopic Surgery', href: '/services#laparoscopy' },
  { title: 'Cosmetic Gynecology', href: '/services#cosmetic' },
  { title: 'Wellness & Prevention', href: '/services#wellness' },
]

  const blogCategories = Array.from(new Set(blogPosts.map((post) => post.category)))

export default function Sitemap() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50/50 to-white overflow-hidden pt-24">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Sitemap</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
              Website <span className="text-brand-600">Sitemap</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Browse all pages and content available on the Medfemme website.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Main Pages</h2>
              <ul className="space-y-3">
                {mainPages.map((page, idx) => (
                  <li key={idx}>
                    <Link href={page.href} className="flex items-center gap-2 text-slate-600 hover:text-brand-600 transition-colors font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Services</h2>
              <ul className="space-y-3">
                {servicePages.map((page, idx) => (
                  <li key={idx}>
                    <Link href={page.href} className="flex items-center gap-2 text-slate-600 hover:text-brand-600 transition-colors font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-serif font-bold text-slate-900 mt-12 mb-6">Blog Categories</h2>
              <ul className="space-y-3">
                {blogCategories.map((category, idx) => (
                  <li key={idx}>
                    <Link href={`/blog?category=${encodeURIComponent(category)}`} className="flex items-center gap-2 text-slate-600 hover:text-brand-600 transition-colors font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-slate-100">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">All Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, idx) => (
                <Link key={idx} href={`/blog/${post.slug}`} className="group p-5 rounded-2xl border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-2 block">{post.category}</span>
                  <h3 className="font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">{post.title}</h3>
                  <span className="text-sm text-slate-500">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
