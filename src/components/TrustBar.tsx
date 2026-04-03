'use client'

import { Clock, Users, MapPin, ShieldCheck } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { AnimatedSection, CountUp } from '@/components/motion'

const stats = [
  { icon: Clock, number: 10, suffix: '+', label: 'שנות ניסיון' },
  { icon: Users, number: 1500, suffix: '+', label: 'לקוחות מרוצים' },
  { icon: MapPin, number: 12, suffix: '', label: 'ערים בגוש דן' },
  { icon: ShieldCheck, number: 100, suffix: '%', label: 'אחריות על העבודה' },
]

export default function TrustBar() {
  const gridRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(gridRef, { once: true, margin: '-50px' })

  return (
    <section className="relative z-10 -mt-2 lg:-mt-8 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection direction="up">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-elevated border border-border p-6 sm:p-8">
            <div
              ref={gridRef}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="group flex items-center gap-4">
                    {/* Icon with entrance spin + idle pulse + hover gold rotate */}
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 rounded-2xl flex items-center justify-center shrink-0"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={
                        isInView
                          ? { scale: 1, rotate: 0 }
                          : { scale: 0, rotate: -180 }
                      }
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 15,
                        delay: index * 0.15,
                      }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: 'easeInOut',
                        }}
                        className="transition-all duration-300 group-hover:rotate-12 group-hover:text-amber-500"
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-navy group-hover:text-amber-500 transition-colors duration-300" />
                      </motion.div>
                    </motion.div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-navy block leading-none">
                        <CountUp target={stat.number} suffix={stat.suffix} />
                      </span>
                      <span className="text-text-muted text-xs sm:text-sm mt-1 block">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
