package br.com.pokemon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.pokemon.model.Pokemon;

@Repository
public interface PokemonRepository extends CrudRepository<Pokemon, Integer>{
	
	@Query(value = "select * from pokemon where name like %:name% order by id asc", nativeQuery = true)
	List<Pokemon> findByPokemonName(@Param("name") String nome);
	
	@Query(value = "select * from pokemon where (type1, type2) like %:type% order by id asc", nativeQuery = true)
	List<Pokemon> findByPokemonType(@Param("type") String tipo);

	@Query(value = "select * from pokemon where (weather1, weather2) like %:weather% order by id asc", nativeQuery = true)
	List<Pokemon> findByPokemonWeather(@Param("weather") String clima);
}
