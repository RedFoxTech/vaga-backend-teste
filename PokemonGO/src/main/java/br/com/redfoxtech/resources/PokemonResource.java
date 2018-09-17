package br.com.redfoxtech.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.redfoxtech.domain.Pokemon;
import br.com.redfoxtech.repositories.PokemonRepository;
import br.com.redfoxtech.services.PokemonService;

@RestController
@RequestMapping(value = "/pokemons")
public class PokemonResource {

	@Autowired
	private PokemonService service;
	
	@Autowired
	private PokemonRepository repo;
	
	/*
	 * Listagem de Todos os Pokemons
	 * Requisição : /pokemons
	 */
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Pokemon>> listing(){
		List<Pokemon> list = service.findAll();
		
		return ResponseEntity.ok().body(list);
	}
	
	/*
	 * Busca por ID do Pokemon
	 * Requisição : /pokemons/VALOR
	 */
	@RequestMapping(value = "/{id}" , method = RequestMethod.GET)
	public ResponseEntity<Pokemon>findById(@PathVariable Integer id){
		Pokemon obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	
	/*
	 * Paginação de Pokemons
	 * Requisição : /pokemons/page?page=VALOR&linesPerPage=VALOR&orderBy=VALOR&direction=VALOR
	 */
	@RequestMapping(value = "/page" , method = RequestMethod.GET)
	public ResponseEntity<Page<Pokemon>> findPage(
			@RequestParam(value = "page" , defaultValue = "0") Integer page, 
			@RequestParam(value = "linesPerPage" , defaultValue = "24") Integer linesPerPage, 
			@RequestParam(value = "orderBy" , defaultValue = "name")	String orderBy, 
			@RequestParam(value = "direction" , defaultValue = "ASC")	String direction){
		Page<Pokemon> pokemons = service.findPage(page, linesPerPage, orderBy, direction);
		
		return ResponseEntity.ok().body(pokemons);
	}
	
	/*
	 * Filtro por nome do Pokemon.
	 * Requisição : /pokemons/filter?name=VALOR
	 */
	@RequestMapping(value = "/filter", method = RequestMethod.GET)
	public ResponseEntity<List<Pokemon>> filterByName(String name){
		List<Pokemon> pokemons = repo.findPokemonByName(name);
		
		return ResponseEntity.ok().body(pokemons);
	}
}
