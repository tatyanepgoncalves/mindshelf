import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Toaster } from 'sonner'
import Layout from '@/components/layout/private/Layout'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LoginPage />} index path="/" />
      <Route element={<SignupPage />} path="/cadastrar" />

      <Route element={<Layout />} path="/">
        <Route element={<HomePage />} index path="home" />
      </Route>
    </>
  )
)

export default function AppProvider() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  )
}
