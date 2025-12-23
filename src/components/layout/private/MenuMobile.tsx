import { Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import AvatarHeader from '@/components/AvatarHeader/AvatarHeader'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { menuItem } from '@/types/menu'

export default function MenuMobile() {
  const location = useLocation()

  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <Menu className="text-zinc-200" />
        </SheetTrigger>

        <SheetContent className="px-6 pt-30">
          <nav className="flex flex-col gap-4">
            {menuItem.map((menu) => {
              const isActive = location.pathname === menu.path

              return (
                <SheetClose asChild key={menu.title}>
                  <Link
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'flex gap-2 rounded-md p-2 text-zinc-800 transition-colors',
                      'hover:bg-purple-200 hover:text-zinc-500',
                      isActive &&
                        'bg-purple-600 text-zinc-100 hover:text-zinc-500'
                    )}
                    key={menu.title}
                    to={menu.path}
                  >
                    <menu.icon />
                    <span>{menu.title}</span>
                  </Link>
                </SheetClose>
              )
            })}
          </nav>

          <SheetFooter>
            <AvatarHeader />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
