export class Pokemon {
  constructor(
    public name: string,
    public id: number,
    public imgId: number,
    public generation: number,
    public evolutionStage: number,
    public evolved: boolean,
    public familyId: number,
    public crossGen: boolean,
    public type1: string,
    public type2: string,
    public weather1: string,
    public weather2: string,
    public status: number,
    public atk: number,
    public def: number,
    public sta: number,
    public legendary: number,
    public aquireable: number,
    public spawns: number,
    public regional: boolean,
    public raidable: number,
    public hatchable: number,
    public shiny: boolean,
    public nest: number,
    public isNew: boolean,
    public notGettable: boolean,
    public futureEvolve: boolean,
    public cp100_40: number,
    public cp100_39: number
  ) {}
}
