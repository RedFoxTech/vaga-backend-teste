<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/pokemon.php';
 
// get database connection
$database = new Database();
$db = $database->getConn();
 
// prepare product object
$pokemon = new Pokemon($db);
 
// set ID property of product to be edited
$pokemon->row = isset($_GET['row']) ? $_GET['row'] : die();
 
// read the details of product to be edited
$pokemon->readOne();
 
// create array
$pokemon_arr = array(
        'Row' => $pokemon->row,
       'Name' => $pokemon->name,
       'Pokedex Number' => $pokemon->pokedex,
       'Img name' => $pokemon->img,
       'Generation' => $pokemon->gen,
       'Evolution Stage' => $pokemon->evolutionStage,
       'Evolved' => $pokemon->evolved,
       'FamilyID' => $pokemon->familyID,
       'Cross Gen' => $pokemon->crossGen,
       'Type 1' => $pokemon->type1,
       'Type 2' => $pokemon->type2,
       'Weather 1' => $pokemon->weather1,
       'Weather 2' => $pokemon->weather2,
       'STAT TOTAL' => $pokemon->statTotal,
       'ATK' => $pokemon->atk,
       'DEF' => $pokemon->def,
       'STA' => $pokemon->sta,
       'Legendary' => $pokemon->legend,
       'Aquireable' => $pokemon->aquireable,
       'Spawns' => $pokemon->spawn,
       'Regional' => $pokemon->regional,
       'Raidable' => $pokemon->raidable,
       'Hatchable' => $pokemon->hatchable,
       'Shiny' => $pokemon->shiny,
       'Nest' => $pokemon->nest,
       'New' => $pokemon->new,
       'Not-Gettable' => $pokemon->notGettable,
       'Future Evolve' => $pokemon->futureEvolve,
       '100% CP @ 40' => $pokemon->cp40,
       '100% CP @ 39' => $pokemon->cp39
);
 
// make it json format
print_r(json_encode($pokemon_arr));
?>