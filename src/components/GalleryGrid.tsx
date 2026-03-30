import Image from 'next/image'
import { MapPin } from 'lucide-react'

const projects = [
  {
    title: 'שיפוץ חדר אמבטיה',
    location: 'רמת גן',
    category: 'שיפוצים',
    description: 'שיפוץ מלא כולל ריצוף, חיפוי, ברזים חדשים וגוף תאורה',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'התקנת מטבח מלא',
    location: 'תל אביב',
    category: 'התקנת רהיטים',
    description: 'הרכבת מטבח חדש כולל ארונות עליונים, משטח וכיור',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'התקנת תאורת LED',
    location: 'הרצליה',
    category: 'תאורה',
    description: 'התקנת פסי LED וספוטים שקועים בסלון ובמטבח',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'תליית טלוויזיה ומדפים',
    location: 'גבעתיים',
    category: 'תליית אביזרים',
    description: 'תליית TV 65 אינץ\' על קיר גבס עם מדפים צפים',
    image: 'https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'החלפת צנרת',
    location: 'חולון',
    category: 'אינסטלציה',
    description: 'החלפת צנרת גלוונית ישנה לצנרת פלסטיק חדשה',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'הרכבת ארונות קיר',
    location: 'פתח תקווה',
    category: 'התקנת רהיטים',
    description: 'התקנת ארון קיר מובנה בחדר שינה כולל מדפים ומגירות',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=600&q=80',
  },
]

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group card overflow-hidden cursor-pointer"
        >
          {/* Image */}
          <div className="relative h-52 sm:h-56 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-navy text-xs font-medium px-3 py-1.5 rounded-lg">
              {project.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="font-bold text-navy text-lg mb-1">{project.title}</h3>
            <p className="text-text-muted text-sm mb-3">{project.description}</p>
            <div className="flex items-center gap-1.5 text-text-muted text-xs">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
