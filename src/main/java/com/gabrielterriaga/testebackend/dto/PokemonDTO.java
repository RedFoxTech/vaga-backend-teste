package com.gabrielterriaga.testebackend.dto;

import java.io.Serializable;

import com.gabrielterriaga.testebackend.domain.Pokemon;

public class PokemonDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String id;
	private Integer row;
	private String name;
	private Integer pokedexNumber;
	private String imgName;
	private Integer generation;
	private String evolutionStage;
	private Integer evolved;
	private Integer familyId;
	private Integer crossGen;
	private String type1;
	private String type2;
	private String weather1;
	private String weather2;
	private Integer statTotal;
	private Integer atk;
	private Integer def;
	private Integer sta;
	private Integer legendary;
	private Integer aquireable;
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
	
	public PokemonDTO() {
		
	}
	
	public PokemonDTO(Pokemon obj) {
		id = obj.getId();
		row = obj.getRow();
		name = obj.getName();
		pokedexNumber = obj.getPokedexNumber();
		imgName = obj.getImgName();
		generation = obj.getGeneration();
		evolutionStage = obj.getEvolutionStage();
		evolved = obj.getEvolved();
		familyId = obj.getFamilyId();
		crossGen = obj.getCrossGen();
		type1 = obj.getType1();
		type2 = obj.getType2();
		weather1 = obj.getWeather1();
		weather2 = obj.getWeather2();
		statTotal = obj.getStatTotal();
		atk = obj.getAtk();
		def = obj.getDef();
		sta = obj.getSta();
		legendary = obj.getLegendary();
		aquireable = obj.getAquireable();
		spawns = obj.getSpawns();
		regional = obj.getRegional();
		raidable = obj.getRaidable();
		hatchable = obj.getHatchable();
		shiny = obj.getShiny();
		nest = obj.getNest();
		nnew = obj.getNnew();
		notGettable = obj.getNotGettable();
		futureEvolve = obj.getFutureEvolve();
		cp40 = obj.getCp40();
		cp39 = obj.getCp39();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	public String getEvolutionStage() {
		return evolutionStage;
	}

	public void setEvolutionStage(String evolutionStage) {
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
		return weather2;
	}

	public void setWather2(String wather2) {
		this.weather2 = wather2;
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
		return aquireable;
	}

	public void setAquirable(Integer aquirable) {
		this.aquireable = aquirable;
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

	
}
