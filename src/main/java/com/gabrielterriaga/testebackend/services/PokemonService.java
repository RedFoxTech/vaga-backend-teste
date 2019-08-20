package com.gabrielterriaga.testebackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gabrielterriaga.testebackend.domain.Pokemon;
import com.gabrielterriaga.testebackend.repository.PokemonRepository;
import com.gabrielterriaga.testebackend.services.exception.ObjectNotFoundException;

@Service
public class PokemonService {

	//Esta classe faz uma dependencia com o banco de dados atraves do UserRepository
	
	@Autowired
	private PokemonRepository repo;
	
	//FIND ALL
	public List<Pokemon> findAll(){
		return repo.findAll();
	}
	
	//FIND BY ROW
	public Pokemon findByRow(String row) {
		Optional<Pokemon> obj = repo.findById(row);
		
		return obj.orElseThrow(() -> new ObjectNotFoundException("Não encontrado"));
	}
	
	//SEARCH BY NAME
	public List<Pokemon> searchByName(String name){
		return repo.searchName(name);
	}
	
	//SEARCH BY TYPE
	public List<Pokemon> searchByType(String type1, String type2){
		return repo.searchType(type1, type2);
	}
}
