## Zaply Frontend Challenge

Este repositório contém uma aplicação em Next.js desenvolvida para o processo seletivo da empresa Zaply.

O site pode ser acessado em [aqui](https://zaply-frontend-challenge.vercel.app/).

#### Para rodar o projeto é necessario ter:
- Node
- Conexão com banco de dados MongoDB

#### Na pasta raiz do projeto
1. Adicionar em `next.config.js`:
```
env: {
  MONGO_URI: 'mongodb-connection-string-uri'
}
```
2. Executar o comando:
```
npm run dev
```
3. Abra [http://localhost:3000](http://localhost:3000) no navegador para acessar o site.

## Tecnologias
- Next.js - framework de react, permite criação fácil de uma api
- MongoDB - banco fácil de ser utilizado e configurado, principalmente com o Atlas
- Vercel - utilizado para hospedar a aplicação por funcionar muito bem com Next.js e ser fácil de se utilizar
