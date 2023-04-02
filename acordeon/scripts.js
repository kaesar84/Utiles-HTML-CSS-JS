mostrarContenido=()=>{
    
    var elementos = document.getElementsByClassName("pest");
 
    for(var i=0; i<elementos.length;i++){
        elementos[i].style.display="flex";
        console.log(elementos[i]);
    }

};

ocultarContenido=()=>{
    
    var elementos = document.getElementsByClassName("pest");
 
    for(var i=0; i<elementos.length;i++){
        elementos[i].style.display="none";
        console.log(elementos[i]);
    }

};