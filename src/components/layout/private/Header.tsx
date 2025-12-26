import { Book } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useHeader } from '@/hooks/useHeader'
import { cn } from '@/lib/utils'
import MenuMobile from './MenuMobile'

export default function Header() {
  const { isScrolled } = useHeader()

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 flex w-full items-center justify-center p-6 transition-all duration-500 lg:hidden',
        isScrolled && 'bg-linear-to-r from-purple-500 to-indigo-700'
      )}
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        <Link
          className={cn(
            'flex items-center gap-2',
            isScrolled ? 'text-white' : 'text-zinc-900'
          )}
          to="/home"
        >
          <Book />
          <span className="font-semibold text-xl">MindShelf</span>
        </Link>

        <MenuMobile />
      </div>
    </header>
  )
}
