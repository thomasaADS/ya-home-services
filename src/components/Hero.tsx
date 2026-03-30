import Image from 'next/image'
import { Phone, ArrowLeft, Star, Shield, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-screen pt-20 lg:pt-0">
          {/* Content Side */}
          <div className="relative z-10 py-12 lg:py-24 lg:pl-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-navy/5 text-navy text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in-up">
              <span className="w-1.5 h-1.5 bg-green rounded-full" />
              מקצוענים מומלצים בגוש דן
            </div>

            {/* Headline */}
            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-black text-navy leading-[1.1] mb-6 animate-fade-in-up delay-100">
              בית בידיים
              <span className="relative inline-block text-gold mr-3">
                טובות
                <svg className="absolute -bottom-2 right-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#C8A96E" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-text-secondary max-w-lg mb-10 animate-fade-in-up delay-200 leading-relaxed">
              אינסטלציה, שיפוצים, התקנות ותחזוקה מקצועית לכל בית.
              שיחת ייעוץ ראשונית — ללא עלות.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
              <a
                href="tel:050-0000000"
                className="group inline-flex items-center justify-center gap-2.5 bg-navy hover:bg-navy-light text-white font-bold h-14 px-8 rounded-2xl transition-all cursor-pointer text-lg relative overflow-hidden"
              >
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">התקשר עכשיו</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-alt text-navy font-semibold h-14 px-8 rounded-2xl transition-all cursor-pointer text-lg border border-border"
              >
                <span>השאר פרטים</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust micro badges */}
            <div className="flex flex-wrap items-center gap-5 mt-10 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <div className="w-8 h-8 bg-green/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green" />
                </div>
                אחריות מלאה
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <div className="w-8 h-8 bg-blue/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-blue" />
                </div>
                מענה תוך שעה
              </div>
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-gold" />
                </div>
                10+ שנות ניסיון
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[400px] lg:h-screen lg:absolute lg:left-0 lg:top-0 lg:w-1/2 animate-fade-in delay-200">
            <Image
              src="https://images.unsplash.com/photo-1461938337379-4b537cd2db74?auto=format&fit=crop&w=1200&q=80"
              alt="הנדי מן מקצועי - שירותי בית י.א"
              fill
              className="object-cover lg:rounded-r-[3rem] rounded-3xl lg:rounded-none"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-navy/20 to-transparent lg:rounded-r-[3rem] rounded-3xl lg:rounded-none" />

            {/* Floating review card */}
            <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:right-6 sm:w-72 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-elevated animate-float">
              <div className="flex items-center gap-3">
                <Image
                  src="https://i.pravatar.cc/80?img=32"
                  alt="לקוחה מרוצה"
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex gap-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-text-primary text-xs font-medium leading-snug">
                    &quot;יוליאן הגיע באותו יום. מקצוען אמיתי!&quot;
                  </p>
                  <p className="text-text-muted text-[10px] mt-0.5">מיכל כ. | רמת גן</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
