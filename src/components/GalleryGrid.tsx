import Image from 'next/image'

const projects = [
  {
    title: 'שיפוץ חדר אמבטיה',
    location: 'רמת גן',
    description: 'שיפוץ מלא כולל ריצוף, חיפוי, ברזים חדשים וגוף תאורה',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'התקנת מטבח מלא',
    location: 'תל אביב',
    description: 'הרכבת מטבח חדש כולל ארונות עליונים, משטח וכיור',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'התקנת תאורת LED',
    location: 'הרצליה',
    description: 'התקנת פסי LED וספוטים שקועים בסלון ובמטבח',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'תליית טלוויזיה ומדפים',
    location: 'גבעתיים',
    description: 'תליית TV 65 אינץ\' על קיר גבס עם מדפים צפים',
    image: 'https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'החלפת צנרת ישנה',
    location: 'חולון',
    description: 'החלפת צנרת גלוונית ישנה לצנרת פלסטיק חדשה',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'הרכבת ארונות קיר',
    location: 'פתח תקווה',
    description: 'התקנת ארון קיר מובנה בחדר שינה כולל מדפים ומגירות',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80',
  },
]

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
        >
          {/* Image */}
          <div className="relative h-52 sm:h-56 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-3 right-3 bg-gold/90 text-navy text-xs font-bold px-3 py-1 rounded-lg">
              {project.location}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-bold text-navy text-lg mb-1">{project.title}</h3>
            <p className="text-text-secondary text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
