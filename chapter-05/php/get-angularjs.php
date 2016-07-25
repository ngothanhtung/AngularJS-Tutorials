<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$dns = 'mysql:host=127.0.0.1;dbname=shop;port=3306';
$username = "root";
$password = "";

try {
    $db = new PDO($dns, $username, $password);
} catch(PDOException $e) {
    $error_message = $e->getMessage();
    echo $error_message;
    exit();
}

try {

    $sql = "SELECT * FROM products";
    $statement = $db->prepare($sql);

    $statement->execute();
    $products = $statement->fetchAll(); // GET RECORDS
    $statement->closeCursor();

    $json = "";
	foreach ($products as $product) {
	 	if ($json != "") {
	        $json .= ",";
	    }
	    $json .= '{"id":"' .    $product["id"] .    '",';
	    $json .= '"name":"' .   $product["name"] .  '",';
	    $json .= '"price":"' .  $product["price"] . '",';
	    $json .= '"stock":"'.   $product["stock"] . '"}';
	}
	$json ='{"products":['.$json.']}';
	echo($json);
	exit();
} catch (PDOException $e) {
    echo 'Database Error: ' . $e->getMessage();
    exit();
}
