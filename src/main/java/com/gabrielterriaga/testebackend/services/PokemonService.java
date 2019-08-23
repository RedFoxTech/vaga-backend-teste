package com.gabrielterriaga.testebackend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.gabrielterriaga.testebackend.domain.Pokemon;
import com.gabrielterriaga.testebackend.dto.PokemonDTO;
import com.gabrielterriaga.testebackend.repository.PokemonPageRepository;
import com.gabrielterriaga.testebackend.repository.PokemonRepository;
import com.gabrielterriaga.testebackend.services.exception.ObjectNotFoundException;

@Service
public class PokemonService {

	//Esta classe faz uma dependencia com o banco de dados atraves do UserRepository
	
	@Autowired
	private PokemonRepository repo;
	
	@Autowired
	private PokemonPageRepository repoPage;
	
	//FIND ALL
	public List<Pokemon> findAll(){
		return repo.findAll();
	}
	
	//FIND BY ID
	public Pokemon findById(String id) {
		Optional<Pokemon> obj = repo.findById(id);
		
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
	
	//PAGING
	public Page<Pokemon> paging(Integer page, Integer size) {
		Pageable pages = PageRequest.of(page, size);

		return repoPage.findAll(pages);
	}
	
		
	//INSTANCIAR A PARTIR DO DTO
	public Pokemon fromDTO(PokemonDTO objDto) {
		return new Pokemon(objDto.getId(),
				objDto.getRow(),
				objDto.getName(),
				objDto.getPokedexNumber(),
				objDto.getImgName(),
				objDto.getGeneration(),
				objDto.getEvolutionStage(),
				objDto.getEvolved(),
				objDto.getFamilyId(),
				objDto.getCrossGen(),
				objDto.getType1(),
				objDto.getType2(),
				objDto.getWeather1(),
				objDto.getWather2(),
				objDto.getStatTotal(),
				objDto.getAtk(),
				objDto.getDef(), 
				objDto.getSta(),
				objDto.getLegendary(),
				objDto.getAquirable(),
				objDto.getSpawns(),
				objDto.getRegional(),
				objDto.getRaidable(),
				objDto.getHatchable(), 
				objDto.getShiny(),
				objDto.getNest(), 
				objDto.getNnew(), 
				objDto.getNotGettable(), 
				objDto.getFutureEvolve(), 
				objDto.getCp40(), 
				objDto.getCp39());
	}
}
