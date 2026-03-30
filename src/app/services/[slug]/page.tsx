import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react'
import { services } from '@/data/services'
import ContactForm from '@/components/ContactForm'
import ContactCTA from '@/components/ContactCTA'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return { title: 'שירות לא נמצא' }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const Icon = service.icon
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-10 h-10 text-gold" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              {service.title}
            </h1>
            <span className="gold-line mx-auto mb-4" />
            <p className="text-white/60 text-lg max-w-2xl">
              {service.fullDescription}
            </p>
            <a
              href="tel:050-0000000"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold h-14 px-8 rounded-xl transition-all cursor-pointer text-lg mt-8 shadow-lg shadow-gold/20"
            >
              <Phone className="w-5 h-5" />
              <span>התקשר לייעוץ חינם</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-2/3">
              {/* What's included */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-navy mb-6">
                  מה כולל השירות
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.includes.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-warm-gray rounded-xl p-4"
                    >
                      <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-text-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common problems */}
              <div className="mb-12">
                <h2 className="text-2xl sm:text-3xl font-black text-navy mb-6">
                  מכירים את הבעיות האלה?
                </h2>
                <div className="space-y-3">
                  {service.commonProblems.map((problem, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-red-50 rounded-xl p-4"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-text-primary">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why professional */}
              <div className="bg-navy rounded-2xl p-6 sm:p-8 mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  למה כדאי להזמין מקצוען?
                </h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  {service.whyProfessional}
                </p>
                <a
                  href="tel:050-0000000"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold h-12 px-6 rounded-xl transition-colors cursor-pointer mt-6"
                >
                  <Phone className="w-5 h-5" />
                  <span>התקשר עכשיו</span>
                </a>
              </div>

              {/* Other services */}
              <div>
                <h2 className="text-2xl font-black text-navy mb-6">
                  שירותים נוספים
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {otherServices.map((s) => {
                    const OtherIcon = s.icon
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group bg-warm-gray rounded-xl p-5 hover:bg-navy transition-colors"
                      >
                        <OtherIcon className="w-6 h-6 text-gold mb-3" />
                        <h3 className="font-bold text-navy group-hover:text-white text-sm mb-1 transition-colors">
                          {s.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-gold text-xs">
                          פרטים
                          <ArrowLeft className="w-3 h-3" />
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-24 space-y-6">
                <ContactForm />

                {/* Trust signals */}
                <div className="bg-warm-gray rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-navy mb-4">למה י.א?</h3>
                  <div className="space-y-3">
                    {[
                      'מענה תוך שעה',
                      'הצעת מחיר שקופה',
                      'אחריות מלאה על העבודה',
                      'ניסיון של 10+ שנים',
                      'שירות בכל גוש דן',
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-gold" />
                        <span className="text-text-secondary text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
