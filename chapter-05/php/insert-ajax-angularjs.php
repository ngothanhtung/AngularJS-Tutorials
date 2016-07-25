<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once 'database.php';

//$php_object = $_POST['question'];

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$content = $request->question->content;
$option1 = $request->question->option1;
$option2 = $request->question->option2;
$option3 = $request->question->option3;
$option4 = $request->question->option4;
$correctOption = $request->question->correctOption;

$sql = "INSERT INTO questions (content, option1, option2, option3, option4, correctOption) VALUES ('$content', '$option1', '$option2', '$option3', '$option4', '$correctOption')";

$db->exec($sql);

echo '{"message": "ok"}';
