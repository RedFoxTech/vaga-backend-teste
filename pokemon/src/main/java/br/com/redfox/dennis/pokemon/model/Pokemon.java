package br.com.redfox.dennis.pokemon.model;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "POKEMON")
public class Pokemon {

	@Id
	@Column(name = "ID_POKEMON")
	private Long id;

	@Column(name = "NAME")
	private String name;

	@Column(name = "POKEDEX_NUMBER")
	private Integer pokederNumber;

	@Column(name = "IMGNAME")
	private Integer imgname;

	@Column(name = "GENERATION")
	private Integer generation;

	@Column(name = "EVOLUTION_STAGE")
	private Integer evolutionStage;

	@Column(name = "EVOLVED")
	private Integer evolved;

	@Column(name = "FAMILY_ID")
	private Integer familyID;

	@Column(name = "CROSS_GEN")
	private Integer crossGen;

	@ManyToMany
	@JoinTable(name = "POKEMON_TIPE", joinColumns = { @JoinColumn(name = "ID_POKEMON") }, inverseJoinColumns = {
			@JoinColumn(name = "ID_TIPE") })
	private Set<Tipe> tipe;

	@ManyToMany
	@JoinTable(name = "POKEMON_WEATHER", joinColumns = { @JoinColumn(name = "ID_POKEMON") }, inverseJoinColumns = {
			@JoinColumn(name = "ID_WEATHER") })
	private Set<Weather> weather;

	@Column(name = "STAT_TOTAL")
	private Integer statusTotal;

	@Column(name = "ATK")
	private Integer atk;

	@Column(name = "DEF")
	private Integer def;

	@Column(name = "STA")
	private Integer sta;

	@Column(name = "LEGENDARY")
	private Integer legendary;

	@Column(name = "AQUIREABLE")
	private Integer aquireable;

	@Column(name = "SPAWNS")
	private Integer spawns;

	@Column(name = "REGIONAL")
	private Integer regional;

	@Column(name = "RAIDABLE")
	private Integer raidable;

	@Column(name = "SHINY")
	private Integer shiny;

	@Column(name = "NEST")
	private Integer nest;

	@Column(name = "NEW")
	private Integer isNew;

	@Column(name = "NOT_GETTABLE")
	private Integer notGettable;

	@Column(name = "FUTUREEVOLVE")
	private Integer futureEvolve;

	@Column(name = "CP40")
	private Integer cp40;

	@Column(name = "CP39")
	private Integer cp39;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getPokederNumber() {
		return pokederNumber;
	}

	public void setPokederNumber(Integer pokederNumber) {
		this.pokederNumber = pokederNumber;
	}

	public Integer getImgname() {
		return imgname;
	}

	public void setImgname(Integer imgname) {
		this.imgname = imgname;
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

	public Integer getFamilyID() {
		return familyID;
	}

	public void setFamilyID(Integer familyID) {
		this.familyID = familyID;
	}

	public Integer getCrossGen() {
		return crossGen;
	}

	public void setCrossGen(Integer crossGen) {
		this.crossGen = crossGen;
	}

	public Integer getStatusTotal() {
		return statusTotal;
	}
	
	public Set<Tipe> getTipe() {
		return tipe;
	}

	public void setTipe(Set<Tipe> tipe) {
		this.tipe = tipe;
	}

	public Set<Weather> getWeather() {
		return weather;
	}

	public void setWeather(Set<Weather> weather) {
		this.weather = weather;
	}

	public void setStatusTotal(Integer statusTotal) {
		this.statusTotal = statusTotal;
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

	public Integer getAquireable() {
		return aquireable;
	}

	public void setAquireable(Integer aquireable) {
		this.aquireable = aquireable;
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

	public Integer getIsNew() {
		return isNew;
	}

	public void setIsNew(Integer isNew) {
		this.isNew = isNew;
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
