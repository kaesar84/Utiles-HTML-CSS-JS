
function desplegar(event) {
    var activar = event.currentTarget;
    var acordeonBodyS = document.getElementsByClassName('acordeon-body');
    var acordeonHeaderS = document.getElementsByClassName('acordeon-header');
    
    for (var i = 0; i < acordeonHeaderS.length; i++) {
      var acordeonHeader = acordeonHeaderS[i];
      var acordeonBody = acordeonBodyS[i];
      
      if (acordeonHeader === activar) {
        if (acordeonBody.style.display === 'flex') {
          acordeonBody.style.display = 'none';
          
        } else {
          acordeonBody.style.display = 'flex';
          activar.classList.add('active');
        }
      } 
    }
  }
  


  




