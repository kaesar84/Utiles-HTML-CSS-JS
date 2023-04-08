
function filterImages(category) {
    const imagenesFiltro = document.getElementsByClassName('container-filtro')[0].getElementsByClassName('imgfiltro');
    
    for (let i = 0; i < imagenesFiltro.length; i++) {
      const imagenesFiltroS = imagenesFiltro[i];
     
      
      if (category === 'todos') {
        imagenesFiltroS.style.display = 'block';
      } else if (imagenesFiltroS.classList.contains(category)) {
        imagenesFiltroS.style.display = 'block';
      } else {
        imagenesFiltroS.style.display = 'none';
      }
    }
  }