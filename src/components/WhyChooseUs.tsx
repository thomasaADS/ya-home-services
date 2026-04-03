'use client'

import Image from 'next/image'
import { Award, Clock, Banknote, ShieldCheck, CheckCircle } from 'lucide-react'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { useRef } from 'react'
import { AnimatedSection } from '@/components/motion'

const reasons = [
  {
    icon: Award,
    title: 'מקצועיות ללא פשרות',
    description: 'ניסיון רב שנים בכל סוגי העבודות, עם תשומת לב לכל פרט.',
  },
  {
    icon: Clock,
    title: 'אמינות ודייקנות',
    description: 'מגיעים בזמן, מסיימים כשהבטחנו. בלי סיפורים, בלי דחיות.',
  },
  {
    icon: Banknote,
    title: 'מחירים שקופים',
    description: 'הצעת מחיר ברורה מראש. מה שסיכמנו — זה מה שתשלמו.',
  },
  {
    icon: ShieldCheck,
    title: 'אחריות מלאה',
    description: 'עומדים מאחורי כל עבודה. משהו לא בסדר? נחזור ונתקן.',
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const floatingCardRef = useRef<HTMLDivElement>(null)
  const satisfactionRef = useRef<HTMLDivElement>(null)
  const satisfactionInView = useInView(satisfactionRef, { once: true, margin: '-50px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section ref={sectionRef} className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden"
              style={{ y: imageY }}
            >
              <Image
                src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80"
                alt="כלי עבודה מקצועיים"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Floating card */}
            <motion.div
              ref={floatingCardRef}
              className="absolute -bottom-6 -left-4 sm:left-auto sm:-right-6 bg-white rounded-2xl shadow-elevated p-5 max-w-[240px]"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.8,
              }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <span className="text-2xl font-black text-navy">1,500+</span>
                    <span className="text-text-muted text-xs block">לקוחות מרוצים</span>
                  </div>
                </div>
                <div className="flex gap-0.5" ref={satisfactionRef}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="h-1.5 flex-1 bg-green rounded-full"
                      initial={{ width: 0 }}
                      animate={
                        satisfactionInView
                          ? { width: '100%' }
                          : { width: 0 }
                      }
                      transition={{
                        type: 'spring',
                        stiffness: 50,
                        damping: 20,
                        delay: 1 + i * 0.1,
                      }}
                    />
                  ))}
                </div>
                <p className="text-text-muted text-xs mt-2">שביעות רצון 100%</p>
              </motion.div>
            </motion.div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">
                למה לבחור בנו
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-navy mt-2 mb-4">
                כי אנחנו עושים את זה נכון
              </h2>
              <span className="gold-accent" />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-text-secondary text-lg mt-6 mb-10">
                לא רק מתקנים — בונים אמון. כל עבודה שאנחנו מבצעים משקפת את
                הסטנדרט שהצבנו לעצמנו מהיום הראשון.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={index}
                    className="group bg-white rounded-2xl p-5 border border-border hover:border-navy/20 transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{
                      y: -8,
                      boxShadow:
                        '0 20px 40px -12px rgba(0, 0, 0, 0.1), 0 8px 20px -8px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <motion.div
                      className="w-11 h-11 bg-navy/5 group-hover:bg-navy rounded-xl flex items-center justify-center mb-4 transition-colors"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <Icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                    </motion.div>
                    <h3 className="font-bold text-navy text-base mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
