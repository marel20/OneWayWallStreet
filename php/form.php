<?php 
    $nombre = $_POST['name'];
	$email = $_POST['email'];
	$affair = $_POST['affair'];
	$mensaje = "Nombre: ".$nombre."\nEmail: ".$email."\nMensaje:\n\n".$_POST['message'];
	
	
// Agregar encabezados
    $headers = "From: $nombre <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if(mail('info@onewaywallstreet.com', $affair, $mensaje, $headers)){
	
		echo  '<script language="javascript"> alert ("Su consulta fue enviada. Responderemos en breve."); window.location.href="../home.html#contact" </script>';
	} else {
        echo '<script language="javascript"> alert ("Ocurrio un error inesperado, intente de nuevo mas tarde"); window.location.href="../home.html#contact" </script>';
}
 ?>



