# StockMarketAPI

## Índice

- [StockMarketAPI](#stockmarketapi)
  - [Índice](#índice)
  - [Overview](#overview)
    - [Sobre a API](#sobre-a-api)
    - [Links](#links)
    - [Rotas](#rotas)
  - [Meu processo](#meu-processo)
    - [Etapas de Desenvolvimento](#etapas-de-desenvolvimento)
      - [Definição da Estrutura do Banco de dados](#definição-da-estrutura-do-banco-de-dados)
    - [Ferramentas e linguagens](#ferramentas-e-linguagens)
    - [O que aprendi](#o-que-aprendi)
    - [Desenvolvimento continuo](#desenvolvimento-continuo)

## Overview

### Sobre a API

A StockMarketAPI é uma API REST que simula compra e venda de ativos para plataformas de Investimentos em ações.

### Links

Para testar a simulação da API, clique no link ao lado: [StockMarketAPI](https://apistockmarkets.herokuapp.com/docs) 

- Acesse a rota "/login", clique em "Try it out" e depois em "Execute"
- Após isso, você receberá uma resposta como mostrado no exemplo abaixo:
  
```
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiUm9iZXJ0byIsInNvYnJlbm9tZSI6IlNvdXNhIiwiZW1haWwiOiJyb2JlcnRvc291c2FAZ21haWwuY29tIiwiaWF0IjoxNjU4NTIxNTYwLCJleHAiOjE2NTkxMjYzNjB9.0tdUYr5wbV6Oo3jUGCmDGd-EO4ZYCGE1tH9d_-vjTEk"
  }
```
- Selecione todo o código dentro de aspas e copie(sem as aspas)
- Em seguida, clique no botão "Authorize" localizado no lado direito da parte superior da página
- Cole o código copiado dentro da janela com o nome "Value" e clique em "Authorize"
- Pronto, agora está tudo certo para testar as outras rotas!

### Rotas

Alguns dos Recursos disponíveis pela API são:

* [**Login**](#login)
  - Realizar a validação das informações enviadas na requisição com as informações existentes no banco de dados.
  - Retorna um erro, caso as informações estejam inválidas ou não conferir com as informações no banco de dados.
  - Caso as informações estejam corretas, o usuário receberá um token que deverá ser armazenado para acesso a outras rotas.
* [**Conta**](#conta)
  - Obter informações sobre a conta do usuário realizando uma busca atráves do código do cliente.
  - Realizar requisições de saques e depósitos recebendo o valor do saldo atualizado.
* [**Ativos**](#ativos)
  - Obter informações sobre todos os ativos disponíveis na plataforma
  - Obter informações sobre um unico ativo realizando uma busca atráves do código do ativo.
  - Obter informações todos os ativos que o cliente possui realizando uma busca atráves do código do cliente.
* [**Investimentos**](#investimentos)
  - Realizar requisições de compra de ativos.
  - Realizar requisições de venda de ativos.
* [**Transações**](#transações)
  - Obter informações sobre todos os registros de compra e venda de ativos na plataforma.

## Meu processo

### Etapas de Desenvolvimento

#### Definição da Estrutura do Banco de dados 

Como primeiro passo para o desenvolvimento da API, escolhi o desenvolvimento do banco de dados pois assim eu teria uma melhor noção de como realizar a construção das queries para requisição das informações. 

Optei por manter a aplicação simples, definindo 4 tabelas:

- **Clientes:** Contém informações básicas dos clientes como nome, email, senha e saldo. 
- **Ativos:** Contém informações básicas sobre os ativos como nome, código e valor unitário.
- **Compra:** Registra todas as informações de compra de ativos.
- **Venda:** Registra todas as informações de venda de ativos.

Representação visual do banco de dados com respectivas relações:

<img src="/public/database.png" width="1000">

![Representação do banco de dados](/public/database.png)

### Ferramentas e linguagens



### O que aprendi



### Desenvolvimento continuo