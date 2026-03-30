import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { services } from '@/data/services'

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              מה אנחנו עושים
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mt-2">
              השירותים שלנו
            </h2>
            <p className="text-text-secondary text-lg mt-3 max-w-xl">
              כל שירותי הבית במקום אחד — בעל מקצוע אחד שאתם סומכים עליו.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-navy font-semibold text-sm hover:text-blue transition-colors shrink-0"
          >
            כל השירותים
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Featured - first 2 services are large */}
          {services.slice(0, 2).map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-2'
              } h-64 sm:h-72 ${index === 0 ? 'lg:h-auto' : 'lg:h-72'}`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-5 sm:p-7">
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className="w-5 h-5 text-gold" />
                  <span className="text-gold/80 text-sm font-medium">{service.title}</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed max-w-md">
                  {service.shortDescription}
                </p>
                <div className="flex items-center gap-1.5 text-white text-sm font-medium mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  פרטים נוספים
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}

          {/* Rest of services - smaller cards */}
          {services.slice(2).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl h-56 sm:h-64"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <service.icon className="w-4 h-4 text-gold" />
                </div>
                <h3 className="text-white font-bold text-base">
                  {service.title}
                </h3>
                <p className="text-white/60 text-xs mt-1 line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
