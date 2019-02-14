package br.bruno.pokemon.rest;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import br.bruno.pokemon.dao.PokeDao;
import br.bruno.pokemon.entity.Pokemon;

@Path("/pokemon")
public class PokeService {

	private PokeDao pokeDao;

	@PostConstruct
	private void init() {
		pokeDao = new PokeDao();
	}

	@GET
	@Consumes(MediaType.TEXT_PLAIN)
	@Produces(MediaType.APPLICATION_JSON)
	public List<Pokemon> findById(@QueryParam("type") String type, 
			@QueryParam("page") int page,
			@QueryParam("size") int size,
			@QueryParam("search") String searchName) {
		List<Pokemon> list = null;
		try {
			if(searchName != null) {
				page = 0;
				size = 1;
			}
			list = pokeDao.buscarPokemonPaginado(searchName, type, page, size);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
}
