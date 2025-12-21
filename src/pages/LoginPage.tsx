import Footer from '@/components/auth/Footer'
import Header from '@/components/auth/Header'
import Form from '@/components/auth/LoginPage/Form'

export default function LoginPage() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-between">
      <Header />
      <Form />
      <Footer />
    </main>
  )
}
