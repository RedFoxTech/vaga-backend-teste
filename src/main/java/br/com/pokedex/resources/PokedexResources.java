package br.com.pokedex.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import br.com.pokedex.model.Pokedex;
import br.com.pokedex.repository.PokedexRepository;


@RestController
public class PokedexResources {
   @Autowired      
	private PokedexRepository er;	
   //Criação das requisições feitas ao banco.
   
  //GET POKEMON 
   @RequestMapping(value= {"/api/pokemon"}, method = RequestMethod.GET)
	public ResponseEntity<?> obterPokemon()
	{
		List<Pokedex> pokedex;
		pokedex = er.findAll();
		if (pokedex == null || pokedex.size() == 0)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(pokedex);
		return ResponseEntity.status(HttpStatus.OK).body(pokedex);
	}
	
   
   //GET PELO POKEMON NOME
	@RequestMapping(value= {"/api/pokemon/{npokedex}"}, method = RequestMethod.GET)
	public ResponseEntity<?> obterPokemonNome(@PathVariable("npokedex") String n )
	{
		Optional<Pokedex> pokedex = er.findById(n);
		if (pokedex == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(pokedex);
		
		
		return ResponseEntity.status(HttpStatus.OK).body(pokedex);
	}
	
	
	
	
}
