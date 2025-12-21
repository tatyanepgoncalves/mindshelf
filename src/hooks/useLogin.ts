/** biome-ignore-all lint/style/useFilenamingConvention: it's necessary */
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { auth } from '@/services/firebaseConnection'

export const useLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  async function loginUser() {
    if (!(email && password)) {
      toast.warning('Preencha todos os campos.')
      return
    }
    setLoading(true)

    try {
      const value = await signInWithEmailAndPassword(auth, email, password)

      // Lógica para o nome: Prioriza displayName, senão usa a parte antes do @ do email
      const userName = value.user.displayName || email.split('@')[0]
      toast.success(
        `Usuário logado com sucesso. Seja bem-vindo de volta, ${userName}!`
      )

      setEmail('')
      setPassword('')

      navigate('/home')
      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    } catch (error: any) {
      console.error(error)

      // Tratamento de erros específico
      if (error.code === 'auth/invalid-credential') {
        toast.error('E-mail ou senha incorretos.')
      } else {
        toast.error('Erro ao realizar login. Tente novamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    loginUser()
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    loading
  }
}

