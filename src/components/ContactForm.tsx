'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-card border border-border text-center">
        <div className="w-16 h-16 bg-green/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-green" />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">הפרטים נשלחו בהצלחה</h3>
        <p className="text-text-secondary">
          תודה! נחזור אליכם תוך שעה עם מענה ראשוני.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-border"
    >
      <h3 className="text-xl font-bold text-navy mb-1">השאירו פרטים</h3>
      <p className="text-text-muted text-sm mb-6">נחזור אליכם תוך שעה</p>

      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
            שם מלא
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full h-12 px-4 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
            placeholder="הכנס את שמך"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">
            טלפון
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full h-12 px-4 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
            placeholder="050-0000000"
            dir="ltr"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-1.5">
            סוג שירות
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full h-12 px-4 bg-surface border border-border rounded-xl text-text-primary focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all cursor-pointer appearance-none"
          >
            <option value="">בחר שירות</option>
            <option value="plumbing">אינסטלציה</option>
            <option value="renovations">שיפוצים כלליים</option>
            <option value="furniture">התקנת רהיטים</option>
            <option value="handyman">הנדי מן</option>
            <option value="lighting">התקנת גופי תאורה</option>
            <option value="hanging">תליית תמונות ואביזרים</option>
            <option value="electrical">החלפת שקעים ומפסקים</option>
            <option value="maintenance">תחזוקת בית</option>
            <option value="other">אחר</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
            פרטים נוספים (אופציונלי)
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-surface border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all resize-none"
            placeholder="ספרו לנו בקצרה מה צריך..."
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-bold h-12 px-6 rounded-xl transition-colors cursor-pointer mt-1"
        >
          <Send className="w-4 h-4" />
          <span>שלח פרטים</span>
        </button>

        <p className="text-text-muted text-xs text-center">
          הפרטים שלכם מאובטחים ולא יועברו לצד שלישי
        </p>
      </div>
    </form>
  )
}
