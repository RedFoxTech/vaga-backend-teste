<?php
    include('../product/read.php');

?>

<html>
<head>
    <title>Lista Pokemon</title>
    <meta charset="utf-8">
    <link href="../css/bootstrap.min.css" type="text/css" rel="stylesheet">
</head>

<body>
    <button class='btn m-3'><a href='./paging.php'>Paging</a></button>
    <button class='btn m-3'><a href='./procurar.php'>Procurar</a></button>
    <table class='table table-striped table-bordered'>
        <thead class='thead-dark'>
        <?php
            foreach($pokemon->columns as $column){
                echo "<th>".$column."</th>";
            }
        ?>
        </thead>
        
        <?php 
            foreach($pokemon_arr as $poke){
                $echo = "<tr>";
                foreach($pokemon->columns as $column){
                    $echo .= "<td>".$poke["$column"]."</td>";
                }
                $echo .= "</tr>";
                echo $echo;
            }
        ?>
    </table>
</body>

</html>