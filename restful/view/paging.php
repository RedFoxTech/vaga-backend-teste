<?php
    include('../product/read_paging.php');

?>

<html>
<head>
    <title>Pokemon Páginas</title>
    <meta charset="utf-8">
    <link href="../css/bootstrap.min.css" type="text/css" rel="stylesheet">
</head>

<body>
    <button class='btn m-3'><a href='./index.php'>Voltar ao Index</a></button>
    <table class='table table-striped table-bordered'>
        <thead class='thead-dark'>
        <?php
            foreach($pokemon->columns as $column){
                echo "<th>".$column."</th>";
            }
        ?>
        </thead>
        
        <?php 
            foreach($pokemon_arr['records'] as $poke){
                $echo = "<tr>";
                foreach($pokemon->columns as $column){
                    $echo .= "<td>".$poke["$column"]."</td>";
                }
                $echo .= "</tr>";
                echo $echo;
            }
        ?>
    </table>
    <?php 
    for($i = 0; $i < count($pokemon_arr['paging']); $i++){
                if ($i==0){
                    echo "<button class='btn m-3'><a href=".$pokemon_arr['paging']['first'].">Primeira página</a></button>";
                }
                if ($i==1){
                    foreach($pokemon_arr['paging']['pages'] as $key => $page){
                        echo "<button class='btn m-3'><a href=".$page['url'].">Últimas páginas ".++$key."</a></button>";
                    }
                }
                if ($i==2){
                    echo "<button class='btn m-3'><a href=".$pokemon_arr['paging']['last'].">Última página</a></button>";
                }
            }
    
    ?>
</body>

</html>