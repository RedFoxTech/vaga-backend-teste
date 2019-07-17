/**
    * @api {post} /v1/pokemons/ Create Pokemons
    * @apiGroup Pokemons
    * @apiVersion 1.0.0
    * @apiParam {_id} _id Pokemons _id
    * @apiParam {String} weather_1 Pokemons weather_1
    * @apiParam {String} weather_2 Pokemons weather_2
    * @apiParam {Number} evolved Pokemons evolved
    * @apiParam {Number} stat_total Pokemons stat_total
    * @apiParam {Number} atk Pokemons atk
    * @apiParam {Number} def Pokemons def
    * @apiParam {Number} sta Pokemons sta
    * @apiParam {Number} legendary Pokemons legendary
    * @apiParam {Number} aquireable Pokemons aquireable
    * @apiParam {Number} spawns Pokemons spawns
    * @apiParam {Number} regional Pokemons regional
    * @apiParam {Number} raidable Pokemons raidable
    * @apiParam {Number} hatchable Pokemons hatchable
    * @apiParam {Number} shiny Pokemons shiny
    * @apiParam {Number} nest Pokemons nest
    * @apiParam {Number} new Pokemons new
    * @apiParam {Number} not_gettable Pokemons not_gettable
    * @apiParam {String} name Pokemons name
    * @apiParam {Number} pokedex_number Pokemons pokedex_number
    * @apiParam {Number} img_name Pokemons img_name
    * @apiParam {Number} evolution_stage Pokemons evolution_stage
    * @apiParam {Number} family_id Pokemons family_id
    * @apiParam {Number} cross_gen Pokemons cross_gen
    * @apiParam {String} type_1 Pokemons type_1
    * @apiParam {String} type_2 Pokemons type_2
    * @apiParam {Number} cp_40 Pokemons cp_40
    * @apiParam {Number} cp_39 Pokemons cp_39
    * @apiExample {curl} Example:
        curl --request POST \
  --url http://localhost:3000/V1/pokemons \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data 'evolved=0&stat_total=290&atk=116%0A&def=96&sta=78%0A&legendary=0&aquireable=1&spawns=1&regional=0&raidable=0&hatchable=5&shiny=0&nest=1&new=0&not_gettable=0&future_evolve=0&row=1000&name=Charmander&pokedex_number=4&img_name=4&generation=1&evolution_stage=1&family_id=2&type_1=fire&type_2=12312&weather_1=Sunny%2Fclear&weather_2=&cp_40=831&cp_39=819'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    {
        "evolved": 0,
        "stat_total": 290,
        "atk": 116,
        "def": 96,
        "sta": 78,
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
        "_id": "5bb0d0cf5b490a760fd03a69",
        "row": "1000",
        "name": "Charmander",
        "pokedex_number": "4",
        "img_name": "4",
        "generation": 1,
        "evolution_stage": 1,
        "family_id": 2,
        "type_1": "fire",
        "type_2": "12312",
        "weather_1": "Sunny/clear",
        "weather_2": "",
        "cp_40": 831,
        "cp_39": 819,
        "__v": 0
    }
    * @apiErrorExample {json} Values required
    *    HTTP/1.1 404 Bad Request
    [
        {
            "location": "params",
            "param": "row",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "name",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "pokedex_number",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "img_name",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "generation",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "evolution_stage",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "evolved",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "family_id",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "stat_total",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "atk",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "def",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "sta",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "legendary",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "aquireable",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "spawns",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "regional",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "raidable",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "hatchable",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "shiny",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "nest",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "new",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "cp_40",
            "msg": "Invalid value"
        },
        {
            "location": "params",
            "param": "cp_39",
            "msg": "Invalid value"
        }
    ]
    * @apiErrorExample {json} Error Pokemons error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
   * @api {get} /api/v1/pokemons Find All Pokemons
   * @apiParam {Number} page Number of page for find optional.
   * @apiParam {Number} limit Number of documentos for find optional.
   * @apiGroup Pokemons
   * @apiVersion 1.0.0
   * @apiExample {curl} Example:
    curl  http://localhost:3000/v1/pokemons
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/x-www-form-urlencoded'
    * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   [
       {
        "docs":[
            {
                "evolved":0,
                "stat_total":403,
                "atk":158,
                "def":129,
                "sta":116,
                "legendary":0,
                "aquireable":1,
                "spawns":1,
                "regional":0,
                "raidable":0,
                "hatchable":0,
                "shiny":0,
                "nest":0,
                "new":0,
                "not_gettable":0,
                "future_evolve":0,
                "_id":"5bb0292a7925a140f64e2171",
                "row":"5",
                "name":"Charmeleon",
                "pokedex_number":"5",
                "img_name":"5",
                "generation":1,
                "evolution_stage":2,
                "family_id":2,
                "cross_gen":0,
                "type_1":"fire",
                "type_2":"",
                "weather_1":"Sunny/clear",
                "weather_2":"",
                "cp_40":1484,
                "cp_39":1462
            },
            {
                "evolved":1,
                "stat_total":556,
                "atk":198,
                "def":198,
                "sta":160,
                "legendary":0,
                "aquireable":1,
                "spawns":1,
                "regional":0,
                "raidable":0,
                "hatchable":0,
                "shiny":0,
                "nest":0,
                "new":0,
                "not_gettable":0,
                "future_evolve":0,
                "_id":"5bb0292a7925a140f64e2172",
                "row":"3",
                "name":"Venusaur",
                "pokedex_number":"3",
                "img_name":"3",
                "generation":1,
                "evolution_stage":3,
                "family_id":1,
                "cross_gen":0,
                "type_1":"grass",
                "type_2":"poison",
                "weather_1":"Sunny/clear",
                "weather_2":"Cloudy",
                "cp_40":2568,
                "cp_39":2531
            },
            {
                "evolved":0,
                "stat_total":290,
                "atk":116,
                "def":96,
                "sta":78,
                "legendary":0,
                "aquireable":1,
                "spawns":1,
                "regional":0,
                "raidable":0,
                "hatchable":5,
                "shiny":0,
                "nest":1,
                "new":0,
                "not_gettable":0,
                "future_evolve":0,
                "_id":"5bb0292a7925a140f64e2173",
                "row":"4",
                "name":"Charmander",
                "pokedex_number":"4",
                "img_name":"4",
                "generation":1,
                "evolution_stage":1,
                "family_id":2,
                "cross_gen":0,
                "type_1":"fire",
                "type_2":"",
                "weather_1":"Sunny/clear",
                "weather_2":"",
                "cp_40":831,
                "cp_39":819
            },
            {
                "evolved":1,
                "stat_total":555,
                "atk":223,
                "def":176,
                "sta":156,
                "legendary":0,
                "aquireable":1,
                "spawns":1,
                "regional":0,
                "raidable":0,
                "hatchable":0,
                "shiny":0,
                "nest":0,
                "new":0,
                "not_gettable":0,
                "future_evolve":0,
                "_id":"5bb0292a7925a140f64e2174",
                "row":"6",
                "name":"Charizard",
                "pokedex_number":"6",
                "img_name":"6",
                "generation":1,
                "evolution_stage":3,
                "family_id":2,
                "cross_gen":0,
                "type_1":"fire",
                "type_2":"flying",
                "weather_1":"Sunny/clear",
                "weather_2":"Windy",
                "cp_40":2686,
                "cp_39":2648
            },
            {
                "evolved":0,
                "stat_total":304,
                "atk":94,
                "def":122,
                "sta":88,
                "legendary":0,
                "aquireable":1,
                "spawns":1,
                "regional":0,
                "raidable":0,
                "hatchable":5,
                "shiny":0,
                "nest":1,
                "new":0,
                "not_gettable":0,
                "future_evolve":0,
                "_id":"5bb0292a7925a140f64e2175",
                "row":"7",
                "name":"Squirtle",
                "pokedex_number":"7",
                "img_name":"7",
                "generation":1,
                "evolution_stage":1,
                "family_id":3,
                "cross_gen":0,
                "type_1":"water",
                "type_2":"",
                "weather_1":"Rainy",
                "weather_2":"",
                "cp_40":808,
                "cp_39":797
            },
            {
                "evolved":0,
                "stat_total":399,
                "atk":126,
                "def":155,
                "sta":118,
                "legendary":0,
                "aquireable":1,
                "spawns":1,
                "regional":0,
                "raidable":0,
                "hatchable":0,
                "shiny":0,
                "nest":0,
                "new":0,
                "not_gettable":0,
                "future_evolve":0,
                "_id":"5bb0292a7925a140f64e2176",
                "row":"8",
                "name":"Wartortle",
                "pokedex_number":"8",
                "img_name":"8",
                "generation":1,
                "evolution_stage":2,
                "family_id":3,
                "cross_gen":0,
                "type_1":"water",
                "type_2":"",
                "weather_1":"Rainy",
                "weather_2":"",
                "cp_40":1324,
                "cp_39":1305
            },
            {
                "evolved":1,
                "stat_total":539,
                "atk":171,
                "def":210,
                "sta":158,
                "legendary":0,
                "aquireable":1,
                "spawns":1,
                "regional":0,
                "raidable":0,
                "hatchable":0,
                "shiny":0,
                "nest":0,
                "new":0,
                "not_gettable":0,
                "future_evolve":0,
                "_id":"5bb0292a7925a140f64e2177",
                "row":"9",
                "name":"Blastoise",
                "pokedex_number":"9",
                "img_name":"9",
                "generation":1,
                "evolution_stage":3,
                "family_id":3,
                "cross_gen":0,
                "type_1":"water",
                "type_2":"",
                "weather_1":"Rainy",
                "weather_2":"",
                "cp_40":2291,
                "cp_39":2259
            },
            {
                "evolved":0,
                "stat_total":207,
                "atk":55,
                "def":62,
                "sta":90,
                "legendary":0,
                "aquireable":1,
                "spawns":1,
                "regional":0,
                "raidable":0,
                "hatchable":0,
                "shiny":0,
                "nest":1,
                "new":0,
                "not_gettable":0,
                "future_evolve":0,
                "_id":"5bb0292a7925a140f64e2178",
                "row":"10",
                "name":"Caterpie",
                "pokedex_number":"10",
                "img_name":"10",
                "generation":1,
                "evolution_stage":1,
                "family_id":4,
                "cross_gen":0,
                "type_1":"bug",
                "type_2":"",
                "weather_1":"Rainy",
                "weather_2":"",
                "cp_40":393,
                "cp_39":387
            },
            {
                "evolved":0,
                "stat_total":198,
                "atk":63,
                "def":55,
                "sta":80,
                "legendary":0,
                "aquireable":1,
                "spawns":1,
                "regional":0,
                "raidable":0,
                "hatchable":0,
                "shiny":0,
                "nest":1,
                "new":0,
                "not_gettable":0,
                "future_evolve":0,
                "_id":"5bb0292a7925a140f64e2179",
                "row":"13",
                "name":"Weedle",
                "pokedex_number":"13",
                "img_name":"13",
                "generation":1,
                "evolution_stage":1,
                "family_id":5,
                "cross_gen":0,
                "type_1":"bug",
                "type_2":"poison",
                "weather_1":"Rainy",
                "weather_2":"Cloudy",
                "cp_40":397,
                "cp_39":391
            },
            {
                "evolved":0,
                "stat_total":222,
                "atk":46,
                "def":86,
                "sta":90,
                "legendary":0,
                "aquireable":1,
                "spawns":1,
                "regional":0,
                "raidable":0,
                "hatchable":0,
                "shiny":0,
                "nest":0,
                "new":0,
                "not_gettable":0,
                "future_evolve":0,
                "_id":"5bb0292a7925a140f64e217a",
                "row":"14",
                "name":"Kakuna",
                "pokedex_number":"14",
                "img_name":"14",
                "generation":1,
                "evolution_stage":2,
                "family_id":5,
                "cross_gen":0,
                "type_1":"bug",
                "type_2":"poison",
                "weather_1":"Rainy",
                "weather_2":"Cloudy",
                "cp_40":392,
                "cp_39":386
            }
        ],
        "total":817,
        "limit":10,
        "page":1,
        "pages":82
        }
    ]
   * @apiErrorExample {json} Empty Register
   *    HTTP/1.1 404 Bad Request
   [
        {
            "message": "Não conseguimos retornar o que procura!",
            "title": "Error em Procurar"
        }
    ]
    * @apiErrorExample {json} Parameter not number
   *    HTTP/1.1 404 Bad Request
   [
        {
            "title": "Error",
            "message": "Não foi enviado um número"
        }
    ]
   * @apiErrorExample {json} Find All error
   *    HTTP/1.1 500 Internal Server Error
**/

