package br.com.redfoxtech.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pokemon implements Serializable{

	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private int pokeDexNumber;
	private int imgName;
	private  int generation;
	private int evolutionStage;
	private int evolved;
	private int familyID;
	private int crossGen;
	private String type1;
	private String type2;
	private String weather1;
	private String weather2;
	private int staTotal;
	private int atk;
	private int def;
	private int sta;
	private int legendary;
	private int aquireable;
	private int spawns;
	private int regional;
	private int raidable;
	private int hatchable;
	private int shiny;
	private int nest;
	private int news;
	private int notGettable;
	private int futureEvolve;
	private int cp40;
	private int cp39;
		
	public Pokemon() {
	}

	public Pokemon(Integer id, String name, int pokeDexNumber, int imgName, int generation, int evolutionStage,
			int evolved, int familyID, int crossGen, String type1, String type2, String weather1, String weather2,
			int staTotal, int atk, int def, int sta, int legendary, int aquireable, int spawns, int regional,
			int raidable, int hatchable, int shiny, int nest, int news, int notGettable, int futureEvolve, int cp40,
			int cp39) {
		super();
		this.id = id;
		this.name = name;
		this.pokeDexNumber = pokeDexNumber;
		this.imgName = imgName;
		this.generation = generation;
		this.evolutionStage = evolutionStage;
		this.evolved = evolved;
		this.familyID = familyID;
		this.crossGen = crossGen;
		this.type1 = type1;
		this.type2 = type2;
		this.weather1 = weather1;
		this.weather2 = weather2;
		this.staTotal = staTotal;
		this.atk = atk;
		this.def = def;
		this.sta = sta;
		this.legendary = legendary;
		this.aquireable = aquireable;
		this.spawns = spawns;
		this.regional = regional;
		this.raidable = raidable;
		this.hatchable = hatchable;
		this.shiny = shiny;
		this.nest = nest;
		this.news = news;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPokeDexNumber() {
		return pokeDexNumber;
	}

	public void setPokeDexNumber(int pokeDexNumber) {
		this.pokeDexNumber = pokeDexNumber;
	}

	public int getImgName() {
		return imgName;
	}

	public void setImgName(int imgName) {
		this.imgName = imgName;
	}

	public int getGeneration() {
		return generation;
	}

	public void setGeneration(int generation) {
		this.generation = generation;
	}

	public int getEvolutionStage() {
		return evolutionStage;
	}

	public void setEvolutionStage(int evolutionStage) {
		this.evolutionStage = evolutionStage;
	}

	public int getEvolved() {
		return evolved;
	}

	public void setEvolved(int evolved) {
		this.evolved = evolved;
	}

	public int getFamilyID() {
		return familyID;
	}

	public void setFamilyID(int familyID) {
		this.familyID = familyID;
	}

	public int getCrossGen() {
		return crossGen;
	}

	public void setCrossGen(int crossGen) {
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

	public String getWeather2() {
		return weather2;
	}

	public void setWeather2(String weather2) {
		this.weather2 = weather2;
	}

	public int getStaTotal() {
		return staTotal;
	}

	public void setStaTotal(int staTotal) {
		this.staTotal = staTotal;
	}

	public int getAtk() {
		return atk;
	}

	public void setAtk(int atk) {
		this.atk = atk;
	}

	public int getDef() {
		return def;
	}

	public void setDef(int def) {
		this.def = def;
	}

	public int getSta() {
		return sta;
	}

	public void setSta(int sta) {
		this.sta = sta;
	}

	public int getLegendary() {
		return legendary;
	}

	public void setLegendary(int legendary) {
		this.legendary = legendary;
	}

	public int getAquireable() {
		return aquireable;
	}

	public void setAquireable(int aquireable) {
		this.aquireable = aquireable;
	}

	public int getSpawns() {
		return spawns;
	}

	public void setSpawns(int spawns) {
		this.spawns = spawns;
	}

	public int getRegional() {
		return regional;
	}

	public void setRegional(int regional) {
		this.regional = regional;
	}

	public int getRaidable() {
		return raidable;
	}

	public void setRaidable(int raidable) {
		this.raidable = raidable;
	}

	public int getHatchable() {
		return hatchable;
	}

	public void setHatchable(int hatchable) {
		this.hatchable = hatchable;
	}

	public int getShiny() {
		return shiny;
	}

	public void setShiny(int shiny) {
		this.shiny = shiny;
	}

	public int getNest() {
		return nest;
	}

	public void setNest(int nest) {
		this.nest = nest;
	}

	public int getNews() {
		return news;
	}

	public void setNews(int news) {
		this.news = news;
	}

	public int getNotGettable() {
		return notGettable;
	}

	public void setNotGettable(int notGettable) {
		this.notGettable = notGettable;
	}

	public int getFutureEvolve() {
		return futureEvolve;
	}

	public void setFutureEvolve(int futureEvolve) {
		this.futureEvolve = futureEvolve;
	}

	public int getCp40() {
		return cp40;
	}

	public void setCp40(int cp40) {
		this.cp40 = cp40;
	}

	public int getCp39() {
		return cp39;
	}

	public void setCp39(int cp39) {
		this.cp39 = cp39;
	}
	
	
	
	
}
