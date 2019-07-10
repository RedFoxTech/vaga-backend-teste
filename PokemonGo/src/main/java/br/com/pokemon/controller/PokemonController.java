package br.com.pokemon.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	//exemplo: localhost:8080/pokemons/paginado?page=0&size=5
	@GetMapping("/paginado")
	public ResponseEntity<Page<Pokemon>> paginador(@RequestParam Integer page, Integer size){
		if(page == null || size == null) {
			return ResponseEntity.badRequest().build();
		} else {
		Page<Pokemon> paginas = service.paginador(page, size);
		return ResponseEntity.ok().body(paginas);
		}
	}
	
	//exemplo: localhost:8080/pokemons/25
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Pokemon>> listarPorId(@PathVariable Integer id){
		Optional<Pokemon> pokemon = service.listaPorId(id);
		if(!pokemon.isPresent()) {
			return ResponseEntity.noContent().build();
		} else {
		return ResponseEntity.ok().body(pokemon);
		}
		
	}
	
	//exemplo: localhost:8080/pokemons/nome?nome=pikachu
	@GetMapping("/nome")
	public ResponseEntity<List<Pokemon>> buscaPorNome(@RequestParam String nome){
		List<Pokemon> lista = service.buscaPorNome(nome.toLowerCase());
		if(lista.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
		return ResponseEntity.ok().body(lista);
		}
	}
	
	//exemplo: localhost:8080/pokemons/tipo?tipo=fire
	@GetMapping("/tipo")
	public ResponseEntity<List<Pokemon>> buscaPorTipo(@RequestParam String tipo){
		List<Pokemon> lista = service.buscaPorTipo(tipo.toLowerCase());
		if(lista.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
		return ResponseEntity.ok().body(lista);
		}
	}
	
	//exemplo: localhost:8080/pokemons/clima?clima=sunny
	@GetMapping("/clima")
	public ResponseEntity<List<Pokemon>> buscaPorClima(@RequestParam String clima){
		List<Pokemon> lista = service.buscaPorClima(clima.toLowerCase());
		if(lista.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
		return ResponseEntity.ok().body(lista);
		}
	}
}
