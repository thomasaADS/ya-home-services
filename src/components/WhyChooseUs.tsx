import Image from 'next/image'
import { Award, Clock, Banknote, ShieldCheck, CheckCircle } from 'lucide-react'

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
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=800&q=80"
                alt="כלי עבודה מקצועיים"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 sm:left-auto sm:-right-6 bg-white rounded-2xl shadow-elevated p-5 max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green" />
                </div>
                <div>
                  <span className="text-2xl font-black text-navy">1,500+</span>
                  <span className="text-text-muted text-xs block">לקוחות מרוצים</span>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-1.5 flex-1 bg-green rounded-full" />
                ))}
              </div>
              <p className="text-text-muted text-xs mt-2">שביעות רצון 100%</p>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              למה לבחור בנו
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mt-2 mb-4">
              כי אנחנו עושים את זה נכון
            </h2>
            <span className="gold-accent" />

            <p className="text-text-secondary text-lg mt-6 mb-10">
              לא רק מתקנים — בונים אמון. כל עבודה שאנחנו מבצעים משקפת את
              הסטנדרט שהצבנו לעצמנו מהיום הראשון.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-5 border border-border hover:border-navy/20 hover:shadow-card transition-all"
                  >
                    <div className="w-11 h-11 bg-navy/5 group-hover:bg-navy rounded-xl flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-5 h-5 text-navy group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="font-bold text-navy text-base mb-1.5">
                      {reason.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
