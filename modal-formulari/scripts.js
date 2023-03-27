


/*
function test(){
  alert("Bienvenido a la web");
  console.log("script sencillo")
}
*/




contactarAbrir= ()=>{
  document.getElementById("modalFormulario").style.display="flex";
  /*document.getElementById("container-formulario").style.display="none";*/
  document.documentElement.style.overflow="hidden";
var nombre = document.getElementById("formNombre").value;
var apellidos = document.getElementById("formApellidos").value;
var telefono = document.getElementById("formTel").value;
var email = document.getElementById("formEmail").value;

var mensaje;

mensaje = "Hola " + nombre + " te contactaremos muy pronto";





}

contactarCerrar= ()=>{
  document.getElementById("modalFormulario").style.display="none";
  /*document.getElementById("container-formulario").style.display="flex";*/
  document.documentElement.style.overflow="auto";
}