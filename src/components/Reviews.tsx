import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { reviews } from '@/data/reviews'

export default function Reviews() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Subtle pattern */}
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
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
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
        </div>

        {/* Reviews grid - featured + smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured review */}
          <div className="lg:col-span-1 lg:row-span-2 bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-white/10">
            <Quote className="w-10 h-10 text-gold/30 mb-5" />
            <div className="flex gap-0.5 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              &quot;{reviews[0].text}&quot;
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-white/10">
              <Image
                src={`https://i.pravatar.cc/80?img=${reviews[0].avatarId}`}
                alt={reviews[0].name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <span className="font-bold text-white block text-sm">
                  {reviews[0].name}
                </span>
                <span className="text-white/50 text-xs">
                  {reviews[0].location} | {reviews[0].service}
                </span>
              </div>
            </div>
          </div>

          {/* Other reviews */}
          {reviews.slice(1).map((review, index) => (
            <div
              key={index}
              className="bg-white/[0.07] backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <Image
                  src={`https://i.pravatar.cc/80?img=${review.avatarId}`}
                  alt={review.name}
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div>
                  <span className="font-semibold text-white block text-xs">
                    {review.name}
                  </span>
                  <span className="text-white/40 text-[11px]">
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
