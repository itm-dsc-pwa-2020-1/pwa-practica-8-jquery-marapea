<?php
//Configuracion de la conexion a base de datos
$bd_host = "localhost"; 
$bd_usuario = "root"; 
$bd_password = ""; 
$bd_base = "tienda_libros"; 

$con = mysql_connect($bd_host, $bd_usuario, $bd_password); 

mysql_select_db($bd_base, $con); 

//consulta todos los empleados

$sql=mysql_query("SELECT * FROM libros",$con);

//muestra los datos consultados
echo "</p>Nombre - Descripcion - Precio - N.Ventas</p> \n";
while($row = mysql_fetch_array($sql)){
	echo "<p>".$row['nombre']." - ".$row['descripcion']." - ".$row['precio']." - ".$row['n_ventas'] ."</p> \n";
}
?>