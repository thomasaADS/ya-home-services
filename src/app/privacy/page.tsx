import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'מדיניות פרטיות',
  description: 'מדיניות הפרטיות של אתר י.א שירותי בית ותחזוקה. מידע על איסוף, שימוש ושמירה על המידע האישי שלכם.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              מדיניות פרטיות
            </h1>
            <span className="gold-line mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-text-primary leading-relaxed space-y-6">
            <p>
              <strong>י.א שירותי בית ותחזוקה</strong> (להלן: &quot;אנחנו&quot;, &quot;החברה&quot;) מכבדת את פרטיות המשתמשים באתר שלה. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">איזה מידע אנחנו אוספים?</h2>
            <p>כאשר אתם משתמשים באתר שלנו, אנו עשויים לאסוף את המידע הבא:</p>
            <ul className="space-y-2">
              <li><strong>מידע שאתם מוסרים באופן פעיל:</strong> שם, מספר טלפון, כתובת אימייל ופרטים על השירות המבוקש — כפי שאתם ממלאים בטפסי יצירת הקשר באתר.</li>
              <li><strong>מידע שנאסף אוטומטית:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה, דפים שנצפו ומשך הביקור — באמצעות כלי אנליטיקה כגון Google Analytics.</li>
              <li><strong>עוגיות (Cookies):</strong> קבצי עוגיות המשמשים לשיפור חוויית הגלישה ולניתוח תעבורה באתר.</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">כיצד אנחנו משתמשים במידע?</h2>
            <p>המידע שנאסף משמש למטרות הבאות בלבד:</p>
            <ul className="space-y-2">
              <li>יצירת קשר חוזר ומתן מענה לפניות</li>
              <li>מתן הצעות מחיר ותיאום שירותים</li>
              <li>שיפור חוויית המשתמש באתר</li>
              <li>ניתוח סטטיסטי של השימוש באתר</li>
              <li>עמידה בדרישות החוק</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">שיתוף מידע עם צדדים שלישיים</h2>
            <p>
              אנו לא מוכרים, סוחרים או מעבירים את המידע האישי שלכם לצדדים שלישיים, למעט במקרים הבאים:
            </p>
            <ul className="space-y-2">
              <li>ספקי שירות הפועלים מטעמנו (כגון אחסון אתרים וכלי אנליטיקה) שמחויבים לשמור על סודיות המידע</li>
              <li>כאשר נדרש על פי חוק או צו בית משפט</li>
              <li>להגנה על זכויותינו החוקיות</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">אבטחת מידע</h2>
            <p>
              אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלכם מפני גישה לא מורשית, שימוש לרעה או חשיפה. עם זאת, אף שיטת העברה או אחסון אלקטרוני אינה מאובטחת ב-100%.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">זכויותיכם</h2>
            <p>בהתאם לחוק הגנת הפרטיות, התשמ&quot;א-1981, עומדות לכם הזכויות הבאות:</p>
            <ul className="space-y-2">
              <li>הזכות לעיין במידע האישי שנאסף עליכם</li>
              <li>הזכות לתקן מידע שגוי</li>
              <li>הזכות לבקש מחיקת המידע</li>
              <li>הזכות להתנגד לעיבוד המידע</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">עוגיות (Cookies)</h2>
            <p>
              האתר משתמש בעוגיות לשיפור חוויית הגלישה. עוגיות הן קבצים קטנים הנשמרים על המכשיר שלכם. ניתן לשנות את הגדרות הדפדפן כדי לחסום עוגיות, אך ייתכן שחלק מתכונות האתר לא יפעלו כראוי.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">שינויים במדיניות</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים יפורסמו בדף זה עם תאריך עדכון חדש. המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה למדיניות המעודכנת.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">יצירת קשר</h2>
            <p>לשאלות בנוגע למדיניות הפרטיות, אנא פנו אלינו:</p>

            <div className="bg-warm-gray rounded-2xl p-6 not-prose">
              <p className="text-text-primary mb-2">
                <strong>י.א שירותי בית ותחזוקה</strong>
              </p>
              <p className="text-text-primary mb-2">
                <strong>טלפון:</strong> <span dir="ltr">050-333-6540</span>
              </p>
            </div>

            <p className="text-text-light text-sm mt-8">
              עדכון אחרון: מרץ 2026
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
