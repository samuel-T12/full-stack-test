<?php

/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
$data = file_get_contents("https://jsonplaceholder.typicode.com/comments?postId=3");
echo $data;
?>