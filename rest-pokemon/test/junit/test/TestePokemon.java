package junit.test;

import static io.restassured.RestAssured.get;
import static org.hamcrest.CoreMatchers.equalTo;
import org.junit.BeforeClass;
import org.junit.Test;

import io.restassured.RestAssured;

public class TestePokemon {

	@BeforeClass
	public static void init() {
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = 8080;

	}

	@Test
	public void testPokemonFetchesSuccess() {
				get("/rest-pokemon/rest/pokemon?search=pikachu")
				.then()
				.body("codPokemon",  equalTo(25))
				.body("nome", equalTo("Pikachu"))
				.body("type1", equalTo("electric"));
				
	}

}
