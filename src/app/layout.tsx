import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import AccessibilityWidget from '@/components/AccessibilityWidget'
import { ScrollProgress } from '@/components/motion'

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'י.א | שירותי בית ותחזוקה - אינסטלציה, שיפוצים והתקנות בגוש דן',
    template: '%s | י.א שירותי בית ותחזוקה',
  },
  description:
    'י.א שירותי בית ותחזוקה - אינסטלציה, שיפוצים כלליים, התקנת רהיטים, גופי תאורה, תליית תמונות והחלפת שקעים. שירות מקצועי ואמין בכל גוש דן. התקשרו עכשיו!',
  keywords: [
    'אינסטלציה גוש דן',
    'שיפוצים תל אביב',
    'הנדימן',
    'התקנת רהיטים',
    'שירותי בית',
    'תחזוקת בית',
    'החלפת שקעים',
    'התקנת גופי תאורה',
    'תליית תמונות',
    'שיפוצניק',
  ],
  openGraph: {
    title: 'י.א | שירותי בית ותחזוקה',
    description: 'שירות מקצועי ואמין לכל עבודה בבית - אינסטלציה, שיפוצים, התקנות ותחזוקה בגוש דן',
    locale: 'he_IL',
    type: 'website',
    siteName: 'י.א שירותי בית ותחזוקה',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <head>
        <meta name="geo.region" content="IL" />
        <meta name="geo.placename" content="Gush Dan" />
        <link rel="icon" href="/images/logo.jpg" />
      </head>
      <body className={`${rubik.className} antialiased bg-white text-text-primary`}>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <AccessibilityWidget />
      </body>
    </html>
  )
}
