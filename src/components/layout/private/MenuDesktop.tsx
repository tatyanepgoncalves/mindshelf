import { BookCopy, Home, LibraryBig } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useHeader } from '@/hooks/useHeader'
import { cn } from '@/lib/utils'

const menuItem = [
  { title: 'Home', icon: Home, path: '/home' },
  { title: 'Catálogo de livros', icon: LibraryBig, path: '/catalogo-livros' },
  { title: 'Doar livros', icon: BookCopy, path: '/doar-livros' },
]

export default function MenuDesktop() {
  const location = useLocation()
  const { isScrolled } = useHeader()

  return (
    <div className="hidden md:block">
      <nav className="flex gap-4">
        {menuItem.map((menu) => {
          const isActive = location.pathname === menu.path

          return (
            <Link
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-zinc-300 transition-all',
                'font-medium hover:border-b hover:border-b-purple-600 hover:text-purple-600',
                isActive &&
                  'border-b border-b-purple-400 font-semibold text-purple-400',
                isScrolled && 'text-purple-500',
                isScrolled && isActive && 'border-b-purple-200 text-purple-200'
              )}
              key={menu.path}
              to={menu.path}
            >
              <menu.icon />
              {menu.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
