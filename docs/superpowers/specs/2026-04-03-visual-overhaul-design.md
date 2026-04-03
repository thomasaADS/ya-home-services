# Visual Overhaul Design - Y.A. Home Services

**Date:** 2026-04-03
**Style:** Modern Clean (Navy/Gold/White) + WOW Animations
**Approach:** Motion Overhaul - full migration to motion/react

---

## 1. Animation Infrastructure

### Package Migration
- Remove `framer-motion` dependency
- Install `motion` package (motion/react)
- Remove all CSS keyframe animations from globals.css

### Shared Animation Components

**AnimatedSection** - Wraps any section for scroll-triggered reveal
- Uses `useInView` with `once: true` and `margin: "-100px"`
- Children animate with configurable stagger (default 150ms)
- Variants: fadeUp, fadeIn, slideRight, scaleIn

**ParallaxLayer** - Scroll-linked parallax effect
- Uses `useScroll` + `useTransform`
- Configurable speed multiplier
- Used in Hero background, WhyChooseUs image, ContactCTA

**MagneticButton** - Mouse-attracted button
- Tracks mouse position relative to button center
- Applies spring-based x/y offset (max 10px)
- Resets on mouse leave with spring
- Gold glow effect on hover

**SplitText** - Letter-by-letter reveal
- Splits text into individual `motion.span` elements
- Each letter staggers in with spring (stiffness: 100, damping: 12)
- Supports configurable delay between letters (default 30ms)

**CountUp** - Animated number counter
- Spring-based interpolation from 0 to target
- Triggered by `useInView`
- Supports suffix ("+", "%", etc.)
- Duration configurable, default spring

**TiltCard** - 3D mouse-reactive card
- Tracks mouse position over card
- Applies rotateX/rotateY transforms (max 8deg)
- Perspective: 1000px
- Spring-based return to flat on mouse leave
- Subtle shadow shift matching tilt direction

**ScrollProgress** - Page scroll progress bar
- Fixed top bar, gold gradient
- Uses `useScroll` on page with `scaleX` transform
- Height: 3px, z-index above header

### Page Transitions
- Wrap pages in `AnimatePresence`
- Enter: fade + slideY from 20px, duration 0.3s
- Exit: fade out, duration 0.2s

---

## 2. Hero Section - Complete Rebuild

### Layout (unchanged)
- 50/50 grid: text left, image right (RTL: text right, image left)

### Background
- Main image with `ParallaxLayer` (speed: 0.3)
- Navy gradient overlay (unchanged colors)
- Subtle animated gradient mesh (2 radial gradients, slow position shift over 20s)

### Title "בית בידיים טובות"
- `SplitText` component for main heading
- Gold SVG underline with draw animation (pathLength 0→1, duration 1.2s, delay 0.8s)
- Badge slides in from right with spring

### CTAs
- Both buttons use `MagneticButton`
- Phone button: gold background, white text, glow pulse on idle
- Form button: transparent border, white text, fill animation on hover

### Trust Micro-Badges
- Stagger reveal from bottom (3 badges, 150ms apart)
- Each bounces in with spring (stiffness: 200, damping: 15)
- Icons have subtle pulse animation

### Floating Review Card
- `motion.div` with float animation (y: -10 to 10, duration 4s, infinite)
- Subtle rotation (rotate: -2 to 2 degrees)
- Spring-based entrance (scale 0→1, delay 1.5s)
- Stars animate fill one by one (100ms stagger)

---

## 3. TrustBar - Animated Stats

### Scroll Trigger
- `useInView` triggers all animations

### Numbers
- `CountUp` with spring physics for each stat
- Values: 10+ (years), 1,500+ (customers), 12 (cities), 100% (warranty)
- Stagger: 150ms between each counter start

### Icons
- Scale bounce on enter (0→1.2→1, spring)
- Subtle pulse animation after landing (scale 1→1.05→1, infinite, 3s)
- Hover: rotation 360deg, color shift to gold

### Container
- Elevated card slides up from bottom with spring
- Subtle shadow animation on enter

---

## 4. ServicesGrid - 3D Tilt Cards

### Grid Layout (keep bento)
- First service (plumbing): lg:col-span-2 lg:row-span-2
- Second service: lg:col-span-2
- Remaining 6: Regular grid

### Card Component
- Wrap each card in `TiltCard`
- Scroll stagger reveal: each card fades up with 100ms delay between cards

### Hover Effects
- Image: scale 1→1.1, brightness 1→1.1, transition 0.5s
- Overlay: glassmorphism effect (backdrop-blur increases from 0 to 8px)
- Text content: translateY from 20px to 0 (slides into view)
- Card shadow: grows from sm to 2xl
- Border: subtle gold border appears (opacity 0→0.3)

### Featured Card (Plumbing)
- Animated gradient border (gold shimmer effect, moving linear gradient)
- Slightly more tilt range (max 10deg vs 8deg)

