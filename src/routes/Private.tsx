import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

export default function Private({ children }: { children: ReactNode }) {
  const { signed, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Carregando...</p>
      </div>
    )
  }

  if (!signed) {
    // Se não está logado, manda para a página de login
    return <Navigate to="/" />
  }

  return children
}
