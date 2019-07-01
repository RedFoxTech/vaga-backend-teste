package br.com.pokedex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.pokedex.model.Pokedex;


public interface PokedexRepository extends JpaRepository<Pokedex, String> {

}
