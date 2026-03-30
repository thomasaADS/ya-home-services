import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProcessSteps from '@/components/ProcessSteps'
import Reviews from '@/components/Reviews'
import FAQSection from '@/components/FAQSection'
import ContactCTA from '@/components/ContactCTA'
import AreasWeServe from '@/components/AreasWeServe'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSteps />
      <Reviews />
      <FAQSection limit={5} showAllLink={true} />
      <AreasWeServe />
      <ContactCTA />
    </>
  )
}
