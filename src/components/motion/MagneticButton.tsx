'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef, type ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  strength?: number
}

export function MagneticButton({
  children,
  className,
  href,
  strength = 10,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set(((e.clientX - cx) / (rect.width / 2)) * strength)
    y.set(((e.clientY - cy) / (rect.height / 2)) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {href ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <button type="button" className={className}>
          {children}
        </button>
      )}
    </motion.div>
  )
}
