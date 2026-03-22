import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import About from '@/components/About'
import Features from '@/components/Features'
import WatchAndLearn from '@/components/WatchAndLearn'
import Practice from '@/components/Practice'
import Benefits from '@/components/Benefits'
// import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import LocalSEO from '@/components/LocalSEO'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Features />
        <WatchAndLearn />
        <Practice />
        <Benefits />
        {/* <Gallery /> */}
        <Reviews />
        <LocalSEO />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
