
/*
function test(){
  alert("Bienvenido a la web");
  console.log("script sencillo")
}
*/

test = () =>{
    alert("Hello");
}

cerrarMBB = ()=>{
    document.getElementById("modalBienvenida").style.display="none";
    document.getElementById("activa_modal").style.display="flex";
    
    
}

abrir_modal= ()=>{
    document.getElementById("modalBienvenida").style.display="flex";
    document.getElementById("activa_modal").style.display="none";
    
    
}