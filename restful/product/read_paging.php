<?php

/*
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 */
 
// include database and object files
include_once '../config/core.php';
include_once '../shared/utilities.php';
include_once '../config/database.php';
include_once '../objects/pokemon.php';
 
$utilities = new Utilities();
 
$database = new Database();
$db = $database->getConn();
 
$pokemon = new Pokemon($db);
 
$stmt = $pokemon->readPaging($from_record_num, $records_per_page);
$num = $stmt->rowCount();
 
if($num>0){
 
    $pokemon_arr=array();
    $pokemon_arr["records"]=array();
    $pokemon_arr["paging"]=array();
 

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){

        extract($row);
 
        array_push($pokemon_arr["records"], $row);
    }
 
 
    $total_rows=$pokemon->count();
    $page_url="{$home_url}view/paging.php?";
    $paging=$utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $pokemon_arr["paging"]=$paging;
 
    
    //print_r($pokemon_arr);
    //echo json_encode($pokemon_arr);
}
 
?>