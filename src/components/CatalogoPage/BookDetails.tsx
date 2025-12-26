import { BookOpen, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { BookProps } from '@/types/book'
import { Badge } from '../ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '../ui/dialog'

type BookDetailProps = {
  book: BookProps | null
  isOpen: boolean
  onClose: () => void
}

export default function BookDetails({
  book,
  isOpen,
  onClose,
}: BookDetailProps) {
  if (!book) {
    return null
  }

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="max-h-[90vh] w-full max-w-6xl overflow-y-auto px-6">
        <div className="grid w-full grid-cols-1 gap-6 pt-4 md:grid-cols-2">
          {/* Book Cover */}
          <div className="aspect-3/4 overflow-hidden rounded-lg border bg-zinc-100">
            {/** biome-ignore lint/correctness/useImageSize: it isn't necessary */}
            <img
              alt={book.title}
              className="h-full w-full object-cover"
              src={book.cover}
            />
          </div>

          {/* Book Info */}
          <div className="flex flex-col gap-4">
            <div>
              <DialogTitle className="font-bold text-2xl">
                {book.title}
              </DialogTitle>
              <div className="mt-1 flex items-center gap-2 text-zinc-500">
                <User size={16} />
                <span>{book.author}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {book.categories.map((cat) => (
                <Badge className="capitalize" key={cat}>
                  {cat}
                </Badge>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="flex items-center gap-2 font-semibold">
                <BookOpen size={18} /> Resumo
              </h4>
              <DialogDescription className="text-zinc-600 leading-relaxed">
                {book.description}
              </DialogDescription>
            </div>

            <div className="mt-auto flex items-center justify-between border-t pt-4">
              <Badge
                className={cn(
                  'capitalize',
                  book.status === 'disponível'
                    ? 'bg-green-500'
                    : 'bg-orange-500'
                )}
              >
                {book.status}
              </Badge>
              <span className="text-xs text-zinc-400">
                Adicionado em:{' '}
                {new Date(book.createdAt?.seconds * 1000).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
