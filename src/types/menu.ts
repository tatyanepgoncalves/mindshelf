import { BookCopy, Home, LibraryBig, Settings, User } from 'lucide-react'

export const menuItem = [
  { title: 'Home', icon: Home, path: '/home' },
  { title: 'Catálogo de livros', icon: LibraryBig, path: '/catalogo-livros' },
  { title: 'Doar livros', icon: BookCopy, path: '/doar-livros' },
]

export const avatarMenu = [
  { title: 'Perfil', icon: User, path: '/perfil' },
  { title: 'Configuração', icon: Settings, path: '/configuracao' },
]
