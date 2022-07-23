# StockMarketAPI

A StockMarketAPI é uma API REST que simula compra e venda de ativos para plataformas de Investimentos em ações.

## Índice

- [Overview](#overview)
  - [Sobre a API](#sobre-a-api)
  - [Rotas](#rotas)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Etapas de Desenvolvimento](#etapas-de-desenvolvimento)
  - [Ferramentas e linguagens](#ferramentas-e-linguagens)
  - [O que aprendi](#o-que-aprendi)
  - [Desenvolvimento continuo](#desenvolvimento-continuo)
- [Autor](#autor)

## Overview

### Sobre a API

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
