package br.com.redfoxtech.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.redfoxtech.domain.Pokemon;


@Repository
public interface PokemonRepository extends JpaRepository<Pokemon, Integer>{

	@Transactional(readOnly = true)
	@Query("SELECT p FROM Pokemon p  WHERE p.name LIKE %:name%")
	List<Pokemon> findPokemonByName(@Param("name") String name );
}
