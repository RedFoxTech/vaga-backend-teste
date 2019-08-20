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
	
	public List<Pokemon> findAll(){
		return repo.findAll();
	}
	
	public Pokemon findByRow(String row) {
		Optional<Pokemon> obj = repo.findById(row);
		
		return obj.orElseThrow(() -> new ObjectNotFoundException("Não encontrado"));
	}
	
	
}
