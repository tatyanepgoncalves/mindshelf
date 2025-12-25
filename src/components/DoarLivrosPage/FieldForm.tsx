import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

type FieldFormProps = {
  label: string
  id: string
  placeholder?: string
  type?: string
  value: string
  onChange: (value: string) => void
  isTextArea?: boolean
}

export default function FieldForm({
  label,
  id,
  placeholder,
  type = 'text',
  value,
  onChange,
  isTextArea = false,
}: FieldFormProps) {
  return (
    <div className="space-y-2">
      <Label className="select-none" htmlFor={id}>
        {label}
      </Label>

      {isTextArea ? (
        <Textarea
          className="min-h-20 resize-none border-zinc-300 focus-visible:ring-purple-500"
          id={id}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <Input
          className="w-full"
          id={id}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      )}
    </div>
  )
}
