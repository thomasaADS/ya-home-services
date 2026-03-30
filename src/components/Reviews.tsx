import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { reviews } from '@/data/reviews'

export default function Reviews() {
  return (
    <section className="py-16 sm:py-24 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            מה הלקוחות אומרים
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy mt-3 mb-4">
            ביקורות לקוחות
          </h2>
          <span className="gold-line mx-auto" />
          <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            לקוחות מרוצים הם הפרסומת הכי טובה שלנו. הנה מה שהם אומרים.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-text-primary leading-relaxed mb-6">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Image
                  src={`https://i.pravatar.cc/80?img=${review.avatarId}`}
                  alt={review.name}
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div>
                  <span className="font-bold text-navy block text-sm">
                    {review.name}
                  </span>
                  <span className="text-text-light text-xs">
                    {review.location} | {review.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
