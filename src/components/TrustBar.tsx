import { Clock, Users, MapPin, ShieldCheck } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    number: '10+',
    label: 'שנות ניסיון',
  },
  {
    icon: Users,
    number: '1,500+',
    label: 'לקוחות מרוצים',
  },
  {
    icon: MapPin,
    number: 'גוש דן',
    label: 'אזור שירות',
  },
  {
    icon: ShieldCheck,
    number: '100%',
    label: 'אחריות על העבודה',
  },
]

export default function TrustBar() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-warm-gray/50 hover:bg-warm-gray transition-colors"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-navy">
                  {stat.number}
                </span>
                <span className="text-sm sm:text-base text-text-secondary mt-1">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
