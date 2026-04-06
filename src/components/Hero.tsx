'use client'

import Image from 'next/image'
import { Phone, ArrowLeft, Star, Shield, Clock } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const slogans = [
  'כי כשמשהו נשבר בבית, הדבר הראשון שאומרים זה "יאאא..."',
  'יא, מי קרא לאינסטלטור? אנחנו כבר פה.',
  'יא, תתקן לי את הדלת — היא חורקת מאז 2019.',
  'יא, הברז מטפטף! — רגע, אנחנו בדרך.',
  'יא ביתי, יא נעימי — בואו נתקן אותך.',
]

export default function Hero() {
  const [sloganIndex, setSloganIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIndex((prev) => (prev + 1) % slogans.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-screen pt-20 lg:pt-0">
          {/* Content Side */}
          <div className="relative z-10 py-12 lg:py-24 lg:pl-12">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-navy/5 text-navy text-sm font-medium px-4 py-2 rounded-full mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              מקצוענים מומלצים בגוש דן
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.15] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              בית בידיים{' '}
              <span className="text-blue">טובות</span>
            </motion.h1>

            {/* Rotating slogan */}
            <motion.div
              className="max-w-lg mb-10 h-[80px] sm:h-[72px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={sloganIndex}
                  className="text-lg sm:text-xl text-text-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {slogans[sloganIndex]}
                </motion.p>
              </AnimatePresence>
              <p className="text-text-muted text-base mt-2">
                אינסטלציה, שיפוצים, התקנות ותחזוקה מקצועית לכל בית.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <a
                href="tel:0503336540"
                className="inline-flex items-center justify-center gap-2.5 bg-navy hover:bg-navy-light text-white font-bold h-14 px-8 rounded-2xl transition-colors cursor-pointer text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>התקשר עכשיו</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-alt text-navy font-semibold h-14 px-8 rounded-2xl transition-colors cursor-pointer text-lg border border-border"
              >
                <span>השאר פרטים</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust micro badges */}
            <motion.div
              className="flex flex-wrap items-center gap-5 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              {[
                { icon: Shield, bg: 'bg-green/10', iconColor: 'text-green', text: 'אחריות מלאה' },
                { icon: Clock, bg: 'bg-blue/10', iconColor: 'text-blue', text: 'מענה תוך שעה' },
                { icon: Star, bg: 'bg-navy/10', iconColor: 'text-navy', text: '10+ שנות ניסיון' },
              ].map((badge) => {
                const Icon = badge.icon
                return (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 text-text-muted text-sm"
                  >
                    <div className={`w-8 h-8 ${badge.bg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${badge.iconColor}`} />
                    </div>
                    {badge.text}
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            className="relative h-[400px] lg:h-screen lg:absolute lg:left-0 lg:top-0 lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
              alt="סלון מודרני - שירותי שיפוץ ותחזוקה י.א"
              fill
              className="object-cover lg:rounded-r-[3rem] rounded-3xl lg:rounded-none"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-navy/10 to-transparent lg:rounded-r-[3rem] rounded-3xl lg:rounded-none" />

            {/* Review card */}
            <motion.div
              className="absolute bottom-6 right-6 left-6 sm:left-auto sm:right-6 sm:w-72 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-elevated"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="https://i.pravatar.cc/80?img=32"
                  alt="לקוחה מרוצה"
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-blue fill-blue" />
                    ))}
                  </div>
                  <p className="text-text-primary text-xs font-medium leading-snug">
                    &quot;יוליאן הגיע באותו יום. מקצוען אמיתי!&quot;
                  </p>
                  <p className="text-text-muted text-[10px] mt-0.5">מיכל כ. | רמת גן</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
