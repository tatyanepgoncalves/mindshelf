import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between">
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}
