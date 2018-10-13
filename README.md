# API DESENVOLVIDA EM NODEJS

Autor: Gabriel Paiva
Banco de dados: MongoDB
Padrão de Arquitetura: MVC

## INSTRUÇÕES
    Esta API foi testada pelo Insomnia, um REST Client para realizar requisições HTTP.
    Na pasta API há um arquivo do Insomnia com todas as requisições usadas para este projeto.

    As seguintes funcionalidades estão disponíveis:
        * Listagem;
        * Busca;
        * CRUD.

    
#   1) Listagem
        Todas as listagens são feitas pela rota "/all" via GET.
        Para navegar entre as páginas, envie a query "page" com o número da página:
        localhost:3000/all?page=20
        
        É possível filtrar e ordenar os resultados enviando propriedades no corpo da requisição,por exemplo:

        {
            "filters": {
                "Generation": 7,
                "Shiny": 0
            },
            "sort": {
                "Name": "asc"
            }
        }


#   2) Busca
        Todas as buscas são feitas pela rota "/search" via GET.
        Exemplo de palavras chave para buscar:
            * Pikachu: retorna o Pokemon
            * +pikachu: retorna o pokemon e suas evoluções
            * 2: pokemons na pokedex 2
            * atk 100-200: pokemons com ATK no intervalo mencionado
        
        É possível também o parametro "sort" no corpo da requisição.
        Exemplos de busca:

            "localhost:3000/search?q=Charmander"  => Pokemon
            "localhost:3000/search?q=+charmander" => Evoluções
            "localhost:3000/search?q=50"          => Pokemons na pokedex 50
            "localhost:3000/search?q=atk 1-50"    => Pokemons com ATK entre 1 e 50

#   3) CRUD
        Pode-se adicionar, listar, editar e excluir pokemons.
        
        POST    "localhost:3000/"     => Adicionar
        PUT     "localhost:3000/:id"  => Editar
        DELETE  "localhost:3000/:id"  => Excluir