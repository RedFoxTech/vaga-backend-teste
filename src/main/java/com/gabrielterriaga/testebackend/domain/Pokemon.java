package com.gabrielterriaga.testebackend.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "pokemon")
public class Pokemon {

	@Id
	private Integer row;
	private String name;
	private Integer pokedexNumber;
	private String imgName;
	private Integer generation;
	private Integer evolutionStage;
	private Integer evolved;
	private Integer familyId;
	private Integer crossGen;
	private String type1;
	private String type2;
	private String weather1;
	private String wather2;
	private Integer statTotal;
	private Integer atk;
	private Integer def;
	private Integer sta;
	private Integer legendary;
	private Integer aquirable;
	private Integer spawns;
	private Integer regional;
	private Integer raidable;
	private Integer hatchable;
	private Integer shiny;
	private Integer nest;
	private Integer nnew;
	private Integer notGettable;
	private Integer futureEvolve;
	private Integer cp40;
	private Integer cp39;
	
	public Pokemon() {
		
	}

	public Pokemon(Integer row, String name, Integer pokedexNumber, String imgName, Integer generation,
			Integer evolutionStage, Integer evolved, Integer familyId, Integer crossGen, String type1, String type2,
			String weather1, String wather2, Integer statTotal, Integer atk, Integer def, Integer sta,
			Integer legendary, Integer aquirable, Integer spawns, Integer regional, Integer raidable, Integer hatchable,
			Integer shiny, Integer nest, Integer nnew, Integer notGettable, Integer futureEvolve, Integer cp40,
			Integer cp39 ) {
		super();
		this.row = row;
		this.name = name;
		this.pokedexNumber = pokedexNumber;
		this.imgName = imgName;
		this.generation = generation;
		this.evolutionStage = evolutionStage;
		this.evolved = evolved;
		this.familyId = familyId;
		this.crossGen = crossGen;
		this.type1 = type1;
		this.type2 = type2;
		this.weather1 = weather1;
		this.wather2 = wather2;
		this.statTotal = statTotal;
		this.atk = atk;
		this.def = def;
		this.sta = sta;
		this.legendary = legendary;
		this.aquirable = aquirable;
		this.spawns = spawns;
		this.regional = regional;
		this.raidable = raidable;
		this.hatchable = hatchable;
		this.shiny = shiny;
		this.nest = nest;
		this.nnew = nnew;
		this.notGettable = notGettable;
		this.futureEvolve = futureEvolve;
		this.cp40 = cp40;
		this.cp39 = cp39;
	}

	public Integer getRow() {
		return row;
	}

	public void setRow(Integer row) {
		this.row = row;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getPokedexNumber() {
		return pokedexNumber;
	}

	public void setPokedexNumber(Integer pokedexNumber) {
		this.pokedexNumber = pokedexNumber;
	}

	public String getImgName() {
		return imgName;
	}

	public void setImgName(String imgName) {
		this.imgName = imgName;
	}

	public Integer getGeneration() {
		return generation;
	}

	public void setGeneration(Integer generation) {
		this.generation = generation;
	}

	public Integer getEvolutionStage() {
		return evolutionStage;
	}

	public void setEvolutionStage(Integer evolutionStage) {
		this.evolutionStage = evolutionStage;
	}

	public Integer getEvolved() {
		return evolved;
	}

	public void setEvolved(Integer evolved) {
		this.evolved = evolved;
	}

	public Integer getFamilyId() {
		return familyId;
	}

	public void setFamilyId(Integer familyId) {
		this.familyId = familyId;
	}

	public Integer getCrossGen() {
		return crossGen;
	}

	public void setCrossGen(Integer crossGen) {
		this.crossGen = crossGen;
	}

	public String getType1() {
		return type1;
	}

	public void setType1(String type1) {
		this.type1 = type1;
	}

	public String getType2() {
		return type2;
	}

	public void setType2(String type2) {
		this.type2 = type2;
	}

	public String getWeather1() {
		return weather1;
	}

	public void setWeather1(String weather1) {
		this.weather1 = weather1;
	}

	public String getWather2() {
		return wather2;
	}

	public void setWather2(String wather2) {
		this.wather2 = wather2;
	}

	public Integer getStatTotal() {
		return statTotal;
	}

	public void setStatTotal(Integer statTotal) {
		this.statTotal = statTotal;
	}

	public Integer getAtk() {
		return atk;
	}

	public void setAtk(Integer atk) {
		this.atk = atk;
	}

	public Integer getDef() {
		return def;
	}

	public void setDef(Integer def) {
		this.def = def;
	}

	public Integer getSta() {
		return sta;
	}

	public void setSta(Integer sta) {
		this.sta = sta;
	}

	public Integer getLegendary() {
		return legendary;
	}

	public void setLegendary(Integer legendary) {
		this.legendary = legendary;
	}

	public Integer getAquirable() {
		return aquirable;
	}

	public void setAquirable(Integer aquirable) {
		this.aquirable = aquirable;
	}

	public Integer getSpawns() {
		return spawns;
	}

	public void setSpawns(Integer spawns) {
		this.spawns = spawns;
	}

	public Integer getRegional() {
		return regional;
	}

	public void setRegional(Integer regional) {
		this.regional = regional;
	}

	public Integer getRaidable() {
		return raidable;
	}

	public void setRaidable(Integer raidable) {
		this.raidable = raidable;
	}

	public Integer getHatchable() {
		return hatchable;
	}

	public void setHatchable(Integer hatchable) {
		this.hatchable = hatchable;
	}

	public Integer getShiny() {
		return shiny;
	}

	public void setShiny(Integer shiny) {
		this.shiny = shiny;
	}

	public Integer getNest() {
		return nest;
	}

	public void setNest(Integer nest) {
		this.nest = nest;
	}

	public Integer getNnew() {
		return nnew;
	}

	public void setNnew(Integer nnew) {
		this.nnew = nnew;
	}

	public Integer getNotGettable() {
		return notGettable;
	}

	public void setNotGettable(Integer notGettable) {
		this.notGettable = notGettable;
	}

	public Integer getFutureEvolve() {
		return futureEvolve;
	}

	public void setFutureEvolve(Integer futureEvolve) {
		this.futureEvolve = futureEvolve;
	}

	public Integer getCp40() {
		return cp40;
	}

	public void setCp40(Integer cp40) {
		this.cp40 = cp40;
	}

	public Integer getCp39() {
		return cp39;
	}

	public void setCp39(Integer cp39) {
		this.cp39 = cp39;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((row == null) ? 0 : row.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pokemon other = (Pokemon) obj;
		if (row == null) {
			if (other.row != null)
				return false;
		} else if (!row.equals(other.row))
			return false;
		return true;
	}
}
