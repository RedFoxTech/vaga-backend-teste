/**
    * @api {get} /v1/pokemons/filter filter Pokemons
    * @apiGroup Pokemons
    * @apiVersion 1.0.0
    * @apiParam {_id} _id Pokemons _id Optional
    * @apiParam {Number} page Pokemons page  Optional
    * @apiParam {Number} limit Pokemons limit  Optional
    * @apiParam {String} weather_1 Pokemons weather_1 Optional
    * @apiParam {String} weather_1 Pokemons weather_1 Optional
    * @apiParam {String} weather_2 Pokemons weather_2 Optional
    * @apiParam {Number} evolved Pokemons evolved Optional
    * @apiParam {Number} stat_total Pokemons stat_total Optional
    * @apiParam {Number} atk Pokemons atk Optional
    * @apiParam {Number} def Pokemons def Optional
    * @apiParam {Number} sta Pokemons sta Optional
    * @apiParam {Number} legendary Pokemons legendary Optional
    * @apiParam {Number} aquireable Pokemons aquireable Optional
    * @apiParam {Number} spawns Pokemons spawns Optional
    * @apiParam {Number} regional Pokemons regional Optional
    * @apiParam {Number} raidable Pokemons raidable Optional
    * @apiParam {Number} hatchable Pokemons hatchable Optional
    * @apiParam {Number} shiny Pokemons shiny Optional
    * @apiParam {Number} nest Pokemons nest Optional
    * @apiParam {Number} new Pokemons new Optional
    * @apiParam {Number} not_gettable Pokemons not_gettable Optional
    * @apiParam {String} name Pokemons name Optional
    * @apiParam {Number} pokedex_number Pokemons pokedex_number Optional
    * @apiParam {Number} img_name Pokemons img_name Optional
    * @apiParam {Number} evolution_stage Pokemons evolution_stage Optional
    * @apiParam {Number} family_id Pokemons family_id Optional
    * @apiParam {Number} cross_gen Pokemons cross_gen Optional
    * @apiParam {String} type_1 Pokemons type_1 Optional
    * @apiParam {String} type_2 Pokemons type_2 Optional
    * @apiParam {Number} cp_40 Pokemons cp_40 Optional
    * @apiParam {Number} cp_39 Pokemons cp_39 Optional
    * @apiExample {curl} Example:
        curl  http://localhost:3000/v1/pokemons/filter?type_1=fire&page=2&limit=3 \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    {
        "docs": [
            {
                "evolved": 1,
                "stat_total": 519,
                "atk": 169,
                "def": 204,
                "sta": 146,
                "legendary": 0,
                "aquireable": 1,
                "spawns": 1,
                "regional": 0,
                "raidable": 0,
                "hatchable": 0,
                "shiny": 0,
                "nest": 0,
                "new": 0,
                "not_gettable": 0,
                "future_evolve": 0,
                "_id": "5bb0292a7925a140f64e2192",
                "row": "38",
                "name": "Ninetales",
                "pokedex_number": "38",
                "img_name": "38",
                "generation": 1,
                "evolution_stage": 2,
                "family_id": 15,
                "cross_gen": 0,
                "type_1": "fire",
                "type_2": "",
                "weather_1": "Sunny/clear",
                "weather_2": "",
                "cp_40": 2157,
                "cp_39": 2127
            },
            {
                "evolved": 0,
                "stat_total": 342,
                "atk": 136,
                "def": 96,
                "sta": 110,
                "legendary": 0,
                "aquireable": 1,
                "spawns": 1,
                "regional": 0,
                "raidable": 0,
                "hatchable": 5,
                "shiny": 0,
                "nest": 1,
                "new": 0,
                "not_gettable": 0,
                "future_evolve": 0,
                "_id": "5bb0292a7925a140f64e21a6",
                "row": "58",
                "name": "Growlithe",
                "pokedex_number": "58",
                "img_name": "58",
                "generation": 1,
                "evolution_stage": 1,
                "family_id": 26,
                "cross_gen": 0,
                "type_1": "fire",
                "type_2": "",
                "weather_1": "Sunny/clear",
                "weather_2": "",
                "cp_40": 1110,
                "cp_39": 1095
            },
            {
                "evolved": 1,
                "stat_total": 573,
                "atk": 227,
                "def": 166,
                "sta": 180,
                "legendary": 0,
                "aquireable": 1,
                "spawns": 1,
                "regional": 0,
                "raidable": 0,
                "hatchable": 0,
                "shiny": 0,
                "nest": 0,
                "new": 0,
                "not_gettable": 0,
                "future_evolve": 0,
                "_id": "5bb0292a7925a140f64e21a7",
                "row": "59",
                "name": "Arcanine",
                "pokedex_number": "59",
                "img_name": "59",
                "generation": 1,
                "evolution_stage": 2,
                "family_id": 26,
                "cross_gen": 0,
                "type_1": "fire",
                "type_2": "",
                "weather_1": "Sunny/clear",
                "weather_2": "",
                "cp_40": 2839,
                "cp_39": 2799
            }
        ],
        "total": 52,
        "limit": 3,
        "page": 2,
        "pages": 18
    }
    * @apiErrorExample {json} Empty Register
    *    HTTP/1.1 404 Bad Request
    [
        {
            "title": "Error em Procurar",
            "message": "Não conseguimos retornar o que procura!"
        }
    ]
    * @apiErrorExample {json} Error Pokemons error
    *    HTTP/1.1 500 Internal Server Error
**/
