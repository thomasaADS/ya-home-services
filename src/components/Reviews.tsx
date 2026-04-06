'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/motion'
import { reviews } from '@/data/reviews'

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  // Scroll to active card
  useEffect(() => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const cards = container.children
    if (cards[activeIndex]) {
      const card = cards[activeIndex] as HTMLElement
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: 'smooth',
      })
    }
  }, [activeIndex])

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % reviews.length)
  }, [])

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [])

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="text-blue-light font-semibold text-sm uppercase tracking-wider">
              מה אומרים עלינו
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2">
              לקוחות ממליצים
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-blue-light fill-blue-light" />
                ))}
              </div>
              <span className="text-white/60 text-sm">5.0 מתוך 5</span>
            </div>
            {/* Navigation arrows - desktop */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={goPrev}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="ביקורת קודמת"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="ביקורת הבאה"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`shrink-0 w-[85vw] sm:w-[320px] bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 snap-start transition-opacity duration-200 ${
                index === activeIndex ? 'opacity-100' : 'opacity-60'
              }`}
            >
              <Quote className="w-8 h-8 text-blue-light/30 mb-4" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-blue-light fill-blue-light" />
                ))}
              </div>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 line-clamp-5">
                &quot;{review.text}&quot;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <Image
                  src={`https://i.pravatar.cc/80?img=${review.avatarId}`}
                  alt={review.name}
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div>
                  <span className="font-bold text-white block text-sm">
                    {review.name}
                  </span>
                  <span className="text-white/50 text-xs">
                    {review.location} | {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeIndex === index ? 'bg-blue-light scale-125' : 'bg-white/30'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`ביקורת ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
