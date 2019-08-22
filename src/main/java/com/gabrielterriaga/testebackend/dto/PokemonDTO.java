package com.gabrielterriaga.testebackend.dto;

import java.io.Serializable;

import com.gabrielterriaga.testebackend.domain.Pokemon;

public class PokemonDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
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
		wather2 = obj.getWather2();
		statTotal = obj.getStatTotal();
		atk = obj.getAtk();
		def = obj.getDef();
		sta = obj.getSta();
		legendary = obj.getLegendary();
		aquirable = obj.getAquirable();
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

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "PokemonDTO [id=" + id + ", row=" + row + ", name=" + name + ", pokedexNumber=" + pokedexNumber
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
