import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import BookDetails from '@/components/CatalogoPage/BookDetails'
import CardLivro from '@/components/CatalogoPage/CardLivro'
import FilterCategory from '@/components/CatalogoPage/FilterCategory'
import Header from '@/components/CatalogoPage/Header'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { useCatalogo } from '@/hooks/useCatalogo'
import type { BookProps } from '@/types/book'

export default function CatalogoLivrosPage() {
  const { fetchBooks, books, loading } = useCatalogo()
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null)

  const categories = useMemo(() => {
    const allCategories = books.flatMap((book) => book.categories || [])
    return Array.from(new Set(allCategories)).sort()
  }, [books])

  const displayedBooks = useMemo(() => {
    if (!selectedCategory) {
      return books
    }
    return books.filter((book) => book.categories.includes(selectedCategory))
  }, [books, selectedCategory])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    fetchBooks(value)
  }

  return (
    <section className="flex w-full justify-center px-6 py-8">
      <div className="w-full max-w-7xl">
        <Header />

        <div className="mt-4 flex flex-col gap-6">
          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-zinc-400" />
            <Input
              className="h-12 border-zinc-200 bg-white pl-10 shadow-sm"
              onChange={handleSearch}
              placeholder="Buscar por título ou autor..."
              value={search}
            />
          </div>

          <FilterCategory
            categories={categories}
            onSelect={setSelectedCategory}
            selected={selectedCategory}
          />

          {loading ? (
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-62.5" />
                <Skeleton className="h-4 w-50" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {displayedBooks.map((book) => (
                <div key={book.id} onClick={() => setSelectedBook(book)}>
                  <CardLivro {...book} />
                </div>
              ))}
            </div>
          )}

          {!loading && displayedBooks.length === 0 && (
            <div className="py-20 text-center text-zinc-500">
              Nenhum livro encontrado para essa busca.
            </div>
          )}
        </div>
      </div>

      {/* The dynamic details component */}
      <BookDetails
        book={selectedBook}
        isOpen={!!selectedBook}
        onClose={() => setSelectedBook(null)}
      />
    </section>
  )
}
