<?php 
class Pokemon{
    private $conn;
    private $tabela = "poke";
    
    public $columns = array('Row','Name','Pokedex Number','Img name', 'Generation', 'Evolution Stage', 'Evolved', 'FamilyID', 'Cross Gen', 'Type 1', 'Type 2',
                        'Weather 1', 'Weather 2', 'STAT TOTAL', 'ATK', 'DEF', 'STA', 'Legendary', 'Aquireable', 'Spawns', 'Regional', 'Raidable', 'Hatchable',
                        'Shiny', 'Nest', 'New', 'Not-Gettable', 'Future Evolve', '100% CP @ 40', '100% CP @ 39');
    
    public $row;
    public $name;
    public $pokedex;
    public $img;
    public $gen;
    public $evolutionStage;
    public $evolved;
    public $familyID;
    public $crossGen;
    public $type1;
    public $type2;
    public $weather1;
    public $weather2;
    public $statTotal;
    public $atk;
    public $def;
    public $sta;
    public $legend;
    public $aquireable;
    public $spawn;
    public $regional;
    public $raidable;
    public $hatchable;
    public $shiny;
    public $nest;
    public $new;
    public $notGettable;
    public $futureEvolve;
    public $cp40;
    public $cp39;
    
    public function __construct($db){
        $this->conn = $db;
    }
    
    function read(){
        $query = "SELECT * FROM `". $this->tabela. "`";
        
        $stmt = $this->conn->prepare($query);
        
        $stmt->execute();

        return $stmt;
    }
    
    function readOne(){
        $query = "SELECT * FROM `" . $this->tabela . "` WHERE row = ? LIMIT 0,1";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->row);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->row = $row['Row'];
        $this->name = $row['Name'];
        $this->pokedex = $row['Pokedex Number'];
        $this->img = $row['Img name'];
        $this->gen = $row['Generation'];
        $this->evolutionStage = $row['Evolution Stage'];
        $this->evolved = $row['Evolved'];
        $this->familyID = $row['FamilyID'];
        $this->crossGen = $row['Cross Gen'];
        $this->type1 = $row['Type 1'];
        $this->type2 = $row['Type 2'];
        $this->weather1 = $row['Weather 1'];
        $this->weather2 = $row['Weather 2'];
        $this->statTotal = $row['STAT TOTAL'];
        $this->atk = $row['ATK'];
        $this->def = $row['DEF'];
        $this->sta = $row['STA'];
        $this->legend = $row['Legendary'];
        $this->aquireable = $row['Aquireable'];
        $this->spawn = $row['Spawns'];
        $this->regional = $row['Regional'];
        $this->raidable = $row['Raidable'];
        $this->hatchable = $row['Hatchable'];
        $this->shiny = $row['Shiny'];
        $this->nest = $row['Nest'];
        $this->new = $row['New'];
        $this->notGettable = $row['Not-Gettable'];
        $this->futureEvolve = $row['Future Evolve'];
        $this->cp40 = $row['100% CP @ 40'];
        $this->cp39 = $row['100% CP @ 39'];
    }
    
    function search($option, $keywords){
        
        $option = htmlspecialchars(strip_tags($option));
        $keywords = htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";
        
        $query = "SELECT * FROM `" . $this->tabela . "` WHERE `".$option."` LIKE '".$keywords."'";
    
        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        
        

        return $stmt;
    }
    
    function readPaging($from_record_num, $records_per_page){

        $query = "SELECT * FROM " . $this->tabela . " LIMIT ?, ?";

        $stmt = $this->conn->prepare( $query );

        $stmt->bindParam(1, $from_record_num, PDO::PARAM_INT);
        $stmt->bindParam(2, $records_per_page, PDO::PARAM_INT);

        $stmt->execute();

        return $stmt;
    }
    
    function count(){
        $query = "SELECT COUNT(*) as total_rows FROM " . $this->tabela . "";

        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        return $row['total_rows'];
    }
}
