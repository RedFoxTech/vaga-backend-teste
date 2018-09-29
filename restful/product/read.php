<?php
/*
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
*/
include_once('../config/database.php');
include_once('../objects/pokemon.php');

$database = new Database();
$db = $database->getConn();

$pokemon = new Pokemon($db);

$stmt = $pokemon->read();

$num = $stmt->rowCount();
if($num>0){
    $pokemon_arr = array();
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        array_push($pokemon_arr, $row);
    }
    $encode =  json_encode($pokemon_arr);
    
}

else{
    echo json_encode(
        array("message" => "Nenhum pokemon encontrado")
    );
}
?>
