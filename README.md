## Sobre

Projeto desenvolvido com Node.js, Express, Docker, TDD, DDD e Clean Architecture.

## Instalação

1. Certifique-se de ter o Docker e o plugin Compose instalado.
2. Clone o repositório.
3. Execute `docker build -t node-vaga-backend --no-cache .`
4. Execute `docker compose up` para iniciar o container do mongodb e da aplicação.

## Rotas

A aplicação possui as seguintes rotas:

### Listar Pokémons

- **Método:** GET
- **Endpoint:** `/api/pokemons/:page`
- **Descrição:** Retorna uma lista de pokemons. Limite de 10 por página.
- **Query Params:**
  - `evolved?: number(0 ou 1)` - Filtra os pokémons por nível de evolução (opcional).
  - `type1?: string` - Filtra os pokémons por tipo (opcional).
  - `generation?: number` - Filtra os pokémons por geração (opcional).
  - Exemplo: `/api/pokemons/list/1?evolved=1&generation=1&type1=fire`

### Buscar Pokémon por ID

- **Método:** GET
- **Endpoint:** `/api/pokemons/:id`
- **Parâmetros:** `id` - O ID do pokémon a ser buscado.
- **Descrição:** Retorna um pokémon específico com base no ID fornecido.

## Uso

Envie requisições para a API RESTful na porta definida.

## Testes

Execute `npm test` para executar os testes automatizados.

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

# Teste de Backend

Olá Dev! Tudo bem?

Nós estamos sempre em busca de profissionais interessantes e interessados, com boa capacidade de aprendizado, adaptação e principalmente bom senso!

Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.

Vamos ao teste!

## Desafio Pokémon Go!

Sua missão é importar os dados do Pokemon Go, que estão no excel, e criar uma API usando NodeJS para que possamos consumir estes dados de maneira prática, rápida e automatizada.

Esta API deverá seguir o mínimo de práticas RESTful e conter listagens, busca, paginação e filtros. Fique à vontade para decidir quais filtros são mais interessantes.

## Consigo fazer?

Consegue sim! Só precisa saber (ou aprender agora) um pouco sobre as seguintes tecnologias:

- Conceitos de API RESTful
- Modelagem de dados
- NodeJS
- Algum banco de dados, por exemplo, MySQL, SQL Server, MongoDB, etc...
- Git

## Por onde começo?

Primeiramente, você pode fazer um fork desse repositório aqui, para sua conta do Github, depois disso crie uma branch nova com o seu nome (ex: nome_sobrenome), para podermos indentificá-lo.

Após terminar o desafio, você pode solicitar um pull request para a branch master do nosso repositório. Vamos receber e fazer a avaliação de todos.

## Só isso?

Só! Mas se quiser fazer a diferença, tente implementar um pouco de TDD e utilizar docker para execução do projeto.

Boa sorte! :)
