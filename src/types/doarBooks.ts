import { z } from 'zod/v4'

export const bookFormSchema = z.object({
  title: z.string().min(2, 'O título deve ter pelo menos 2 caracteres'),
  author: z.string().min(2, 'Informe o nome do autor'),
  category: z.string().min(1, 'Selecione uma categoria'),
  description: z
    .string()
    .min(10, 'A descrição deve ter pelo menos 10 caracteres'),
  cover: z.string().min(10, 'Insira o link da imagem da capa do livro'), // Aqui você tratará o upload depois
  agreement: z.boolean().refine((val) => val === true, {
    message: 'Você precisa concordar com a entrega presencial',
  }),
})