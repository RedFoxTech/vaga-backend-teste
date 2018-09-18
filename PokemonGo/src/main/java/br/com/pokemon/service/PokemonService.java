package br.com.pokemon.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.pokemon.model.Pokemon;
import br.com.pokemon.repository.PokemonPage;
import br.com.pokemon.repository.PokemonRepository;

@Service
public class PokemonService {

	@Autowired
	private PokemonRepository rep;
	
	@Autowired
	private PokemonPage repPage;
	
	public List<Pokemon> listarTodos(){
		return (List<Pokemon>) rep.findAll();
	}
	
	public Page<Pokemon> paginador(Integer page, Integer size) {
		Pageable pageable = PageRequest.of(page, size);
		return repPage.findAll(pageable);
	}
	
	public Optional<Pokemon> listaPorId(Integer id) {
		return rep.findById(id);
	}
	
	public List<Pokemon> buscaPorNome(String nome){
		return rep.findByPokemonName(nome);
	}
	
	public List<Pokemon> buscaPorTipo(String tipo){
		return rep.findByPokemonType(tipo);
	}
	
	public List<Pokemon> buscaPorClima(String clima){
		return rep.findByPokemonWeather(clima);
	}
}

