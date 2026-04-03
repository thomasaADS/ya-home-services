'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { motion, useMotionValue, useSpring, animate } from 'motion/react'
import { AnimatedSection } from '@/components/motion'
import { reviews } from '@/data/reviews'

const CARD_WIDTH = 320
const CARD_GAP = 20
const AUTO_ROTATE_INTERVAL = 5000

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Calculate card width based on mobile/desktop
  const getCardWidth = useCallback(() => {
    if (isMobile && containerRef.current) {
      return containerRef.current.offsetWidth
    }
    return CARD_WIDTH + CARD_GAP
  }, [isMobile])

  // Snap to active index
  const snapToIndex = useCallback(
    (index: number) => {
      const cardW = getCardWidth()
      const target = -index * cardW
      animate(x, target, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      })
    },
    [x, getCardWidth]
  )

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % reviews.length
        return next
      })
    }, AUTO_ROTATE_INTERVAL)
    return () => clearInterval(interval)
  }, [isPaused])

  // Snap when activeIndex changes
  useEffect(() => {
    snapToIndex(activeIndex)
  }, [activeIndex, snapToIndex])

  // Handle drag end: snap to nearest card
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const cardW = getCardWidth()
    const offset = info.offset.x
    const velocity = info.velocity.x

    // Determine direction with velocity consideration
    let newIndex = activeIndex
    if (Math.abs(velocity) > 200) {
      // RTL: swipe left (negative offset) = go to previous (lower index), swipe right (positive offset) = go to next
      // Actually in RTL visual direction is reversed, but the drag physics are the same
      newIndex = velocity < 0 ? activeIndex + 1 : activeIndex - 1
    } else if (Math.abs(offset) > cardW / 4) {
      newIndex = offset < 0 ? activeIndex + 1 : activeIndex - 1
    }

    newIndex = Math.max(0, Math.min(reviews.length - 1, newIndex))
    setActiveIndex(newIndex)
    snapToIndex(newIndex)
  }

  // Calculate drag constraints
  const getConstraints = () => {
    const cardW = getCardWidth()
    const maxDrag = -(reviews.length - 1) * cardW
    return { left: maxDrag, right: 0 }
  }

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              מה אומרים עלינו
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2">
              לקוחות ממליצים
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-white/60 text-sm">5.0 מתוך 5</span>
          </div>
        </AnimatedSection>

        {/* Carousel container */}
        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-5 cursor-grab active:cursor-grabbing"
            style={{ x: springX }}
            drag="x"
            dragConstraints={getConstraints()}
            dragElastic={0.2}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={handleDragEnd}
          >
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                review={review}
                index={index}
                activeIndex={activeIndex}
                isMobile={isMobile}
                containerRef={containerRef}
              />
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              className="rounded-full focus:outline-none"
              animate={{
                scale: activeIndex === index ? 1.4 : 1,
                backgroundColor:
                  activeIndex === index
                    ? 'var(--color-gold)'
                    : 'rgba(255, 255, 255, 0.3)',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{ width: 10, height: 10 }}
              onClick={() => setActiveIndex(index)}
              aria-label={`ביקורת ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Separate card component for star animation
function ReviewCard({
  review,
  index,
  activeIndex,
  isMobile,
  containerRef,
}: {
  review: (typeof reviews)[number]
  index: number
  activeIndex: number
  isMobile: boolean
  containerRef: React.RefObject<HTMLDivElement | null>
}) {
  const isActive = index === activeIndex
  const [hasBeenActive, setHasBeenActive] = useState(false)

  useEffect(() => {
    if (isActive) setHasBeenActive(true)
  }, [isActive])

  // Calculate card width for mobile
  const mobileWidth = isMobile && containerRef.current ? containerRef.current.offsetWidth : undefined

  return (
    <motion.div
      className="shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 select-none"
      style={{
        width: isMobile ? mobileWidth || '100%' : CARD_WIDTH,
        minWidth: isMobile ? mobileWidth || '100%' : CARD_WIDTH,
      }}
      animate={{
        scale: isActive ? 1 : 0.92,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Floating quote icon */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Quote className="w-8 h-8 text-gold/30 mb-4" />
      </motion.div>

      {/* Stars with stagger animation */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={
              hasBeenActive
                ? { scale: [0, 1.3, 1] }
                : { scale: 0 }
            }
            transition={{
              delay: i * 0.1,
              duration: 0.4,
              ease: 'easeOut',
            }}
          >
            <Star className="w-4 h-4 text-gold fill-gold" />
          </motion.div>
        ))}
      </div>

      {/* Review text */}
      <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 line-clamp-5">
        &quot;{review.text}&quot;
      </p>

      {/* Avatar and name */}
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
    </motion.div>
  )
}
