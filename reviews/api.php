<?php
$name = $_GET["name"];

echo $_GET['callback'] . "({'message': 'Hello " . $name ."'})";