import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useLogin } from '@/hooks/useLogin'

export default function Form() {
  const { email, setEmail, password, setPassword, handleLogin, loading } =
    useLogin()

  return (
    <main className="flex w-full flex-col items-center justify-center gap-8 p-6">
      <div className="w-full space-y-10 sm:w-lg">
        <header className="flex flex-col gap-1.5 text-center">
          <h1 className="font-semibold text-3xl text-zinc-900">
            Bem-vindo de volta
          </h1>
          <p className="text-base text-zinc-600 md:text-lg">
            Entre para continuar sua jornada literária na MindShelf.
          </p>
        </header>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          {/* E-mail */}
          <div className="space-y-2">
            <Label className="pl-2" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu melhor email"
              type="email"
              value={email}
            />
          </div>

          {/* Senha  */}
          <div className="space-y-2">
            <Label className="pl-2" htmlFor="password">
              Senha
            </Label>
            <Input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
            />
          </div>

          <div className="w-full text-center">
            <Button className="w-full" disabled={loading} type="submit">
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
            <p className="mt-2 text-sm text-zinc-700">
              Ainda tem conta?{' '}
              <Link className="font-medium" to="/cadastrar">
                Crie uma conta.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}
