/*
function test(){
  alert("Bienvenido a la web");
  console.log("script sencillo")
}
*/

contactarAbrir = () => {
  document.getElementById("modalFormulario").style.display = "flex";
  /*document.getElementById("container-formulario").style.display="none";*/
  document.documentElement.style.overflow = "hidden";
  var nombre = document.getElementById("formNombre").value;
  var apellidos = document.getElementById("formApellidos").value;
  var telefono = document.getElementById("formTel").value;
  var email = document.getElementById("formEmail").value;

  var mensaje;

  (function formCheck() {
    if (!document.getElementById("formNombre").checkValidity()) {
      mensaje = "Introduce un nombre correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else if (!document.getElementById("formApellidos").checkValidity()) {
      mensaje = "Introduce un apellido correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else if (!document.getElementById("formTel").checkValidity()) {
      mensaje = "Introduce un télefono correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else if (!document.getElementById("formEmail").checkValidity()) {
      mensaje = "Introduce e-mail correcto";
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    } else {
      mensaje =
        "Hola " + nombre + "<br>Contactaremos en tu teléfono " + telefono;
      document.getElementById("mensajeFormulario").innerHTML = mensaje;
    }
  })();

};

contactarCerrar = () => {
  document.getElementById("modalFormulario").style.display = "none";
  /*document.getElementById("container-formulario").style.display="flex";*/
  document.documentElement.style.overflow = "auto";

  var nombre = (document.getElementById("formNombre").value = "");
  var apellidos = (document.getElementById("formApellidos").value = "");
  var telefono = (document.getElementById("formTel").value = "");
  var email = (document.getElementById("formEmail").value = "");
};

