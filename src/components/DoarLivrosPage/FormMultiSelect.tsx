import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type FormMultiSelectProps = {
  label: string
  options: string[]
  selectedOptions: string[] // Agora é um array
  toggleOption: (option: string) => void // Função para adicionar/remover
}

export default function FormMultiSelect({
  label,
  options,
  selectedOptions,
  toggleOption,
}: FormMultiSelectProps) {
  return (
    <div className="flex w-full flex-col gap-3">
      <Label className="ml-1 font-medium text-zinc-700">
        {label}{' '}
        <span className="font-normal text-xs text-zinc-400">
          (Selecione uma ou mais)
        </span>
      </Label>

      <div className="flex flex-wrap gap-2 rounded-md border border-zinc-300 bg-white p-3">
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option)

          return (
            <Badge
              className={cn(
                'cursor-pointer px-3 py-1 transition-all',
                isSelected
                  ? 'border-purple-600 bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              )}
              key={option}
              onClick={() => toggleOption(option)}
              variant="outline"
            >
              {option}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}
