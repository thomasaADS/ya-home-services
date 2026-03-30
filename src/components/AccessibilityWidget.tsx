'use client'

import { useState } from 'react'
import { Accessibility, X, ZoomIn, ZoomOut, Contrast, MousePointer, Pause, RotateCcw } from 'lucide-react'

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [highlightLinks, setHighlightLinks] = useState(false)
  const [stopAnimations, setStopAnimations] = useState(false)
  const [grayscale, setGrayscale] = useState(false)

  const increaseFontSize = () => {
    const next = Math.min(fontSize + 10, 150)
    setFontSize(next)
    document.documentElement.style.fontSize = `${next}%`
  }

  const decreaseFontSize = () => {
    const next = Math.max(fontSize - 10, 80)
    setFontSize(next)
    document.documentElement.style.fontSize = `${next}%`
  }

  const toggleContrast = () => {
    setHighContrast(!highContrast)
    document.documentElement.classList.toggle('high-contrast')
    if (!highContrast) {
      document.documentElement.style.filter = 'contrast(1.5)'
    } else {
      document.documentElement.style.filter = ''
    }
  }

  const toggleGrayscale = () => {
    setGrayscale(!grayscale)
    if (!grayscale) {
      document.documentElement.style.filter = grayscale ? '' : 'grayscale(1)'
    } else {
      document.documentElement.style.filter = ''
    }
  }

  const toggleHighlightLinks = () => {
    setHighlightLinks(!highlightLinks)
    const links = document.querySelectorAll('a')
    links.forEach((link) => {
      if (!highlightLinks) {
        link.style.outline = '2px solid #2563EB'
        link.style.outlineOffset = '2px'
      } else {
        link.style.outline = ''
        link.style.outlineOffset = ''
      }
    })
  }

  const toggleAnimations = () => {
    setStopAnimations(!stopAnimations)
    if (!stopAnimations) {
      document.documentElement.style.setProperty('--animation-duration', '0s')
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.animationDuration = '0s'
        ;(el as HTMLElement).style.transitionDuration = '0s'
      })
    } else {
      document.documentElement.style.removeProperty('--animation-duration')
      document.querySelectorAll('*').forEach((el) => {
        (el as HTMLElement).style.animationDuration = ''
        ;(el as HTMLElement).style.transitionDuration = ''
      })
    }
  }

  const resetAll = () => {
    setFontSize(100)
    setHighContrast(false)
    setHighlightLinks(false)
    setStopAnimations(false)
    setGrayscale(false)
    document.documentElement.style.fontSize = ''
    document.documentElement.style.filter = ''
    document.documentElement.classList.remove('high-contrast')
    document.querySelectorAll('a').forEach((link) => {
      link.style.outline = ''
      link.style.outlineOffset = ''
    })
    document.querySelectorAll('*').forEach((el) => {
      (el as HTMLElement).style.animationDuration = ''
      ;(el as HTMLElement).style.transitionDuration = ''
    })
  }

  const options = [
    { label: 'הגדל טקסט', icon: ZoomIn, action: increaseFontSize, active: fontSize > 100 },
    { label: 'הקטן טקסט', icon: ZoomOut, action: decreaseFontSize, active: fontSize < 100 },
    { label: 'ניגודיות גבוהה', icon: Contrast, action: toggleContrast, active: highContrast },
    { label: 'גווני אפור', icon: Contrast, action: toggleGrayscale, active: grayscale },
    { label: 'הדגש קישורים', icon: MousePointer, action: toggleHighlightLinks, active: highlightLinks },
    { label: 'עצור אנימציות', icon: Pause, action: toggleAnimations, active: stopAnimations },
  ]

  return (
    <>
      {/* Accessibility button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 bottom-6 lg:bottom-8 z-50 w-12 h-12 bg-blue text-white rounded-full shadow-lg hover:bg-blue-dark hover:scale-110 transition-all flex items-center justify-center cursor-pointer"
        aria-label="תפריט נגישות"
        title="נגישות"
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="fixed left-4 bottom-36 lg:bottom-24 z-50 w-72 bg-white rounded-2xl shadow-elevated border border-border animate-scale-in overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-blue text-white">
            <div className="flex items-center gap-2">
              <Accessibility className="w-5 h-5" />
              <span className="font-bold text-sm">תפריט נגישות</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
              aria-label="סגור תפריט נגישות"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Options */}
          <div className="p-3 grid grid-cols-2 gap-2">
            {options.map((opt, index) => {
              const Icon = opt.icon
              return (
                <button
                  key={index}
                  type="button"
                  onClick={opt.action}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl text-center transition-all cursor-pointer ${
                    opt.active
                      ? 'bg-blue/10 text-blue border border-blue/20'
                      : 'bg-surface text-text-secondary hover:bg-surface-alt border border-transparent'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[11px] font-medium leading-tight">{opt.label}</span>
                </button>
              )
            })}
          </div>

          {/* Reset */}
          <div className="px-3 pb-3">
            <button
              type="button"
              onClick={resetAll}
              className="w-full flex items-center justify-center gap-2 bg-surface hover:bg-surface-alt text-text-secondary h-9 rounded-xl text-xs font-medium transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              איפוס הגדרות
            </button>
          </div>
        </div>
      )}
    </>
  )
}
