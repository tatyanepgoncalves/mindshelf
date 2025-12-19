Com base em tudo o que discutimos — a stack moderna, as regras de entrega em mãos e o sistema de prazos — aqui está uma estrutura de **README.md** completa, profissional e pronta para o seu repositório.

---

# 📚 MindShelf: Onde seus sonhos ganham asas para voar

> **Status do Projeto:** 🚧 Em desenvolvimento

O **MindShelf** é um sistema de biblioteca comunitária online criado para conectar leitores e facilitar a circulação de conhecimento. A plataforma permite que usuários cadastrem seus acervos pessoais, doem livros e realizem empréstimos de forma organizada e segura.

---

## 🌟 Sobre o Projeto

Diferente de bibliotecas digitais, o MindShelf foca na **conexão física**. O sistema atua como o cérebro da operação, gerindo quem está com qual livro, enquanto a entrega acontece no mundo real.

### 📝 Regras de Negócio Principais

* **Entrega em Mãos (Obrigatório):** O sistema não realiza envios. A entrega e devolução devem ser combinadas e realizadas presencialmente entre as partes.
* **Prazo de Empréstimo:** * **Primeiro empréstimo:** 14 dias corridos.
* **Usuários Recorrentes:** O prazo pode variar de acordo com o perfil, contexto e histórico do usuário na plataforma.


* **Ciclo de Doação:** Usuários podem cadastrar livros para doação definitiva, que passam a integrar o acervo público da comunidade.

---

## 🛠️ Tecnologias Utilizadas

O projeto utiliza o que há de mais moderno no ecossistema React para garantir performance e escalabilidade:

* **Frontend:** [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + [Shadcn/UI](https://ui.shadcn.com/)
* **Roteamento:** [React Router Dom](https://reactrouter.com/)
* **Padronização:** [Biome](https://biomejs.dev/) + Ultracite
* **Backend & Auth:** [Firebase](https://firebase.google.com/) (Firestore & Authentication)

---

## 🚀 Funcionalidades Planejadas

### Para Usuários

* [ ] **Autenticação:** Login seguro via E-mail ou Google.
* [ ] **Catálogo Virtual:** Visualização de todos os livros disponíveis na comunidade.
* [ ] **Doação de Livros:** Cadastro simplificado de novos títulos para o acervo.
* [ ] **Solicitação de Empréstimo:** Reserva de livros com contagem regressiva de prazo.
* [ ] **Perfil do Leitor:** Histórico de leituras, reputação e status de empréstimos ativos.

### Para Administradores (Moderadores)

* [ ] **Gestão de Acervo:** Aprovação de novos livros cadastrados.
* [ ] **Controle de Prazos:** Monitoramento de devoluções atrasadas.
* [ ] **Ajuste de Perfis:** Alteração de prazos permitidos para usuários veteranos.

---

## 📂 Estrutura de Pastas Sugerida

```text
src/
├── assets/          # Imagens e ícones
├── components/      # Componentes reutilizáveis (Shadcn)
├── contexts/        # Contextos (Auth, Theme)
├── hooks/           # Custom hooks (ex: useFirebase)
├── pages/           # Páginas da aplicação (Home, Login, Dashboard)
├── services/        # Configuração do Firebase e chamadas de API
├── types/           # Definições de interfaces TypeScript
└── utils/           # Funções utilitárias e máscaras

```

---

## ⚙️ Como Executar o Projeto

- **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/mindshelf.git

```

- **Instale as dependências:**

```bash
npm install
# Ou
pnpm install
# Ou
yarn install

```

- **Configure o Firebase:**

Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais:

```env
VITE_FIREBASE_API_KEY=sua_key
VITE_FIREBASE_AUTH_DOMAIN=seu_domain
# ... demais variáveis
```

- **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

---

## 🤝 Contribuição

Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request* com melhorias. Toda ajuda para fazer a comunidade MindShelf crescer é bem-vinda!

---

**Desenvolvido com ❤️ por [Tatyane Gonçalves](https://github.com/tatyanepgoncalves)**
