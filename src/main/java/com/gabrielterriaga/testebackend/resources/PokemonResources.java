package com.gabrielterriaga.testebackend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gabrielterriaga.testebackend.domain.Pokemon;
import com.gabrielterriaga.testebackend.services.PokemonService;

@RestController
@RequestMapping(value = "/pokemons")
public class PokemonResources {

	@Autowired
	private PokemonService service;
	
	//ENDPOINT findAll
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Pokemon>> findAll(){
	
		List<Pokemon> list = service.findAll(); //metodo dentro da classe de servico
		return ResponseEntity.ok().body(list);
	}
}
