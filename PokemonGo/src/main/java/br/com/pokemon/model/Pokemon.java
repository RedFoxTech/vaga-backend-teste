package br.com.pokemon.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Pokemon implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@NotBlank
	private String name;
	private int pokedexNumber;
	private String imgName;
	private int generation;
	private String evolutionStage;
	private int evolved;
	private int familyId;
	private int crossGen;
	private String type1;
	private String type2;
	private String weather1;
	private String weather2;
	private int statTotal;
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
	private int isNew;
	private int notGettable;
	private int futureEvolve;
	private int cp40;
	private int cp39;
	
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
	public int getPokedexNumber() {
		return pokedexNumber;
	}
	public void setPokedexNumber(int pokedexNumber) {
		this.pokedexNumber = pokedexNumber;
	}
	public String getImgName() {
		return imgName;
	}
	public void setImgName(String imgName) {
		this.imgName = imgName;
	}
	public int getGeneration() {
		return generation;
	}
	public void setGeneration(int generation) {
		this.generation = generation;
	}
	public String getEvolutionStage() {
		return evolutionStage;
	}
	public void setEvolutionStage(String evolutionStage) {
		this.evolutionStage = evolutionStage;
	}
	public int getEvolved() {
		return evolved;
	}
	public void setEvolved(int evolved) {
		this.evolved = evolved;
	}
	public int getFamilyId() {
		return familyId;
	}
	public void setFamilyId(int familyId) {
		this.familyId = familyId;
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
	public int getStatTotal() {
		return statTotal;
	}
	public void setStatTotal(int statTotal) {
		this.statTotal = statTotal;
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
	public void setSpawns(int spaws) {
		this.spawns = spaws;
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
	public void setShiny(int shinny) {
		this.shiny = shinny;
	}
	public int getNest() {
		return nest;
	}
	public void setNest(int nest) {
		this.nest = nest;
	}
	public int getIsNew() {
		return isNew;
	}
	public void setIsNew(int isNew) {
		this.isNew = isNew;
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + aquireable;
		result = prime * result + atk;
		result = prime * result + cp39;
		result = prime * result + cp40;
		result = prime * result + crossGen;
		result = prime * result + def;
		result = prime * result + ((evolutionStage == null) ? 0 : evolutionStage.hashCode());
		result = prime * result + evolved;
		result = prime * result + familyId;
		result = prime * result + futureEvolve;
		result = prime * result + generation;
		result = prime * result + hatchable;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((imgName == null) ? 0 : imgName.hashCode());
		result = prime * result + isNew;
		result = prime * result + legendary;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + nest;
		result = prime * result + notGettable;
		result = prime * result + pokedexNumber;
		result = prime * result + raidable;
		result = prime * result + regional;
		result = prime * result + shiny;
		result = prime * result + spawns;
		result = prime * result + sta;
		result = prime * result + statTotal;
		result = prime * result + ((type1 == null) ? 0 : type1.hashCode());
		result = prime * result + ((type2 == null) ? 0 : type2.hashCode());
		result = prime * result + ((weather1 == null) ? 0 : weather1.hashCode());
		result = prime * result + ((weather2 == null) ? 0 : weather2.hashCode());
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
		if (aquireable != other.aquireable)
			return false;
		if (atk != other.atk)
			return false;
		if (cp39 != other.cp39)
			return false;
		if (cp40 != other.cp40)
			return false;
		if (crossGen != other.crossGen)
			return false;
		if (def != other.def)
			return false;
		if (evolutionStage == null) {
			if (other.evolutionStage != null)
				return false;
		} else if (!evolutionStage.equals(other.evolutionStage))
			return false;
		if (evolved != other.evolved)
			return false;
		if (familyId != other.familyId)
			return false;
		if (futureEvolve != other.futureEvolve)
			return false;
		if (generation != other.generation)
			return false;
		if (hatchable != other.hatchable)
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (imgName == null) {
			if (other.imgName != null)
				return false;
		} else if (!imgName.equals(other.imgName))
			return false;
		if (isNew != other.isNew)
			return false;
		if (legendary != other.legendary)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (nest != other.nest)
			return false;
		if (notGettable != other.notGettable)
			return false;
		if (pokedexNumber != other.pokedexNumber)
			return false;
		if (raidable != other.raidable)
			return false;
		if (regional != other.regional)
			return false;
		if (shiny != other.shiny)
			return false;
		if (spawns != other.spawns)
			return false;
		if (sta != other.sta)
			return false;
		if (statTotal != other.statTotal)
			return false;
		if (type1 == null) {
			if (other.type1 != null)
				return false;
		} else if (!type1.equals(other.type1))
			return false;
		if (type2 == null) {
			if (other.type2 != null)
				return false;
		} else if (!type2.equals(other.type2))
			return false;
		if (weather1 == null) {
			if (other.weather1 != null)
				return false;
		} else if (!weather1.equals(other.weather1))
			return false;
		if (weather2 == null) {
			if (other.weather2 != null)
				return false;
		} else if (!weather2.equals(other.weather2))
			return false;
		return true;
	}
}