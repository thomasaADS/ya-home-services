import type { Metadata } from 'next'
import { Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'צור קשר',
  description:
    'צרו קשר עם י.א שירותי בית ותחזוקה. התקשרו, שלחו הודעה או השאירו פרטים. מענה תוך שעה, ייעוץ חינם וללא התחייבות.',
}

const contactInfo = [
  {
    icon: Phone,
    title: 'טלפון',
    value: '050-333-6540',
    href: 'tel:0503336540',
    description: 'זמינים א\'-ה\' 07:00-19:00',
  },
  {
    icon: MapPin,
    title: 'אזור שירות',
    value: 'גוש דן והסביבה',
    href: null,
    description: 'תל אביב, רמת גן, גבעתיים, חולון, הרצליה ועוד',
  },
  {
    icon: Clock,
    title: 'שעות פעילות',
    value: 'א\'-ה\' 07:00-19:00',
    href: null,
    description: 'שישי - במקרים דחופים בלבד',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              דברו איתנו
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              צור קשר
            </h1>
            <span className="gold-line mx-auto" />
            <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
              התקשרו, שלחו הודעה או השאירו פרטים. נחזור אליכם תוך שעה עם מענה
              ראשוני.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact info */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-black text-navy mb-6">
                דרכי התקשרות
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                הדרך הכי מהירה לקבל מענה — להתקשר. אבל אם נוח לכם יותר להשאיר
                פרטים, אנחנו כאן.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  const Wrapper = item.href ? 'a' : 'div'
                  const wrapperProps = item.href
                    ? { href: item.href }
                    : {}

                  return (
                    <Wrapper
                      key={index}
                      {...wrapperProps}
                      className="flex items-start gap-4 bg-warm-gray rounded-2xl p-5 hover:bg-warm-gray-dark transition-colors"
                    >
                      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-bold text-navy text-sm">
                          {item.title}
                        </h3>
                        <p className="text-navy font-semibold text-lg" dir={item.href?.startsWith('tel') ? 'ltr' : undefined}>
                          {item.value}
                        </p>
                        <p className="text-text-light text-sm">
                          {item.description}
                        </p>
                      </div>
                    </Wrapper>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="mt-8 bg-navy rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  צריכים עזרה דחופה?
                </h3>
                <p className="text-white/60 mb-4">
                  נזילה, תקלת חשמל או בעיה שלא יכולה לחכות? התקשרו עכשיו ונגיע
                  בהקדם.
                </p>
                <a
                  href="tel:0503336540"
                  className="inline-flex items-center gap-2 bg-white hover:bg-surface text-navy font-bold h-12 px-6 rounded-xl transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  <span>התקשר עכשיו</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
