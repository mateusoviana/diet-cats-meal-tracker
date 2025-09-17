# DietCats – Rastreador de Refeições

Aplicativo gamificado para registrar refeições, auxiliar no controle da dieta e facilitar o acompanhamento por nutricionistas.

## Desenvolvimento local

Pré-requisitos: Node.js e npm — você pode instalar o Node via nvm: https://github.com/nvm-sh/nvm#installing-and-updating

Passos:

```sh
# 1) Clonar o repositório
git clone <SEU_GIT_URL>

# 2) Entrar na pasta do projeto
cd <NOME_DO_PROJETO>

# 3) Instalar dependências
npm install

# 4) Iniciar o servidor de desenvolvimento
npm run dev
```

Você também pode editar arquivos diretamente no GitHub (ícone de lápis) ou usar o GitHub Codespaces.

Observação sobre o comando: `npm i` é uma forma abreviada de `npm install`. Ambos funcionam, mas deixamos `npm install` no README por ser mais explícito.

## Tecnologias

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Implantação

Você pode publicar o build de produção em qualquer hospedagem de arquivos estáticos (ex.: Vercel, Netlify, GitHub Pages, Cloudflare Pages):

```sh
npm run build
```

Depois, sirva o conteúdo gerado em `dist/` com o provedor de sua preferência.
