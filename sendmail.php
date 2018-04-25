<?php
	header('Content-Type: text/html; charset=utf-8');

	$nombre = addslashes($_POST['nombre']);
	$telefono = addslashes($_POST['telefono']);
	$email = addslashes($_POST['email']);
	$mensaje = addslashes($_POST['mensaje']);

	$cabeceras = "From: $email\n" //La persona que envia el correo
 		. "Reply-To: $email\n"
 		."Bcc: jesushfloresn@gmail.com";
	$asunto = "Mensaje desde la página Web 'Consultores Tributarios'";
	//asunto aparecera en la bandeja del servidor de correo
	$email_to = "direccion@consultorestributarios.mx"; //cambiar por tu email
	$contenido = "$nombre ha enviado un mensaje desde la página web -Consultores Tributarios-\n"
	. "\n"
	. "Nombre: $nombre\n"
	. "Teléfono: $telefono\n"
	. "Email: $email\n"
	. "Mensaje: $mensaje\n"
	. "\n";

	//Enviamos el mensaje y comprobamos el resultado
	if (@mail($email_to, $asunto ,$contenido ,$cabeceras )) {
		//Si el mensaje se envía muestra una confirmación
		//die("Gracias, su mensaje se envio correctamente.");
		echo "<h4 style='text-align: center; color: #5F5F5F; font-size: 1.75em; padding-top: 5em;'> ¡Gracias por contactarnos! </h4>";
		echo "<div style='text-align: center; color: #312E2E; font-size: 1em;'> A la brevedad posible nos pondremos en contacto </div>";
	}
	else{
		//Si el mensaje no se envía muestra el mensaje de error
		die("Error: Su información no pudo ser enviada, intente más tarde");
	}
	
?>