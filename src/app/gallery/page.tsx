import type { Metadata } from 'next'
import GalleryGrid from '@/components/GalleryGrid'
import ContactCTA from '@/components/ContactCTA'

export const metadata: Metadata = {
  title: 'פרויקטים - גלריית עבודות',
  description:
    'צפו בפרויקטים שביצענו: שיפוצי אמבטיות, התקנת מטבחים, תאורה, תליית טלוויזיות ועוד. עבודות אמיתיות של י.א שירותי בית ותחזוקה.',
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              הפרויקטים שלנו
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
              גלריית עבודות
            </h1>
            <span className="gold-line mx-auto" />
            <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
              הנה חלק מהעבודות שביצענו לאחרונה. כל פרויקט מבוצע באותה רמה של
              מקצועיות ותשומת לב לפרטים.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <GalleryGrid />
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
