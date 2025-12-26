import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { db } from '@/services/firebaseConnection'
import type { BookProps } from '@/types/book'

export function useCatalogo() {
  const [books, setBooks] = useState<BookProps[]>([])
  const [loading, setLoading] = useState(true)

  const fetchBooks = useCallback(async (searchTerm?: string) => {
    setLoading(true)
    try {
      const booksRef = collection(db, 'books')
      const q = query(booksRef, orderBy('createdAt', 'desc'))

      const snapshot = await getDocs(q)
      const list: BookProps[] = snapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          id: doc.id,
          title: data.title,
          author: data.author,
          categories: data.categories || [],
          description: data.description,
          cover: data.cover,
          status: data.status,
          createdAt: data.createdAt,
        } as BookProps
      })

      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        const filtered = list.filter(
          (book) =>
            book.title.toLowerCase().includes(term) ||
            book.author.toLowerCase().includes(term)
        )
        setBooks(filtered)
      } else {
        setBooks(list)
      }
    } catch (error) {
      console.error('Erro ao buscar livros:', error)
    } finally {
      setLoading(false)
    }
  }, []) // fetchBooks is now memoized

  useEffect(() => {
    let isMounted = true

    fetchBooks().then(() => {
      if (!isMounted) {
        return
      }
    })

    return () => {
      isMounted = false
    } // Cleanup to prevent state updates on unmounted component
  }, [fetchBooks])

  return { books, loading, fetchBooks }
}
