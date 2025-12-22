// import { signOut } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'sonner'
import { useAuth } from '@/contexts/AuthContext'
// import { auth } from '@/services/firebaseConnection'

export default function Header() {
  // Pega os dados globais do usuário
  const { user } = useAuth()
  // const navigate = useNavigate()

  // Função de Logout
  // function handleLogout() {
  //   toast.promise(signOut(auth), {
  //     loading: 'Encerrando sessão...',
  //     success: () => {
  //       navigate('/')
  //       return 'Até a próxima! 👋'
  //     },
  //     error: 'Ops! Ocorreu um erro ao sair.',
  //   })
  // }

  return (
    <header>
      <span className="font-medium text-xl">
        Olá, {user?.displayName || 'Usuário'}
      </span>
    </header>
  )
}
