import { ArrowLeft, House, Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <section className="flex w-full items-center justify-center">
      <div className="flex h-screen w-full max-w-7xl flex-col items-center justify-center gap-4 p-6">
        {/* Visual Graphic */}
        <div className="relative flex items-center justify-center">
          <h1 className="select-none font-bold text-7xl text-purple-100/80 sm:text-8xl md:text-9xl">
            404
          </h1>
          <Search
            className="absolute h-12 w-12 text-purple-900 opacity-90 sm:h-16 sm:w-16 md:h-20 md:w-20"
            strokeWidth={2.5}
          />
        </div>

        {/* Text Content */}
        <div className="space-y-2 text-center">
          <h2 className="font-semibold text-2xl tracking-tight">
            Página não encontrada
          </h2>
          <p className="max-w-75 text-muted-foreground text-sm sm:text-base">
            O link que você seguiu pode estar quebrado ou a página pode ter sido
            removida.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex w-md max-w-full flex-col gap-2 md:flex-row">
          <Button
            className="w-full md:w-55"
            onClick={() => navigate(-1)}
            variant="outline"
          >
            <ArrowLeft />
            Voltar
          </Button>

          <Button
            className="w-full gap-2 px-8 md:w-55"
            onClick={() => navigate('/home')}
            variant="default"
          >
            <House className="h-4 w-4" />
            Voltar para o Início
          </Button>
        </div>
      </div>
    </section>
  )
}
