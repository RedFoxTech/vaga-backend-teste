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
			+ "INNER JOIN FETCH pokemon.weather weather" + "where (" + "(:id is NULL or pokemon.id = :id) &&"
			+ "(:name is null or pokemon.name = :name) &&" + "(:idTipe is null or tipe.id = :id ) &&"
			+ "(:idWeather is null or weather.id = :idWeather )" + "(:fromAtk is NULL or pokemon.atk => :fromAtk)"
			+ "(:fromDef is NULL or pokemon.atk => :fromDef)" + "(:fromSta is NULL or pokemon.atk => :fromSta)"
			+ "(:evolutionState is NULL or pokemon.evolutionStage = :evolutionState)"
			+ "(:haveNest is NULL or pokemon.nest = :haveNest)"
			+ "(:tipe is NULL or pokemon.tipe = :tipe)"
			+ "(:weather is NULL or pokemon.nest = :weather)" + ")")
	Page<Pokemon> findByFilter(Pageable pageable, @Param("id") Long id, 
			@Param("name") String name, 
			@Param("idTipe") Long idTipe,
			@Param("idWeather") Long idWeather,
			@Param("fromAtk") Integer fromAtk,
			@Param("fromDef") Integer fromDef,
			@Param("fromSta") Integer fromSta, @Param("evolutionState") Integer evolutionState,
			@Param("haveNest") Integer haveNest
			);


	Page<Pokemon> findAllOrderByIdAsc(Pageable pageable);
	Page<Pokemon> findAllOrderByNameAsc(Pageable pageable);
	Page<Pokemon> findAllOrderBystatusTotalAsc(Pageable pageable);



}

