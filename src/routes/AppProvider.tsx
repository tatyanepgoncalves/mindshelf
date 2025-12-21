import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Toaster } from 'sonner'
import Layout from '@/components/layout/private/Layout'
import { AuthProvider } from '@/contexts/AuthContext'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import Private from './Private'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LoginPage />} index path="/" />
      <Route element={<SignupPage />} path="/cadastrar" />

      <Route element={<Layout />} path="/">
        <Route
          element={
            <Private>
              <HomePage />
            </Private>
          }
          path="home"
        />
      </Route>
    </>
  )
)

export default function AppProvider() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </AuthProvider>
  )
}
