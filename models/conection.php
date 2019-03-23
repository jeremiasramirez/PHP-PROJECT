<?php


function conectedDatabase(){
	$conexion = '';
	try{
		$conexion = new mysqli("127.0.0.1","root","","red_social");
		
	}catch(Exception $e){
		echo $e->getMessage() . PHP_EOL;
	}
}

conectedDatabase();


