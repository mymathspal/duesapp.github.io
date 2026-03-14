<?php

$serverName = "localhost";
$username = "root";
$password = "";
$databaseName = "duesapp";
$dbConnection = "";

try{
    $connection = mysqli_connect($serverName,$username,"",$databaseName);
}
catch(connectionError){
    echo "Failed to connect to database";
}