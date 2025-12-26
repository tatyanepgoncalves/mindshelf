import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge' // Assuming you have the same Badge component

type CardLivroProps = {
  id: string
  title: string
  author: string
  categories: string[]
  description: string
  cover?: string
  status: 'disponível' | 'emprestado'
}

export default function CardLivro({
  title,
  author,
  categories,
  description,
  cover,
  status,
}: CardLivroProps) {
  return (
    <div className="group h-100 cursor-pointer overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all hover:shadow-md">
      {/* Aspect Ratio container for the cover */}
      <div className="h-50 w-full overflow-hidden bg-zinc-100">
        {cover ? (
          // biome-ignore lint/correctness/useImageSize: it isn't necessary here
          <img
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={cover}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-zinc-400">
            Sem capa
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="line-clamp-1 font-bold text-zinc-900" title={title}>
              {title}
            </h3>
            <p className="text-sm text-zinc-500">{author}</p>
          </div>

          <Badge
            className={cn(
              'capitalize',
              status === 'disponível'
                ? 'bg-green-100 text-green-700 hover:bg-green-100'
                : 'bg-orange-100 text-orange-700 hover:bg-orange-100'
            )}
            variant={status === 'disponível' ? 'default' : 'secondary'}
          >
            {status}
          </Badge>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-zinc-600">{description}</p>

        <div className="mt-4 flex flex-wrap gap-1">
          {categories.slice(0, 2).map((cat) => (
            <span
              className="text-[10px] text-zinc-400 uppercase tracking-wider"
              key={cat}
            >
              #{cat}
            </span>
          ))}
          {categories.length > 2 && (
            <span className="text-[10px] text-zinc-400">
              +{categories.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
