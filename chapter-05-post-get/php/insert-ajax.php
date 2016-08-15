<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once 'database.php';

$php_object = $_POST['question'];

$content = $php_object["content"];
$option1 = $php_object["option1"];
$option2 = $php_object["option2"];
$option3 = $php_object["option3"];
$option4 = $php_object["option4"];
$correctOption = $php_object["correctoption"];

$sql = "INSERT INTO questions (content, option1, option2, option3, option4, correctOption) VALUES ('$content', '$option1', '$option2', '$option3', '$option4', '$correctOption')";

$db->exec($sql);

echo '{"message": "ok"}';
