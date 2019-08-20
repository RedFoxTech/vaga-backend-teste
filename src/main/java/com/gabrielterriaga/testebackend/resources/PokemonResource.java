package com.gabrielterriaga.testebackend.resources;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gabrielterriaga.testebackend.domain.Pokemon;
import com.gabrielterriaga.testebackend.dto.PokemonDTO;
import com.gabrielterriaga.testebackend.services.PokemonService;

@RestController
@RequestMapping(value = "/pokemons")
public class PokemonResource {

	@Autowired
	private PokemonService service;
	
	//ENDPOINT findAll
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<PokemonDTO>> findAll(){
	
		List<Pokemon> list = service.findAll(); //metodo dentro da classe de servico
		List<PokemonDTO> listdto = list.stream()
		.map(x -> new PokemonDTO(x))
		.collect(Collectors.toList());
		
		return ResponseEntity.ok().body(listdto);
	}	

	//ENDPOINT findByRow
	@RequestMapping(value = "/{row}", method = RequestMethod.GET)
	public ResponseEntity<PokemonDTO> findByRow(@PathVariable String row){
		
		Pokemon obj = service.findByRow(row);
		
		return ResponseEntity.ok().body(new PokemonDTO(obj));
	}
}
