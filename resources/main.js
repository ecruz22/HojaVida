function pregunta(){ 
    var mensaje;
    var opcion = confirm('¿Está seguro que desea enviar esta información?');
    if (opcion == true) {
        mensaje = "Mensaje enviado";
	} else {
	    mensaje = "Mensaje no enviado";
	}
	//document.getElementById("ejemplo").innerHTML = mensaje;
    
    /*if (confirm('¿Está seguro que desea enviar esta información?')){ 
       document.formulario.submit();
    } */
}
