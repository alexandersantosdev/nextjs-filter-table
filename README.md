## How to run this project

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Projeto filtro em tabela com dados de requisição web

### Tecnologias utilizadas: 
- Nextjs com getServerSideProps
- hook useState do React
- fetch e filter do javascript 
- bootstrap para estilizar

<p align="center">Os dados são baixados uma única vez no carregamento da página através da função getServerSideProps e armazenados num array principal e num auxiliar. Os filtros são realizados no array auxiliar com base nos dados do array principal. A tabela é gerada dinamicamente com os dados do array auxiliar, filtrado ou não (após 1º carregamento)</p>.