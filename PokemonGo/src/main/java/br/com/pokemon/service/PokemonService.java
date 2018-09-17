package br.com.pokemon.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.pokemon.model.Pokemon;
import br.com.pokemon.repository.PokemonRepository;

@Service
public class PokemonService {

	@Autowired
	private PokemonRepository rep;
	
	public List<Pokemon> listarTodos(){
		return (List<Pokemon>) rep.findAll();
	}
}
