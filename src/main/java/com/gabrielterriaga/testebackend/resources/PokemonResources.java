package com.gabrielterriaga.testebackend.resources;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gabrielterriaga.testebackend.domain.Pokemon;

@RestController
@RequestMapping(value = "/pokemons")
public class PokemonResources {

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Pokemon>> findAll(){
		List<Pokemon> list = new ArrayList<>();
		Pokemon bulbasaur = new Pokemon(1, "Bulbasaur",	1,"1",1,1,0,1,0,"grass","poison", "Sunny/clear", "Cloudy", 326,118,118,90,0,1,1,0,0,5,0,1,0,0,0,981,967);
		list.addAll(Arrays.asList(bulbasaur));
		return ResponseEntity.ok().body(list);
	}
}
