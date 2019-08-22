package com.gabrielterriaga.testebackend.domain;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "pokemon")
public class Pokemon implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	private Integer id;
	private String row;
	private String name;
	private String pokedexNumber;
	private String imgName;
	private String generation;
	private String evolutionStage;
	private String evolved;
	private String familyId;
	private String crossGen;
	private String type1;
	private String type2;
	private String weather1;
	private String wather2;
	private String statTotal;
	private String atk;
	private String def;
	private String sta;
	private String legendary;
	private String aquirable;
	private String spawns;
	private String regional;
	private String raidable;
	private String hatchable;
	private String shiny;
	private String nest;
	private String nnew;
	private String notGettable;
	private String futureEvolve;
	private String cp40;
	private String cp39;
	
	public Pokemon() {
		
	}

	public Pokemon(Integer id, String row, String name, String pokedexNumber, String imgName, String generation,
			String evolutionStage, String evolved, String familyId, String crossGen, String type1, String type2,
			String weather1, String wather2, String statTotal, String atk, String def, String sta,
			String legendary, String aquirable, String spawns, String regional, String raidable, String hatchable,
			String shiny, String nest, String nnew, String notGettable, String futureEvolve, String cp40,
			String cp39 ) {
		super();
		this.id = id;
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

	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRow() {
		return row;
	}

	public void setRow(String row) {
		this.row = row;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPokedexNumber() {
		return pokedexNumber;
	}

	public void setPokedexNumber(String pokedexNumber) {
		this.pokedexNumber = pokedexNumber;
	}

	public String getImgName() {
		return imgName;
	}

	public void setImgName(String imgName) {
		this.imgName = imgName;
	}

	public String getGeneration() {
		return generation;
	}

	public void setGeneration(String generation) {
		this.generation = generation;
	}

	public String getEvolutionStage() {
		return evolutionStage;
	}

	public void setEvolutionStage(String evolutionStage) {
		this.evolutionStage = evolutionStage;
	}

	public String getEvolved() {
		return evolved;
	}

	public void setEvolved(String evolved) {
		this.evolved = evolved;
	}

	public String getFamilyId() {
		return familyId;
	}

	public void setFamilyId(String familyId) {
		this.familyId = familyId;
	}

	public String getCrossGen() {
		return crossGen;
	}

	public void setCrossGen(String crossGen) {
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

	public String getStatTotal() {
		return statTotal;
	}

	public void setStatTotal(String statTotal) {
		this.statTotal = statTotal;
	}

	public String getAtk() {
		return atk;
	}

	public void setAtk(String atk) {
		this.atk = atk;
	}

	public String getDef() {
		return def;
	}

	public void setDef(String def) {
		this.def = def;
	}

	public String getSta() {
		return sta;
	}

	public void setSta(String sta) {
		this.sta = sta;
	}

	public String getLegendary() {
		return legendary;
	}

	public void setLegendary(String legendary) {
		this.legendary = legendary;
	}

	public String getAquirable() {
		return aquirable;
	}

	public void setAquirable(String aquirable) {
		this.aquirable = aquirable;
	}

	public String getSpawns() {
		return spawns;
	}

	public void setSpawns(String spawns) {
		this.spawns = spawns;
	}

	public String getRegional() {
		return regional;
	}

	public void setRegional(String regional) {
		this.regional = regional;
	}

	public String getRaidable() {
		return raidable;
	}

	public void setRaidable(String raidable) {
		this.raidable = raidable;
	}

	public String getHatchable() {
		return hatchable;
	}

	public void setHatchable(String hatchable) {
		this.hatchable = hatchable;
	}

	public String getShiny() {
		return shiny;
	}

	public void setShiny(String shiny) {
		this.shiny = shiny;
	}

	public String getNest() {
		return nest;
	}

	public void setNest(String nest) {
		this.nest = nest;
	}

	public String getNnew() {
		return nnew;
	}

	public void setNnew(String nnew) {
		this.nnew = nnew;
	}

	public String getNotGettable() {
		return notGettable;
	}

	public void setNotGettable(String notGettable) {
		this.notGettable = notGettable;
	}

	public String getFutureEvolve() {
		return futureEvolve;
	}

	public void setFutureEvolve(String futureEvolve) {
		this.futureEvolve = futureEvolve;
	}

	public String getCp40() {
		return cp40;
	}

	public void setCp40(String cp40) {
		this.cp40 = cp40;
	}

	public String getCp39() {
		return cp39;
	}

	public void setCp39(String cp39) {
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

	@Override
	public String toString() {
		return "Pokemon [id=" + id + ", row=" + row + ", name=" + name + ", pokedexNumber=" + pokedexNumber
				+ ", imgName=" + imgName + ", generation=" + generation + ", evolutionStage=" + evolutionStage
				+ ", evolved=" + evolved + ", familyId=" + familyId + ", crossGen=" + crossGen + ", type1=" + type1
				+ ", type2=" + type2 + ", weather1=" + weather1 + ", wather2=" + wather2 + ", statTotal=" + statTotal
				+ ", atk=" + atk + ", def=" + def + ", sta=" + sta + ", legendary=" + legendary + ", aquirable="
				+ aquirable + ", spawns=" + spawns + ", regional=" + regional + ", raidable=" + raidable
				+ ", hatchable=" + hatchable + ", shiny=" + shiny + ", nest=" + nest + ", nnew=" + nnew
				+ ", notGettable=" + notGettable + ", futureEvolve=" + futureEvolve + ", cp40=" + cp40 + ", cp39="
				+ cp39 + "]";
	}	
}
