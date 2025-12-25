export interface BookProps {
  id: string
  title: string
  author: string
  categories: string[]
  description: string
  cover?: string
  status: 'disponível' | 'emprestado'
  createdAt: any
}