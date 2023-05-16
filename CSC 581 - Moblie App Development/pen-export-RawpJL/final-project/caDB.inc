<?php

function caDB(){

	$dbConnection = mysqli_connect("a2nlmysql13plsk.secureserver.net:3306", "KateSampson", "sW!2f11t", "parentAcct");
    
    
	if (mysqli_connect_errno()){
		die(mysqli_connect_error());
	}
    
    echo "Database connected successfully . . . <br>";
	return $dbConnection;
}


?>