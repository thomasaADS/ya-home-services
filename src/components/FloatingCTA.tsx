'use client'

import { Phone } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 right-0 left-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-border px-4 py-3 safe-bottom animate-fade-in">
        <a
          href="tel:050-0000000"
          className="flex items-center justify-center gap-2.5 bg-navy hover:bg-navy-light text-white font-bold h-12 rounded-xl transition-colors cursor-pointer w-full text-sm"
        >
          <Phone className="w-4 h-4" />
          <span>התקשר עכשיו — ייעוץ חינם</span>
        </a>
      </div>

      {/* Desktop floating button */}
      <a
        href="tel:050-0000000"
        className="hidden lg:flex fixed bottom-8 left-8 z-40 items-center gap-2.5 bg-navy hover:bg-navy-light text-white font-semibold h-12 px-6 rounded-full transition-all cursor-pointer shadow-elevated hover:shadow-2xl hover:scale-105 animate-fade-in"
        aria-label="התקשר עכשיו"
      >
        <Phone className="w-4 h-4" />
        <span className="text-sm">050-000-0000</span>
      </a>
    </>
  )
}
