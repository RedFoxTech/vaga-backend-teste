  -- DEPOIS DE CRIAR AS TABELAS RODE O SCRIPT MIGRATIONS PARA INSERÇÃO DOS POKEMONS!
  -- LEVA EM TORNO DE 3 Minutos PARA INSERIR TODOS POKEMONS
  DROP TABLE IF EXISTS Pokemon;

  CREATE TABLE IF NOT EXISTS Pokemon(
  `Name` VARCHAR(255) NOT NULL,
  Pokedex_number INT,
  Img_name VARCHAR(255) DEFAULT NULL,
  Generation INT,
  Evolution_stage VARCHAR(255) DEFAULT NULL,
  Evolved INT,
  Family_id VARCHAR(255) DEFAULT NULL,
  Cross_gen INT,
  Type_1 VARCHAR(255),
  Type_2 VARCHAR(255) DEFAULT NULL,
  Weather_1 VARCHAR(255),
  Weather_2 VARCHAR(255) DEFAULT NULL, 
  STAT_TOTAL BIGINT,
  ATK BIGINT,
  DEF BIGINT,
  STA BIGINT,
  Legendary INT,
  Aquireable INT ,
  Spawns INT ,
  Regional INT,
  Raidable INT,
  Hatchable INT,
  Shiny INT,
  Nest INT,
  `New` INT,
  Not_gettable INT,
  Future_evolve INT,
  `100_cp_40` INT,
  `100_cp_39` INT
);