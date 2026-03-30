import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description: 'הצהרת הנגישות של אתר י.א שירותי בית ותחזוקה בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות.',
}

export default function AccessibilityPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              הצהרת נגישות
            </h1>
            <span className="gold-line mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-text-primary leading-relaxed space-y-6">
            <p>
              <strong>י.א שירותי בית ותחזוקה</strong> מחויבת להנגיש את האתר שלה לאנשים עם מוגבלות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ&quot;ח-1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג-2013.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">מאמצי הנגשה</h2>
            <p>
              אנו משקיעים מאמצים רבים להנגיש את האתר בהתאם לתקן הישראלי ת&quot;י 5568, המבוסס על תקן WCAG 2.0 ברמת AA. במסגרת מאמצים אלו, אנו פועלים ליישום ההנחיות הבאות:
            </p>

            <ul className="space-y-2">
              <li>שימוש נכון בתגיות HTML סמנטיות</li>
              <li>תמיכה בניווט מלא באמצעות מקלדת</li>
              <li>ניגודיות צבעים מספקת בין טקסט לרקע</li>
              <li>טקסט חלופי (alt) לתמונות</li>
              <li>מבנה כותרות היררכי ומסודר</li>
              <li>טפסים עם תוויות (labels) ברורות</li>
              <li>תמיכה בשינוי גודל טקסט</li>
              <li>תאימות לקוראי מסך</li>
              <li>עיצוב רספונסיבי המותאם למכשירים שונים</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">דפדפנים נתמכים</h2>
            <p>
              האתר תוכנן לעבוד בצורה מיטבית עם הדפדפנים הנפוצים והעדכניים ביותר: Google Chrome, Mozilla Firefox, Apple Safari ו-Microsoft Edge.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">טכנולוגיות נגישות</h2>
            <p>
              האתר נבנה תוך שימוש בטכנולוגיות מתקדמות כדי לתמוך בנגישות, כולל HTML5 סמנטי, ARIA (Accessible Rich Internet Applications), ו-CSS מותאם לנגישות.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">יצירת קשר בנושא נגישות</h2>
            <p>
              אם נתקלתם בבעיית נגישות באתר, או אם יש לכם הצעות לשיפור הנגישות, אנא פנו אלינו ונשמח לטפל בכך:
            </p>

            <div className="bg-warm-gray rounded-2xl p-6 not-prose">
              <p className="text-text-primary mb-2">
                <strong>רכז/ת נגישות:</strong> יוליאן אברומוביץ
              </p>
              <p className="text-text-primary mb-2">
                <strong>טלפון:</strong> <span dir="ltr">050-000-0000</span>
              </p>
              <p className="text-text-primary mb-2">
                <strong>אימייל:</strong> info@ya-home.co.il
              </p>
            </div>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">תאריך עדכון</h2>
            <p>
              הצהרת נגישות זו עודכנה לאחרונה בתאריך מרץ 2026.
            </p>

            <p className="text-text-light text-sm mt-8">
              אנו מתחייבים להמשיך ולשפר את נגישות האתר על בסיס קבוע. הצהרה זו נכתבה בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות ולתקנות הנגישות הרלוונטיות במדינת ישראל.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
