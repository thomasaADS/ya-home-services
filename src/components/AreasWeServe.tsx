import { MapPin } from 'lucide-react'

const areas = [
  'תל אביב',
  'רמת גן',
  'גבעתיים',
  'בני ברק',
  'חולון',
  'בת ים',
  'פתח תקווה',
  'ראשון לציון',
  'הרצליה',
  'רעננה',
  'כפר סבא',
  'הוד השרון',
]

export default function AreasWeServe() {
  return (
    <section className="py-16 sm:py-20 bg-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">
            אזורי שירות
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mt-3 mb-4">
            מגיעים לכל גוש דן
          </h2>
          <span className="gold-line mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {areas.map((area) => (
            <div
              key={area}
              className="inline-flex items-center gap-2 bg-white text-navy font-medium px-4 py-2.5 rounded-xl border border-gray-100 shadow-sm hover:border-gold/30 hover:shadow-md transition-all"
            >
              <MapPin className="w-4 h-4 text-gold" />
              {area}
            </div>
          ))}
        </div>

        <p className="text-center text-text-secondary mt-6 text-sm">
          לא מצאתם את האזור שלכם? התקשרו ונבדוק אם אנחנו מגיעים אליכם.
        </p>
      </div>
    </section>
  )
}
