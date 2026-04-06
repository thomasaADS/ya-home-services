'use client'

import { Phone, Search, FileText, Hammer } from 'lucide-react'
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

export default function ProcessSteps() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <span className="text-blue font-semibold text-sm uppercase tracking-wider">
            איך זה עובד
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mt-2 mb-4">
            ארבעה צעדים לבית מתוקן
          </h2>
          <span className="gold-accent mx-auto" />
        </AnimatedSection>

        {/* Steps */}
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative text-center">
                  {/* Step circle */}
                  <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] bg-surface border-2 border-border rounded-2xl mb-6 mx-auto">
                    <Icon className="w-7 h-7 text-navy" />
                    <span className="absolute -top-2.5 -left-2.5 w-7 h-7 bg-blue text-white text-xs font-black rounded-lg flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
