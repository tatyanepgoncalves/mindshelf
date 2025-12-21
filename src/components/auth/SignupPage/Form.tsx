import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSignup } from '@/hooks/useSignup'

export default function Form() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    handleSubmit,
    loading,
  } = useSignup()

  return (
    <main className="flex w-full flex-col items-center justify-center gap-8 p-6">
      <div className="w-full space-y-10 sm:w-lg">
        <header className="flex flex-col gap-1.5 text-center">
          <h1 className="font-semibold text-3xl text-zinc-900">
            Crie uma conta
          </h1>
          <p className="text-lg text-zinc-600">
            Junte-se à nossa comunidade e dê asas aos seus sonhos.
          </p>
        </header>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Username  */}
          <div className="space-y-2">
            <Label className="pl-2" htmlFor="username">
              Nome completo
            </Label>
            <Input
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nome completo"
              type="text"
              value={username}
            />
          </div>

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

          {/* Confirme a senha  */}
          <div className="space-y-2">
            <Label className="pl-2" htmlFor="passwordConfirm">
              Confirme a senha
            </Label>
            <Input
              id="passwordConfirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              value={passwordConfirm}
            />
          </div>

          <div className="w-full text-center">
            <Button className="w-full" disabled={loading} type="submit">
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
            <p className="mt-2 text-sm text-zinc-700">
              Já tem conta?{' '}
              <Link className="font-medium" to="/">
                Acesse a conta.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}
