package com.gabrielterriaga.testebackend.domain;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Pokemon implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
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
	
	public Pokemon() {
		
	}

	public Pokemon(String id, Integer row, String name, Integer pokedexNumber, String imgName, Integer generation,
			String evolutionStage, Integer evolved, Integer familyId, Integer crossGen, String type1, String type2,
			String weather1, String weather2, Integer statTotal, Integer atk, Integer def, Integer sta,
			Integer legendary, Integer aquireable, Integer spawns, Integer regional, Integer raidable,
			Integer hatchable, Integer shiny, Integer nest, Integer nnew, Integer notGettable, Integer futureEvolve,
			Integer cp40, Integer cp39) {
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
		this.weather2 = weather2;
		this.statTotal = statTotal;
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
		this.nnew = nnew;
		this.notGettable = notGettable;
		this.futureEvolve = futureEvolve;
		this.cp40 = cp40;
		this.cp39 = cp39;
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

	public String getWeather2() {
		return weather2;
	}

	public void setWeather2(String weather2) {
		this.weather2 = weather2;
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
		result = prime * result + ((aquireable == null) ? 0 : aquireable.hashCode());
		result = prime * result + ((atk == null) ? 0 : atk.hashCode());
		result = prime * result + ((cp39 == null) ? 0 : cp39.hashCode());
		result = prime * result + ((cp40 == null) ? 0 : cp40.hashCode());
		result = prime * result + ((crossGen == null) ? 0 : crossGen.hashCode());
		result = prime * result + ((def == null) ? 0 : def.hashCode());
		result = prime * result + ((evolutionStage == null) ? 0 : evolutionStage.hashCode());
		result = prime * result + ((evolved == null) ? 0 : evolved.hashCode());
		result = prime * result + ((familyId == null) ? 0 : familyId.hashCode());
		result = prime * result + ((futureEvolve == null) ? 0 : futureEvolve.hashCode());
		result = prime * result + ((generation == null) ? 0 : generation.hashCode());
		result = prime * result + ((hatchable == null) ? 0 : hatchable.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((imgName == null) ? 0 : imgName.hashCode());
		result = prime * result + ((legendary == null) ? 0 : legendary.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((nest == null) ? 0 : nest.hashCode());
		result = prime * result + ((nnew == null) ? 0 : nnew.hashCode());
		result = prime * result + ((notGettable == null) ? 0 : notGettable.hashCode());
		result = prime * result + ((pokedexNumber == null) ? 0 : pokedexNumber.hashCode());
		result = prime * result + ((raidable == null) ? 0 : raidable.hashCode());
		result = prime * result + ((regional == null) ? 0 : regional.hashCode());
		result = prime * result + ((row == null) ? 0 : row.hashCode());
		result = prime * result + ((shiny == null) ? 0 : shiny.hashCode());
		result = prime * result + ((spawns == null) ? 0 : spawns.hashCode());
		result = prime * result + ((sta == null) ? 0 : sta.hashCode());
		result = prime * result + ((statTotal == null) ? 0 : statTotal.hashCode());
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
		if (aquireable == null) {
			if (other.aquireable != null)
				return false;
		} else if (!aquireable.equals(other.aquireable))
			return false;
		if (atk == null) {
			if (other.atk != null)
				return false;
		} else if (!atk.equals(other.atk))
			return false;
		if (cp39 == null) {
			if (other.cp39 != null)
				return false;
		} else if (!cp39.equals(other.cp39))
			return false;
		if (cp40 == null) {
			if (other.cp40 != null)
				return false;
		} else if (!cp40.equals(other.cp40))
			return false;
		if (crossGen == null) {
			if (other.crossGen != null)
				return false;
		} else if (!crossGen.equals(other.crossGen))
			return false;
		if (def == null) {
			if (other.def != null)
				return false;
		} else if (!def.equals(other.def))
			return false;
		if (evolutionStage == null) {
			if (other.evolutionStage != null)
				return false;
		} else if (!evolutionStage.equals(other.evolutionStage))
			return false;
		if (evolved == null) {
			if (other.evolved != null)
				return false;
		} else if (!evolved.equals(other.evolved))
			return false;
		if (familyId == null) {
			if (other.familyId != null)
				return false;
		} else if (!familyId.equals(other.familyId))
			return false;
		if (futureEvolve == null) {
			if (other.futureEvolve != null)
				return false;
		} else if (!futureEvolve.equals(other.futureEvolve))
			return false;
		if (generation == null) {
			if (other.generation != null)
				return false;
		} else if (!generation.equals(other.generation))
			return false;
		if (hatchable == null) {
			if (other.hatchable != null)
				return false;
		} else if (!hatchable.equals(other.hatchable))
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
		if (legendary == null) {
			if (other.legendary != null)
				return false;
		} else if (!legendary.equals(other.legendary))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (nest == null) {
			if (other.nest != null)
				return false;
		} else if (!nest.equals(other.nest))
			return false;
		if (nnew == null) {
			if (other.nnew != null)
				return false;
		} else if (!nnew.equals(other.nnew))
			return false;
		if (notGettable == null) {
			if (other.notGettable != null)
				return false;
		} else if (!notGettable.equals(other.notGettable))
			return false;
		if (pokedexNumber == null) {
			if (other.pokedexNumber != null)
				return false;
		} else if (!pokedexNumber.equals(other.pokedexNumber))
			return false;
		if (raidable == null) {
			if (other.raidable != null)
				return false;
		} else if (!raidable.equals(other.raidable))
			return false;
		if (regional == null) {
			if (other.regional != null)
				return false;
		} else if (!regional.equals(other.regional))
			return false;
		if (row == null) {
			if (other.row != null)
				return false;
		} else if (!row.equals(other.row))
			return false;
		if (shiny == null) {
			if (other.shiny != null)
				return false;
		} else if (!shiny.equals(other.shiny))
			return false;
		if (spawns == null) {
			if (other.spawns != null)
				return false;
		} else if (!spawns.equals(other.spawns))
			return false;
		if (sta == null) {
			if (other.sta != null)
				return false;
		} else if (!sta.equals(other.sta))
			return false;
		if (statTotal == null) {
			if (other.statTotal != null)
				return false;
		} else if (!statTotal.equals(other.statTotal))
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
