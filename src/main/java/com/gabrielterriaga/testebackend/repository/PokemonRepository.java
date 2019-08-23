package com.gabrielterriaga.testebackend.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.gabrielterriaga.testebackend.domain.Pokemon;

@Repository
public interface PokemonRepository extends MongoRepository<Pokemon, String> {

	@Query("{ 'name': { $regex: ?0, $options: 'i' } }")
	List<Pokemon> searchName(String text);

	@Query("{ 'type1': { $regex: ?0, $options: 'i'} }, { 'type2': { $regex: ?1, $options: 'i'} }")
	List<Pokemon> searchType(String type1, String type2);
}
