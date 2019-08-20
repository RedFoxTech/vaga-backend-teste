package com.gabrielterriaga.testebackend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.gabrielterriaga.testebackend.domain.Pokemon;

@Repository
public interface PokemonRepository extends MongoRepository<Pokemon, String> {

}
