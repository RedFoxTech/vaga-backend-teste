package me.vuelma.java.pokemonapi.pokemon;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Data
public class Pokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long pokedexNumber;
    @NotBlank
    private String name;
    @NotBlank
    private String imgName;

    private int generation;
    private String evolutionStage;
    private boolean evolved;
    private String familyId;
    private boolean crossGen;

    @NotBlank
    private String type1;
    private String type2;
    @NotBlank
    private String weather1;
    private String weather2;

    private int statTotal;
    private int atk;
    private int def;
    private int sta;

    private int legendary;
    private int aquireable;
    private boolean spawns;
    private boolean regional;
    private int raidable;
    private int hatchable;
    private boolean shiny;
    private boolean nest;
    private boolean newPokemon;
    private boolean notGettable;
    private boolean futureEvolve;

    private int cp40;
    private int cp39;

}