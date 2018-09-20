package br.com.redfox.dennis.pokemon.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import br.com.redfox.dennis.pokemon.filter.Pages;
import br.com.redfox.dennis.pokemon.filter.PokemonFilter;
import br.com.redfox.dennis.pokemon.model.Pokemon;
import br.com.redfox.dennis.pokemon.repository.PokemonRepository;

@Service
public class PokemonService {

	@Autowired
	private PokemonRepository pokemonRepository;

	@Transactional
	public Page<Pokemon> findByFilter(PokemonFilter filter) {
		Pages pag = new Pages(filter.getActualPage(), filter.getPageSize());
		return pokemonRepository.findByFilter(pag, filter.getId(), filter.getName(), filter.getTipe().getId(),
				filter.getWeather().getId(), filter.getFromAtk(), filter.getFromDef(), filter.getFromSta(),
				filter.getEvolutionState(), filter.getHaveNest());
	
	}
	
	@Transactional
	public Page<Pokemon> ListById(int page){
		Pages pag = new Pages(page, 0);
		return pokemonRepository.findAllOrderById(pag);
		
	}
	
	@Transactional
	public Page<Pokemon> ListByName(int page){
		Pages pag = new Pages(page, 0);
		return pokemonRepository.findAllOrderByName(pag);
	}
	
	@Transactional
	public Page<Pokemon> ListByStatusTotal(int page){
		Pages pag = new Pages(page, 0);
		return pokemonRepository.findAllOrderBystatusTotal(pag);
	}
	

}
