import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'

type FilterCategoryProps = {
  categories: string[]
  selected: string | null
  onSelect: (cat: string | null) => void
}

export default function FilterCategory({
  categories,
  selected,
  onSelect,
}: FilterCategoryProps) {
  if (categories.length === 0) {
    return null
  }

  return (
    <div className="mb-8 flex-wrap items-center gap-4">
      <span className="mr-4 font-medium text-sm text-zinc-500">
        Filtrar por
      </span>

      <Badge
        className={cn(
          'cursor-pointer px-4 py-1 transition-colors',
          selected === null
            ? 'border-purple-600 bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-background text-zinc-600 hover:bg-zinc-100'
        )}
        onClick={() => onSelect(null)}
        variant="outline"
      >
        Todas
      </Badge>

      {categories
        .flatMap((cat) => cat.split(','))
        .map((individualCat) => (
          <Badge
            className={cn(
              'm-1 cursor-pointer px-4 py-1 capitalize transition-all',
              selected === individualCat
                ? 'border-purple-600 bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-background text-zinc-600 hover:bg-zinc-100'
            )}
            key={individualCat}
            onClick={() => onSelect(individualCat)}
          >
            {individualCat}
          </Badge>
        ))}
    </div>
  )
}
