<?php
  $nome = $_POST['nome'];
  $email= $_POST['email'];
  $mensagem= $_POST['mensagem'];
  $assunto = $_POST['assunto'];

  $headers = 'From: '.$email;
  $to = "danilo.salexan@gmail.com";
  
  mail($to,$assunto,$mensagem);
  echo $nome.", ".$email.", ".$mensagem.", ".$assunto;
  echo "email sent?";
  header('location: index.html#contato');
?>