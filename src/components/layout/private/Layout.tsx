import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import Header from './Header'
import MenuDesktop from './MenuDesktop'

export default function Layout() {
  return (
    <div className="relative flex h-screen w-full flex-col md:overflow-auto">
      <SidebarProvider>
        <MenuDesktop />
        <Header />

        <div className="h-screen w-full md:overflow-auto">
          <main className="mt-20 lg:mt-0 lg:px-2">
            <SidebarTrigger className="hidden lg:block" />
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  )
}
