<?php
  $to = "contato@ectmjr.com.br";
  $subject = $_POST['assunto'];
  $txt = "De: " . $_POST['nome'] . "\r\n \r\n" . 
          $_POST['mensagem']; 
  $headers = "From: " . $_POST['email'] . "\r\n";

  // mail($to,$subject,$txt,$headers);
  
  echo 'email sent';
?>
