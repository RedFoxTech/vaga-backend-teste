package com.gabrielterriaga.testebackend.resources;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
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
	
		List<Pokemon> list = service.findAll(); //metodo dentro da classe de servico
		List<PokemonDTO> listdto = list.stream()
		.map(x -> new PokemonDTO(x))
		.collect(Collectors.toList());
		
		return ResponseEntity.ok().body(listdto);
	}	

	//ENDPOINT FIND BY ROW
	@RequestMapping(value = "/{row}", method = RequestMethod.GET)
	public ResponseEntity<PokemonDTO> findByRow(@PathVariable String row){
		
		Pokemon obj = service.findByRow(row);
		
		return ResponseEntity.ok().body(new PokemonDTO(obj));
	}
	
	//ENDPOINT SEARCH BY NAME
	@RequestMapping(value = "/searchName", method = RequestMethod.GET)
	public ResponseEntity<List<Pokemon>> searchByName(@RequestParam(value = "name", defaultValue = "") String name){
		
		name = URL.decodeParam(name); //decodificar o string da url
		List<Pokemon> list = service.searchByName(name);
		
		return ResponseEntity.ok().body(list);
	}
	
	//ENDPOINT SEARCH BY TYPE
	@RequestMapping(value = "/searchType", method = RequestMethod.GET)
	public ResponseEntity<List<Pokemon>> searchByType(@RequestParam(value = "type1", defaultValue = "") String type1,
			@RequestParam(value = "type2", defaultValue = "") String type2){
		
		type1 = URL.decodeParam(type1);//decodificar o string da url
		type2 = URL.decodeParam(type2);
		
		List<Pokemon> list = service.searchByType(type1, type2);
		
		return ResponseEntity.ok().body(list);
	}
}
