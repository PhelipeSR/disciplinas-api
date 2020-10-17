# Disciplina API

Disciplina-API é um simples CRUD para gerenciar disciplinas. O objetivo é estudar o desenvolvimento de API's usando Node.js com banco de dados MongoDB.


## Quick start

Essas instruções fornecerão uma cópia do projeto instalado e funcionando em sua máquina local para fins de desenvolvimento e teste.

### Requisitos

Para rodar o projeto localmente instale:

- [Node](https://nodejs.org/en/) (v12 ou superior)

- [Yarn](https://yarnpkg.com/pt-BR/) or [NPM](https://www.npmjs.com/)

- [MongoDB](https://docs.mongodb.com/manual/installation/)


Clone o repositório:

```
git clone https://github.com/PhelipeSR/disciplinas-api.git
```

Dentro da pasta do projeto rode

```
yarn ou npm install
```

Dentro da pasta `src/config/dbConnection.json` configure a url do banco de dados.


### Rodando Disciplina-API

Para iniciar a API no mode de desenvolvimento:

```
yarn dev ou npm run dev
```

### Rotas

Baixar request no Insomnia

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Disciplinas%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FPhelipeSR%2Fdisciplinas-api%2Fmain%2Frequests.json)


| Descrição | Descrição                                                                                                                                                 | Método | Rota              | Parâmetros                                                                                                                                                                                                                                                  |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| List All  | Retorna uma lista com as disciplinas cadastradas.<br>É possível controlar a quantidade de dados de retorno, a página e filtrar pelo nome ou departamento. | GET    | /disciplinas      | Query Params<br><br>search<br>page<br>length                                                                                                                                                                                                                |
| List One  | Retorna os dados de uma disciplina específica.                                                                                                            | GET    | /disciplinas/{id} |                                                                                                                                                                                                                                                             |
| Create    | Cria uma disciplina e turmas relacionadas.                                                                                                                | POST   | /disciplinas      | Body Params<br>{<br>  code - (Number)<br>  department - (String)<br>  name - (String)<br>  num_credits - (Integer)<br>  classes - (Array) [<br>    {<br>      code - (String)<br>      teacher - (String)<br>      schedule - (String)<br>    }<br>  ]<br>} |
| Update    | Atualiza uma disciplina e turmas relacionadas.                                                                                                            | PUT    | /disciplinas/{id} | Body Params<br>{<br>  code - (Number)<br>  department - (String)<br>  name - (String)<br>  num_credits - (Integer)<br>  classes - (Array) [<br>    {<br>      code - (String)<br>      teacher - (String)<br>      schedule - (String)<br>    }<br>  ]<br>} |
| Delete    | Deleta uma disciplina e turmas relacionadas.                                                                                                              | DELETE | /disciplinas/{id} |                                                                                                                                                                                                                                                             |

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
