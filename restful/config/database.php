<?php

class Database {
    
    private $host = "localhost";
    private $db = "pokemon";
    private $usuario = "root";
    private $senha = "";
    public $conn;
    
    public function getConn(){
        $this->conn = null;
        
        try{
            $this->conn = new PDO("mysql:host=" .$this->host.";dbname=".$this->db,$this->usuario,$this->senha);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Erro de conexão: " . $exception->getMessage();
        }
        
        return $this->conn;
    }
}

?>