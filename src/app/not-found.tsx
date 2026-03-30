import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy px-4">
      <div className="text-center">
        <span className="text-8xl sm:text-9xl font-black text-gold/20">404</span>
        <h1 className="text-3xl sm:text-4xl font-black text-white mt-4 mb-4">
          הדף לא נמצא
        </h1>
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          מצטערים, הדף שחיפשתם לא קיים. אולי הקישור שגוי או שהדף הוסר.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold h-12 px-6 rounded-xl transition-colors cursor-pointer"
        >
          <Home className="w-5 h-5" />
          <span>חזרה לדף הבית</span>
        </Link>
      </div>
    </section>
  )
}
