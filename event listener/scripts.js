function saludar(){
    console.log("hola");
}

function recogeDatos(evento){ // el parametro es el evento por defecto
    evento.preventDefault();
    // evitar el evento por defecto del submit, que es enviar datos

    var nombre = document.querySelector("#nombre").value;
    var fecha = document.querySelector("#nacimiento").value;
    var edad= 2023 - fecha;
    var mensaje = ("Hola "+ nombre + ", tienes " + edad +" años.");
    
    var bienvenida = document.querySelector("#bienvenida");
    bienvenida.textContent=mensaje;

   
    // alert(mensaje);

    // console.log("Hola "+ nombre + ", tienes " + edad +" años.");
  
}




var miForm =document.querySelector("#formulario");
miForm.addEventListener("submit",recogeDatos);