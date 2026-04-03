'use client'

import { useInView, useSpring, useTransform, motion } from 'motion/react'
import { useRef, useEffect, useState } from 'react'

interface CountUpProps {
  target: number
  suffix?: string
  className?: string
  duration?: number
}

export function CountUp({ target, suffix = '', className, duration = 1.5 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState('0')

  const spring = useSpring(0, { duration: duration * 1000 })
  const rounded = useTransform(spring, (v: number) => Math.floor(v))

  useEffect(() => {
    if (isInView) spring.set(target)
  }, [isInView, spring, target])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v: number) => {
      setDisplay(v.toLocaleString())
    })
    return unsubscribe
  }, [rounded])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      {display}{suffix}
    </motion.span>
  )
}
