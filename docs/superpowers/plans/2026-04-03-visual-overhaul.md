# Visual Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all CSS animations with motion/react and add WOW-level animations to every section of the ya-home-services website.

**Architecture:** Migrate from framer-motion to motion/react. Create shared animation components (AnimatedSection, TiltCard, MagneticButton, SplitText, CountUp, ScrollProgress). Rebuild each homepage section with advanced motion animations while preserving the existing Modern Clean navy/gold/white design.

**Tech Stack:** Next.js 16, React 19, motion/react, Tailwind CSS 4, TypeScript

---

### Task 1: Package Migration & Shared Animation Components

**Files:**
- Modify: `package.json` (swap framer-motion → motion)
- Create: `src/components/motion/AnimatedSection.tsx`
- Create: `src/components/motion/TiltCard.tsx`
- Create: `src/components/motion/MagneticButton.tsx`
- Create: `src/components/motion/SplitText.tsx`
- Create: `src/components/motion/CountUp.tsx`
- Create: `src/components/motion/ScrollProgress.tsx`
- Create: `src/components/motion/index.ts`
- Modify: `src/app/globals.css` (remove CSS keyframe animations)

- [ ] **Step 1: Swap framer-motion for motion**

```bash
cd /Users/leads4u/ya-home-services
npm uninstall framer-motion
npm install motion
```

- [ ] **Step 2: Create animation components directory and barrel export**

Create `src/components/motion/index.ts`:
```typescript
export { AnimatedSection } from './AnimatedSection'
export { TiltCard } from './TiltCard'
export { MagneticButton } from './MagneticButton'
export { SplitText } from './SplitText'
export { CountUp } from './CountUp'
export { ScrollProgress } from './ScrollProgress'
```

- [ ] **Step 3: Create AnimatedSection component**

Create `src/components/motion/AnimatedSection.tsx`:
```tsx
'use client'

import { motion, useInView } from 'motion/react'
import { useRef, type ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  stagger?: number
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  stagger = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  }

  const { x, y } = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: stagger,
      }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 4: Create TiltCard component**

Create `src/components/motion/TiltCard.tsx`:
```tsx
'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  tiltAmount?: number
}

