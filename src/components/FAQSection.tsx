'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
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
    <section className="py-16 sm:py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            שאלות נפוצות
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mt-3 mb-4">
            יש שאלות? יש תשובות
          </h2>
          <span className="gold-line mx-auto" />
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {limitedItems.map((item, index) => (
            <div
              key={index}
              className="bg-warm-gray rounded-2xl overflow-hidden border border-gray-100"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 sm:p-6 text-right cursor-pointer"
              >
                <span className="font-bold text-navy text-base sm:text-lg pl-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 animate-fade-in">
                  <p className="text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show all link */}
        {showAllLink && limit && (
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-colors"
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
