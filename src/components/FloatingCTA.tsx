'use client'

import { Phone } from 'lucide-react'

export default function FloatingCTA() {
  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 right-0 left-0 z-40 lg:hidden bg-navy/95 backdrop-blur-sm border-t border-white/10 p-3 safe-bottom">
        <a
          href="tel:050-0000000"
          className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold h-12 rounded-xl transition-colors cursor-pointer w-full"
        >
          <Phone className="w-5 h-5" />
          <span>התקשר עכשיו - חינם וללא התחייבות</span>
        </a>
      </div>

      {/* Desktop floating phone button */}
      <a
        href="tel:050-0000000"
        className="hidden lg:flex fixed bottom-8 left-8 z-40 items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold h-14 px-6 rounded-full transition-all cursor-pointer shadow-lg shadow-gold/20 hover:shadow-gold/30 hover:scale-105"
        aria-label="התקשר עכשיו"
      >
        <Phone className="w-5 h-5" />
        <span>התקשר עכשיו</span>
      </a>
    </>
  )
}
