import Image from 'next/image'
import { Phone, FileText } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center bg-navy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-gold via-gold-light to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 text-gold text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-gold rounded-full" />
              שירותי בית ותחזוקה מקצועיים בגוש דן
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up stagger-1">
              בית בידיים
              <span className="block text-gold">טובות</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up stagger-2 leading-relaxed">
              אינסטלציה, שיפוצים, התקנות ותחזוקה לכל בית.
              <br className="hidden sm:block" />
              שירות מקצועי, אמין ומהיר — מהשיחה הראשונה ועד לסיום העבודה.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up stagger-3">
              <a
                href="tel:050-0000000"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold h-14 px-8 rounded-xl transition-all cursor-pointer text-lg shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" />
                <span>התקשר עכשיו</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold h-14 px-8 rounded-xl transition-all cursor-pointer text-lg border border-white/20 hover:border-white/30"
              >
                <FileText className="w-5 h-5" />
                <span>השאר פרטים</span>
              </Link>
            </div>

            {/* Micro trust */}
            <div className="flex items-center gap-6 justify-center lg:justify-start mt-8 animate-fade-in-up stagger-4">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-gold">&#10003;</span>
                ללא עלות הערכה
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-gold">&#10003;</span>
                אחריות מלאה
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-gold">&#10003;</span>
                מענה מהיר
              </div>
            </div>
          </div>

          {/* Logo visual */}
          <div className="flex-shrink-0 animate-fade-in-up stagger-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gold/20 rounded-3xl rotate-6" />
              <div className="absolute inset-0 bg-gold/10 rounded-3xl -rotate-3" />
              <Image
                src="/images/logo.jpg"
                alt="י.א שירותי בית ותחזוקה"
                fill
                className="rounded-3xl object-cover relative z-10 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60V30C240 5 480 0 720 10C960 20 1200 45 1440 30V60H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
