import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export default function HeroSection() {
  return (
    <section className="flex h-screen items-center justify-center bg-[url('@/images/Image-Hero.png')] bg-center bg-cover text-center">
      <div className="px-6">
        <div className='space-y-2'>
          <h1 className="font-semibold text-3xl text-zinc-50 md:text-5xl">
            Onde seus sonhos ganham asas para voar.
          </h1>
          <p className="text-sm text-zinc-200 md:text-base">
            Doe, empreste e descubra novas histórias na sua biblioteca
            comunitária.
          </p>
        </div>

        <Button className="mt-10">
          <Link to="/catalogo-livros">Explorar Catálogo</Link>
        </Button>
      </div>
    </section>
  )
}
