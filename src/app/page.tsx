import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </main>
  )
} 