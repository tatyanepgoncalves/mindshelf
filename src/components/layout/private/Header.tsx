import { Book } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useHeader } from '@/hooks/useHeader'
import { cn } from '@/lib/utils'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

export default function Header() {
  const { isScrolled } = useHeader()

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-1000 flex w-full items-center justify-center bg-transparent p-6 transition-all duration-500',
        isScrolled && 'bg-linear-to-r from-purple-500 to-indigo-700'
      )}
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        <Link
          className="flex items-center gap-2 font-bold text-xl text-zinc-50"
          to="/home"
        >
          <Book />
          <span>MindShelf</span>
        </Link>

        <MenuMobile />

        <MenuDesktop />
      </div>
    </header>
  )
}
