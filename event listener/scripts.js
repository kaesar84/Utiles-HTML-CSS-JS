function saludar() {
  console.log("hola");
}

function recogeDatos(evento) {
  // el parametro es el evento por defecto
  evento.preventDefault();
  // evitar el evento por defecto del submit, que es enviar datos

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#nacimiento").value;
  var edad = 2023 - fecha;

  var bienvenida = document.querySelector("#bienvenida");

  var mensajeHTMLEdad;
  var mensajeHTML;

  if (edad > 0) {
    if (edad > 30) {
      mensajeHTMLEdad = "abuelo";
    } else {
      mensajeHTMLEdad = "joven";
    }
    mensajeHTML =
      '<p class="inner">Hola ' +
      nombre +
      ", tienes " +
      edad +
      " años, " +
      mensajeHTMLEdad +
      "</p>";
  } else {
    mensajeHTML = "Edad erronea";
  }

  // inserta contenido HTML
  bienvenida.innerHTML = mensajeHTML;

  // rellena el contenido como texto
  // var mensaje = ("Hola "+ nombre + ", tienes " + edad +" años.");
  // bienvenida.textContent=mensaje;
}

var miForm = document.querySelector("#formulario");
miForm.addEventListener("submit", recogeDatos);
