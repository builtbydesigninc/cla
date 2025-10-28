import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CourseModules from '@/components/CourseModules'
import Faculty from '@/components/Faculty'
import SuccessStories from '@/components/SuccessStories'
// import Testimonials from '@/components/Testimonials'
import WhyCLA from '@/components/WhyCLA'
import Comparison from '@/components/Comparison'
import MoneyBackGuarantee from '@/components/MoneyBackGuarantee'
import FAQ from '@/components/FAQ'
import BookACall from '@/components/BookACall'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0c0a05' }}>
      <Header />
      <Hero />
      <WhyCLA />
      <CourseModules />
      <Faculty />
      <SuccessStories />
      <Comparison />
      <MoneyBackGuarantee />
      <FAQ />
      <BookACall />
      <Footer />
    </main>
  )
}

