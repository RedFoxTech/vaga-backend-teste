package br.com.redfoxtech.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import br.com.redfoxtech.domain.Pokemon;
import br.com.redfoxtech.repositories.PokemonRepository;
import br.com.redfoxtech.services.exceptions.ObjectNotFoundException;

@Service
public class PokemonService {

	@Autowired
	private PokemonRepository repo;
	
	public List<Pokemon> findAll() {
		List<Pokemon> list = new ArrayList<>();
		list.addAll(repo.findAll());
		
		return list;
	}
	
	public Pokemon findById(Integer id) {
		Optional<Pokemon> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado! Id: "+ id + ", Tipo:" + Pokemon.class.getName()));
	}
	
	
	public Page<Pokemon> findPage(Integer page, Integer linesPerPage , String orderBy, String direction){
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		
		return repo.findAll(pageRequest);
	}
	
	
	
	
}