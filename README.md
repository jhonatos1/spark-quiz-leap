# Segredos Curativos da Natureza — Quiz

Site estático independente feito com React, TypeScript, Vite e Tailwind CSS. Preserva as etapas, imagens e checkout do projeto original. Não exige conta Lovable, servidor, banco de dados ou chaves de API. As fontes são carregadas pelo Google Fonts.

## Cloudflare Pages pelo GitHub

Na criação de uma aplicação **Pages**, conecte este repositório e configure:

| Campo | Valor |
| --- | --- |
| Branch de produção | `main` |
| Framework preset | `Vite` (ou `None` com os campos abaixo) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | deixar vazio (raiz do repositório) |
| Environment variable | `NODE_VERSION` = `24` |

Clique em **Save and Deploy**. O endereço `nome-do-projeto.pages.dev` será informado pela Cloudflare. As próximas alterações enviadas à branch `main` gerarão novas publicações automaticamente. Não é necessário enviar o ZIP ou configurar Workers/Functions.

Após publicar, abra o endereço no celular e no computador, avance pelas etapas e confira o botão **Eu quero!**. O destino é `https://pay.kiwify.com.br/2QOHfhX`.

Para um domínio próprio no futuro, use **Custom domains** no projeto Pages e siga as instruções de DNS.

## Desenvolvimento

Use Node.js 24 LTS (veja `.nvmrc`) e npm:

```sh
npm ci
npm run dev
```

Build de produção com verificação TypeScript:

```sh
npm run build
npm run preview
```

A saída publicável fica em `dist/` e não é versionada.

## Onde editar

- `src/App.tsx`: interface, botões e oferta final.
- `src/lib/quiz.ts`: perguntas, ordem das etapas e `CHECKOUT_URL`.
- `src/assets/`: imagens.
- `src/styles.css`: cores e estilos.

As escolhas avançam para a próxima etapa; não há coleta nem persistência das respostas. Recarregar a página reinicia o quiz. O checkout é externo, operado pela Kiwify.
