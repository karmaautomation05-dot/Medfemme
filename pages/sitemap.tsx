import React from 'react'
import Link from 'next/link'
import SEO from '../components/SEO'
import { blogPosts } from '../data/blogPosts'
import { FileText, ChevronRight, Home, Users, Activity, Calendar, Phone, Newspaper, ImageIcon } from 'lucide-react'

export default function SitemapPage() {
  const mainPages = [
    { title: 'Home', href: '/', icon: Home },
    { title: 'About Dr. Priyanka Bhargava', href: '/about', icon: Users },
    { title: 'Our Services', href: '/services', icon: Activity },
    { title: 'Book Appointment', href: '/appointment', icon: Calendar },
    { title: 'Contact Us', href: '/contact', icon: Phone },
    { title: 'Health Blog', href: '/blog', icon: Newspaper },
    { title: 'Gallery', href: '/gallery', icon: ImageIcon },
  ]

  const legalPages = [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
  ]

  return (
    <>
      <SEO 
        title="Sitemap | Medfemme Women's Clinic Kanpur" 
        description="Visual sitemap for Medfemme. Navigate easily through all our pages and clinical blog articles." 
        url="/sitemap"
      />
      
      <section className="bg-brand-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Sitemap</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of all content available on our website.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Navigation */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 pb-4 border-b border-brand-100 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-600 text-white rounded-xl flex items-center justify-center">1</span>
                Main Navigation
              </h2>
              <ul className="space-y-4">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-brand-50 border border-slate-100 hover:border-brand-200 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <page.icon size={20} />
                      </div>
                      <span className="font-bold text-slate-700 group-hover:text-brand-700">{page.title}</span>
                      <ChevronRight size={16} className="ml-auto text-slate-300 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Health Blog Content */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 pb-4 border-b border-brand-100 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-600 text-white rounded-xl flex items-center justify-center">2</span>
                Latest Blog Posts
              </h2>
              <div className="max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-brand-200 scrollbar-track-transparent">
                <ul className="space-y-3">
                  {blogPosts.map((post) => (
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="group flex items-center gap-3 text-sm py-2 hover:text-brand-600 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-200 group-hover:bg-brand-600 transition-colors shrink-0"></div>
                        <span className="text-slate-600 font-medium group-hover:text-brand-700">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company & Legal */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 pb-4 border-b border-brand-100 flex items-center gap-3">
                <span className="w-10 h-10 bg-brand-600 text-white rounded-xl flex items-center justify-center">3</span>
                Legal & Support
              </h2>
              <ul className="space-y-4">
                {legalPages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-brand-50 border border-slate-100 hover:border-brand-200 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        <FileText size={20} />
                      </div>
                      <span className="font-bold text-slate-700 group-hover:text-slate-900">{page.title}</span>
                      <ChevronRight size={16} className="ml-auto text-slate-300 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600/10 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-slate-400 text-sm mb-6">Contact our support team for any technical issues or appointment queries.</p>
                <Link href="/contact" className="block text-center py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-brand-50 transition-colors">
                  Contact Support
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
