<?php

//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../objects/pokemon.php';
 
$database = new Database();
$db = $database->getConn();
 
$pokemon = new Pokemon($db);
 
$option=isset($_GET["o"]) ? $_GET["o"] : "";
$keywords=isset($_GET["s"]) ? $_GET["s"] : "";
 
$stmt = $pokemon->search($option, $keywords);
$num = $stmt->rowCount();
 
if($num>0){
 
    $pokemon_arr =array();
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        
 
        array_push($pokemon_arr, $row);
    }
 
    //echo json_encode($pokemon_arr);
}
 
?>