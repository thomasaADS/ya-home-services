import Image from 'next/image'
import { Phone, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
          צריכים עזרה בבית?
        </h2>
        <p className="text-white/60 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          אל תדחו את זה. התקשרו עכשיו ונתאם ביקור בזמן שנוח לכם.
          שיחת הייעוץ הראשונית — בחינם.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:050-0000000"
            className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-navy font-bold h-14 px-8 rounded-2xl transition-all cursor-pointer text-lg"
          >
            <Phone className="w-5 h-5" />
            <span>התקשר עכשיו</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold h-14 px-8 rounded-2xl transition-all cursor-pointer text-lg border border-white/20"
          >
            <span>השאר פרטים</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-white/30 text-sm mt-8">
          זמינים א&apos;-ה&apos; | מענה תוך שעה | ללא התחייבות
        </p>
      </div>
    </section>
  )
}
