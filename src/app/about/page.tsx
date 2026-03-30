import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Clock, ShieldCheck, Users, Heart, Target } from 'lucide-react'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'אודות - הכירו את יוליאן אברומוביץ',
  description:
    'הכירו את יוליאן אברומוביץ, המקצוען מאחורי י.א שירותי בית ותחזוקה. ניסיון של למעלה מעשור בתחזוקת בתים, אינסטלציה ושיפוצים בגוש דן.',
}

const values = [
  {
    icon: Award,
    title: 'מקצועיות',
    description: 'כל עבודה מבוצעת לפי הסטנדרטים הגבוהים ביותר, עם הכלים והחומרים הנכונים.',
  },
  {
    icon: Heart,
    title: 'יחס אישי',
    description: 'כל לקוח מקבל יחס אישי ותשומת לב מלאה. הבית שלכם חשוב לנו כמו שלנו.',
  },
  {
    icon: ShieldCheck,
    title: 'אמינות',
    description: 'מגיעים בזמן, עומדים במה שהבטחנו, ולא עוזבים עד שהכל מושלם.',
  },
  {
    icon: Target,
    title: 'פתרון מותאם',
    description: 'לא מוכרים פתרונות מדף. מקשיבים, מבינים את הצורך, ומציעים את הפתרון הנכון.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              אודות
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              הסיפור שלנו
            </h1>
            <span className="gold-line mx-auto" />
            <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
              מאחורי השם י.א עומד יוליאן אברומוביץ — בעל מקצוע עם ניסיון של למעלה מעשור בתחום שירותי הבית.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 rounded-3xl rotate-3" />
                <Image
                  src="/images/logo.jpg"
                  alt="י.א שירותי בית ותחזוקה"
                  width={500}
                  height={500}
                  className="relative rounded-3xl shadow-xl w-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-3/5">
              <h2 className="text-3xl sm:text-4xl font-black text-navy mb-6">
                יוליאן אברומוביץ
                <span className="block text-gold text-xl sm:text-2xl font-bold mt-1">
                  מייסד י.א שירותי בית ותחזוקה
                </span>
              </h2>

              <div className="space-y-4 text-text-secondary leading-relaxed text-lg">
                <p>
                  התחלתי לעבוד בתחום התחזוקה והשיפוצים לפני למעלה מעשר שנים. מה
                  שהתחיל כעזרה לשכנים ומכרים הפך עם הזמן למקצוע שאני אוהב ולעסק
                  שאני גאה בו.
                </p>
                <p>
                  למדתי את המקצוע מהשטח — לא מספרים. כל בית שנכנסתי אליו לימד
                  אותי משהו חדש. עם השנים צברתי ניסיון באינסטלציה, חשמל, שיפוצים,
                  התקנות ותחזוקה כללית. היום אני יכול לטפל כמעט בכל בעיה שמתעוררת
                  בבית.
                </p>
                <p>
                  הגישה שלי פשוטה: לעשות את העבודה נכון, להיות ישר עם הלקוח,
                  ולתת שירות שאני בעצמי הייתי רוצה לקבל. בלי קיצורי דרך, בלי
                  הפתעות, ובלי מילים מיותרות — רק עבודה מקצועית שמדברת בעד עצמה.
                </p>
                <p>
                  כשאתם מתקשרים לי.א — אתם מדברים איתי ישירות. אני זה שמגיע
                  לבית, אני זה שעושה את העבודה, ואני זה שעומד מאחורי כל בורג ובורג.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
                <div>
                  <span className="text-3xl font-black text-navy block">10+</span>
                  <span className="text-text-light text-sm">שנות ניסיון</span>
                </div>
                <div>
                  <span className="text-3xl font-black text-navy block">1,500+</span>
                  <span className="text-text-light text-sm">לקוחות מרוצים</span>
                </div>
                <div>
                  <span className="text-3xl font-black text-navy block">100%</span>
                  <span className="text-text-light text-sm">אחריות</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              הערכים שלנו
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mt-3 mb-4">
              מה מנחה אותנו
            </h2>
            <span className="gold-line mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">{value.title}</h3>
                  <p className="text-text-secondary text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
