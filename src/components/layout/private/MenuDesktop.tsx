import { BookCopy, Home, LibraryBig } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import AvatarHeader from '@/components/AvatarHeader/AvatarHeader'
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
    <div className="hidden items-center justify-between md:flex">
      <nav className="flex gap-4">
        {menuItem.map((menu) => {
          const isActive = location.pathname === menu.path

          return (
            <Link
              className={cn(
                'flex items-center gap-4 px-4 py-3 text-zinc-400 transition-all duration-500 hover:border-b-2 hover:border-b-zinc-100 hover:font-medium hover:text-zinc-100',
                isActive &&
                  'border-b-2 border-b-zinc-100 font-medium text-zinc-100',
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

      <AvatarHeader />
    </div>
  )
}
