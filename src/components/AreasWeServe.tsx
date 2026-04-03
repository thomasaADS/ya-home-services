'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { MapPin } from 'lucide-react'
import { AnimatedSection } from '@/components/motion'

const areas = [
  'תל אביב',
  'רמת גן',
  'גבעתיים',
  'בני ברק',
  'חולון',
  'בת ים',
  'פתח תקווה',
  'ראשון לציון',
  'הרצליה',
  'רעננה',
  'כפר סבא',
  'הוד השרון',
]

export default function AreasWeServe() {
  const pillsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(pillsRef, { once: true, margin: '-80px' })

  return (
    <AnimatedSection>
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-surface rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-navy/5 rounded-2xl mb-4">
                <MapPin className="w-6 h-6 text-navy" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy">
                מגיעים לכל גוש דן
              </h2>
            </div>

            <div ref={pillsRef} className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
              {areas.map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ scale: 1.08, borderColor: '#C8A96E' }}
                  className="inline-flex items-center gap-1.5 bg-white text-text-secondary font-medium px-4 py-2.5 rounded-xl border border-border text-sm hover:text-navy hover:shadow-sm transition-all"
                >
                  {area}
                </motion.span>
              ))}
            </div>

            <p className="text-center text-text-muted mt-6 text-sm">
              לא מצאתם את האזור שלכם? התקשרו ונבדוק.
            </p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
