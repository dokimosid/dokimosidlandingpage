import Nav          from '@/components/Nav'
import Hero         from '@/components/Hero'
import StatsBar     from '@/components/StatsBar'
import HowItWorks   from '@/components/HowItWorks'
import Features     from '@/components/Features'
import Pricing      from '@/components/Pricing'
import TrustStrip   from '@/components/TrustStrip'
import WaitlistForm from '@/components/WaitlistForm'
import Footer       from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <HowItWorks />
        <Features />
        <Pricing />
        <TrustStrip />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  )
}
