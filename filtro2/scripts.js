
function filterImages(category) {
    const imagenesFiltro = document.getElementsByClassName('imgfiltro');
    
    for (let i = 0; i < imagenesFiltro.length; i++) {
      const imagenesFiltroS = imagenesFiltro[i];
     
      if (category === 'todos') {
        imagenesFiltroS.style.display = 'flex';
      } else if (imagenesFiltroS.classList.contains(category)) {
        imagenesFiltroS.style.display = 'flex';
      } else {
        imagenesFiltroS.style.display = 'none';
      }
    }
  }