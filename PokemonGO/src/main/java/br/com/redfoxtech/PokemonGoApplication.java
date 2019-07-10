package br.com.redfoxtech;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.redfoxtech.domain.Pokemon;
import br.com.redfoxtech.repositories.PokemonRepository;

@SpringBootApplication
public class PokemonGoApplication implements CommandLineRunner{

	@Autowired
	private PokemonRepository pokemonRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(PokemonGoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*
		 * Instancia de 7 Pokemons apenas para testes pois não tenho o Excel em minha maquina para importar os dados
		 * Utilizando o H2 para 
		 */
	
		Pokemon p1 = new Pokemon(null,"Bulbasaur",1 ,1 ,1 ,1 ,0, 1, 0,"grass","poison","Sunny/clear","Cloudy", 326, 118, 118, 90, 0, 1, 1, 0, 0, 5 , 0, 1, 0, 0,	0, 981, 967);
		Pokemon p2 = new Pokemon(null,"Ivysaur", 2, 2, 1, 2, 0, 1, 0,"grass","poison" ,"Sunny/clear",	"Cloudy", 422, 151, 151, 120, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1552, 1529);
		Pokemon p3 = new Pokemon(null ,"Venusaur",3,3,	1,	3,	1,	1,	0,	"grass",	"poison",	"Sunny/clear",	"Cloudy",	556,	198,	198,	160,	0,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	2568,	2531);
		Pokemon p4 = new Pokemon(null,"Venusaur", 3, 3, 1, 3, 1, 1, 0, "grass", "poison", "Sunny/clear", "Cloudy", 556, 198, 198, 160, 0, 1 ,1, 0, 0, 0, 0, 0 , 0, 0, 0, 2568, 2531);	
		Pokemon p5 = new Pokemon(null,"Charmander",	4,	4,	1,	1,	0,	2,	0,	"fire",	"",	"Sunny/clear",	"",	290,	116,	96,	78,	0,	1,	1,	0,	0,	5,	0,	1,	0,	0,	0,	831,	819);
		Pokemon p6 = new Pokemon(null, "Charmeleon",	5,	5,	1,	2,	0,	2,	0,	"fire",	"",	"Sunny/clear",	"",	403,	158,	129,	116,	0,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	1484,	1462);
		Pokemon p7 = new Pokemon(null, "Charizard",	6,	6,	1,	3,	1,	2,	0,	"fire",	"flying",	"Sunny/clear",	"Windy",	555,	223,	176,	156,	0,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	2686, 2648);
		
		
		
		pokemonRepository.saveAll(Arrays.asList(p1,p2,p3,p4,p5,p6,p7));
	}
}