/**
   * @api {get} /api/v1/pokemons/:_id Find One Pokemons
   * @apiParam {_id} _id Pokemons _id
   * @apiVersion 1.0.0
   * @apiGroup Pokemons
   * @apiExample {curl} Example:
    curl  http://localhost:3000/v1/Pokemons/5bb0292a7925a140f64e2174 \
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/x-www-form-urlencoded'
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
    {
        "evolved":0,
        "stat_total":222,
        "atk":46,
        "def":86,
        "sta":90,
        "legendary":0,
        "aquireable":1,
        "spawns":1,
        "regional":0,
        "raidable":0,
        "hatchable":0,
        "shiny":0,
        "nest":0,
        "new":0,
        "not_gettable":0,
        "future_evolve":0,
        "_id":"5bb0292a7925a140f64e217a",
        "row":"14",
        "name":"Kakuna",
        "pokedex_number":"14",
        "img_name":"14",
        "generation":1,
        "evolution_stage":2,
        "family_id":5,
        "cross_gen":0,
        "type_1":"bug",
        "type_2":"poison",
        "weather_1":"Rainy",
        "weather_2":"Cloudy",
        "cp_40":392,
        "cp_39":386
    }
   * @apiErrorExample {json} Id Invalid
   *    HTTP/1.1 404 Bad Request
   [
        {
            "title":"Error",
            "message":"Error id inválido!"
        }
    ]
   * @apiErrorExample {json} Empty Register
   *    HTTP/1.1 404 Bad Request
   [
        {
            "title": "Error em Procurar",
            "message": "Não conseguimos retornar o que procura!"
        }
    ]
   * @apiErrorExample {json} Find One error
   *    HTTP/1.1 500 Internal Server Error
**/

