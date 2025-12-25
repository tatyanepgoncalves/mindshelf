import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import type React from 'react'
import { useState } from 'react'
import { toast } from 'sonner'
import { db } from '@/services/firebaseConnection'

export const useDoar = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [categories, setCategories] = useState<string[]>([])
  const [description, setDescription] = useState<string>('')
  const [agreement, setAgreement] = useState<boolean>(false)
  const [cover, setCover] = useState<string>('')
  const [customCategory, setCustomCategory] = useState('')

  const categoriasLib = [
    'Ficção',
    'Fantasia',
    'Terror',
    'Romance',
    'Autoajuda',
    'Biografia',
    'Educação',
    'História',
    'Outros',
  ]

  function handleToggleCategory(category: string) {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    )
  }

  async function handleRegisterBook(e: React.FormEvent) {
    e.preventDefault()

    // Category Logic
    let finalCategories = [...categories]
    if (categories.includes('Outros')) {
      if (!customCategory.trim()) {
        toast.warning('Por favor, especifique qual é a outra categoria.')
        return
      }
      finalCategories = finalCategories.filter((c) => c !== 'Outros')
      finalCategories.push(customCategory.trim())
    }

    // alidations
    if (finalCategories.length === 0) {
      toast.warning('Selecione pelo menos uma categoria.')
      return
    }

    if (
      !(title.trim() && author.trim() && description.trim() && cover.trim())
    ) {
      toast.warning('Preencha todos os campos antes de continuar.')
      return
    }

    if (!agreement) {
      toast.error('Você precisa aceitar o compromisso de entrega.')
      return
    }

    setLoading(true)

    try {
      const booksRef = collection(db, 'books')

      // CHECK DUPLICATES FIRST
      const q = query(
        booksRef,
        where('title', '==', title.trim()),
        where('author', '==', author.trim())
      )

      const querySnapshot = await getDocs(q)

      if (!querySnapshot.empty) {
        toast.error('Este livro já foi cadastrado na nossa biblioteca!')
        setLoading(false)
        return
      }

      // SAVE TO FIREBASE
      await addDoc(booksRef, {
        title: title.trim(),
        author: author.trim(),
        categories: finalCategories, // Use the processed categories
        cover: cover.trim(),
        description: description.trim(),
        status: 'disponível',
        createdAt: new Date(),
      })

      // Success cleanup
      setTitle('')
      setAuthor('')
      setCategories([])
      setDescription('')
      setCover('')
      setCustomCategory('')
      setAgreement(false)
      toast.success(`${title} doado com sucesso!`)
    } catch (error) {
      console.error(error)
      toast.error('Erro ao salvar o livro.')
    } finally {
      setLoading(false)
    }
  }

  return {
    handleRegisterBook,
    title,
    setTitle,
    author,
    setAuthor,
    categories,
    setCategories,
    description,
    setDescription,
    agreement,
    setAgreement,
    loading,
    cover,
    setCover,
    categoriasLib,
    handleToggleCategory,
    setCustomCategory,
    customCategory,
  }
}
