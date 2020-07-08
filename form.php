<?php

if(isset($_POST['submit'])) {
$name=$_POST['name'];
$from=$_POST['email'];
$message=$_POST['message'];
$mailTo="amra10mujic@gmail.com";
$headers="From: ".$from;
$text="You have received an email from ".$name."\n\n".$message;

//mail($mailTo, $text, $headers);
  mail('amra10mujic@gmail.com', 'tekkkkstst', 'hd');
header("Location: index.php?mailsend");
}
?>
