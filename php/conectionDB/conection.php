<?php


function conectedDatabase(){
	$conexion = '';
	try{
		$conexion = new mysqli("127.0.0.1","root","","firstdb");
		echo "<h2>Hay conexion</h2>";
	}catch(Exception $e){
		echo $e->getMessage() . PHP_EOL;
	}
}

conectedDatabase();






