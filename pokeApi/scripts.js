let nombreBtn = document.getElementById("nombreBtn");
let nombreInput = document.getElementById("nombreInput");

nombreBtn.addEventListener("click", obtnerImagen);

// Función para obtener la imagen de un Pokémon
function obtnerImagen() {
 
  let identificador = nombreInput.value.toLowerCase();
  let url = `https://pokeapi.co/api/v2/pokemon/${identificador}`;
  // Realizar la petición GET
  fetch(url)
    .then((response) => {
      // Verificar que la petición se realizó correctamente
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Convertir la respuesta a JSON
      return response.json();
    })
    .then((data) => {
      // Imprimir los datos
      console.log(data.name);
      console.log(data.sprites);
      // crear(data.sprites.front_default)
      let rutaIMG = data.sprites.front_default;
      let nombre = data.name;
      createImage(nombre,rutaIMG);
    })
    .catch((error) => {
      console.log("Error:", error);
      imageNotFound();
    });
}


// Función para crear una imagen
function createImage(nombre,src) {
  // Crear un nuevo elemento de imagen
  let imgSection = document.getElementById("imgSection");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");

  h2.textContent = nombre.toUpperCase();
  // Establecer el atributo src
  img.src = src;
  img.classList.add("found");

  // Borrar el hijo existente si existe
 while (imgSection.firstChild) {
    imgSection.removeChild(imgSection.firstChild);
  }

  // Añadir la imagen al cuerpo del documento
  imgSection.appendChild(img);
  imgSection.appendChild(h2);
 
}

function imageNotFound() {
 
  let imgSection = document.getElementById("imgSection");
  let img = document.createElement("img");

  while (imgSection.firstChild) {
    imgSection.removeChild(imgSection.firstChild);
  }
  img.src = "pokeball100.png";
  img.classList.add("notFound");
  imgSection.appendChild(img);
}