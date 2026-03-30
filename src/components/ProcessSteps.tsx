import { Phone, Search, FileText, Hammer } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'פנייה ראשונית',
    description:
      'התקשרו או השאירו פרטים באתר. נחזור אליכם תוך שעה עם מענה ראשוני ותיאום ביקור.',
  },
  {
    icon: Search,
    number: '02',
    title: 'אבחון וייעוץ',
    description:
      'נגיע לבית, נבדוק את הצרכים, ונציע פתרון מותאם. הסקר הראשוני — בחינם.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'הצעת מחיר שקופה',
    description:
      'תקבלו הצעת מחיר ברורה ומפורטת, ללא עלויות נסתרות. מה שסיכמנו — זה מה שתשלמו.',
  },
  {
    icon: Hammer,
    number: '04',
    title: 'ביצוע מקצועי',
    description:
      'עבודה נקייה, מדויקת ומהירה. מסיימים בזמן, מנקים אחרינו ונותנים אחריות מלאה.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-16 sm:py-24 bg-navy relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            איך זה עובד
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            תהליך העבודה שלנו
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            ארבעה שלבים פשוטים מהפנייה הראשונה ועד לסיום העבודה. שקוף, מקצועי
            ובלי הפתעות.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative text-center group">
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-white/10 -translate-x-1/2" />
                )}

                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-navy-light border-2 border-gold/30 rounded-2xl mb-6 group-hover:border-gold transition-colors mx-auto">
                  <Icon className="w-8 h-8 text-gold" />
                  <span className="absolute -top-3 -left-3 w-8 h-8 bg-gold text-navy text-sm font-black rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
