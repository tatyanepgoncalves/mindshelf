import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const cardsInfo = [
  {
    numberInfo: 3,
    description: 'Livros com você',
    moreInfo: '(Devolução em X dias)',
  },
  {
    numberInfo: 5,
    description: 'Livros doados por você',
    moreInfo: null,
  },
  {
    numberInfo: 1,
    description: 'Solicitação pendente',
    moreInfo: null,
  },
]

export default function SecaoStatus() {
  return (
    <section className="my-10 flex items-center justify-center p-6">
      <div className="flex w-full max-w-7xl flex-col gap-4 md:gap-8">
        <h2 className="text-center font-semibold text-xl md:text-3xl">
          Seu resumo
        </h2>

        <section className="grid gap-4 md:grid-cols-3">
          {cardsInfo.map((card) => (
            <Card key={card.description}>
              <CardHeader className="grid h-15 w-15 place-content-center rounded-full bg-purple-200 md:h-20 md:w-20">
                <CardTitle>{card.numberInfo}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-zinc-600">{card.description}</p>
                <p className="text-xs text-zinc-400">{card.moreInfo}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </section>
  )
}
