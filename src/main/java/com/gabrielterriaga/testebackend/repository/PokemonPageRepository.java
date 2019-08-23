package com.gabrielterriaga.testebackend.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.gabrielterriaga.testebackend.domain.Pokemon;

@Repository
public interface PokemonPageRepository extends PagingAndSortingRepository<Pokemon, String>{

}
