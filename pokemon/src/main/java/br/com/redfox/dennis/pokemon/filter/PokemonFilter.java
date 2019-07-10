package br.com.redfox.dennis.pokemon.filter;

import br.com.redfox.dennis.pokemon.model.Tipe;
import br.com.redfox.dennis.pokemon.model.Weather;

public class PokemonFilter {

	private Long id;
	private String name;
	private Tipe tipe;
	private Weather weather;
	private Integer fromAtk;
	private Integer fromDef;
	private Integer fromSta;
	private Integer evolutionState;
	private Integer haveNest;
	private int PageSize;
	private int actualPage;
	
	public int getPageSize() {
		return PageSize;
	}
	public void setPageSize(int pageSize) {
		PageSize = pageSize;
	}
	public int getActualPage() {
		return actualPage;
	}
	public void setActualPage(int actualPage) {
		this.actualPage = actualPage;
	}
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
	public Tipe getTipe() {
		return tipe;
	}
	public void setTipe(Tipe tipe) {
		this.tipe = tipe;
	}
	public Weather getWeather() {
		return weather;
	}
	public void setWeather(Weather weather) {
		this.weather = weather;
	}
	public Integer getFromAtk() {
		return fromAtk;
	}
	public void setFromAtk(Integer fromAtk) {
		this.fromAtk = fromAtk;
	}
	public Integer getFromDef() {
		return fromDef;
	}
	public void setFromDef(Integer fromDef) {
		this.fromDef = fromDef;
	}
	public Integer getFromSta() {
		return fromSta;
	}
	public void setFromSta(Integer fromSta) {
		this.fromSta = fromSta;
	}
	public Integer getEvolutionState() {
		return evolutionState;
	}
	public void setEvolutionState(Integer evolutionState) {
		this.evolutionState = evolutionState;
	}
	public Integer getHaveNest() {
		return haveNest;
	}
	public void setHaveNest(Integer haveNest) {
		this.haveNest = haveNest;
	}
	
	
	
	
}
