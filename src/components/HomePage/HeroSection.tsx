import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="flex h-screen items-center justify-center bg-[url('@/images/Image-Hero.png')] bg-center bg-cover text-center">
      <div className="px-6 md:w-xl">
        <div className="space-y-2">
          <h1 className="font-semibold text-3xl text-zinc-50 md:text-5xl">
            Onde seus sonhos ganham asas para voar.
          </h1>
          <p className="text-sm text-zinc-200 md:text-base">
            Doe, empreste e descubra novas histórias na sua biblioteca
            comunitária.
          </p>
        </div>

        <Button className="mt-10" onClick={() => navigate('/catalogo-livros')}>
          Exlorar Catálogo
        </Button>
      </div>
    </section>
  )
}
