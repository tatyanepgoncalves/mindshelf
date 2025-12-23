import { Book } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useHeader } from '@/hooks/useHeader'
import { cn } from '@/lib/utils'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

export default function Header() {
  const { isScrolled } = useHeader()
  const { pathname } = useLocation()

  const isHomePage = pathname === '/' || pathname === '/home'

  return (
    <header
      className={cn(
        'z-50 flex w-full items-center justify-center p-6 transition-all duration-500',
        isHomePage
          ? 'fixed top-0 left-0 bg-transparent'
          : 'bg-linear-to-r from-purple-500 to-indigo-700',
        isScrolled && 'bg-linear-to-r from-purple-500 to-indigo-700'
      )}
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        <Link
          className="flex items-center gap-2 font-bold text-zinc-50"
          to="/home"
        >
          <Book />
          <span className="text-xl md:text-3xl">MindShelf</span>
        </Link>

        <MenuMobile />

        <MenuDesktop />
      </div>
    </header>
  )
}
