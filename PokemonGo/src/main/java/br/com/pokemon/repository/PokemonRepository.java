package br.com.pokemon.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.pokemon.model.Pokemon;

@Repository
public interface PokemonRepository extends CrudRepository<Pokemon, Integer>{

}
