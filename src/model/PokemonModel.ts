
export type TPokemon = {
  Name: string
  'Pokedex Number': number
  'Img name'?: number | string | null
  Generation: number
  'Evolution Stage'?: number | string | null
  Evolved: number
  FamilyID?: number | string | null
  'Cross Gen': number
  'Type 1': string
  'Type 2'?: string | null
  'Weather 1': string
  'Weather 2'?: string | null
  'STAT TOTAL': number 
  ATK: number 
  DEF: number 
  STA: number 
  Legendary: number 
  Aquireable: number 
  Spawns: number 
  Regional: number 
  Raidable: number 
  Hatchable: number 
  Shiny: number 
  Nest: number 
  New: number 
  'Not-Gettable': number 
  'Future Evolve': number 
  '100% CP @ 40': number  
  '100% CP @ 39': number 
}

export type PokemonSQL = {
  Name: string,
  Pokedex_number: number,
  Img_name : number | string | null,
  Generation: number,
  Evolution_stage: number | string | null,
  Evolved: number,
  Family_id: number | string | null,
  Cross_gen: number,
  Type_1: string,
  Type_2: string | null,
  Weather_1: string,
  Weather_2: string | null,
  STAT_TOTAL: number ,
  ATK: number, 
  DEF: number,
  STA: number,
  Legendary: number, 
  Aquireable: number, 
  Spawns: number, 
  Regional: number, 
  Raidable: number, 
  Hatchable: number, 
  Shiny: number, 
  Nest: number, 
  New: number,
  Not_gettable : number, 
  Future_evolve: number, 
  '100_cp_40': number,  
  '100_cp_39': number,
}
