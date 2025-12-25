import DoarForm from '@/components/DoarLivrosPage/DoarForm'
import HeaderDoar from '@/components/DoarLivrosPage/HeaderDoar'

export default function DoarLivrosPage() {
  return (
    <section className="flex w-full items-center justify-center px-6">
      <div className="flex w-full max-w-7xl flex-col items-center">
        <div className="w-full space-y-8 md:w-lg md:space-y-4">
          <HeaderDoar />
          <DoarForm />
        </div>
      </div>
    </section>
  )
}
