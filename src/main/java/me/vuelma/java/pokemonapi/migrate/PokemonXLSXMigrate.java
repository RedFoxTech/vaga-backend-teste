package me.vuelma.java.pokemonapi.migrate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import me.vuelma.java.pokemonapi.pokemon.Pokemon;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;

public class PokemonXLSXMigrate {

    private static final String XLSX_FILE = "Pokemon Go.xlsx";
    private static final String API_ENDPOINT = "http://localhost:8080/pokemon";

    private static final OkHttpClient CLIENT = new OkHttpClient();
    private static final MediaType JSON =  MediaType.get("application/json; charset=utf-8");

    private static final ObjectMapper MAPPER = new ObjectMapper();

    public static void main(String[] args) throws IOException, InvalidFormatException {
        long start = System.currentTimeMillis();

        System.out.println("Iniciando processo de migração de dados...");

        Workbook workbook = WorkbookFactory.create(new File(XLSX_FILE));
        Sheet sheet = workbook.getSheetAt(0);

        processSheet(sheet);

        workbook.close();

        long end = System.currentTimeMillis();
        double seconds = (end - start) / 1000.0;

        System.out.printf("Migração de pokemons concluida! Foram necessários %.2f segundos!", seconds);
    }

    private static void processSheet(Sheet sheet) {
        Iterator<Row> rowIterator = sheet.rowIterator();

        int c = 0;

        rowIterator.next(); // Pular linha dos titulos
        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();

            processRow(row);

            c++;
            if(c % 10 == 0){
                System.out.printf("... %d pokemons foram migrados ...\n", c);
            }
        }

        System.out.printf("Um total de %d pokemons foram migrados. \n", c);
    }

    private static void processRow(Row row) {
        Iterator<Cell> cellIterator = row.cellIterator();
        cellIterator.next(); // Pular celula que idenfica a row

        Pokemon pokemon = new Pokemon();
        pokemon.setName(cellIterator.next().getStringCellValue());
        pokemon.setPokedexNumber((long) cellIterator.next().getNumericCellValue());
        pokemon.setImgName(getString(cellIterator.next()));
        pokemon.setGeneration(getInt(cellIterator.next()));
        pokemon.setEvolutionStage(getString(cellIterator.next()));
        pokemon.setEvolved(getBoolean(cellIterator.next()));
        pokemon.setFamilyId(getString(cellIterator.next()));
        pokemon.setCrossGen(getBoolean(cellIterator.next()));
        pokemon.setType1(cellIterator.next().getStringCellValue());
        pokemon.setType2(cellIterator.next().getStringCellValue());
        pokemon.setWeather1(cellIterator.next().getStringCellValue());
        pokemon.setWeather2(cellIterator.next().getStringCellValue());
        pokemon.setStatTotal(getInt(cellIterator.next()));
        pokemon.setAtk(getInt(cellIterator.next()));
        pokemon.setDef(getInt(cellIterator.next()));
        pokemon.setSta(getInt(cellIterator.next()));
        pokemon.setLegendary(getInt(cellIterator.next()));
        pokemon.setAquireable(getInt(cellIterator.next()));
        pokemon.setSpawns(getBoolean(cellIterator.next()));
        pokemon.setRegional(getBoolean(cellIterator.next()));
        pokemon.setRaidable(getInt(cellIterator.next()));
        pokemon.setHatchable(getInt(cellIterator.next()));
        pokemon.setShiny(getBoolean(cellIterator.next()));
        pokemon.setNest(getBoolean(cellIterator.next()));
        pokemon.setNewPokemon(getBoolean(cellIterator.next()));
        pokemon.setNotGettable(getBoolean(cellIterator.next()));
        pokemon.setFutureEvolve(getBoolean(cellIterator.next()));
        pokemon.setCp40(getInt(cellIterator.next()));
        pokemon.setCp39(getInt(cellIterator.next()));

        savePokemon(pokemon);
    }

    private static void savePokemon(Pokemon pokemon) {
        String pokemonJson = null;
        try {
            pokemonJson = MAPPER.writeValueAsString(pokemon);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        RequestBody saveBody= RequestBody.create(JSON, pokemonJson);
        Request saveRequest = new Request.Builder()
                .url(API_ENDPOINT)
                .post(saveBody)
                .build();

        try {
            CLIENT.newCall(saveRequest).execute();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static int getInt(Cell cell) {
        return (int) cell.getNumericCellValue();
    }

    // Converter valores numericos (0 ou 1) para o boolean
    private static boolean getBoolean(Cell cell) {
        double value = cell.getNumericCellValue();

        if (value == 0 || value == 1) {
            return value == 1;
        } else {
            throw new IllegalStateException("Number need to be 0 or 1");
        }
    }

    // Pegar dado como string em colunas onde ocorrem numeros e string juntos
    private static String getString(Cell cell) {
        try {
            return cell.getStringCellValue();
        } catch (IllegalStateException ex) {
            return Integer.toString((int) cell.getNumericCellValue());
        }
    }

}
