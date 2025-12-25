import { useAuth } from '@/contexts/AuthContext'

export default function Header() {
  const { user } = useAuth()

  return (
    <header className="text-center md:text-right">
      <span className="font-medium text-2xl">
        Olá, {user?.displayName || 'Usuário'}
      </span>
      <p className="text-sm">Bem-vindo(a) ao MindShelf!</p>
    </header>
  )
}
