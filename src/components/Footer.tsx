import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

const serviceLinks = [
  { href: '/services/plumbing', label: 'אינסטלציה' },
  { href: '/services/renovations', label: 'שיפוצים כלליים' },
  { href: '/services/furniture-installation', label: 'התקנת רהיטים' },
  { href: '/services/handyman', label: 'הנדי מן' },
  { href: '/services/lighting', label: 'התקנת גופי תאורה' },
  { href: '/services/hanging', label: 'תליית תמונות ואביזרים' },
  { href: '/services/maintenance', label: 'תחזוקת בית' },
]

const quickLinks = [
  { href: '/', label: 'ראשי' },
  { href: '/about', label: 'אודות' },
  { href: '/services', label: 'שירותים' },
  { href: '/faq', label: 'שאלות נפוצות' },
  { href: '/contact', label: 'צור קשר' },
]

const legalLinks = [
  { href: '/accessibility', label: 'הצהרת נגישות' },
  { href: '/privacy', label: 'מדיניות פרטיות' },
  { href: '/terms', label: 'תנאי שימוש' },
]

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 sm:pt-20 pb-28 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/images/logo.jpg"
                alt="י.א"
                width={44}
                height={44}
                className="rounded-xl w-11 h-11 object-cover"
              />
              <div>
                <span className="text-white font-bold text-lg block leading-none">י.א</span>
                <span className="text-blue-light text-xs block mt-0.5">שירותי בית ותחזוקה</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              שירותי אינסטלציה, שיפוצים, התקנות ותחזוקה מקצועיים בכל גוש דן.
            </p>
            <div className="flex items-center gap-2.5 mb-5">
              <a
                href="https://www.instagram.com/ya.home.services.il/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/60 hover:text-blue-light transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Y.AHomeSolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/60 hover:text-blue-light transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <a href="tel:0503336540" className="flex items-center gap-2.5 text-white/50 hover:text-blue-light text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" /> 050-333-6540
              </a>
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <MapPin className="w-4 h-4 shrink-0" /> גוש דן והסביבה
              </div>
              <div className="flex items-center gap-2.5 text-white/50 text-sm">
                <Clock className="w-4 h-4 shrink-0" /> א&apos;-ה&apos; 07:00-19:00
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5">שירותים</h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-blue-light text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5">ניווט</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-blue-light text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold text-sm mt-6 mb-4">מידע משפטי</h3>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-blue-light text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5">צריכים עזרה?</h3>
            <p className="text-white/40 text-sm mb-5 leading-relaxed">
              התקשרו עכשיו לייעוץ חינם וללא התחייבות.
            </p>
            <a
              href="tel:0503336540"
              className="flex items-center justify-center gap-2 bg-white hover:bg-surface text-navy font-bold h-12 px-6 rounded-xl transition-colors cursor-pointer w-full text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>התקשר עכשיו</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/20 text-xs">
              &copy; {new Date().getFullYear()} י.א שירותי בית ותחזוקה. כל הזכויות שמורות.
            </p>
            <p className="text-white/20 text-xs">
              עסק רשום | ח.פ. 036678894
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
