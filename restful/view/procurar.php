<?php
    include('../product/search.php');
?>

<html>
<head>
    <title>Procurar Pokemon</title>
    <meta charset="utf-8">
    <link href="../css/bootstrap.min.css" type="text/css" rel="stylesheet">
</head>

<body>
    <button class='btn m-3'><a href='./index.php'>Voltar ao Index</a></button>
    
    <form action='procurar.php' method="get" class='m-3'>
    <p></p>
    <select name='o' required>
         <?php 
            foreach($pokemon->columns as $column){
                echo "<option>".$column."</option>";
            }
        ?>
    </select>
    <p>Procurar Por</p>
        <input name='s' required>
        <input type='submit'>
    </form>
    <?php if(isset($_GET['s'])){
    
    if($num>0){
    ?>
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
    <?php
    }else{
        echo  "<p class='m-3'>Nenhum pokemon encontrado.</p>";
    }
    } ?>
</body>

</html>