---

## 5. WhyChooseUs - Value Cards

### Image Section
- `ParallaxLayer` on main image (speed: 0.2)
- Floating "1,500+ customers" badge with spring float
- Badge entrance: scale+fade with 1s delay

### Reason Cards (4 cards)
- Stagger reveal from bottom (200ms apart)
- Hover: card lifts (translateY -8px), shadow grows
- Icon background: color transition navy→gold (spring 0.3s)
- Icon: scale 1→1.15 on hover

### Satisfaction Bar
- Animated width from 0% to 98% on scroll into view
- Spring-based (stiffness: 50, damping: 20)
- Gold gradient fill

---

## 6. ProcessSteps - Animated Timeline

### Connector Line
- SVG path between steps
- `pathLength` animates 0→1 as user scrolls through section
- Uses `useScroll` with section ref + `useTransform`
- Gold color, 2px width

### Step Circles
- Each circle scales in with spring when connector reaches it
- Number inside fades in after circle lands
- Stagger matches scroll position

### Step Content
- Text fades+slides from right (RTL) as each step activates
- Spring-based with slight delay after circle animation

### Active State
- Step currently in viewport gets gold glow (box-shadow animation)
- Others dim slightly (opacity 0.6)

---

## 7. Reviews - Interactive Carousel

### Carousel Engine
- `motion.div` with drag="x" constraint
- Spring snap to nearest card center
- `dragElastic: 0.2`, `dragConstraints` calculated from card count

### Auto-Rotate
- Advances every 5 seconds
- Pauses on hover or drag
- Smooth spring transition between cards

### Card Animations
- Enter viewport: scale 0.85→1, opacity 0→1, spring
- Active card: scale 1, full opacity
- Adjacent cards: scale 0.9, opacity 0.6

### Star Ratings
- Each star fills with gold color sequentially (100ms stagger)
- Slight scale bounce on each fill (1→1.3→1)

### Quote Icon
- Subtle float animation (y oscillation, 3s period)
- Opacity pulses gently

### Navigation Dots
- Active dot: scale 1.4, gold color, spring transition
- Inactive: scale 1, gray
- Click triggers spring-animated scroll to card

### Background
- Navy with subtle animated gradient (2 color stops shifting slowly)
- Dot pattern overlay (unchanged)

---

## 8. FAQ - Spring Accordion

### Open/Close Animation
- Replace CSS max-height with `motion.div` `animate={{ height: "auto" }}`
- Spring physics (stiffness: 300, damping: 30)
- Content fades in (opacity 0→1, 0.2s delay after height starts)

### Chevron
- `motion.div` rotate 0→180deg with spring
- Matches open/close state

### Item Hover
- Border color transitions to gold (0.2s)
- Subtle background tint

---

## 9. AreasWeServe

### City Pills
- Stagger reveal: each pill fades up with 50ms delay
- Hover: scale 1.05, gold border, shadow
- Active state feel with spring

### Section
- `AnimatedSection` wrapper with fadeUp variant

---

## 10. ContactCTA

### Background
- `ParallaxLayer` on background image (speed: 0.4)
- Navy overlay unchanged

### Text
- `AnimatedSection` with fadeUp
- SplitText on headline (optional, can be simple fadeUp)

### Buttons
- `MagneticButton` for both CTAs
- Gold button: glow pulse animation on idle
- White outline button: fill animation on hover

---

## 11. Header Enhancements

### Scroll State
- Glassmorphism: backdrop-blur increases 0→20px on scroll
- Background opacity transitions 0→0.9
- Logo scales 1→0.85 on scroll (spring)
- Height reduces from 80px to 64px (spring)
- Shadow appears on scroll

### Mobile Menu
- Opens with spring from right (translateX 100%→0)
- Menu items stagger in (100ms each)
- Backdrop fade in (opacity 0→1)
- Close: reverse with faster timing

### Active Link
- Gold underline with layoutId animation (shared layout)
- Smooth slide between active nav items

---

## 12. Footer

### Reveal
- `AnimatedSection` wrapping footer content
- Columns stagger in from bottom

### Social Icons
- Hover: rotation 360deg + scale 1.1, spring
- Color: white→gold transition

---

## 13. Scroll Progress Indicator

### Implementation
- Fixed `motion.div` at top of viewport, above header
- Gold gradient background (left to right)
- `scaleX` driven by `useScroll` progress (0→1)
- `transformOrigin: "right"` (RTL)
- Height: 3px
- z-index: 9999

---

## Technical Notes

- All `useInView` hooks use `once: true` to avoid re-triggering
- All spring configs use consistent physics: stiffness 100-300, damping 12-30
- Animations respect `prefers-reduced-motion` media query
- Mobile: reduce tilt effects, simplify parallax, keep scroll reveals
- Performance: use `willChange` hints, `layoutId` for shared animations
- Bundle: motion/react tree-shakes well, expect ~25-30KB addition
