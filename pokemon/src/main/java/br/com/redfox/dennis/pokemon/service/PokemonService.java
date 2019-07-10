package br.com.redfox.dennis.pokemon.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.com.redfox.dennis.pokemon.filter.PokemonFilter;
import br.com.redfox.dennis.pokemon.model.Pokemon;
import br.com.redfox.dennis.pokemon.repository.PokemonRepository;

import java.util.Arrays;
import java.util.List;

@Service
public class PokemonService {

	@Autowired
	private PokemonRepository pokemonRepository;

	@Transactional
	public Page<Pokemon> findByFilter(PokemonFilter filter) {
		PageRequest pages = new PageRequest(filter.getActualPage(), 10, new Sort(Sort.Direction.fromString("ASC"), "id"));
		return pokemonRepository.findByFilter(pages, filter.getId(), filter.getName(), filter.getTipe().getId(),
				filter.getWeather().getId(), filter.getFromAtk(), filter.getFromDef(), filter.getFromSta(),
				filter.getEvolutionState(), filter.getHaveNest());
	
	}
	

	public Page<Pokemon> ListById(int page){
		PageRequest pages = new PageRequest(page, 10, new Sort(Sort.Direction.fromString("ASC"), "id"));
		return findPaginable(pages);
		
	}
	

	public Page<Pokemon> ListByName(int page){
		PageRequest pages = new PageRequest(page, 10, new Sort(Sort.Direction.fromString("ASC"), "name"));
		return findPaginable(pages);
	}
	

	public Page<Pokemon> ListByStatusTotal(int page){
		PageRequest pages = new PageRequest(page, 2, new Sort(Sort.Direction.fromString("ASC"), "statusTotal"));
		return findPaginable(pages);
	}

	@Transactional
	public Page<Pokemon> findPaginable(PageRequest pag) {
		return  pokemonRepository.findAll(pag);
	}

}
