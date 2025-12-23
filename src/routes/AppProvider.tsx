import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Toaster } from 'sonner'
import Layout from '@/components/layout/private/Layout'
import { AuthProvider } from '@/contexts/AuthContext'
import CatalogoLivrosPage from '@/pages/CatalogoLivrosPage'
import DoarLivrosPage from '@/pages/DoarLivrosPage'
import ErrorPage from '@/pages/ErrorPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import Private from './Private'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LoginPage />} index path="/" />
      <Route element={<SignupPage />} path="/cadastrar" />
      <Route element={<ErrorPage />} path="*" />

      <Route element={<Layout />} path="/">
        <Route
          element={
            <Private>
              <HomePage />
            </Private>
          }
          path="home"
        />
        <Route
          element={
            <Private>
              <CatalogoLivrosPage />
            </Private>
          }
          path="catalogo-livros"
        />
        <Route
          element={
            <Private>
              <DoarLivrosPage />
            </Private>
          }
          path="doar-livros"
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
