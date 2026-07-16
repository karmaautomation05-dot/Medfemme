import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Medfemme — Dr. Priyanka Bhargava',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <section className="section-padding min-h-[70vh] flex items-center justify-center bg-white">
      <div className="container text-center max-w-2xl">
        <div className="text-8xl md:text-9xl font-serif font-bold text-brand-200 mb-6">404</div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Page Not Found</h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg mx-auto leading-relaxed">
          Sorry, the page you are looking for does not exist or has been moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary py-4 px-8">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary py-4 px-8">
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  )
}
