import { signOut } from 'firebase/auth'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/contexts/AuthContext'
import { auth } from '@/services/firebaseConnection'

export default function HomePage() {
  // Pega os dados globais do usuário
  const { user } = useAuth()
  const navigate = useNavigate()

  // Função de Logout
  function handleLogout() {
    toast.promise(signOut(auth), {
      loading: 'Encerrando sessão...',
      success: () => {
        navigate('/')
        return 'Até a próxima! 👋'
      },
      error: 'Ops! Ocorreu um erro ao sair.',
    })
  }

  return (
    <div>
      HomePage
      <h2>Olá, {user?.displayName || 'Usuário'}</h2>
      <p>{user?.email}</p>
      <Button onClick={handleLogout} size="icon">
        <LogOut />
        Sair
      </Button>
    </div>
  )
}
