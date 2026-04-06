import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { services } from '@/data/services'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'שירותים - אינסטלציה, שיפוצים, התקנות ותחזוקה',
  description:
    'כל שירותי הבית במקום אחד: אינסטלציה, שיפוצים כלליים, התקנת רהיטים, גופי תאורה, תליית תמונות ותחזוקה שוטפת. שירות מקצועי בגוש דן.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              השירותים שלנו
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              כל מה שהבית שלכם צריך
            </h1>
            <span className="gold-line mx-auto" />
            <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
              מאינסטלציה ועד שיפוצים, מהתקנות ועד תחזוקה — אנחנו כאן לכל עבודה,
              גדולה או קטנה.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex gap-5 bg-warm-gray rounded-2xl p-6 sm:p-8 hover:bg-navy transition-colors duration-300 border border-gray-100 hover:border-transparent"
                >
                  <div className="shrink-0 w-16 h-16 bg-navy/5 group-hover:bg-gold/10 rounded-xl flex items-center justify-center transition-colors">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-navy group-hover:text-white mb-2 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary group-hover:text-white/70 leading-relaxed mb-3 transition-colors">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium">
                      קרא עוד
                      <ArrowLeft className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
