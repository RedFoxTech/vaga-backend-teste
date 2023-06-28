import { BaseDatabase } from "./data/BaseDatabase";
import { TPokemon,PokemonSQL } from "./model/PokemonModel";

// TENDO O ARQUIVO .ENV CONFIGURADO E A TABELA DE POKEMON CRIADA(TABELA SE ENCONTRA NO ARQUIVO pokemonTablem.sql)
// RODE O SCRIPT migrations PARA INSERÃO DOS DADOS
const xlsx = require('xlsx'); // Ler o tipo de arquivo xlsx
const file = "./PokemonGo.xlsx"; // pega a tabela de pokemons
const wb = xlsx.readFile(file); // ler a tabela
const ws = wb.Sheets["Sheet1"]; // acessa essa parte Sheet1
const data = xlsx.utils.sheet_to_json(ws); // transforma em json
// OBS: Essa parte de cima vi em um video no youtube
const pokemons:TPokemon[] = [...data]; 

// Fiz essa funcao MigrationExec para adicionar os pokemons que vinham do arquivo XLSX
 // de forma automatica no mySQL, pensei que seria interessante fazela,
 // caso alquem queira testala, precisara do arquivo .env e os dados do seu mySQL inserido nele, criar a tabela lá  no arquivo pokemonTable, depois só rodar o script 'npm run migrations', 
  // deixei os console.log abaixo de proposito, so pra ter alguma coisa visual enquanto a inserção não é concluida 

export class Migrations extends BaseDatabase {
 
  public migrationExec = async ():Promise<void> => {
    for(let i=0; i < pokemons.length; i++ ){
      let count = i + 1
      const newPoke:PokemonSQL = {
        Name: pokemons[i].Name,
        Pokedex_number: pokemons[i]["Pokedex Number"],
        Img_name: pokemons[i]["Img name"] || null,
        Generation: pokemons[i].Generation,
        Evolution_stage: pokemons[i]["Evolution Stage"] || null,
        Evolved: pokemons[i].Evolved,
        Family_id: pokemons[i].FamilyID  || null,
        Cross_gen: pokemons[i]["Cross Gen"],
        Type_1: pokemons[i]["Type 1"],
        Type_2: pokemons[i]["Type 2"] || null,
        Weather_1: pokemons[i]["Weather 1"],
        Weather_2: pokemons[i]["Weather 2"] || null, 
        STAT_TOTAL: pokemons[i]["STAT TOTAL"],
        ATK: pokemons[i].ATK,
        DEF: pokemons[i].DEF,
        STA: pokemons[i].STA,
        Legendary: pokemons[i].Legendary,
        Aquireable: pokemons[i].Aquireable,
        Spawns: pokemons[i].Spawns,
        Regional: pokemons[i].Regional,
        Raidable: pokemons[i].Raidable,
        Hatchable: pokemons[i].Hatchable,
        Shiny: pokemons[i].Shiny,
        Nest: pokemons[i].Nest,
        New: pokemons[i].New,
        Not_gettable: pokemons[i]["Not-Gettable"],
        Future_evolve: pokemons[i]["Future Evolve"],
        '100_cp_40': pokemons[i]["100% CP @ 40"],
        '100_cp_39': pokemons[i]["100% CP @ 39"]
      }
      console.log(count)
      await Migrations.connection("Pokemon").insert(newPoke)
      .then(() => {
        pokemons[i].Name  === pokemons[pokemons.length -1].Name? 
          console.log("!! -- all pokemons have been added :) -- !!") : {}
      })
      .catch((error: any) => console.log(error.sqlMessage || error.message))
      .finally( async () => pokemons[i].Name  === pokemons[pokemons.length -1].Name?
        Migrations.connection.destroy() : {}
      )
   
    }
  }
};
const migration = new Migrations();
migration.migrationExec()

    
