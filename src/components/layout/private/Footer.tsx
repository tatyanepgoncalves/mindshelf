import { Copyright } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex w-full items-center justify-center p-6">
      <div className="w-full max-w-7xl text-center">
        <div className="flex items-center justify-center gap-2">
          <Copyright className="text-zinc-400" size={12} />
          <p className="text-xs text-zinc-400">
            {year} MindShelf. Desenvolvido com carinho para a comunidade.
          </p>
        </div>
      </div>
    </footer>
  )
}
