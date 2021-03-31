<?php

if(isset($_POST['submit'])) {
$name=$_POST['name'];
$from=$_POST['email'];
$message=$_POST['message'];
$mailTo="mahmuzic.amra@gmail.com";
$headers="From: ".$from;
$text="You have received an email from ".$name."\n\n".$message;

mail($mailTo, $text, $headers);
header("Location: index.php?mailsend");
}
?>
