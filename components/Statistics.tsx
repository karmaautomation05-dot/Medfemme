import React from 'react'

export default function Statistics() {
  const stats = [
    { label: 'Years Experience', value: '20+' },
    { label: 'Patients Treated', value: '10,000+' },
    { label: 'Successful Deliveries', value: '5,000+' },
    { label: 'Positive Reviews', value: '1,000+' },
  ]

  return (
    <section className="py-20 bg-brand-950 text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-600 rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-5xl md:text-6xl font-serif font-bold text-brand-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base uppercase tracking-widest font-bold text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
