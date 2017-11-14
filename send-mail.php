<?php
  $nome = $_POST['nome'];
  $email= $_POST['email'];
  $mensagem= $_POST['mensagem'];
  $assunto = $_POST['assunto'];

  $headers = 'From: '.$email;
  $to = "contato@ectmjr.com.br";
  
  mail($to,$assunto,$mensagem,$headers);
  header('location: index.html#contato');
?>