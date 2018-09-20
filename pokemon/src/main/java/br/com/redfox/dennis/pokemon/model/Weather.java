package br.com.redfox.dennis.pokemon.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "WEATHER")
public class Weather {
	
	@Id
	@Column(name = "ID_WEATHER")
	private Long id;
	
	@Column(name = "DESC_WEATHER")
	private String descricao;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	
}
