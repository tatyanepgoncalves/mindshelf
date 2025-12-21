import { onAuthStateChanged, type User } from 'firebase/auth'
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { auth } from '@/services/firebaseConnection'

// biome-ignore lint/style/useConsistentTypeDefinitions: it's necessary
interface AuthContextData {
  user: User | null
  loading: boolean
  signed: boolean
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Monitora o estado do usuário no Firebase (F5, login, logout)
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsub()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, signed: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook personalizado para facilitar o uso
export const useAuth = () => useContext(AuthContext)