export function TiltCard({ children, className, tiltAmount = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(y, [0, 1], [tiltAmount, -tiltAmount]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [0, 1], [-tiltAmount, tiltAmount]), {
    stiffness: 300,
    damping: 30,
  })

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ perspective: 1000, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 5: Create MagneticButton component**

Create `src/components/motion/MagneticButton.tsx`:
```tsx
'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef, type ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  as?: 'a' | 'button'
  href?: string
  onClick?: () => void
  strength?: number
  [key: string]: unknown
}

export function MagneticButton({
  children,
  className,
  as = 'button',
  href,
  strength = 10,
  ...props
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
    x.set((e.clientX - cx) / (rect.width / 2) * strength)
    y.set((e.clientY - cy) / (rect.height / 2) * strength)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const Component = as === 'a' ? motion.a : motion.button

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      <Component href={href} className={className} {...props}>
        {children}
      </Component>
    </motion.div>
  )
}
```

- [ ] **Step 6: Create SplitText component**

Create `src/components/motion/SplitText.tsx`:
```tsx
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
    <span ref={ref} className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block ml-[0.3em]">
          {word.split('').map((char, ci) => {
            const index = words.slice(0, wi).join('').length + ci + wi
            return (
              <motion.span
                key={`${wi}-${ci}`}
                className="inline-block"
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
```

- [ ] **Step 7: Create CountUp component**

Create `src/components/motion/CountUp.tsx`:
```tsx
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
  const rounded = useTransform(spring, (v) => Math.floor(v))

  useEffect(() => {
    if (isInView) spring.set(target)
  }, [isInView, spring, target])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
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
```

- [ ] **Step 8: Create ScrollProgress component**

Create `src/components/motion/ScrollProgress.tsx`:
```tsx
'use client'

import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 h-[3px] z-[9999] origin-right"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #C8A96E, #D4BA85)',
      }}
    />
  )
}
```

- [ ] **Step 9: Clean globals.css - remove CSS keyframe animations**

Remove from `src/app/globals.css` all @keyframes and .animate-* classes (lines 63-115), keeping the rest (theme, base styles, utilities).

- [ ] **Step 10: Add ScrollProgress to layout**

Modify `src/app/layout.tsx` to import and render `ScrollProgress` above `Header`:
```tsx
import { ScrollProgress } from '@/components/motion'
// ... in body:
<ScrollProgress />
<Header />
```

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "feat: add motion/react animation system with 6 shared components"
```

---

### Task 2: Hero Section - Complete Rebuild with Motion

**Files:**
- Modify: `src/components/Hero.tsx` (full rewrite)

- [ ] **Step 1: Rewrite Hero.tsx with motion animations**

Replace the entire `src/components/Hero.tsx` with a client component that uses:
- `SplitText` for the headline "בית בידיים טובות"
- `motion.svg` with pathLength animation for the gold underline
- `MagneticButton` for both CTAs
- `AnimatedSection` for trust badges with stagger
- `motion.div` with spring float for the review card
- Parallax on the hero image using `useScroll` + `useTransform`
- Staggered badge entrance with spring bounce

The component must be `'use client'` and import from `@/components/motion`. Keep the same HTML structure, layout, and styling classes but wrap elements in motion components.

Key animations:
- Badge slides in from right with spring (delay 0)
- Headline letters animate one by one (delay 0.2)
- SVG underline draws with pathLength 0→1 (delay 0.8, duration 1.2s)
- Subheadline fades up (delay 0.5)
- CTAs fade up with stagger (delay 0.7)
- Trust micro-badges stagger from bottom (delay 0.9, 150ms apart, spring bounce)
- Hero image has parallax (speed 0.15 via useScroll/useTransform on the section)
- Floating review card enters with scale 0→1 spring (delay 1.5), then float animation (y oscillation ±10px, 4s infinite)
- Stars in review card fill one by one (100ms stagger)

- [ ] **Step 2: Verify build**

```bash
cd /Users/leads4u/ya-home-services && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: rebuild Hero section with motion animations and parallax"
```

---

### Task 3: TrustBar - Spring CountUp

**Files:**
- Modify: `src/components/TrustBar.tsx` (full rewrite)

- [ ] **Step 1: Rewrite TrustBar.tsx with motion**

Replace `src/components/TrustBar.tsx` - make it `'use client'`. Replace the custom Counter with the `CountUp` component from `@/components/motion`. Add:
- The outer card slides up from bottom with spring (AnimatedSection direction="up")
- Each stat icon has scale bounce entrance (motion.div initial scale 0, animate scale 1, spring stiffness 200 damping 15, staggered 150ms)
- Icons pulse subtly after landing (motion.div animate scale [1, 1.05, 1] transition repeat Infinity duration 3)
- Hover on each stat: icon rotates 360deg + color transitions to gold via CSS group-hover

- [ ] **Step 2: Verify build**

```bash
cd /Users/leads4u/ya-home-services && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/TrustBar.tsx
git commit -m "feat: TrustBar with spring CountUp and icon animations"
```

---

### Task 4: ServicesGrid - 3D Tilt Cards

**Files:**
- Modify: `src/components/ServicesGrid.tsx` (full rewrite)

- [ ] **Step 1: Rewrite ServicesGrid.tsx with motion**

Make it `'use client'`. Wrap each service card in `TiltCard` from `@/components/motion`. Add:
- Section header animated with AnimatedSection
- Each card enters with stagger: motion.div with initial opacity 0 + y 40, animate opacity 1 + y 0, spring transition, delay index * 0.1
- Featured card (plumbing, index 0): animated gradient border using CSS background-size animation (shimmer effect)
- Hover effects via motion.div: image scale 1→1.1, glassmorphism overlay backdrop-blur 0→8px, text slides up from translateY 20→0
- Arrow appears on hover with opacity + translateY transition
- Keep the bento grid layout exactly as-is

- [ ] **Step 2: Verify build**

```bash
cd /Users/leads4u/ya-home-services && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ServicesGrid.tsx
git commit -m "feat: ServicesGrid with 3D tilt cards and stagger reveal"
```

---

### Task 5: WhyChooseUs - Parallax & Card Animations

**Files:**
- Modify: `src/components/WhyChooseUs.tsx` (full rewrite)

- [ ] **Step 1: Rewrite WhyChooseUs.tsx with motion**

Make it `'use client'`. Add:
- Image with parallax using useScroll + useTransform (y offset based on scroll position)
- Floating "1,500+" badge with spring float animation (y oscillation, enters with scale 0→1 delay 1s)
- Section header animates with AnimatedSection
- Each reason card enters with stagger (AnimatedSection with increasing delay)
- Card hover: translateY -8px via motion.div whileHover, shadow grows
- Icon background: CSS transition navy on group-hover stays (already exists), add icon scale 1→1.15 on hover via motion
- Satisfaction bar: motion.div with width animating from 0% to 100% when in view, spring stiffness 50 damping 20

- [ ] **Step 2: Verify build**

```bash
cd /Users/leads4u/ya-home-services && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/WhyChooseUs.tsx
git commit -m "feat: WhyChooseUs with parallax image and animated cards"
```

---

### Task 6: ProcessSteps - Animated Timeline

**Files:**
- Modify: `src/components/ProcessSteps.tsx` (full rewrite)

- [ ] **Step 1: Rewrite ProcessSteps.tsx with motion**

Make it `'use client'`. Add:
- Section header with AnimatedSection
- SVG connector line between steps that draws on scroll: use useScroll with section ref + useTransform to map scroll progress to pathLength 0→1
- Each step circle scales in with spring when connector reaches it (use useTransform to derive per-step progress)
- Step number badges bounce in after circle (delay offset)
- Step text fades+slides from right with spring
- Active step (currently in viewport) gets gold glow via box-shadow animation
- Mobile: no connector lines (already hidden), steps stagger in vertically

- [ ] **Step 2: Verify build**

```bash
cd /Users/leads4u/ya-home-services && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ProcessSteps.tsx
git commit -m "feat: ProcessSteps with scroll-driven timeline animation"
```

---

### Task 7: Reviews - Interactive Drag Carousel

**Files:**
- Modify: `src/components/Reviews.tsx` (full rewrite)

- [ ] **Step 1: Rewrite Reviews.tsx with motion**

Make it `'use client'`. Replace the static grid with an interactive carousel:
- Section header with AnimatedSection
- Horizontal carousel using motion.div with drag="x", dragConstraints calculated from card count and card width
- dragElastic: 0.2, spring snap to nearest card
- Auto-rotate: advances every 5s using useEffect interval, pauses on hover/drag state
- Active card: scale 1, opacity 1. Adjacent: scale 0.9, opacity 0.6. Transitions use spring
- Stars fill one by one on card entrance (100ms stagger, scale bounce 1→1.3→1)
- Quote icon has subtle float (y oscillation 3s)
- Navigation dots at bottom: active dot scale 1.4 gold, inactive scale 1 gray, click scrolls with spring
- Background: keep navy with dot pattern, add subtle animated gradient (2 radial gradients with slow CSS position shift)
- On mobile: cards stack vertically with swipe gesture, or show 1 card at a time with dots

- [ ] **Step 2: Verify build**

```bash
cd /Users/leads4u/ya-home-services && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Reviews.tsx
git commit -m "feat: Reviews carousel with drag, auto-rotate and spring animations"
```

---

### Task 8: FAQ, AreasWeServe, ContactCTA - Motion Polish

**Files:**
- Modify: `src/components/FAQSection.tsx`
- Modify: `src/components/AreasWeServe.tsx`
- Modify: `src/components/ContactCTA.tsx`

- [ ] **Step 1: Rewrite FAQSection.tsx with spring accordion**

Make it `'use client'` (already is). Replace CSS max-height accordion with motion.div animate height: "auto" / height: 0. Spring stiffness 300 damping 30. Content fades in with 0.2s delay. Chevron rotates with spring. Item hover: border color transitions to gold.

- [ ] **Step 2: Rewrite AreasWeServe.tsx with stagger reveal**

Make it `'use client'`. Wrap in AnimatedSection. Each city pill enters with stagger (50ms delay each). Hover: scale 1.05 + gold border via motion.div whileHover.

- [ ] **Step 3: Rewrite ContactCTA.tsx with parallax + magnetic buttons**

Make it `'use client'`. Background image gets parallax via useScroll/useTransform. Text enters with AnimatedSection. Both CTAs use MagneticButton. Gold button gets subtle glow pulse (box-shadow animation infinite).

- [ ] **Step 4: Verify build**

```bash
cd /Users/leads4u/ya-home-services && npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/components/FAQSection.tsx src/components/AreasWeServe.tsx src/components/ContactCTA.tsx
git commit -m "feat: FAQ spring accordion, areas stagger reveal, CTA parallax"
```

---

### Task 9: Header & Footer - Enhanced Animations

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/FloatingCTA.tsx`

- [ ] **Step 1: Enhance Header.tsx with motion**

Keep `'use client'`. Add:
- Header height animates from 72px to 64px on scroll using motion.header with animate based on scrolled state
- Logo scales 1→0.85 on scroll with spring
- Backdrop-blur increases from 0 to 20px on scroll
- Mobile menu: replace conditional render with AnimatePresence + motion.div sliding from right (translateX 100%→0, spring). Menu items stagger in (100ms each). Close: exit animation reverse
- Desktop dropdown: replace CSS opacity transition with motion.div AnimatePresence for enter/exit

- [ ] **Step 2: Enhance Footer.tsx with reveal**

Make Footer `'use client'`. Wrap content sections in AnimatedSection with stagger. Social icons: motion.a whileHover rotate 360 + scale 1.1, spring transition.

- [ ] **Step 3: Enhance FloatingCTA.tsx with motion**

Replace CSS animate-fade-in with AnimatePresence + motion.div for enter/exit. WhatsApp button: subtle pulse animation (scale 1→1.1→1 infinite). Mobile bar slides up from bottom with spring. Desktop button slides in from right with spring.

- [ ] **Step 4: Verify build**

```bash
cd /Users/leads4u/ya-home-services && npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/Footer.tsx src/components/FloatingCTA.tsx
git commit -m "feat: header/footer/floating CTA motion animations"
```

---

### Task 10: Final Build Verification & Production Readiness

**Files:**
- All modified files

- [ ] **Step 1: Full production build**

```bash
cd /Users/leads4u/ya-home-services && npm run build
```

Verify: all pages compile, no TypeScript errors, no warnings.

- [ ] **Step 2: Run dev server and spot check**

```bash
cd /Users/leads4u/ya-home-services && npm run dev
```

Open http://localhost:3000 and verify all animations work.

- [ ] **Step 3: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: final animation polish and build fixes"
```
