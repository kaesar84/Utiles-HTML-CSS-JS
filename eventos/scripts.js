var listaElementos = document.getElementsByClassName("contenido");

testEvent = () => {
  
  for (var i = 0; i < listaElementos.length; i++) {
    console.log(listaElementos[i]);

    listaElementos[i].addEventListener("click", action);
  }

  



};

action = () => {
    

    
    
  }
 