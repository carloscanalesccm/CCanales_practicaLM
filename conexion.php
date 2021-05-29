<?php

    $conexion = mysqli_connect('localhost', 'admin', 'LosNaranjoscfgs_dam1' , 'seleccion') or die(mysql_error($mysqli));

    insertar($conexion);

    function insertar($conexion){
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $email = $_POST['email'];
        $portero = $_POST['portero'];
        
    $consulta = "INSERT INTO infoParticipantes(Nombre, Apellidos, Email)
    VALUES ('$nombre', '$apellidos', '$email' )";
    mysqli_query($conexion, $consulta);
    mysqli_close($conexion);
    }

?>