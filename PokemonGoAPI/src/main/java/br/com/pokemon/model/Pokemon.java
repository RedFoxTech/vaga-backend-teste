package br.com.pokemon.model;

import java.io.Serializable;
import java.util.List;

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
	private boolean evolved;
	private int familyId;
	private boolean crossGen;
	private List<Type> type;
	private List<Weather> weather;
	private int statTotal;
	private int atk;
	private int def;
	private int sta;
	private int legendary;
	private int aquireable;
	private boolean spaws;
	private boolean regional;
	private int raidable;
	private int hatchable;
	private boolean shinny;
	private boolean nest;
	private boolean isNew;
	private boolean notGettable;
	private boolean futureEvolve;
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
	public boolean isEvolved() {
		return evolved;
	}
	public void setEvolved(boolean evolved) {
		this.evolved = evolved;
	}
	public int getFamilyId() {
		return familyId;
	}
	public void setFamilyId(int familyId) {
		this.familyId = familyId;
	}
	public boolean isCrossGen() {
		return crossGen;
	}
	public void setCrossGen(boolean crossGen) {
		this.crossGen = crossGen;
	}
	public List<Type> getType() {
		return type;
	}
	public void setType(List<Type> type) {
		this.type = type;
	}
	public List<Weather> getWeather() {
		return weather;
	}
	public void setWeather(List<Weather> weather) {
		this.weather = weather;
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
	public boolean isSpaws() {
		return spaws;
	}
	public void setSpaws(boolean spaws) {
		this.spaws = spaws;
	}
	public boolean isRegional() {
		return regional;
	}
	public void setRegional(boolean regional) {
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
	public boolean isShinny() {
		return shinny;
	}
	public void setShinny(boolean shinny) {
		this.shinny = shinny;
	}
	public boolean isNest() {
		return nest;
	}
	public void setNest(boolean nest) {
		this.nest = nest;
	}
	public boolean isNew() {
		return isNew;
	}
	public void setNew(boolean isNew) {
		this.isNew = isNew;
	}
	public boolean isNotGettable() {
		return notGettable;
	}
	public void setNotGettable(boolean notGettable) {
		this.notGettable = notGettable;
	}
	public boolean isFutureEvolve() {
		return futureEvolve;
	}
	public void setFutureEvolve(boolean futureEvolve) {
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
		result = prime * result + (crossGen ? 1231 : 1237);
		result = prime * result + def;
		result = prime * result + ((evolutionStage == null) ? 0 : evolutionStage.hashCode());
		result = prime * result + (evolved ? 1231 : 1237);
		result = prime * result + familyId;
		result = prime * result + (futureEvolve ? 1231 : 1237);
		result = prime * result + generation;
		result = prime * result + hatchable;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((imgName == null) ? 0 : imgName.hashCode());
		result = prime * result + (isNew ? 1231 : 1237);
		result = prime * result + legendary;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + (nest ? 1231 : 1237);
		result = prime * result + (notGettable ? 1231 : 1237);
		result = prime * result + pokedexNumber;
		result = prime * result + raidable;
		result = prime * result + (regional ? 1231 : 1237);
		result = prime * result + (shinny ? 1231 : 1237);
		result = prime * result + (spaws ? 1231 : 1237);
		result = prime * result + sta;
		result = prime * result + statTotal;
		result = prime * result + ((type == null) ? 0 : type.hashCode());
		result = prime * result + ((weather == null) ? 0 : weather.hashCode());
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
		if (shinny != other.shinny)
			return false;
		if (spaws != other.spaws)
			return false;
		if (sta != other.sta)
			return false;
		if (statTotal != other.statTotal)
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		if (weather == null) {
			if (other.weather != null)
				return false;
		} else if (!weather.equals(other.weather))
			return false;
		return true;
	}
	
}