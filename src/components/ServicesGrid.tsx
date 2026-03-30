import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { services } from '@/data/services'

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-warm-gray" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            מה אנחנו עושים
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mt-3 mb-4">
            השירותים שלנו
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            מאינסטלציה ועד שיפוצים, מהתקנת רהיטים ועד תחזוקה שוטפת — הכל תחת
            קורת גג אחת, עם בעל מקצוע אחד שאתם סומכים עליו.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${
                  index < 4 ? `animate-fade-in-up stagger-${index + 1}` : ''
                }`}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-navy/5 group-hover:bg-navy rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold group-hover:text-gold-light transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Link arrow */}
                <div className="flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>פרטים נוספים</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
