'use client'

import { Clock, Users, MapPin, ShieldCheck } from 'lucide-react'
import { AnimatedSection } from '@/components/motion'

const stats = [
  { icon: Clock, number: '10+', label: 'שנות ניסיון' },
  { icon: Users, number: '1,500+', label: 'לקוחות מרוצים' },
  { icon: MapPin, number: '12', label: 'ערים בגוש דן' },
  { icon: ShieldCheck, number: '100%', label: 'אחריות על העבודה' },
]

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-2 lg:-mt-8 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-elevated border border-border p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 rounded-2xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-navy" />
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-navy block leading-none">
                        {stat.number}
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
