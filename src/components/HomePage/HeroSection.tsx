import { useNavigate } from 'react-router-dom'
import HeroImage from '@/images/icon-home.svg'
import { Button } from '../ui/button'

export default function HeroSection() {
  const navigate = useNavigate()
  return (
    <div className="mt-10 flex h-full w-full flex-col gap-6 md:mt-0 md:flex-row md:items-center md:justify-between">
      <div className="w-full md:w-xl">
        {/** biome-ignore lint/correctness/useImageSize: it isn't necessary */}
        <img
          alt="Ilustração de uma menina em uma biblioteca lendo livro."
          src={HeroImage}
        />
      </div>
      <div className="mx-auto w-full space-y-4 text-center md:mx-0 md:w-lg md:space-y-4 md:text-right">
        <div className="select-none space-y-2">
          <h1 className="font-semibold text-3xl text-zinc-800 md:text-5xl">
            Onde seus sonhos ganham asas para voar.
          </h1>
          <p className="text-sm text-zinc-700 md:text-base">
            Doe, empreste e descubra novas histórias na sua biblioteca
            comunitária.
          </p>
        </div>
        <Button
          className="w-full md:w-fit"
          onClick={() => navigate('/catalogo-livro')}
        >
          Exlorar Catálogo
        </Button>
      </div>
    </div>
  )
}
