import { Award, Clock, Banknote, ShieldCheck } from 'lucide-react'

const reasons = [
  {
    icon: Award,
    title: 'מקצועיות ללא פשרות',
    description:
      'ניסיון רב שנים בכל סוגי העבודות. כל עבודה מבוצעת לפי הסטנדרטים הגבוהים ביותר, עם תשומת לב לכל פרט.',
  },
  {
    icon: Clock,
    title: 'אמינות ודייקנות',
    description:
      'מגיעים בזמן שנקבע, מסיימים כשהבטחנו. בלי סיפורים, בלי דחיות, בלי הפתעות. כשאנחנו אומרים — אנחנו עושים.',
  },
  {
    icon: Banknote,
    title: 'מחירים הוגנים ושקופים',
    description:
      'הצעת מחיר ברורה מראש, ללא עלויות נסתרות. מה שסיכמנו — זה מה שתשלמו. ללא הפתעות בסוף העבודה.',
  },
  {
    icon: ShieldCheck,
    title: 'אחריות מלאה',
    description:
      'אנחנו עומדים מאחורי כל עבודה שאנחנו מבצעים. אם משהו לא תקין — אנחנו חוזרים ומתקנים. האחריות שלנו היא השקט שלכם.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Section header - side */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              למה לבחור בנו
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mt-3 mb-4">
              כי אנחנו עושים את זה
              <span className="text-gold"> נכון</span>
            </h2>
            <span className="gold-line" />
            <p className="text-text-secondary text-lg mt-4">
              לא רק מתקנים — בונים אמון. כל עבודה שאנחנו מבצעים משקפת את
              הסטנדרט שהצבנו לעצמנו מהיום הראשון.
            </p>
          </div>

          {/* Reasons grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="bg-warm-gray rounded-2xl p-6 sm:p-8 hover:bg-navy group transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-gold/10 group-hover:bg-gold/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-navy group-hover:text-white mb-3 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-text-secondary group-hover:text-white/70 leading-relaxed transition-colors">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
