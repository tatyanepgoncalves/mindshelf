import { useDoar } from '@/hooks/useDoar'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import FieldForm from './FieldForm'
import FormMultiSelect from './FormMultiSelect'

export default function DoarForm() {
  const {
    handleRegisterBook,
    title,
    setTitle,
    author,
    setAuthor,
    categories,
    description,
    setDescription,
    agreement,
    setAgreement,
    loading,
    cover,
    setCover,
    categoriasLib,
    handleToggleCategory,
    setCustomCategory,
    customCategory,
  } = useDoar()

  return (
    <form className="space-y-6 md:space-y-3" onSubmit={handleRegisterBook}>

      <FieldForm
        id="title"
        label="Título do Livro"
        onChange={setTitle}
        placeholder="ex: O Hobbit"
        value={title}
      />

      <FieldForm
        id="author"
        label="Autor do Livro"
        onChange={setAuthor}
        placeholder="ex: J.J.R Tolkien"
        value={author}
      />

      <FormMultiSelect
        label="Gênero(s) do livro"
        options={categoriasLib}
        selectedOptions={categories}
        toggleOption={handleToggleCategory}
      />

      {/* If select 'outros' selected it's visible */}
      {/* Campo Condicional: Só aparece se "Outros" estiver selecionado */}
      {categories.includes('Outros') && (
        <div className="fade-in slide-in-from-top-2 animate-in duration-300">
          <FieldForm
            id="custom-category"
            label="Qual a categoria?"
            onChange={setCustomCategory}
            placeholder="Ex: Poesia, Gastronomia, HQ..."
            value={customCategory}
          />
        </div>
      )}

      <FieldForm
        id="description"
        isTextArea
        label="Resume"
        onChange={setDescription}
        placeholder="Conte um pouco sobre a história..."
        value={description} // Ativa o modo Textarea
      />

      <FieldForm
        id="cover"
        label="Capa do Livro"
        onChange={setCover}
        value={cover}
      />

      {/* Checkbox de Compromisso */}
      <div className="flex items-start space-x-3 rounded-lg border border-purple-100 bg-purple-50 p-4">
        <Checkbox
          checked={agreement}
          className="rounded-full border border-purple-900"
          id="agreement"
          onCheckedChange={(checked) => setAgreement(checked === true)}
        />
        <div className="grid gap-1.5 leading-none">
          <Label
            className="cursor-pointer font-semibold text-purple-900"
            htmlFor="agreement"
          >
            Compromisso de Entrega em Mãos
          </Label>
        </div>
      </div>

      <Button className="w-full bg-linear-to-r from-purple-500 to-indigo-700 text-white hover:bg-purple-800">
        {loading ? 'Cadastrando livro...' : 'Cadastrar Livro'}
      </Button>
    </form>
  )
}
