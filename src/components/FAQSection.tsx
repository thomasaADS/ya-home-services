'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import { faqItems, type FAQItem } from '@/data/faq'
import Link from 'next/link'

interface FAQSectionProps {
  items?: FAQItem[]
  showAllLink?: boolean
  limit?: number
}

export default function FAQSection({
  items,
  showAllLink = true,
  limit,
}: FAQSectionProps) {
  const displayItems = items || faqItems
  const limitedItems = limit ? displayItems.slice(0, limit) : displayItems
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-padding bg-surface" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-navy/5 rounded-2xl mb-4">
            <MessageCircleQuestion className="w-7 h-7 text-navy" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-3">
            שאלות נפוצות
          </h2>
          <span className="gold-accent mx-auto" />
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {limitedItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all ${
                openIndex === index
                  ? 'border-navy/10 shadow-card'
                  : 'border-border hover:border-navy/10'
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 sm:p-6 text-right cursor-pointer"
              >
                <span className="font-semibold text-navy text-base pl-4">
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  openIndex === index ? 'bg-navy' : 'bg-surface'
                }`}>
                  <ChevronDown
                    className={`w-4 h-4 transition-all duration-300 ${
                      openIndex === index ? 'rotate-180 text-white' : 'text-navy'
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className="h-px bg-border mb-4" />
                  <p className="text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show all link */}
        {showAllLink && limit && (
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-navy hover:text-blue font-semibold text-sm transition-colors"
            >
              לכל השאלות הנפוצות
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
