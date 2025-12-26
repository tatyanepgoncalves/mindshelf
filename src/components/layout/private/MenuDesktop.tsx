import { Link, useLocation } from 'react-router-dom'
import AvatarHeader from '@/components/AvatarHeader/AvatarHeader'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { menuItem } from '@/types/menu'

export default function MenuDesktop() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="text-center font-bold text-4xl text-purple-900 tracking-tighter">
          MindShelf
        </h1>
      </SidebarHeader>

      <SidebarContent className="flex items-center justify-center">
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-4">
            {menuItem.map((item) => {
              const isActive = location.pathname === item.path

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      className={`px-4 py-6 text-lg shadow-none transition-all ${isActive ? 'bg-purple-600 font-medium text-white shadow-md' : 'text-zinc-500'}`}
                      to={item.path}
                    >
                      <item.icon size={18} />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <AvatarHeader />
      </SidebarFooter>
    </Sidebar>
  )
}
