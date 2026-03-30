import { Phone, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-16 sm:py-20 bg-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-gold/5 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
          צריכים עזרה בבית?
        </h2>
        <p className="text-white/60 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          אל תדחו את זה. התקשרו עכשיו ונתאם ביקור בזמן שנוח לכם. שיחת הייעוץ
          הראשונית — בחינם.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:050-0000000"
            className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold h-14 px-8 rounded-xl transition-all cursor-pointer text-lg shadow-lg shadow-gold/20"
          >
            <Phone className="w-5 h-5" />
            <span>התקשר עכשיו</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold h-14 px-8 rounded-xl transition-all cursor-pointer text-lg border border-white/20"
          >
            <FileText className="w-5 h-5" />
            <span>השאר פרטים</span>
          </Link>
        </div>

        <p className="text-white/40 text-sm mt-6">
          זמינים א&apos;-ה&apos; | מענה תוך שעה | ללא התחייבות
        </p>
      </div>
    </section>
  )
}
