import React, { useState } from 'react'
import { Baby, Activity, ShieldAlert, Heart, ActivitySquare, AlertCircle, CalendarHeart, HeartPulse, ChevronDown, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const serviceCategories = [
  {
    id: 'maternity',
    icon: Baby,
    title: 'Pregnancy & Maternity Care',
    description: 'Comprehensive care for a healthy pregnancy journey from conception to postnatal recovery.',
    subServices: [
      'Pregnancy Consultation',
      'Antenatal (Prenatal) Care',
      'High-Risk Pregnancy Management',
      'Pregnancy Nutrition Counseling',
      'Pregnancy Exercise Guidance',
      'Early Pregnancy Assessment',
      'Labor & Delivery Guidance',
      'Gestational Diabetes Management',
      'Pregnancy Complication Monitoring',
      'Postnatal Care',
      'Pregnancy Myth Counseling & Education'
    ]
  },
  {
    id: 'gynecology',
    icon: Activity,
    title: 'Gynecology Services',
    description: 'Expert treatment and evaluation for a wide range of women\'s health and menstrual issues.',
    subServices: [
      'General Gynecology Consultation',
      'Irregular Periods Treatment',
      'Heavy Menstrual Bleeding Management',
      'Painful Periods Treatment',
      'Abnormal Vaginal Bleeding Evaluation',
      'Pelvic Pain Assessment',
      'Menstrual Disorder Management',
      'Adolescent Gynecology',
      'Preventive Women\'s Health Checkups'
    ]
  },
  {
    id: 'pcos',
    icon: ActivitySquare,
    title: 'PMOS(PCOS) / PCOD Care',
    description: 'Specialized diagnosis and holistic management plans for Polycystic Ovary Syndrome.',
    subServices: [
      'PMOS(PCOS) Diagnosis',
      'PMOS(PCOS) Treatment',
      'PCOD Management',
      'Hormonal Imbalance Treatment',
      'Weight Management Guidance for PMOS(PCOS)',
      'Fertility Support for PMOS(PCOS) Patients',
      'Menstrual Cycle Regulation',
      'Lifestyle Counseling for PMOS(PCOS)'
    ]
  },
  {
    id: 'fertility',
    icon: Heart,
    title: 'Fertility & Infertility Services',
    description: 'Compassionate evaluation and guidance to help you start your journey to parenthood.',
    subServices: [
      'Female Infertility Evaluation',
      'Fertility Counseling',
      'Preconception Counseling',
      'Ovulation Assessment',
      'Fertility Planning',
      'Reproductive Health Consultation',
      'Pregnancy Planning Consultation'
    ]
  },
  {
    id: 'endometriosis',
    icon: ShieldAlert,
    title: 'Endometriosis Care',
    description: 'Advanced diagnosis and management of chronic pelvic pain and endometriosis.',
    subServices: [
      'Endometriosis Diagnosis',
      'Endometriosis Treatment',
      'Chronic Pelvic Pain Management',
      'Endometriosis Fertility Counseling',
      'Medical & Surgical Management Guidance'
    ]
  },
  {
    id: 'fibroids',
    icon: AlertCircle,
    title: 'Fibroid Management',
    description: 'Evaluation and customized treatment planning for uterine fibroids.',
    subServices: [
      'Uterine Fibroid Evaluation',
      'Fibroid Treatment Planning',
      'Medical Management of Fibroids',
      'Surgical Referral & Guidance',
      'Heavy Bleeding Due to Fibroids'
    ]
  },
  {
    id: 'menopause',
    icon: HeartPulse,
    title: 'Menopause & Midlife Health',
    description: 'Supportive care for transitioning through perimenopause and managing menopausal symptoms.',
    subServices: [
      'Menopause Consultation',
      'Perimenopause Management',
      'Hormonal Health Assessment',
      'Hot Flash & Symptom Management',
      'Bone & Women\'s Health Counseling',
      'Healthy Aging Guidance'
    ]
  },
  {
    id: 'family-planning',
    icon: CalendarHeart,
    title: 'Family Planning & Reproductive Health',
    description: 'Empowering women with contraceptive counseling and wellness guidance.',
    subServices: [
      'Family Planning Counseling',
      'Contraceptive Counseling',
      'Birth Control Guidance',
      'Reproductive Health Consultation',
      'Women\'s Wellness Counseling'
    ]
  }
]

export default function ServicesOverview() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  
  const isAllExpanded = expandedCategories.length === serviceCategories.length

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => 
      prev.includes(id) ? prev.filter(catId => catId !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedCategories([])
    } else {
      setExpandedCategories(serviceCategories.map(cat => cat.id))
    }
  }

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4 block">Comprehensive Care</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Our Medical Services</h2>
            <p className="text-lg text-slate-600">
              We provide a full spectrum of gynecological and obstetric services designed to support your health at every stage of life.
            </p>
          </div>
          <button 
            onClick={toggleAll}
            className="btn-secondary group flex items-center justify-center gap-2 whitespace-nowrap h-fit"
          >
            <span>{isAllExpanded ? 'Collapse All Services' : 'View All Services'}</span>
            <ChevronDown 
              size={18} 
              className={`transition-transform duration-300 ${isAllExpanded ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {serviceCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id)
            
            return (
              <div 
                key={category.id} 
                className={`group rounded-[2rem] bg-brand-50/30 border border-brand-100/50 transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'bg-white shadow-xl border-brand-200' : 'hover:bg-white hover:shadow-lg hover:border-brand-200'
                }`}
              >
                <div 
                  className="p-8 cursor-pointer flex flex-col sm:flex-row gap-6 items-start"
                  onClick={() => toggleCategory(category.id)}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-controls={`service-details-${category.id}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleCategory(category.id);
                    }
                  }}
                >
                  <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                    isExpanded ? 'bg-brand-600 text-white shadow-md' : 'bg-white text-brand-600 shadow-sm group-hover:bg-brand-100'
                  }`}>
                    <category.icon size={32} />
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">{category.title}</h3>
                      <div className={`p-2 rounded-full transition-colors ${isExpanded ? 'bg-brand-50 text-brand-600' : 'bg-slate-50 text-slate-400 group-hover:text-brand-600'}`}>
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                        />
                      </div>
                    </div>
                    <p className={`text-slate-600 leading-relaxed transition-all duration-300 ${isExpanded ? 'mb-6' : 'm-0'}`}>
                      {category.description}
                    </p>
                    
                    {/* Expandable Content */}
                    <div 
                      id={`service-details-${category.id}`}
                      className={`grid transition-all duration-300 ease-in-out ${
                        isExpanded ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-6 border-t border-brand-100/50">
                          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Included Services:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                            {category.subServices.map((sub, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-slate-700">
                                <CheckCircle2 size={18} className="shrink-0 text-brand-500 mt-0.5" />
                                <span className="text-sm font-medium leading-tight">{sub}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-8">
                             <Link href="/appointment" className="text-brand-600 font-bold text-sm flex items-center gap-2 hover:text-brand-800 transition-colors">
                                Book Consultation for {category.title}
                                <span className="text-lg leading-none">→</span>
                             </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {!isExpanded && (
                      <div className="mt-4 text-brand-600 font-bold text-sm flex items-center gap-2 group-hover:text-brand-700">
                        Read More
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
