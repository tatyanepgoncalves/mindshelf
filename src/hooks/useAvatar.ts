import { onAuthStateChanged, type User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '@/services/firebaseConnection'

export const useAvatar = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  // Get initials for the fallback (e.g., "John Doe" -> "JD")
  const getInitials = (name: string | null) => {
    if (!name) {
      return '??'
    }
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  // Get initials for the fallback
  // const getInitials = (name: string | null) => {
  //   if (!name) {
  //     return '??'
  //   }

  //   return name
  //     .split(' ')
  //     .map((n) => n[0])
  //     .join(' ')
  //     .toUpperCase()
  //     .slice(0, 2)
  // }

  return {
    user,
    setUser,
    loading,
    setLoading,
    getInitials,
  }
}
