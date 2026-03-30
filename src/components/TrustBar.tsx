'use client'

import { Clock, Users, MapPin, ShieldCheck } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const stats = [
  { icon: Clock, number: 10, suffix: '+', label: 'שנות ניסיון' },
  { icon: Users, number: 1500, suffix: '+', label: 'לקוחות מרוצים' },
  { icon: MapPin, number: 12, suffix: '', label: 'ערים בגוש דן' },
  { icon: ShieldCheck, number: 100, suffix: '%', label: 'אחריות על העבודה' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const steps = 40
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-2 lg:-mt-8 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                      <Counter target={stat.number} suffix={stat.suffix} />
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
      </div>
    </section>
  )
}
