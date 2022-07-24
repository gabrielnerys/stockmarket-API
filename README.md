# StockMarketAPI

## Índice

- [StockMarketAPI](#stockmarketapi)
  - [Índice](#índice)
  - [Overview](#overview)
    - [Sobre a API](#sobre-a-api)
    - [Links](#links)
    - [Rotas](#rotas)
  - [Sobre o Desafio](#sobre-o-desafio)
    - [Etapas de Desenvolvimento](#etapas-de-desenvolvimento)
      - [Modelagem do Banco de dados](#modelagem-do-banco-de-dados)
      - [Definição da Estrutura de pastas e Arquivos](#definição-da-estrutura-de-pastas-e-arquivos)
    - [Ferramentas e linguagens](#ferramentas-e-linguagens)
    - [Desafios durante o desenvolvimento](#desafios-durante-o-desenvolvimento)
    - [Desenvolvimento continuo](#desenvolvimento-continuo)
  - [Instruções de Compilação](#instruções-de-compilação)

## Overview

### Sobre a API

A StockMarketAPI é uma API REST que simula compra e venda de ativos para plataformas de Investimentos em ações.

### Links

Para testar a simulação da API e visualizar a Documentação Swagger clique no link abaixo:

:arrow_right: [StockMarketAPI](https://apistockmarkets.herokuapp.com/docs) 

Siga esse passos: 

- Acesse a rota "/login", clique em "Try it out" e depois em "Execute"
- Após isso, você receberá uma resposta como mostrado no exemplo abaixo:
  
```
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiUm9iZXJ0byIsInNvYnJlbm9tZSI6IlNvdXNhIiwiZW1haWwiOiJyb2JlcnRvc291c2FAZ21haWwuY29tIiwiaWF0IjoxNjU4NTIxNTYwLCJleHAiOjE2NTkxMjYzNjB9.0tdUYr5wbV6Oo3jUGCmDGd-EO4ZYCGE1tH9d_-vjTEk"
  }
```
- Selecione todo o código dentro de aspas e copie(sem as aspas), como no exemplo abaixo:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiUm9iZXJ0byIsInNvYnJlbm9tZSI6IlNvdXNhIiwiZW1haWwiOiJyb2JlcnRvc291c2FAZ21haWwuY29tIiwiaWF0IjoxNjU4NTIxNTYwLCJleHAiOjE2NTkxMjYzNjB9.0tdUYr5wbV6Oo3jUGCmDGd-EO4ZYCGE1tH9d_-vjTEk
```
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

## Sobre o Desafio

### Etapas de Desenvolvimento

#### Modelagem do Banco de dados 

Como primeiro passo para o desenvolvimento da API, escolhi o desenvolvimento do banco de dados pois assim eu teria uma melhor noção de como realizar a construção das queries para requisição das informações. 

Optei por manter a aplicação simples, definindo 4 tabelas:

- **Clientes:** Contém informações básicas dos clientes como nome, email, senha e saldo. 
- **Ativos:** Contém informações básicas sobre os ativos como nome, código e valor unitário.
- **Compra:** Registra todas as informações de compra de ativos.
- **Venda:** Registra todas as informações de venda de ativos.

Representação visual do banco de dados com respectivas relações:

![Representação do banco de dados](/public/database.png)

#### Definição da Estrutura de pastas e Arquivos

Para o desenvolvimento da API, a forma escolhida foi seguindo a Estrutura MSC para a organização dos arquivos entre os respectivos diretórios de camadas, como representado abaixo:

- **src**
  - **controllers**
    - assets.controller.js
    - clients.controller.js
    - transactions.controller.js
  - **service**
    - assets.service.js
    - clients.service.js
    - transactions.service.js
  - **model**
    - assets.model.js
    - clients.model.js
    - transactions.model.js


### Ferramentas e linguagens

A linguagem escolhida para o desenvolvimento do projeto foi o _Javascript_, por eu possuir um conhecimento melhor e mais experiência no desenvolvimento de projetos.

Em conjunto com o JS, outras ferramentas e bibliotecas foram escolhidas no desenvolvimento como o uso do _Express_, por possuir recursos que facilitam o tratamento de requisições.

Para desenvolvimento e manipulação do banco de dados, foi utilizado o _MySQL_ e o mesmo foi armazenado em nuvem através do serviço _RDS_ disponível pela _AWS_.

Para deploy da _API_, está sendo utilizada a plataforma _Heroku_, onde estão definidas todas as varáveis de ambientes configuradas para o projeto funcionar corretamente. 

A validação do acesso local é feita através da geração e autenticação de token utilizando _JsonWebToken_(JWT).

A documentação e testes de requisições da API foi feita através
do Swagger.

Testes locais foram realizados utilizando o Postman.

Outros recursos utilizados foram:

- CORS
- dotEnv
- Eslint


### Desafios durante o desenvolvimento

  **Deploy do banco de dados**

  Durante o desenvolvimento do projeto foram realizados alguns testes em plataformas diferentes, dentre elas Heroku(através de Add-ons), Azure, Supabase, e a AWS que suportou corretamente o banco de dados por possuir suporte flexivel a variados tipos de bancos de dados.

  **Desenvolvimento da documentação Swagger**

  Por ser uma ferramenta que a pouco ainda era desconhecida, foi um desafio aprender a desenvolver a documentação, colocá-la no ar e entender quaisquer possíveis problemas de execução ou configuração.


### Desenvolvimento continuo

  **Criação de novas rotas e funções**

  A inclusão de rotas com funções como Inclusão de novos clientes, update de informações como a substituição do email e/ou senha para ampliação de funcionalidades da API.

  **Refatoração da documentação Swagger**

  Visando uma melhor visualização do código, uma das tasks de melhoria é a refatoração da documentação Swagger em um arquivo próprio


## Instruções de Compilação


1. Clone o repositório
  
  * Execute o código abaixo no terminal
    ```
    git clone git@github.com:gabrielnerys/desafio-tecnico-XP.git
    ```
  * Entre na pasta do repositório que você acabou de clonar:
    ```
    cd desafio-tecnico-XP
    ```

2. Instale as dependências
    ```
    npm install
    ```

**Etapas opcionais:**

3. Crie uma branch a partir da branch `main`
  * Verifique que você está na branch `main`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `main`
    * Exemplo: `git checkout main`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `pessoa-desenvolvedora-projeto-x`
    * Exemplo: `git checkout -b pessoa-desenvolvedora-projeto-x`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças ao stage do Git)
        * `git status` (deve aparecer listado o arquivo em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'Meu primeiro commit'` (fazendo o primeiro commit)

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin pessoa-desenvolvedora-projeto-x`

**Extra:**

6. Para executar os testes, execute o seguinte comando
    ```
    npm run test
    ```