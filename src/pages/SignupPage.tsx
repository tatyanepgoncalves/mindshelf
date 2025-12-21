import Footer from '@/components/auth/Footer'
import Header from '@/components/auth/Header'
import Form from '@/components/auth/SignupPage/Form'

export default function SignupPage() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-between">
      <Header />
      <Form />
      <Footer />
    </main>
  )
}
