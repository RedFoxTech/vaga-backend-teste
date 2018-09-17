package br.com.pokemon.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.pokemon.model.Pokemon;

@Repository
public interface PokemonPage extends PagingAndSortingRepository<Pokemon, Integer> {

}
