'use client'

import { Phone, Search, FileText, Hammer } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { AnimatedSection } from '@/components/motion'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'פנייה ראשונית',
    description: 'התקשרו או השאירו פרטים. נחזור אליכם תוך שעה.',
  },
  {
    icon: Search,
    number: '02',
    title: 'אבחון וייעוץ',
    description: 'נגיע לבית, נבדוק את הצרכים, ונציע פתרון מותאם.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'הצעת מחיר שקופה',
    description: 'הצעה ברורה ומפורטת, ללא עלויות נסתרות.',
  },
  {
    icon: Hammer,
    number: '04',
    title: 'ביצוע מקצועי',
    description: 'עבודה נקייה, מדויקת ומהירה. אחריות מלאה.',
  },
]

function StepCard({ step, index }: { step: typeof steps[number]; index: number }) {
  const Icon = step.icon

  return (
    <AnimatedSection delay={index * 0.15} className="relative text-center group">
      {/* Step circle */}
      <motion.div
        className="relative inline-flex items-center justify-center w-[72px] h-[72px] bg-surface group-hover:bg-navy border-2 border-border group-hover:border-navy rounded-2xl mb-6 transition-all duration-300 mx-auto"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: index * 0.15,
        }}
        whileHover={{
          boxShadow: '0 0 20px 4px rgba(30, 58, 95, 0.25)',
        }}
      >
        <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
        <motion.span
          className="absolute -top-2.5 -left-2.5 w-7 h-7 bg-gold text-white text-xs font-black rounded-lg flex items-center justify-center shadow-sm"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 15,
            delay: index * 0.15 + 0.15,
          }}
        >
          {step.number}
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.5,
          delay: index * 0.15 + 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <h3 className="text-lg font-bold text-navy mb-2">
          {step.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed max-w-[200px] mx-auto">
          {step.description}
        </p>
      </motion.div>
    </AnimatedSection>
  )
}

export default function ProcessSteps() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.7', 'end 0.5'],
  })

  const connectorScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            איך זה עובד
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mt-2 mb-4">
            ארבעה צעדים לבית מתוקן
          </h2>
          <span className="gold-accent mx-auto" />
        </AnimatedSection>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-9 left-[calc(12.5%)] right-[calc(12.5%)] h-[2px] z-0">
            {/* Background track */}
            <div className="w-full h-full bg-border rounded-full" />
            {/* Animated fill */}
            <motion.div
              className="absolute top-0 right-0 h-full bg-gold/50 rounded-full"
              style={{
                scaleX: connectorScaleX,
                transformOrigin: 'right',
              }}
            />
          </div>

          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
