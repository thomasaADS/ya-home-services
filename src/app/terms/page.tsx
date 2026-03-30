import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'תנאי שימוש',
  description: 'תנאי השימוש של אתר י.א שירותי בית ותחזוקה. מידע על השימוש באתר, אחריות, ותנאים כלליים.',
}

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
              תנאי שימוש
            </h1>
            <span className="gold-line mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg max-w-none text-text-primary leading-relaxed space-y-6">
            <p>
              ברוכים הבאים לאתר של <strong>י.א שירותי בית ותחזוקה</strong> (להלן: &quot;האתר&quot;, &quot;אנחנו&quot;). השימוש באתר כפוף לתנאי השימוש המפורטים להלן. הגלישה באתר ו/או השימוש בשירותים המוצעים בו מהווים הסכמה לתנאים אלו.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. כללי</h2>
            <p>
              האתר משמש להצגת שירותי בית ותחזוקה המוצעים על ידי י.א שירותי בית ותחזוקה, ולאפשר ללקוחות פוטנציאליים ליצור קשר ולקבל הצעות מחיר. תנאי שימוש אלו חלים על כל משתמשי האתר.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. השירותים</h2>
            <p>
              השירותים המוצעים באתר כוללים, בין היתר: אינסטלציה, שיפוצים כלליים, התקנת רהיטים, שירותי הנדי מן, התקנת גופי תאורה, תליית תמונות ואביזרים, החלפת שקעים ומפסקים, ופתרונות תחזוקה לבית.
            </p>
            <p>
              המחירים, זמני ההגעה ופרטי השירות המוצגים באתר הם להמחשה בלבד. הצעת מחיר מחייבת תינתן רק לאחר בדיקה ואבחון של העבודה הנדרשת.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. קניין רוחני</h2>
            <p>
              כל התכנים באתר — לרבות טקסטים, תמונות, עיצוב, לוגו, סימני מסחר וכל חומר אחר — הם קניינה הבלעדי של י.א שירותי בית ותחזוקה ומוגנים על פי חוקי זכויות יוצרים. אין להעתיק, לשכפל, להפיץ או לעשות כל שימוש מסחרי בתכנים ללא אישור מראש ובכתב.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. שימוש באתר</h2>
            <p>השימוש באתר הוא לצרכים חוקיים בלבד. המשתמש מתחייב:</p>
            <ul className="space-y-2">
              <li>לא לעשות שימוש לרעה באתר או בתכניו</li>
              <li>לא להעלות תכנים פוגעניים, מטעים או בלתי חוקיים</li>
              <li>לא לפגוע בפעילות התקינה של האתר</li>
              <li>לא להתחזות לאדם או גוף אחר</li>
              <li>למסור פרטים מדויקים ונכונים בטפסי יצירת הקשר</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. הגבלת אחריות</h2>
            <p>
              האתר מוצע &quot;כמות שהוא&quot; (AS IS). אנו עושים מאמצים לשמור על דיוק ועדכניות המידע באתר, אך אין אנו מתחייבים שהמידע באתר שלם, מדויק או עדכני בכל עת.
            </p>
            <p>
              אנו לא נישא באחריות לכל נזק ישיר או עקיף הנובע מהשימוש באתר, לרבות אובדן מידע, תקלות טכניות או חוסר זמינות.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. קישורים חיצוניים</h2>
            <p>
              האתר עשוי להכיל קישורים לאתרים חיצוניים. אנו לא אחראים לתוכן, מדיניות הפרטיות או הפעילות של אתרים אלו. ההחלטה לעבור לאתר חיצוני היא באחריות המשתמש בלבד.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. שינויים בתנאי השימוש</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן או לשנות תנאי שימוש אלו בכל עת, ללא הודעה מוקדמת. המשך השימוש באתר לאחר עדכון התנאים מהווה הסכמה לתנאים המעודכנים.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. סמכות שיפוט</h2>
            <p>
              על תנאי שימוש אלו יחולו דיני מדינת ישראל בלבד. כל מחלוקת הנובעת מהשימוש באתר תתברר בבתי המשפט המוסמכים במחוז תל אביב-יפו.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">9. יצירת קשר</h2>
            <p>לשאלות בנוגע לתנאי השימוש, אנא פנו אלינו:</p>

            <div className="bg-warm-gray rounded-2xl p-6 not-prose">
              <p className="text-text-primary mb-2">
                <strong>י.א שירותי בית ותחזוקה</strong>
              </p>
              <p className="text-text-primary mb-2">
                <strong>טלפון:</strong> <span dir="ltr">050-000-0000</span>
              </p>
              <p className="text-text-primary mb-2">
                <strong>אימייל:</strong> info@ya-home.co.il
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
