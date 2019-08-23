package com.gabrielterriaga.testebackend.resources;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gabrielterriaga.testebackend.domain.Pokemon;
import com.gabrielterriaga.testebackend.dto.PokemonDTO;
import com.gabrielterriaga.testebackend.resources.util.URL;
import com.gabrielterriaga.testebackend.services.PokemonService;

@RestController
@RequestMapping(value = "/pokemons")
public class PokemonResource {

	@Autowired
	private PokemonService service;
	
	//ENDPOINT FIND All
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<PokemonDTO>> findAll(){
	
		List<Pokemon> list = service.findAll(); 
		List<PokemonDTO> listdto = list.stream()
			.map(x -> new PokemonDTO(x))
			.collect(Collectors.toList());
			
		return ResponseEntity.ok().body(listdto);
	}	

	//ENDPOINT FIND BY ID .../pokemons/5d5f1fece4a20728b30e150a
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<PokemonDTO> findById(@PathVariable String id){
		
		Pokemon obj = service.findById(id);
		
		return ResponseEntity.ok().body(new PokemonDTO(obj));
	}
	
	//ENDPOINT SEARCH BY NAME .../pokemons/searchName?name=pikac ou nome inteiro
	@RequestMapping(value = "/searchName", method = RequestMethod.GET)
	public ResponseEntity<List<PokemonDTO>> searchByName(@RequestParam(value = "name", defaultValue = "") String name){
		
		name = URL.decodeParam(name); //decodificar o string da url
		
		List<Pokemon> list = service.searchByName(name); 
		List<PokemonDTO> listdto = list.stream()
			.map(x -> new PokemonDTO(x))
			.collect(Collectors.toList());
		
		return ResponseEntity.ok().body(listdto);
	}
	
	//ENDPOINT SEARCH BY TYPE .../pokemons/searchType?type1=fire&type2=null
	@RequestMapping(value = "/searchType", method = RequestMethod.GET)
	public ResponseEntity<List<PokemonDTO>> searchByType(@RequestParam(value = "type1", defaultValue = "") String type1, @RequestParam(value = "type2", defaultValue = "") String type2){
		
		type1 = URL.decodeParam(type1);//decodificar o string da url
		type2 = URL.decodeParam(type2);
		
		List<Pokemon> list = service.searchByType(type1, type2);
		List<PokemonDTO> listdto = list.stream()
			.map(x -> new PokemonDTO(x))
			.collect(Collectors.toList());
		
		return ResponseEntity.ok().body(listdto);
	}

	//ENDPOINT PAGING .../pokemons/paging?page=1&size=3
	@RequestMapping(value = "/paging")
	public ResponseEntity<Page<Pokemon>> paging(@RequestParam(value = "page") Integer page, @RequestParam(value = "size") Integer size){		
		Page<Pokemon> pages = service.paging(page, size);
	
		return ResponseEntity.ok().body(pages);
	}	
}