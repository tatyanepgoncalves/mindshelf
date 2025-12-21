import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import type React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { auth } from '@/services/firebaseConnection'

export const useSignup = () => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  async function newUser() {
    if (!(username || email || password || passwordConfirm)) {
      // Validações iniciais
      toast.warning('Preencha todos os campos!')
      return
    }

    if (password !== passwordConfirm) {
      toast.error('As senhas não coincidem!')
      return
    }

    setLoading(true)

    try {
      // Cria o usuário
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      // Grava o nome no perfil
      await updateProfile(userCredential.user, {
        displayName: username,
      })

      toast.success(
        `${username} cadastrado com sucesso! Bem-vindo(a) ao MindShelf.`
      )

      // Limpeza dos campos e navegação.
      setUsername('')
      setEmail('')
      setPassword('')
      setPasswordConfirm('')

      navigate('/home')
      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    } catch (error: any) {
      console.error(error.code)

      if (error.code === 'auth/weak-password') {
        toast.error('Senha fraca! A senha deve ter pelo menos 6 caracteres.')
      } else if (error.code === 'auth/email-already-in-use') {
        toast.error('Este e-mail já está cadastrado!')
      } else {
        toast.error('Erro ao cadastrar usuário.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    newUser()
  }

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    newUser,
    handleSubmit,
    loading,
  }
}
