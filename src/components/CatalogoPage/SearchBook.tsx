import { Search } from 'lucide-react'
import { useCatalogo } from '@/hooks/useCatalogo'
import { Input } from '../ui/input'
import FilterCategory from './FilterCategory'

export default function SearchBook() {
  const {
    setSearch,
    search,
    allCategories,
    categoriesFilter,
    setCategoriesFilter,
  } = useCatalogo()

  return (
    <section className="w-full space-y-3">
      {/* Search bars */}
      <div className="relative w-full border md:w-96">
        <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-zinc-400" />
        <Input
          className="h-12 pl-10 shadow-sm"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar por título ou autor..."
          value={search}
        />
      </div>

      {/* Categories filters */}
      <FilterCategory
        categories={allCategories}
        onSelect={setCategoriesFilter}
        selected={categoriesFilter}
      />
    </section>
  )
}
