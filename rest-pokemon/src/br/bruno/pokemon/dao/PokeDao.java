package br.bruno.pokemon.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.bruno.pokemon.config.DBConfig;
import br.bruno.pokemon.entity.Pokemon;

public class PokeDao {

	public List<Pokemon> buscarPokemonPaginado(String searchName, String type, int page, int size) throws Exception {
		Pokemon pokemon = null;
		List<Pokemon> lista = new ArrayList<>();
		Connection conexao = DBConfig.getConnection();
		String sql = null;
		PreparedStatement statement;
		if (type != null) {
			sql = "SELECT * FROM tb_pokemon WHERE type_1 = ? ";
			statement = conexao.prepareStatement(sql);
			statement.setString(1, type);
		} else if (searchName != null) {
			sql = "SELECT * FROM tb_pokemon WHERE nome = ?";
			statement = conexao.prepareStatement(sql);
			statement.setString(1, searchName);
		} else {
			sql = "SELECT * FROM tb_pokemon";
			statement = conexao.prepareStatement(sql);
		}

		ResultSet rs = statement.executeQuery();

		while (rs.next()) {
			pokemon = new Pokemon();

			pokemon.setCodPokemon(rs.getInt("cod_pokemon"));
			pokemon.setNome(rs.getString("nome"));
			pokemon.setPokedexNumber(rs.getInt("pokedex_number"));
			pokemon.setImgName(rs.getString("Img_name"));
			pokemon.setGeneration(rs.getInt("generation"));
			pokemon.setEvolutionStage(rs.getString("evolution_stage"));
			pokemon.setEvolved(rs.getInt("evolved"));
			pokemon.setFamilyId(rs.getString("family_id"));
			pokemon.setCrossGen(rs.getInt("cross_gen"));
			pokemon.setType1(rs.getString("type_1"));
			pokemon.setType2(rs.getString("type_2"));
			pokemon.setWeather1(rs.getString("weather_1"));
			pokemon.setWeather2(rs.getString("weather_2"));
			pokemon.setStatTotal(rs.getInt("stat_total"));
			pokemon.setAtk(rs.getInt("ATK"));
			pokemon.setDef(rs.getInt("DEF"));
			pokemon.setSta(rs.getInt("STA"));
			pokemon.setLegendary(rs.getInt("legendary"));
			pokemon.setAquireable(rs.getInt("aquireable"));
			pokemon.setSpawns(rs.getInt("spawns"));
			pokemon.setRegional(rs.getInt("regional"));
			pokemon.setRaidable(rs.getInt("raidable"));
			pokemon.setHatchable(rs.getInt("hatchable"));
			pokemon.setShiny(rs.getInt("shiny"));
			pokemon.setNest(rs.getInt("nest"));
			pokemon.setNeww(rs.getInt("new"));
			pokemon.setNotGettable(rs.getInt("not_gettable"));
			pokemon.setFutureEvolve(rs.getInt("Future_Evolve"));
			pokemon.setTotalCp40(rs.getInt("total_CP_40"));
			pokemon.setTotalCp39(rs.getInt("total_CP_39"));
			lista.add(pokemon);
		}
		int fromIndex = page * size;
		int toIndex = fromIndex + size;
		if (page + size > lista.size())
			return new ArrayList<Pokemon>();
		return lista.subList(fromIndex, toIndex);

	}

}
