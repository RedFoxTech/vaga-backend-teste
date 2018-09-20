package br.com.redfox.dennis.pokemon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.redfox.dennis.pokemon.filter.PokemonFilter;
import br.com.redfox.dennis.pokemon.model.Pokemon;
import br.com.redfox.dennis.pokemon.service.PokemonService;


@RestController
@RequestMapping("pokemon/api/v1")
public class PokemonController {
	
	
	@Autowired
	private PokemonService pokemonService;

	@GetMapping("/id/{page}")
	public ResponseEntity<Page<Pokemon>> listById(@PathVariable(value = "page") int page) {
	    return ResponseEntity.ok(pokemonService.ListById(page));
	}
	
	@GetMapping("/name/{page}")
	public ResponseEntity<Page<Pokemon>> listByName(@PathVariable(value = "page") int page) {
	    return ResponseEntity.ok(pokemonService.ListByName(page));
	}
	
	@GetMapping("/statusTotal/{page}")
	public ResponseEntity<Page<Pokemon>> listByStatus(@PathVariable(value = "page") int page) {
	    return ResponseEntity.ok(pokemonService.ListByStatusTotal(page));
	}

	@GetMapping("/filter")
	public ResponseEntity<Page<Pokemon>> listByStatus(PokemonFilter filter) {
	    return ResponseEntity.ok(pokemonService.findByFilter(filter));
	}

	
}
