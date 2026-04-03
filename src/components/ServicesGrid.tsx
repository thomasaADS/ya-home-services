'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { services } from '@/data/services'
import { AnimatedSection, TiltCard } from '@/components/motion'

export default function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const isGridInView = useInView(gridRef, { once: true, margin: '-60px' })

  return (
    <section className="section-padding bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection direction="up">
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
        </AnimatedSection>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {/* Featured - first 2 services are large */}
          {services.slice(0, 2).map((service, index) => (
            <TiltCard
              key={service.slug}
              className={`${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-2'
              }`}
              tiltAmount={6}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isGridInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
                className={`relative h-full ${
                  index === 0 ? 'shimmer-border' : ''
                }`}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl block h-64 sm:h-72 ${
                    index === 0 ? 'lg:h-full lg:min-h-[calc(100%)]' : 'lg:h-72'
                  }`}
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  <div className="absolute bottom-0 right-0 left-0 p-5 sm:p-7">
                    <div className="flex items-center gap-2 mb-2">
                      <service.icon className="w-5 h-5 text-gold" />
                      <span className="text-gold/80 text-sm font-medium">
                        {service.title}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed max-w-md">
                      {service.shortDescription}
                    </p>
                    <motion.div
                      className="flex items-center gap-1.5 text-white text-sm font-medium mt-3"
                      initial={{ opacity: 0, y: 8 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        פרטים נוספים
                        <ArrowLeft className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </TiltCard>
          ))}

          {/* Rest of services - smaller cards */}
          {services.slice(2).map((service, index) => (
            <TiltCard key={service.slug} tiltAmount={10}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isGridInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: (index + 2) * 0.1,
                }}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-2xl h-56 sm:h-64 block"
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </motion.div>
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
                    <motion.div
                      className="flex items-center gap-1.5 text-white text-sm font-medium mt-2"
                      initial={{ opacity: 0, y: 8 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        פרטים נוספים
                        <ArrowLeft className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>

    </section>
  )
}
