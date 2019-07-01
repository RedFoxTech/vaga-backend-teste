package br.com.pokedex.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties
({"hibernateLazyInitializer", "handler"})

@Entity
@Table(name="POKEMON")
public class Pokedex {
	//Mapeamento das possiveis colunas que serão utilizadas.	
	//O Banco de dados oracle pediu para trocar o nome da primeira coluna "ROW" alterei para "ID"
	
	@Column(name="ID")
	private int Id;
	@Id
	@Column(name="NAME")
	private String name;
	@Column(name="POKEDEX_NUMBER")
	private int pokedex_number;
	@Column(name="IMG_NAME")
	private int img_name;
	@Column(name="GENERATION")
	private int generation;
	@Column(name="TYPE_1")
	private String type_1;
	@Column(name="TYPE_2")
	private String type_2;
	@Column(name="STAT_TOTAL")
	private int stat_total;
	@Column(name="ATK")
	private int atk;
	@Column(name="DEF")
	private int def;
	@Column(name="STA")
	private int sta;
	@Column(name="LEGENDARY")
	private int legendary;
	
	
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPokedex_number() {
		return pokedex_number;
	}
	public void setPokedex_number(int pokedex_number) {
		this.pokedex_number = pokedex_number;
	}
	public int getImg_name() {
		return img_name;
	}
	public void setImg_name(int img_name) {
		this.img_name = img_name;
	}
	public int getGeneration() {
		return generation;
	}
	public void setGeneration(int generation) {
		this.generation = generation;
	}
	public String getType_1() {
		return type_1;
	}
	public void setType_1(String type_1) {
		this.type_1 = type_1;
	}
	public String getType_2() {
		return type_2;
	}
	public void setType_2(String type_2) {
		this.type_2 = type_2;
	}
	public int getStat_total() {
		return stat_total;
	}
	public void setStat_total(int stat_total) {
		this.stat_total = stat_total;
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
	
}
