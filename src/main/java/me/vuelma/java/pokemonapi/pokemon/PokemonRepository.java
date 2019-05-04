package me.vuelma.java.pokemonapi.pokemon;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "pokemon")
public interface PokemonRepository extends PagingAndSortingRepository<Pokemon, Long> {


}
