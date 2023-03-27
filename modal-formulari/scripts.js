


/*
function test(){
  alert("Bienvenido a la web");
  console.log("script sencillo")
}
*/




contactarAbrir= ()=>{
  document.getElementById("modalFormulario").style.display="flex";
  document.getElementById("container-formulario").style.display="none";
}

contactarCerrar= ()=>{
  document.getElementById("modalFormulario").style.display="none";
  document.getElementById("container-formulario").style.display="flex";
}