/**
    * @api {put} /v1/pokemons/:_id Update Pokemons
    * @apiGroup Pokemons
    * @apiVersion 1.0.0
    * @apiParam {_id} _id Pokemons _id
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
        curl -X PUT  http://localhost:3000/v1/pokemons/5bb0292a7925a140f64e2175 \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded' \
        -d 'weather_1=Sunny/clear&lastName=Cloudy'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    [
            {
                "title": "Alterado com sucesso!",
                "message": "Conseguimos alterar o seu registro com sucesso!"
            }
    ]
    * @apiErrorExample {json} Id Invalid
    *    HTTP/1.1 404 Bad Request
    [
        {
            "title": "Id",
            "message": "Id invalido!"
        }
    ]
    * @apiErrorExample {json} Not Success Update
    *    HTTP/1.1 404 Bad Request
    [
        {
            "title": "Error em alterar!",
            "message": "Não foi possivel efetuar atualização, tente novamente!"
        }
    ]
    * @apiErrorExample {json} Error Pokemons error
    *    HTTP/1.1 500 Internal Server Error
**/

/**
    * @api {delete} /api/v1/pokemons/:_id Delete Pokemons
    * @apiGroup Pokemons
    * @apiVersion 1.0.0
    * @apiParam {_id} _id Pokemons _id
    * @apiExample {curl} Example:
        curl -X DELETE  http://localhost:3000/v1/pokemons/5bb0292a7925a140f64e2172 \
        -H 'Cache-Control: no-cache' \
        -H 'Content-Type: application/x-www-form-urlencoded'
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    [
        {
            "title": "Deletado",
            "message": "Deletado com Sucesso!"
        }
    ]
    * @apiErrorExample {json} Id Invalid
    *    HTTP/1.1 404 Bad Request
    [
        {
            "title": "Error",
            "message": "Error id inválido!"
        }
    ]
    * @apiErrorExample {json} Id Invalid
    *    HTTP/1.1 404 Bad Request
    [
        {
            "title": "Error",
            "message": "Não contém o registro!"
        }
    ]
    * @apiErrorExample {json} Delete Pokemons error
    *    HTTP/1.1 500 Internal Server Error
**/
