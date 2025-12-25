import { BookCopy, Home, LibraryBig, Settings, User } from 'lucide-react'

export const menuItem = [
  { title: 'Home', icon: Home, path: '/home' },
  { title: 'Catálogo de livros', icon: LibraryBig, path: '/catalogo-livro' },
  { title: 'Doar livros', icon: BookCopy, path: '/doar-livro' },
]

export const avatarMenu = [
  { title: 'Perfil', icon: User, path: '/perfil' },
  { title: 'Configuração', icon: Settings, path: '/configuracao' },
]
