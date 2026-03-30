'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'ראשי' },
  { href: '/about', label: 'אודות' },
  { href: '/services', label: 'שירותים' },
  { href: '/gallery', label: 'פרויקטים' },
  { href: '/faq', label: 'שאלות נפוצות' },
  { href: '/contact', label: 'צור קשר' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="י.א שירותי בית ותחזוקה"
              width={48}
              height={48}
              className="rounded-lg w-10 h-10 sm:w-12 sm:h-12 object-cover"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg leading-tight block">
                י.א
              </span>
              <span className="text-gold text-xs leading-tight block">
                שירותי בית ותחזוקה
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:050-0000000"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold h-11 px-5 rounded-xl transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>התקשר עכשיו</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-gold px-4 py-3 text-base font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:050-0000000"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold h-12 px-5 rounded-xl transition-colors mt-3 cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>התקשר עכשיו</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
