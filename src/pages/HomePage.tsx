import Header from '@/components/HomePage/Header'
import HeroSection from '@/components/HomePage/HeroSection'
import SecaoStatus from '@/components/HomePage/SecaoStatus'

export default function HomePage() {
  return (
    <div className="flex w-full items-center justify-center p-6">
      <div className="w-full max-w-7xl">
        <Header />
        <HeroSection />
        <SecaoStatus />
      </div>
    </div>
  )
}
