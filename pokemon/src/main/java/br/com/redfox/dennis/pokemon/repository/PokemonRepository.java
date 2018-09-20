package br.com.redfox.dennis.pokemon.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.redfox.dennis.pokemon.model.Pokemon;

@Repository
public interface PokemonRepository extends PagingAndSortingRepository<Pokemon, Long> {

	@Query("SELECT pokemon FROM Pokemon pokemon" + "INNER JOIN FETCH pokemon.tipe tipe "
			+ "INNER JOIN FETCH pokemon.weather weather where ( :id is NULL or pokemon.id = :id) AND "
			+ "( :name is null or pokemon.name = :name) AND ( :idTipe is null or tipe.id = :id ) AND "
			+ "( :idWeather is null or weather.id = :idWeather ) AND (:fromAtk is NULL or pokemon.atk >= :fromAtk) AND "
			+ "( :fromDef is NULL or pokemon.atk >= :fromDef) AND (:fromSta is NULL or pokemon.atk >= :fromSta) AND "
			+ "( :evolutionState is NULL or pokemon.evolutionStage = :evolutionState) AND "
			+ "( :haveNest is NULL or pokemon.nest = :haveNest) AND ( :tipe is NULL or pokemon.tipe = :tipe) AND "
			+ "( :weather is NULL or pokemon.nest = :weather)")
	Page<Pokemon> findByFilter(Pageable pageable, @Param("id") Long id, @Param("name") String name,
			@Param("idTipe") Long idTipe, @Param("idWeather") Long idWeather, @Param("fromAtk") Integer fromAtk,
			@Param("fromDef") Integer fromDef, @Param("fromSta") Integer fromSta,
			@Param("evolutionState") Integer evolutionState, @Param("haveNest") Integer haveNest);

	Page<Pokemon> findAllOrderById(Pageable pageable);

	Page<Pokemon> findAllOrderByName(Pageable pageable);

	Page<Pokemon> findAllOrderBystatusTotal(Pageable pageable);

}
