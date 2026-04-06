'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'ראשי' },
  { href: '/about', label: 'אודות' },
  {
    href: '/services',
    label: 'שירותים',
    children: [
      { href: '/services/plumbing', label: 'אינסטלציה' },
      { href: '/services/renovations', label: 'שיפוצים כלליים' },
      { href: '/services/furniture-installation', label: 'התקנת רהיטים' },
      { href: '/services/handyman', label: 'הנדי מן' },
      { href: '/services/lighting', label: 'התקנת גופי תאורה' },
      { href: '/services/hanging', label: 'תליית תמונות ואביזרים' },
      { href: '/services/maintenance', label: 'תחזוקת בית' },
    ],
  },
  { href: '/gallery', label: 'פרויקטים' },
  { href: '/faq', label: 'שאלות נפוצות' },
  { href: '/contact', label: 'צור קשר' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 h-16 sm:h-[72px] ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.jpg"
                alt="י.א שירותי בית ותחזוקה"
                width={44}
                height={44}
                className="rounded-xl w-9 h-9 sm:w-11 sm:h-11 object-cover"
                priority
              />
              <div>
                <span className="text-navy font-bold text-base sm:text-lg leading-none block">
                  י.א
                </span>
                <span className="text-text-muted text-[10px] sm:text-xs leading-none block mt-0.5">
                  שירותי בית ותחזוקה
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-text-secondary hover:text-navy px-3.5 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-surface"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="bg-white rounded-xl shadow-elevated border border-border p-2 min-w-[220px]"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block text-text-secondary hover:text-navy hover:bg-surface px-3.5 py-2.5 text-sm rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0503336540"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-medium h-10 px-5 rounded-xl transition-colors cursor-pointer text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>050-333-6540</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-navy p-2 rounded-lg hover:bg-surface transition-colors cursor-pointer"
            aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between text-text-secondary hover:text-navy px-4 py-3 text-base font-medium transition-colors rounded-lg hover:bg-surface cursor-pointer"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pr-4 pb-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-text-secondary hover:text-navy px-4 py-2.5 text-sm transition-colors rounded-lg hover:bg-surface"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-text-secondary hover:text-navy px-4 py-3 text-base font-medium transition-colors rounded-lg hover:bg-surface"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="tel:0503336540"
                className="flex items-center justify-center gap-2 bg-navy text-white font-medium h-12 px-5 rounded-xl transition-colors mt-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>התקשר עכשיו</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
