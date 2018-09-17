package br.com.pokemon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.pokemon.model.Pokemon;
import br.com.pokemon.service.PokemonService;

@RestController
@RequestMapping("/pokemons")
public class PokemonController {

	@Autowired
	private PokemonService service;
	
	@GetMapping()
	public ResponseEntity<List<Pokemon>> listarTodos(){
		List<Pokemon> lista = service.listarTodos();
		return ResponseEntity.ok().body(lista);
	}
}
