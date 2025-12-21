export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex w-full items-center justify-center p-6">
      <div className="w-full max-w-7xl text-center">
        <p className="text-xs text-zinc-400">
          {year} MindShelf. Desenvolvido com carinho para a comunidade.
        </p>
      </div>
    </footer>
  )
}
