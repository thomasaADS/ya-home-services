'use client'

import Image from 'next/image'
import { Phone, ArrowLeft, Star, Shield, Clock } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { SplitText, MagneticButton } from '@/components/motion'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-screen pt-20 lg:pt-0">
          {/* Content Side */}
          <div className="relative z-10 py-12 lg:py-24 lg:pl-12">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-navy/5 text-navy text-sm font-medium px-4 py-2 rounded-full mb-8"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0 }}
            >
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              מקצוענים מומלצים בגוש דן
            </motion.div>

            {/* Headline */}
            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-black text-navy leading-[1.1] mb-6">
              <SplitText text="בית בידיים" delay={0.2} letterDelay={0.04} />
              <span className="relative inline-block text-gold mr-3">
                <SplitText text="טובות" delay={0.2} letterDelay={0.04} className="text-gold" />
                <svg className="absolute -bottom-2 right-0 w-full" viewBox="0 0 200 12" fill="none">
                  <motion.path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="#C8A96E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-text-secondary max-w-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            >
              אינסטלציה, שיפוצים, התקנות ותחזוקה מקצועית לכל בית.
              שיחת ייעוץ ראשונית — ללא עלות.
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.7 }}
              >
                <MagneticButton strength={8}>
                  <a
                    href="tel:050-0000000"
                    className="group inline-flex items-center justify-center gap-2.5 bg-navy hover:bg-navy-light text-white font-bold h-14 px-8 rounded-2xl transition-all cursor-pointer text-lg relative overflow-hidden"
                  >
                    <Phone className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">התקשר עכשיו</span>
                  </a>
                </MagneticButton>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.8 }}
              >
                <MagneticButton strength={8}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-alt text-navy font-semibold h-14 px-8 rounded-2xl transition-all cursor-pointer text-lg border border-border"
                  >
                    <span>השאר פרטים</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Trust micro badges */}
            <div className="flex flex-wrap items-center gap-5 mt-10">
              {[
                { icon: Shield, color: 'green', bg: 'bg-green/10', text: 'אחריות מלאה', delay: 0.9 },
                { icon: Clock, color: 'blue', bg: 'bg-blue/10', text: 'מענה תוך שעה', delay: 1.0 },
                { icon: Star, color: 'gold', bg: 'bg-gold/10', text: '10+ שנות ניסיון', delay: 1.1 },
              ].map((badge) => {
                const Icon = badge.icon
                return (
                  <motion.div
                    key={badge.text}
                    className="flex items-center gap-2 text-text-muted text-sm"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: badge.delay,
                    }}
                  >
                    <div className={`w-8 h-8 ${badge.bg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 text-${badge.color}`} />
                    </div>
                    {badge.text}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Image Side */}
          <motion.div
            className="relative h-[400px] lg:h-screen lg:absolute lg:left-0 lg:top-0 lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: imageY }}
          >
            <Image
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
              alt="סלון מודרני - שירותי שיפוץ ותחזוקה י.א"
              fill
              className="object-cover lg:rounded-r-[3rem] rounded-3xl lg:rounded-none"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-navy/20 to-transparent lg:rounded-r-[3rem] rounded-3xl lg:rounded-none" />

            {/* Floating review card */}
            <motion.div
              className="absolute bottom-6 right-6 left-6 sm:left-auto sm:right-6 sm:w-72 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-elevated"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 1.5,
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
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
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.3, 1] }}
                          transition={{
                            delay: 1.5 + i * 0.1,
                            duration: 0.4,
                            ease: 'easeOut',
                          }}
                        >
                          <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                        </motion.div>
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
