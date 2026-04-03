'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  letterDelay?: number
}

export function SplitText({
  text,
  className,
  delay = 0,
  letterDelay = 0.03,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const words = text.split(' ')

  return (
    <span ref={ref} className={className} style={{ display: 'inline' }}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', marginLeft: '0.3em' }}>
          {word.split('').map((char, ci) => {
            const index = words.slice(0, wi).reduce((acc, w) => acc + w.length, 0) + ci
            return (
              <motion.span
                key={`${wi}-${ci}`}
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 12,
                  delay: delay + index * letterDelay,
                }}
              >
                {char}
              </motion.span>
            )
          })}
        </span>
      ))}
    </span>
  )
}
