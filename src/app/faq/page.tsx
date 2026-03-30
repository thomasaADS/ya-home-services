import type { Metadata } from 'next'
import FAQSection from '@/components/FAQSection'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'שאלות נפוצות',
  description:
    'תשובות לשאלות נפוצות על שירותי בית ותחזוקה של י.א: אזורי שירות, מחירים, אחריות, שעות פעילות ועוד.',
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              יש שאלות?
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              שאלות נפוצות
            </h1>
            <span className="gold-line mx-auto" />
            <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
              ריכזנו את השאלות שלקוחות שואלים הכי הרבה. לא מצאתם תשובה? התקשרו
              ונשמח לעזור.
            </p>
          </div>
        </div>
      </section>

      <FAQSection showAllLink={false} />

      <ContactCTA />
    </>
  )
}
